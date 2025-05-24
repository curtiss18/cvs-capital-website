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

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Google Maps - Full Width */}
          <div className="w-full">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.8234567890123!2d-119.7633!3d39.4975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s10775+Double+R+Blvd%2C+Reno%2C+NV+89521!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CVS Capital Office Location"
              ></iframe>
            </div>
          </div>

          {/* Office Information Cards - Horizontal Row */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card padding="md">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-sage-400 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-neutral-800 mb-3">Office Address</h3>
                <div className="space-y-1 text-neutral-600 text-sm">
                  <p className="font-medium">CVS Capital</p>
                  <p>10775 Double R Blvd</p>
                  <p>Reno, NV 89521</p>
                </div>
              </div>
            </Card>

            <Card padding="md">
              <div className="text-center">
                <Clock className="h-8 w-8 text-sage-400 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-neutral-800 mb-3">Business Hours</h3>
                <div className="space-y-1 text-neutral-600 text-sm">
                  <p><span className="font-medium">Monday - Friday</span></p>
                  <p>8:00 AM - 5:00 PM</p>
                  <p className="text-xs text-neutral-500">(Pacific Time)</p>
                </div>
              </div>
            </Card>

            <Card padding="md">
              <div className="text-center">
                <Phone className="h-8 w-8 text-sage-400 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-neutral-800 mb-2">Phone</h3>
                <a 
                  href="tel:(775) 315-7594" 
                  className="text-sage-600 hover:text-sage-700 transition-colors text-sm"
                >
                  (775) 315-7594
                </a>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  )
}
