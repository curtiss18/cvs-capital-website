import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

export function TeamHero() {
  return (
    <Section className="bg-gradient-to-br from-cream-200 via-sage-100 to-cream-300 pt-24 pb-16">
      <Container>
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-light text-neutral-800 mb-8">
            Seasoned Advisors for<br />
            <span className="text-sage-700">Sophisticated Investors</span>
          </h1>
          <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed max-w-5xl mx-auto mb-8">
            As independent advisors working with the Institute for Wealth Management, we provide 
            objective guidance focused solely on your best interests. Our collaborative approach 
            combines deep market knowledge with specialized expertise to deliver comprehensive 
            wealth management solutions.
          </p>
          <p className="text-lg text-neutral-500 max-w-4xl mx-auto">
            At CVS Capital, our mission is to define a clear path forward and deliver the confidence 
            that comes from understanding how to achieve what matters most to you and your family&apos;s future.
          </p>
        </div>
      </Container>
    </Section>
  )
}
