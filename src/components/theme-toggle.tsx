"use client";

import { Moon, Sun } from "lucide-react";
import { setTheme, useTheme } from "./theme-store";

export default function ThemeToggle() {
  const theme = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
