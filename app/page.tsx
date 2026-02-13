import { HeroSection } from "@/components/hero-section"
import { GroupFeatures } from "@/components/group-features"
import { FooterImage } from "@/components/footer-image"
import { NotificationToast } from "@/components/notification-toast"
import { Analytics } from "@vercel/analytics/next"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Analytics />
      <HeroSection />
      <GroupFeatures />
      <FooterImage />
      <NotificationToast />
    </main>
  )
}
