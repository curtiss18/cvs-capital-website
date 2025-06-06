import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

export function ContactHero() {
  return (
    <Section className="bg-gradient-to-br from-sage-300 via-neutral-100 to-cream-200 pt-20 pb-12">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl font-light text-neutral-800 mb-6">
            Let's Discuss Your<br />
            <span className="text-sage-700">Financial Goals</span>
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Schedule a consultation to explore how we can help you achieve 
            what matters most to you and your family.
          </p>
        </div>
      </Container>
    </Section>
  )
}
