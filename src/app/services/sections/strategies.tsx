import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'

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
  },  {
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
export function InvestmentStrategies() {
  return (
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
            <Card key={index} padding="md">
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
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
