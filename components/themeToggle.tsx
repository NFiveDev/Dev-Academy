'use client'

import useTheme from "@/hooks/useTheme"

export function ThemeToggle() {
  const { toggleColorMode } = useTheme();

  return (
    <button onClick={toggleColorMode}>toggle</button>
    )
}