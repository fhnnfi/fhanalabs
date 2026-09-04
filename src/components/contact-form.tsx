"use client";

import { useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";

const WHATSAPP_NUMBER = "6285894079843";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const canSubmit = message.trim().length > 0;

  function buildWhatsAppUrl(): string {
    const parts: string[] = [];
    if (name.trim()) parts.push(`Halo Fahmi, saya ${name.trim()}.`);
    else parts.push("Halo Fahmi!");
    parts.push(message.trim());
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(parts.join("\n"))}`;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit) return;
    window.open(buildWhatsAppUrl(), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
      <div>
        <label
          htmlFor="contact-name"
          className="block font-mono text-xs uppercase tracking-[0.2em] text-faint"
        >
          Nama <span className="normal-case tracking-normal">(opsional)</span>
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Siapa nama kamu?"
          maxLength={60}
          autoComplete="name"
          className="mt-2 w-full rounded-xl border border-line bg-card px-4 py-3 text-base text-ink placeholder:text-faint transition-colors focus:border-line-strong focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block font-mono text-xs uppercase tracking-[0.2em] text-faint"
        >
          Pesan
        </label>
        <textarea
          id="contact-message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ceritakan project, ide, atau pertanyaan kamu…"
          rows={5}
          maxLength={1000}
          className="mt-2 w-full resize-y rounded-xl border border-line bg-card px-4 py-3 text-base leading-relaxed text-ink placeholder:text-faint transition-colors focus:border-line-strong focus:outline-none"
        />
        <p className="mt-1 text-right font-mono text-[11px] text-faint">
          {message.length} / 1000
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          Pesan akan dibuka di WhatsApp — tinggal tekan kirim.
        </p>
        <button
          type="submit"
          disabled={!canSubmit}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-canvas transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-30"
        >
          Kirim via WhatsApp
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}

export function WhatsAppDirectLink() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-ink"
      aria-label="Buka chat WhatsApp — opens in a new tab"
    >
      +62 858-9407-9843
      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
    </a>
  );
}
