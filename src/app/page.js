import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import EnterpriseIntro from '@/components/EnterpriseIntro/EnterpriseIntro'
import SmartValuesSection from '@/components/SmartValues/SmartValuesSection'
import EnterpriseSection from '@/components/BuiltForEnterprise/BuiltForEnterprise'
import VideoSection from '@/components/VideoSection/VideoSection'
import AIImpactSection from '@/components/AIImpactSection/AIImpactSection'
import SmartSolutions from '@/components/SmartSolutions/SmartSolutions'
import InsightsSection from '@/components/InsightsSection/InsightsSection'
import CTADemo from '@/components/CTADemo/CTADemo'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="">
        <Hero />
        <EnterpriseIntro/>
        <SmartValuesSection/>
        <EnterpriseSection/>
        <VideoSection/>
        <AIImpactSection/>
        <SmartSolutions/>
        <InsightsSection/>
        <CTADemo/>
        <Footer/>
        {/* Add more sections here: Features, Testimonials, CTA, Footer */}
      </main>
    </div>
  )
}
