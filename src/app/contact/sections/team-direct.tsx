import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"
import { advisors } from "@/lib/advisors"

export function TeamDirect() {
  return (
    <Section variant="default" padding="xl">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-light text-neutral-800 mb-6">
            Contact Our Team Directly
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Reach out to our experienced advisors directly for personalized assistance 
            with your investment and financial planning needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {advisors.map((advisor, index) => (
            <Card key={index} padding="xl">
              <div className="text-center">
                <div className="w-24 h-24 bg-sage-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-light text-sage-700">
                  {advisor.initials}
                </div>
                <h3 className="text-2xl font-medium text-neutral-800 mb-1">{advisor.name}</h3>
                <p className="text-sage-600 italic mb-1">{advisor.title}</p>
                <p className="text-neutral-600 mb-6">{advisor.role}</p>
                
                <div className="space-y-3">
                  <div>
                    <a 
                      href={`tel:${advisor.contact.phone}`}
                      className="flex items-center justify-center text-sage-600 hover:text-sage-700 transition-colors"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      {advisor.contact.phone}
                    </a>
                  </div>
                  <div>
                    <a 
                      href={`mailto:${advisor.contact.email}`}
                      className="flex items-center justify-center text-sage-600 hover:text-sage-700 transition-colors"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      {advisor.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
