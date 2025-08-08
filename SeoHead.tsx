/**
 * src/components/SeoHead.tsx
 * مكوّن خفيف لتحديث العنوان والوصف في وثيقة الصفحة بدون مكتبات إضافية.
 */

import React, { useEffect } from "react"

/** خصائص وسوم SEO الأساسية */
export interface SeoHeadProps {
  /** عنوان الصفحة */
  title?: string
  /** وصف الصفحة */
  description?: string
}

/** مكوّن يقوم بتحديث title و meta[description] حسب الخصائص */
export default function SeoHead({ title, description }: SeoHeadProps): JSX.Element | null {
  useEffect(() => {
    if (title) {
      document.title = title
    }
    if (description) {
      let meta = document.querySelector("meta[name='description']") as HTMLMetaElement | null
      if (!meta) {
        meta = document.createElement("meta")
        meta.name = "description"
        document.head.appendChild(meta)
      }
      meta.content = description
    }
  }, [title, description])

  return null
}
