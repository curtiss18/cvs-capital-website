import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function ServicesHero() {
  return (
    <Section className="bg-gradient-to-br from-sage-50 to-cream-100 pt-24 pb-16">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Comprehensive Wealth Management Services
          </h1>
          <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
            As your fiduciary, we provide personalized investment management and financial planning 
            services designed to help you achieve your long-term financial goals. Our experienced 
            advisors have full discretionary authority to implement customized strategies tailored 
            to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="w-full sm:w-48">
              <Button variant="outline" size="lg" className="w-full">Schedule Consultation</Button>
            </Link>
            <Link href="/team" className="w-full sm:w-48">
              <Button variant="outline" size="lg" className="w-full">Meet Our Team</Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}
