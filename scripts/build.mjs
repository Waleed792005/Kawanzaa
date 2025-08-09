/**
 * scripts/build.mjs
 * سكربت البناء والتشغيل المحلي باستخدام esbuild مع دعم Tailwind/PostCSS.
 * - dev: مراقبة + خادم محلي على 5173
 * - build: إخراج إنتاجي داخل dist/
 */

import esbuild from "esbuild"
import { stylePlugin } from "esbuild-style-plugin"
import { promises as fs } from "node:fs"
import path from "node:path"
import url from "node:url"

const isProd = process.argv.includes("--production")
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, "..")
const dist = path.join(root, "dist")
const indexHtmlSrc = path.join(root, "index.html")
const indexHtmlOut = path.join(dist, "index.html")
const notFoundHtmlOut = path.join(dist, "404.html")

/** تنظيف مجلد الإخراج */
async function clean() {
  await fs.rm(dist, { recursive: true, force: true })
}

/**
 * نسخ index.html إلى dist وإضافة 404.html كنسخة منه.
 * يفيد 404.html في GitHub Pages لحالات الوصول لمسارات غير موجودة.
 */
async function copyIndexAnd404() {
  await fs.mkdir(dist, { recursive: true })
  await fs.copyFile(indexHtmlSrc, indexHtmlOut)
  // نسخ نفس المحتوى إلى 404.html كحماية إضافية على GitHub Pages
  await fs.copyFile(indexHtmlSrc, notFoundHtmlOut)
}

/** خيارات البناء الأساسية */
const buildOptions = {
  entryPoints: [path.join(root, "src", "main.tsx")],
  outdir: dist,
  bundle: true,
  sourcemap: !isProd,
  minify: isProd,
  target: ["es2020"],
  format: "esm",
  jsx: "automatic",
  define: {
    "process.env.NODE_ENV": JSON.stringify(isProd ? "production" : "development"),
  },
  loader: {
    ".png": "file",
    ".svg": "file",
    ".jpg": "file",
    ".jpeg": "file",
    ".gif": "file",
    ".webp": "file",
  },
  plugins: [
    /** تشغيل PostCSS/Tailwind على ملفات CSS المستوردة (مثل shadcn.css) وحقنها بشكل صحيح */
    stylePlugin({
      postcss: true,
    }),
    {
      /** مكوّن لإعادة نسخ index.html و404.html بعد كل بناء */
      name: "copy-index-and-404-on-end",
      setup(build) {
        build.onEnd(async () => {
          await copyIndexAnd404()
        })
      },
    },
  ],
}

/** نقطة الدخول */
async function run() {
  await clean()

  if (isProd) {
    await esbuild.build(buildOptions)
    await copyIndexAnd404()
    console.log("✓ Build completed in dist/")
    return
  }

  const ctx = await esbuild.context(buildOptions)
  await ctx.watch()
  await copyIndexAnd404()

  const server = await ctx.serve({
    port: 5173,
    servedir: dist,
  })

  const host = server.host || "localhost"
  const url = `http://${host}:${server.port}`
  console.log(`Dev server running → ${url}`)
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
