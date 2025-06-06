import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function ServicesHero() {
  return (
    <Section className="bg-gradient-to-br from-sage-100 via-cream-100 to-sage-200 pt-24 pb-16">
      <Container>
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 mb-6">
            Tailored Investment Solutions for<br />
            <span className="text-sage-700">Every Life Goal</span>
          </h1>
          <p className="text-xl lg:text-2xl text-neutral-600 mb-12 leading-relaxed max-w-4xl mx-auto">
            From comprehensive investment management to strategic retirement planning and complete 
            financial planning services—our experienced advisors provide the guidance and institutional 
            resources you need to navigate complex financial decisions with confidence.
          </p>

          {/* Service Categories Preview */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-sage-300/50">
              <div className="w-12 h-12 bg-sage-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-800 mb-2">Retirement Planning</h3>
              <p className="text-sm text-neutral-600">Secure your future with confidence</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-sage-300/50">
              <div className="w-12 h-12 bg-sage-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-800 mb-2">Education Funding</h3>
              <p className="text-sm text-neutral-600">Invest in the next generation</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-sage-300/50">
              <div className="w-12 h-12 bg-sage-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-800 mb-2">Philanthropic Giving</h3>
              <p className="text-sm text-neutral-600">Make a meaningful impact</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-sage-300/50">
              <div className="w-12 h-12 bg-sage-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-800 mb-2">Business Solutions</h3>
              <p className="text-sm text-neutral-600">Strategic corporate planning</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 w-full sm:w-auto">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/team" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="px-8 py-4 w-full sm:w-auto border-sage-600 text-sage-700 hover:bg-sage-50">
                Meet Our Team
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}
