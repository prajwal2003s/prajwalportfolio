import Navbar from '@/components/navbar'
import Hero from '@/components/hero'

import FreelanceSection from '@/components/freelance-section'

import CertificatesSection from '@/components/certificates-section'
import SkillsSection from '@/components/skills-section'
import ExperienceSection from '@/components/experience-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />

    
      <FreelanceSection /> {/* 💼 CLIENT WORK */}
      
      <CertificatesSection /> {/* 📜 CERTIFICATE */}

      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}