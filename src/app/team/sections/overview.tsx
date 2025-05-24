import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"

export function TeamOverview() {
  return (
    <Section variant="cream" padding="lg">
      <Container>
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-light text-neutral-800 mb-6">
              Your CVS Capital Advisory Team
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              At CVS Capital, we believe that successful investing requires both deep market knowledge 
              and a personal understanding of your unique goals. Our team combines extensive experience 
              in financial services with specialized expertise in key market sectors.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              As independent advisers working with the Institute for Wealth Management, we provide 
              objective guidance focused solely on your best interests. Our collaborative approach 
              ensures you benefit from diverse perspectives and comprehensive expertise.
            </p>
          </div>
          <div className="space-y-6">
            <Card padding="md" className="text-center">
              <div className="text-3xl font-light text-sage-600 mb-2">18+</div>
              <div className="text-sm uppercase tracking-wide text-neutral-600">Years Combined Experience</div>
            </Card>
            <Card padding="md" className="text-center">
              <div className="text-3xl font-light text-sage-600 mb-2">2</div>
              <div className="text-sm uppercase tracking-wide text-neutral-600">Series 65 Professionals</div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  )
}
