import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { advisors } from "@/lib/advisors"

export function TeamCredentials() {
  return (
    <Section variant="cream" padding="lg">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-neutral-800 mb-6">
            Professional Credentials & Compliance
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Our advisors maintain the highest standards of professional conduct and regulatory compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {advisors.map((advisor, index) => (
            <Card key={index}>
              <h3 className="text-xl font-medium text-neutral-800 mb-4">{advisor.name}</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-600">CRD Number:</span>
                  <span className="font-medium">{advisor.details.crd}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Licensed Since:</span>
                  <span className="font-medium">{advisor.details.licensed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Series 65:</span>
                  <span className="font-medium">Active</span>
                </div>                <div className="pt-4 border-t border-sage-200">
                  <a 
                    href={`https://brokercheck.finra.org/individual/summary/${advisor.details.crd}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage-600 hover:text-sage-700 text-sm underline"
                  >
                    View FINRA BrokerCheck Profile →
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}