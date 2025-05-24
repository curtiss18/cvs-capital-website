import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

export function ContactHero() {
  return (
    <Section variant="sage" padding="xl">
      <Container>
        <div className="text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-light mb-6">
            Contact CVS Capital
          </h1>
          <p className="text-xl lg:text-2xl text-sage-100 max-w-3xl mx-auto leading-relaxed">
            Ready to take control of your financial future? Schedule a consultation 
            with our experienced investment advisory team.
          </p>
        </div>
      </Container>
    </Section>
  )
}
