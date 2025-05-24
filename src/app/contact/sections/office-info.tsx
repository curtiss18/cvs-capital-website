import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { MapPin, Clock, Phone, Mail } from "lucide-react"

export function OfficeInfo() {
  return (
    <Section variant="cream" padding="xl">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-light text-neutral-800 mb-6">
            Visit Our Office
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Located in Reno, Nevada, we serve clients throughout the region with 
            personalized investment advisory services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card padding="xl">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-sage-400 mx-auto mb-4" />
              <h3 className="text-2xl font-medium text-neutral-800 mb-4">Office Address</h3>
              <div className="space-y-2 text-neutral-600">
                <p className="font-medium">CVS Capital</p>
                <p>10775 Double R Blvd</p>
                <p>Reno, NV 89521</p>
              </div>
            </div>
          </Card>

          <Card padding="xl">
            <div className="text-center">
              <Clock className="h-12 w-12 text-sage-400 mx-auto mb-4" />
              <h3 className="text-2xl font-medium text-neutral-800 mb-4">Business Hours</h3>
              <div className="space-y-2 text-neutral-600">
                <p><span className="font-medium">Monday - Friday</span></p>
                <p>8:00 AM - 5:00 PM</p>
                <p className="text-sm text-neutral-500">(Pacific Time)</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mt-12">
          <Card padding="lg">
            <div className="text-center">
              <Phone className="h-8 w-8 text-sage-400 mx-auto mb-3" />
              <h4 className="text-lg font-medium text-neutral-800 mb-2">Main Phone</h4>
              <a 
                href="tel:(775) 315-7594" 
                className="text-sage-600 hover:text-sage-700 transition-colors"
              >
                (775) 315-7594
              </a>
            </div>
          </Card>

          <Card padding="lg">
            <div className="text-center">
              <Mail className="h-8 w-8 text-sage-400 mx-auto mb-3" />
              <h4 className="text-lg font-medium text-neutral-800 mb-2">Email</h4>
              <a 
                href="mailto:curtis.shaffer@instituteforwealth.com" 
                className="text-sage-600 hover:text-sage-700 transition-colors"
              >
                curtis.shaffer@instituteforwealth.com
              </a>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  )
}
