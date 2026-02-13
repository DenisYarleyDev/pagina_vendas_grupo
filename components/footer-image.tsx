"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function FooterImage() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    const current = ref.current
    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [])

  return (
    <footer ref={ref} className="flex flex-col items-center gap-6 px-4 pb-24 pt-6">
      <div
        className={`w-full max-w-sm overflow-hidden transition-all duration-[2000ms] ease-out ${
          isVisible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-20 scale-90 opacity-0"
        }`}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-12%20at%2021.17.47%20%281%29-9D436zajAu5RcJiP6dpzTa3DWwZZOA.jpeg"
          alt="Celular mostrando ofertas exclusivas do grupo WhatsApp de moda masculina"
          width={600}
          height={800}
          className="h-auto w-full rounded-2xl object-cover"
        />
      </div>

      <p className="text-xs text-muted-foreground">
        {"Ofertas atualizadas diariamente"}
      </p>
    </footer>
  )
}
