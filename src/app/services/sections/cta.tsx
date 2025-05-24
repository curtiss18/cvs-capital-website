import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function ServicesCTA() {
  return (
    <Section className="bg-gradient-to-br from-sage-600 to-sage-700 py-20">
      <Container>
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-sage-100">
            Schedule a consultation to discuss how our personalized wealth management 
            services can help you achieve your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="secondary" size="lg">Schedule Consultation</Button>
            </Link>
            <Link href="/team">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-sage-700">Learn About Our Advisors</Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}
