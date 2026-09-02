"use client";

import { useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const listeners = new Set<() => void>();
let cached: Theme | null = null;

function read(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
}

function getSnapshot(): Theme {
  const now = read();
  if (cached !== now) cached = now;
  return cached;
}

function getServerSnapshot(): Theme {
  return "dark";
}

export function subscribeTheme(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function setTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem("fl-theme", theme);
  } catch {
    // storage unavailable — theme still applies for this visit
  }
  cached = theme;
  listeners.forEach((l) => l());
}

/**
 * Reactive theme flag backed by the <html class="dark"> attribute set by
 * the inline init script. No setState-in-effect, hydration-safe
 * (server snapshot = dark, matching the studio's default look).
 */
export function useTheme(): Theme {
  return useSyncExternalStore(subscribeTheme, getSnapshot, getServerSnapshot);
}
