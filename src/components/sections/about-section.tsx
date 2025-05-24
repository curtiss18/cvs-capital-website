import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { advisors } from "@/lib/advisors"

export function AboutSection() {

  return (
    <Section variant="sage" padding="xl">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Meet Your Advisory Team
          </h2>
          <p className="text-xl text-sage-100 leading-relaxed max-w-3xl mx-auto">
            Experience the difference of working with dedicated professionals who put your 
            financial goals first.
          </p>
        </div>

        {/* Advisors Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur border-2 border-white/20 p-8 lg:p-10 hover:bg-white/15 hover:border-white/40 transition-all duration-300 text-center"
            >
              {/* Photo Placeholder */}
              <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-light text-white">
                {advisor.initials}
              </div>
              
              {/* Name & Role */}
              <h3 className="text-2xl lg:text-3xl font-normal text-white mb-2">
                {advisor.name}
              </h3>
              <p className="text-sage-100 italic mb-6 text-lg">
                {advisor.role}
              </p>
              
              {/* Description */}
              <p className="text-white/90 leading-relaxed mb-6">
                {advisor.description}
              </p>
              
              {/* Contact/Details */}
              <div className="text-sm text-sage-100 space-y-1">
                <p><strong>Education:</strong> {advisor.education}</p>
                <p><strong>Credentials:</strong> {advisor.credentials}</p>
                <p><strong>Email:</strong> {advisor.contact.email}</p>
                <p><strong>Phone:</strong> {advisor.contact.phone}</p>
                <p><strong>CRD#:</strong> {advisor.details.crd}</p>
                <p><strong>Licensed Since:</strong> {advisor.details.licensed}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
