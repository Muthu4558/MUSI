import CTASection from "../components/CTASection"
import FAQSection from "../components/FAQSection"
import Hero from "../components/Hero"
import Services from "../components/Servicepreview"
import WhyChooseUs from "../components/WhyUs"

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      <CTASection />
      <FAQSection />
    </div>
  )
}

export default LandingPage
