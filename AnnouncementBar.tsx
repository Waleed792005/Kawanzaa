/**
 * src/components/AnnouncementBar.tsx
 * شريط إعلان بسيط أعلى الصفحة مع خيار الإخفاء.
 */

import React, { useState } from "react"

/** شريط إعلان قابل للإخفاء */
export default function AnnouncementBar(): JSX.Element | null {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  return (
    <div className="w-full bg-primary text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
        <p className="font-medium">خصم 20% لفترة محدودة — جرّب الشراء الآن!</p>
        <button
          onClick={() => setVisible(false)}
          className="rounded-md border border-white/20 bg-white/10 px-3 py-1 text-white hover:bg-white/20 transition"
          aria-label="إغلاق الشريط"
        >
          إغلاق
        </button>
      </div>
    </div>
  )
}
