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
    id: "investment-management",
    icon: <PieChart className="h-8 w-8" />,
    title: "Investment Management",
    description: "Comprehensive portfolio management services with full discretionary authority. Our experienced advisors develop customized investment strategies tailored to your specific goals, risk tolerance, and time horizon.",
    features: [
      "Full discretionary investment management",
      "Customized portfolio construction and asset allocation", 
      "Ongoing monitoring and rebalancing",
      "Access to institutional-quality investment strategies",
      "Risk management and performance analysis"
    ]
  },
  {
    id: "retirement-planning",
    icon: <Target className="h-8 w-8" />,
    title: "Retirement Planning",
    description: "Strategic retirement planning services designed to help you build and preserve wealth for your golden years. From 401(k) rollovers to income distribution strategies, we guide you through every stage of retirement preparation.",
    features: [
      "401(k) and 403(b) rollover guidance",
      "Retirement income distribution strategies",
      "Social Security optimization planning",
      "Tax-efficient retirement account management",
      "Legacy and estate planning coordination"
    ]
  },
  {
    id: "financial-planning",
    icon: <Calculator className="h-8 w-8" />,
    title: "Financial Planning",
    description: "Comprehensive financial planning services addressing all aspects of your financial life. We create detailed roadmaps to help you achieve your short-term and long-term financial objectives with confidence.",
    features: [
      "Comprehensive financial analysis and goal setting",
      "Tax planning and optimization strategies",
      "Estate planning and wealth transfer strategies",
      "Education funding and 529 plan guidance",
      "Insurance needs analysis and recommendations"
    ]
  },
  {
    id: "additional-services",
    icon: <Shield className="h-8 w-8" />,
    title: "Additional Services",
    description: "Complementary services designed to support your complete financial picture. From cash management solutions to specialized investment opportunities, we provide access to institutional-quality resources.",
    features: [
      "FDIC-insured cash management solutions",
      "Private investment opportunities (accredited investors)",
      "Ongoing account monitoring and reporting",
      "Regular portfolio performance reviews",
      "Coordination with your existing advisors"
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
            <Card key={index} id={service.id} className="scroll-mt-32">
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
