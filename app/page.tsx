
import HeroSection from "@/components/HeroSection"
import ServiceSection from "@/components/Services"
import Timeline from "@/components/Timeline"
import Testimonials from "@/components/Testimonials"
import LatestNews from "@/components/LatestNews"
import CompanyStats from "@/components/CompanyStats"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <HeroSection />

      <ServiceSection />

      <Timeline />

      <Testimonials />

      <LatestNews />

      <CompanyStats />

      {/* <Footer /> */}
    </main>
  )
}