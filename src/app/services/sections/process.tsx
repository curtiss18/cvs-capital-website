import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'

export function ServiceProcess() {
  return (
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
  )
}
