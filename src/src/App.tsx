/**
 * src/App.tsx
 * المكوّن الجذري: ترويسة SEO، الراوتر، شريط الإعلان، و Toaster للتنبيهات.
 */

import React from "react"
import { HashRouter, Routes, Route } from "react-router"
import { Toaster } from "sonner"
import SeoHead from "./components/SeoHead"
import Navbar from "./components/Navbar"
import AnnouncementBar from "./components/AnnouncementBar"
import HomePage from "./pages/Home"
import ExportPage from "./pages/Export"

/** تطبيق رئيسي مع توجيه بسيط */
export default function App(): JSX.Element {
  return (
    <>
      {/* وسوم SEO عامة */}
      <SeoHead title="Web Creator" description="واجهة متجر حديثة مبنية بـ React + Tailwind" />

      <HashRouter>
        <div className="min-h-screen bg-background text-foreground">
          <AnnouncementBar />
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/export" element={<ExportPage />} />
            </Routes>
          </main>
        </div>
      </HashRouter>

      {/* حاوية تنبيهات Sonner مع RTL */}
      <Toaster dir="rtl" position="top-center" richColors closeButton />
    </>
  )
}
