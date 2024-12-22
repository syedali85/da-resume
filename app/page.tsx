import Hero from '@/components/hero'
import KeyHighlights from '@/components/key-highlights'
import Journey from '@/components/journey'
import Skills from '@/components/skills'
import Certifications from '@/components/certifications'
import Accomplishments from '@/components/accomplishments'
import ProfessionalSummary from '@/components/ProfessionalSummary'

export async function generateStaticParams() {
  return [
    { params: { /* your params here */ } },
    // Add more params as needed
  ];
}

export default function Home() {
  return (
    <main>
      <Hero />
      <KeyHighlights />
      <ProfessionalSummary />
      <Journey />
      <Skills />
      <Certifications />
      <Accomplishments />
    </main>
  )
}

