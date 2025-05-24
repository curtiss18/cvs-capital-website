import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import {  
  PieChart, 
  Shield, 
  Target, 
  Calculator
} from 'lucide-react'

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
  },  {
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

export function CoreServices() {
  return (
    <Section className="py-20" id="core-services">
      <Container>
        <div className="text-center mb-16 scroll-mt-32">
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
            <Card key={index}>
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
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
