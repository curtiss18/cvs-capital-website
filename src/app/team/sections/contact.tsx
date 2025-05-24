import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"
import { advisors } from "@/lib/advisors"

export function TeamContact() {
  return (
    <Section variant="sage" padding="lg">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-sage-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our experienced team to discuss your financial goals 
            and investment strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Schedule Consultation
            </Button>
            <Link href="/services">
              <Button variant="secondary" size="lg">
                Learn About Our Services
              </Button>
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-sage-500/30">
            <p className="text-sage-100 mb-4">Contact Our Team Directly:</p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {advisors.map((advisor, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-white font-medium mb-2">{advisor.name}</h4>
                  <div className="space-y-1 text-sm text-sage-100">
                    <div>
                      <a 
                        href={`tel:${advisor.contact.phone}`}
                        className="hover:text-white transition-colors cursor-pointer flex items-center justify-center"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        {advisor.contact.phone}
                      </a>
                    </div>
                    <div>
                      <a 
                        href={`mailto:${advisor.contact.email}`}
                        className="hover:text-white transition-colors cursor-pointer flex items-center justify-center"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        {advisor.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
