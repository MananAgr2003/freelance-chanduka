import Header from "@/components/Header"
import ValueCreation from "@/components/about/ValueCreation"
import AboutServices from "@/components/about/Services"
import ProductionSolutions from "@/components/about/ProductSolutions"
import TestimonialSection from "@/components/about/TestimonialSection"
import CompanyStats from "@/components/CompanyStats"
import Timeline from "@/components/Timeline"


export default function AboutPage() {

    return (
        <main>
            <Header title="About us" />

            <ValueCreation />

            <AboutServices />

            <ProductionSolutions />

            <Timeline />

            <TestimonialSection />

            <CompanyStats />
        </main>
    )
}