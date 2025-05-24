import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

export function TeamHero() {
  return (
    <Section variant="sage" padding="xl">
      <Container>
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl font-light text-white mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl lg:text-2xl text-sage-100 leading-relaxed max-w-4xl mx-auto">
            Experienced professionals dedicated to your financial success with combined decades 
            of expertise in investment management and financial planning.
          </p>
        </div>
      </Container>
    </Section>
  )
}
