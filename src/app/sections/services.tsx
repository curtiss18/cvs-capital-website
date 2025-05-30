import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      title: "Portfolio Management",
      description: "Whether you are an individual investor or an employer, we can help you reach your financial goals through comprehensive portfolio management and strategic asset allocation.",
      clickable: true
    },
    {
      title: "Financial Planning",
      description: "Plug into our team and our technology to create comprehensive financial plans that address your unique goals, risk tolerance, and time horizon.",
      clickable: true
    }
  ]

  return (
    <Section variant="cream" padding="xl">
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
          {services.map((service, index) => {
            const cardContent = (
              <Card
                key={index}
                padding="xl"
                className={`text-center h-full flex flex-col ${service.clickable ? 'hover:shadow-xl transition-shadow duration-300 cursor-pointer' : ''}`}
                hover={service.clickable}
              >
                <div>
                  <h3 className="text-2xl lg:text-3xl font-normal text-neutral-800 mb-6">
                    {service.title}
                  </h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            )

            return service.clickable ? (
              <Link key={index} href="/services#core-services" className="h-full">
                {cardContent}
              </Link>
            ) : (
              cardContent
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
