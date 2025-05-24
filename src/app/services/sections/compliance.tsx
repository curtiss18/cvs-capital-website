import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Shield, Building2, BarChart3 } from 'lucide-react'

export function ComplianceCredentials() {
  return (
    <Section className="py-20">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
            Credentials & Compliance
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-sage-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Fiduciary Standard
              </h3>
              <p className="text-neutral-600 text-sm">
                We are held to the highest fiduciary standard, always putting your interests first.
              </p>
            </div>
            
            <div className="text-center">
              <Building2 className="h-12 w-12 text-sage-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Series 65 Certified
              </h3>
              <p className="text-neutral-600 text-sm">
                Both advisors hold Series 65 certifications and maintain continuing education requirements.
              </p>
            </div>
            
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-sage-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                SEC Registered RIA
              </h3>
              <p className="text-neutral-600 text-sm">
                Services provided through The Institute for Wealth Management, an SEC-registered investment adviser.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-neutral-50 rounded-lg p-8">
            <p className="text-sm text-neutral-600 leading-relaxed">
              Investment advisory services are provided through The Institute for Wealth Management, LLC, 
              an SEC-registered investment adviser. CVS Capital advisors are Investment Adviser Representatives 
              of The Institute. All investments involve risk of loss and no investment strategy can guarantee profits. 
              Past performance does not guarantee future results. Please see our Form ADV Part 2A for important 
              disclosures about our services, fees, and conflicts of interest.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
