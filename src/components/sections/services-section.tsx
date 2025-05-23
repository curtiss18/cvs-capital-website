import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

export function ServicesSection() {
  const services = [
    {
      title: "Looking for Portfolio Management?",
      description: "Whether you are an individual investor or an employer, we can help you reach your financial goals through comprehensive portfolio management and strategic asset allocation."
    },
    {
      title: "Financial Planning Services",
      description: "Plug into our team and our technology to create comprehensive financial plans that address your unique goals, risk tolerance, and time horizon."
    }
  ]

  return (
    <Section variant="cream" padding="xl" wave="top">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-neutral-800 mb-6">
            Investment Solutions for Every Situation
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-4xl mx-auto">
            At CVS Capital, we manage risk first and money second. Whether a financial advisor 
            or individual investor, corporate entity or government entity... when you partner 
            with our team — we provide full access to our advanced technology and senior experts 
            to support your wealth management needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 lg:p-12 border-3 border-neutral-200 hover:border-sage-400 transition-all duration-300 hover:-translate-y-1 text-center group"
            >
              <h3 className="text-2xl lg:text-3xl font-normal text-neutral-800 mb-6 group-hover:text-sage-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
