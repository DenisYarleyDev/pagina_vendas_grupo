"use client"

import { useEffect, useState } from "react"

const names = [
  "João Silva",
  "Pedro Oliveira",
  "Lucas Santos",
  "Gabriel Costa",
  "Rafael Souza",
  "Matheus Lima",
  "Felipe Almeida",
  "Bruno Ferreira",
  "Carlos Rodrigues",
  "André Nascimento",
  "Thiago Pereira",
  "Marcos Ribeiro",
  "Daniel Martins",
  "Eduardo Gomes",
  "Gustavo Araújo",
  "Leonardo Barbosa",
  "Ricardo Cardoso",
  "Fernando Teixeira",
  "Vinícius Moreira",
  "Diego Carvalho",
]

export function NotificationToast() {
  const [currentNotification, setCurrentNotification] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let nameIndex = 0

    const showNotification = () => {
      const name = names[nameIndex % names.length]
      setCurrentNotification(name)
      setIsVisible(true)

      setTimeout(() => {
        setIsVisible(false)
      }, 3500)

      nameIndex++
    }

    showNotification()
    const interval = setInterval(showNotification, 5000)

    return () => clearInterval(interval)
  }, [])

  if (!currentNotification) return null

  return (
    <div
      className={`fixed bottom-6 left-4 right-4 z-50 flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-lg shadow-[hsl(var(--primary))]/10 transition-all duration-500 md:left-auto md:right-6 md:max-w-sm ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--primary))]">
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 text-[hsl(var(--primary-foreground))]"
          fill="currentColor"
        >
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground truncate">
          {currentNotification}
        </p>
        <p className="text-xs text-muted-foreground">
          {"entrou no grupo agora"}
        </p>
      </div>
      <span className="h-2 w-2 shrink-0 rounded-full bg-[hsl(var(--primary))] animate-pulse" />
    </div>
  )
}
