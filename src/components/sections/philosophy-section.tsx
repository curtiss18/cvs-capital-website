import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

export function PhilosophySection() {
  return (
    <Section variant="cream" padding="xl" wave="top">
      <Container>
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-light text-neutral-800 mb-8">
            Financial Advisement, The CVS Capital Way
          </h2>
          
          <div className="space-y-8 text-xl text-neutral-600 leading-relaxed">
            <p>
              Investing for the future may seem overwhelming and complicated at times. Your stage in life, 
              the current economy and other factors may make it hard for you to construct a plan that 
              achieves your financial goals. We make innovative investment options easy for you to understand 
              by taking a straight forward approach with wealth management.
            </p>
            
            <p>
              By clearly identifying trends for you, we give you peace of mind; and we do it with decades 
              of experience, unparalleled resources, and trusted partnerships. We identify the right 
              opportunities and monitor their progress while investors enjoy life, and trust the details 
              to our experts.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
