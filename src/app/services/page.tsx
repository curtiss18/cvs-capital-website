import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {  
  PieChart, 
  Shield, 
  Target, 
  DollarSign, 
  BarChart3, 
  Building2,
  Calculator,
  Banknote
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Investment Services | CVS Capital',
  description: 'Comprehensive wealth management services including portfolio management, financial planning, and specialized investment strategies. Fiduciary responsibility with personalized approach.',
  keywords: 'investment management, financial planning, wealth management, portfolio management, investment strategies'
}

const coreServices = [
  {
    icon: <PieChart className="h-8 w-8" />,
    title: "Portfolio Management",
    description: "Personalized investment management with full discretionary authority. Your dedicated advisor develops and implements customized strategies tailored to your specific goals and risk tolerance.",
    features: [
      "Full discretionary investment management",
      "Customized portfolio construction", 
      "Ongoing monitoring and rebalancing",
      "Risk management and analysis"
    ]
  },
  {
    icon: <Calculator className="h-8 w-8" />,
    title: "Financial Planning",
    description: "Comprehensive financial planning services addressing all aspects of your financial life. From retirement planning to estate strategies, we help you build a roadmap to your goals.",
    features: [
      "Comprehensive financial analysis",
      "Retirement and income planning",
      "Estate planning strategies",
      "Education funding planning"
    ]
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Specialized Strategies", 
    description: "Access to institutional-quality investment strategies designed for specific market conditions and investor objectives. Each strategy is actively managed with disciplined risk controls.",
    features: [
      "ESG and socially responsible investing",
      "Tactical sector rotation strategies", 
      "Alternative income solutions",
      "Growth and income equity strategies"
    ]
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Additional Services",
    description: "Complementary services to support your complete financial picture, including cash management and access to private investment opportunities for qualified investors.",
    features: [
      "FDIC-insured cash management",
      "Private fund access (accredited investors)",
      "Ongoing account monitoring",
      "Regular performance reporting"
    ]
  }
]

const investmentStrategies = [
  {
    name: "Global Impact",
    description: "Our flagship total portfolio solution incorporating ESG-focused ETFs with strategic and tactical methodologies.",
    allocation: "60% core positions, 40% tactical satellites",
    minimum: "$100,000",
    riskLevel: "Conservative to Growth",
    features: [
      "Environmental, Social, and Governance focus",
      "Diversified global asset allocation", 
      "Tactical sector positioning",
      "Risk-managed framework"
    ]
  },
  {
    name: "Global ESG Core",
    description: "Balanced strategic solutions for socially responsible investing with institutional-style portfolio theory.",
    allocation: "Strategic allocation across ESG assets",
    minimum: "$50,000", 
    riskLevel: "Conservative to Growth",
    features: [
      "Socially responsible ETF selection",
      "Environmental sustainability focus",
      "Corporate governance screening",
      "Semi-annual rebalancing"
    ]
  },
  {
    name: "Sector Rotation",
    description: "Rules-based tactical strategy designed to preserve capital while capturing market upside.",
    allocation: "Tactical sector allocation with cash management",
    minimum: "$100,000",
    riskLevel: "Growth",
    features: [
      "Active sector monitoring",
      "Risk-managed cash positions",
      "Quantitative entry/exit criteria",
      "Bear market protection"
    ]
  },
  {
    name: "Alternative Income",
    description: "Diversified income strategy with reduced correlation to traditional equity markets.",
    allocation: "Multi-asset income focus",
    minimum: "$50,000",
    riskLevel: "Moderate",
    features: [
      "Reduced equity correlation",
      "Multiple income sources",
      "Interest rate diversification", 
      "Downside protection focus"
    ]
  },
  {
    name: "Dynamic Equity Growth",
    description: "Concentrated portfolio of 25 growth stocks selected through fundamental and technical analysis.",
    allocation: "25 growth stock positions",
    minimum: "$100,000",
    riskLevel: "Growth",
    features: [
      "Growth company focus",
      "Lower volatility selection",
      "Quarterly reassessment",
      "Robust sell discipline"
    ]
  },
  {
    name: "Dynamic Equity Income", 
    description: "High-income equity strategy focusing on quality dividend-paying companies.",
    allocation: "25 high-income stock positions",
    minimum: "$100,000",
    riskLevel: "Moderate to Growth",
    features: [
      "Above-average dividend yield",
      "Total return optimization",
      "Quality company selection",
      "Active risk management"
    ]
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
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

      {/* Core Services */}
      <Section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We provide comprehensive wealth management services through our partnership with 
              The Institute for Wealth Management, a registered investment adviser.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg border border-neutral-200 hover:shadow-xl transition-shadow">
                <div className="text-sage-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-neutral-700">
                      <div className="w-2 h-2 bg-sage-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Investment Strategies */}
      <Section className="bg-neutral-50 py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Investment Strategies
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Our advisors have access to a comprehensive suite of investment strategies, 
              each designed for specific market conditions and investor objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {investmentStrategies.map((strategy, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-neutral-200">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {strategy.name}
                  </h3>
                  <span className="text-sm font-medium text-sage-600 bg-sage-100 px-3 py-1 rounded-full">
                    {strategy.riskLevel}
                  </span>
                </div>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {strategy.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <span className="font-medium text-neutral-700">Allocation:</span>
                    <p className="text-neutral-600">{strategy.allocation}</p>
                  </div>
                  <div>
                    <span className="font-medium text-neutral-700">Minimum:</span>
                    <p className="text-neutral-600">{strategy.minimum}</p>
                  </div>
                </div>

                <div>
                  <span className="font-medium text-neutral-700 block mb-2">Key Features:</span>
                  <ul className="space-y-1">
                    {strategy.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                        <div className="w-1.5 h-1.5 bg-sage-400 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Service Process */}
      <Section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We follow a disciplined approach to wealth management, ensuring every client 
              receives personalized attention and strategic guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Comprehensive discovery of your financial goals, risk tolerance, and current situation."
              },
              {
                step: "02", 
                title: "Strategic Planning",
                description: "Development of a customized investment strategy and financial plan tailored to your objectives."
              },
              {
                step: "03",
                title: "Implementation",
                description: "Execution of your investment strategy with careful attention to timing and market conditions."
              },
              {
                step: "04",
                title: "Ongoing Management",
                description: "Continuous monitoring, rebalancing, and strategy adjustments as your needs evolve."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-sage-100 text-sage-600 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Fee Transparency */}
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
              <div className="bg-white rounded-lg p-8 shadow-lg border border-neutral-200">
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
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg border border-neutral-200">
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
              </div>
            </div>

            <div className="mt-8 bg-white rounded-lg p-6 border border-sage-200">
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
            </div>
          </div>
        </Container>
      </Section>

      {/* Compliance & Credentials */}
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

      {/* Call to Action */}
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
    </main>
  )
}
