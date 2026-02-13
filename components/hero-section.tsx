"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { WhatsAppButton } from "./whatsapp-button"

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="flex flex-col items-center gap-6 px-4 pb-8 pt-0">
      {/* Hero Image with entrance animation */}
      <div
        className={`relative w-full max-w-md overflow-hidden transition-all duration-[1500ms] ease-out ${
          loaded
            ? "translate-y-0 scale-100 opacity-100"
            : "-translate-y-8 scale-95 opacity-0"
        }`}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-12%20at%2021.17.47-iUtid1J5V98PAtzFcKta44mxPT2vTk.jpeg"
          alt="Ofertas de moda masculina no WhatsApp com descontos exclusivos"
          width={800}
          height={900}
          className="h-auto w-full object-cover"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Title with fade-in */}
      <h1
        className={`text-balance text-center text-3xl font-extrabold leading-tight text-foreground transition-all duration-[1200ms] ease-out delay-300 md:text-4xl ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {"Te ajudo a "}
        <span className="text-[hsl(var(--primary))]">comprar</span>
        {" com "}
        <span className="text-[hsl(var(--primary))]">desconto!</span>
      </h1>

      {/* Subtitle with fade-in */}
      <p
        className={`text-pretty text-center text-base leading-relaxed text-muted-foreground transition-all duration-[1200ms] ease-out delay-500 md:text-lg ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {"Receba ofertas reais de moda masculina com "}
        <span className="font-bold text-foreground">{"50% a 80% OFF"}</span>
        {" direto no WhatsApp."}
      </p>

      {/* Urgency Badge - below subtitle, above button */}
      <div
        className={`flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 transition-all duration-[1200ms] ease-out delay-700 ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
        <span className="text-xs font-bold uppercase tracking-wider text-red-400">
          {"Vagas limitadas"}
        </span>
      </div>

      {/* WhatsApp CTA Button with fade-in */}
      <div
        className={`flex flex-col items-center gap-4 pt-2 transition-all duration-[1200ms] ease-out delay-[900ms] ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <WhatsAppButton />
      </div>

      {/* Social Proof + Remaining spots */}
      <div
        className={`flex flex-col items-center gap-2 transition-all duration-[1200ms] ease-out delay-[1100ms] ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <p className="text-sm text-muted-foreground">
          {"Mais de "}
          <span className="font-bold text-foreground">{"8.000"}</span>
          {" membros ativos"}
        </p>
        <div className="flex items-center gap-1.5">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-red-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
          <span className="text-xs font-bold text-red-400">
            {"Restam apenas 10 vagas!"}
          </span>
        </div>
      </div>
    </section>
  )
}
