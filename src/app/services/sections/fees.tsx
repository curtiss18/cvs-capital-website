import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { DollarSign, Calculator, Banknote } from 'lucide-react'

export function FeeTransparency() {
  return (
    <Section className="bg-sage-50 py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Transparent Fee Structure
            </h2>
            <p className="text-lg text-neutral-600">
              We believe in complete transparency. Our fees are clearly disclosed and align our 
              interests with your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <div className="flex items-center mb-4">
                <DollarSign className="h-6 w-6 text-sage-500 mr-3" />
                <h3 className="text-xl font-semibold text-neutral-900">
                  Investment Management
                </h3>
              </div>
              <p className="text-neutral-600 mb-4">
                Our investment advisory fees are asset-based and negotiated with each client 
                based on the specific services provided.
              </p>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                  Maximum annual fee: 2.00% of assets
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                  Fees vary based on account size and services
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                  Billed monthly or quarterly in advance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                  Pro-rated refunds for early termination
                </li>
              </ul>
            </Card>
            <Card>
              <div className="flex items-center mb-4">
                <Calculator className="h-6 w-6 text-sage-500 mr-3" />
                <h3 className="text-xl font-semibold text-neutral-900">
                  Financial Planning
                </h3>
              </div>
              <p className="text-neutral-600 mb-4">
                Comprehensive financial planning services with flexible fee structures 
                to meet your specific needs.
              </p>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                  Flat fee: $1,000 - $10,000 per engagement
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                  Hourly rates available for limited scope
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                  Complimentary for investment clients
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                  Fee collected upon agreement execution
                </li>
              </ul>
            </Card>
          </div>

          <Card padding="md" className="mt-8">
            <div className="flex items-start">
              <Banknote className="h-6 w-6 text-sage-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-neutral-900 mb-2">
                  Additional Services
                </h4>
                <p className="text-sm text-neutral-600 mb-3">
                  Specialized services with transparent, competitive pricing:
                </p>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Cash Management: 0.10% annual fee on account balance</li>
                  <li>• Minimum account size: $100,000 (may be waived at advisor discretion)</li>
                  <li>• Custodian fees are separate and disclosed by your chosen custodian</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  )
}
