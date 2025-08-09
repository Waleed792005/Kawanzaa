/**
 * src/main.tsx
 * نقطة الدخول للتطبيق: تهيئة React واحتواء CSS (Tailwind/shadcn) وتهيئة App.
 */

import { createRoot } from "react-dom/client"
import React from "react"
import App from "./App"
import "./shadcn.css"

/** إنشاء الجذر والبدء */
const root = createRoot(document.getElementById("app") as HTMLElement)
root.render(<App />)
