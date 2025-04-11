"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Icon } from "@iconify/react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-lg bg-neutral-200/50 dark:bg-neutral-800/50 backdrop-blur-sm p-3 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Icon icon="ph:moon" className="w-5 h-5" />
      ) : (
        <Icon icon="ph:sun" className="w-5 h-5" />
      )}
    </button>
  )
} 