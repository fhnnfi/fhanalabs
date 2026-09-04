import type { Metadata } from "next";
import ContactForm, {
  WhatsAppDirectLink,
} from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with FHANA Labs — send a message straight to Fahmi Hanafi via WhatsApp.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <h1 className="text-4xl font-light tracking-tight text-ink sm:text-6xl">
        Contact
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
        Punya ide project, feedback, atau sekadar mau ngobrol soal software?
        Isi form di bawah — pesannya langsung masuk ke WhatsApp Fahmi Hanafi.
      </p>

      <ContactForm />

      <div className="mt-12 border-t border-line pt-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
          Atau langsung chat disini
        </p>
        <div className="mt-3">
          <WhatsAppDirectLink />
        </div>
      </div>
    </section>
  );
}
