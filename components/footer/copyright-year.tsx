'use client'

import { useEffect, useState } from 'react'

/**
 * Renders the current year on the client only.
 * Using `new Date().getFullYear()` during render breaks hydration when the
 * statically generated page is viewed in a different year than it was built.
 */
export function CopyrightYear() {
  let [year, setYear] = useState<number | null>(null)

  useEffect(() => setYear(new Date().getFullYear()), [])

  return <>{year}</>
}
