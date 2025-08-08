/**
 * src/pages/Home.tsx
 * صفحة رئيسية تتضمن Hero جذّاب مع صورة Placeholder ذكية وقسم مزايا.
 */

import React from "react"
import { ArrowRight } from "lucide-react"

/** قسم Hero */
function Hero(): JSX.Element {
  return (
    <section className="grid items-center gap-8 md:grid-cols-2">
      <div>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          واجهة متجر حديثة وسريعة
        </h1>
        <p className="mt-3 max-w-prose text-slate-600">
          ابدأ مشروعك بواجهة أنيقة مبنية بـ React + Tailwind + esbuild. تصميم مُحسّن للغة العربية ويدعم RTL.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white shadow-soft hover:opacity-90 transition"
          >
            اكتشف المزايا
            <ArrowRight size={16} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-transparent px-4 py-2 text-slate-700 hover:bg-slate-50 transition"
          >
            مستودع GitHub
          </a>
        </div>
      </div>

      <div className="relative aspect-video w-full overflow-hidden rounded-xl border shadow-soft">
        <img src="https://pub-cdn.sider.ai/u/U08XHOY8820/web-coder/6895fe09119369152a9a3463/resource/e8ee4b9e-92fc-4cad-90f6-ef8b12671f94.jpg" className="object-cover h-full w-full" alt="Hero" />
      </div>
    </section>
  )
}

/** قسم المزايا */
function Features(): JSX.Element {
  const items = [
    { title: "أداء عالٍ", desc: "بناء سريع باستخدام esbuild وتهيئة إنتاجية بسيطة." },
    { title: "تصميم أنيق", desc: "Tailwind مع متغيرات ألوان وتنسيقات جاهزة و RTL." },
    { title: "توجيه مرن", desc: "React Router عبر HashRouter دون إعدادات خادم خاصة." },
  ]

  return (
    <section id="features" className="mt-16 grid gap-6 md:grid-cols-3">
      {items.map((it) => (
        <div key={it.title} className="rounded-xl border bg-white p-5 shadow-soft">
          <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
        </div>
      ))}
    </section>
  )
}

/** الصفحة الرئيسية */
export default function HomePage(): JSX.Element {
  return (
    <div className="space-y-16">
      <Hero />
      <Features />
    </div>
  )
}
