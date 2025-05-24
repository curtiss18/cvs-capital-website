import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Shield, Info } from "lucide-react"

export function ContactCompliance() {
  return (
    <Section variant="cream" padding="lg">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card padding="lg">
              <div className="text-center">
                <Shield className="h-8 w-8 text-sage-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-neutral-800 mb-4">Privacy & Security</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Your personal information is handled with the highest level of security and confidentiality. 
                  We will only use your contact information to respond to your inquiry and provide 
                  requested information about our services.
                </p>
              </div>
            </Card>

            <Card padding="lg">
              <div className="text-center">
                <Info className="h-8 w-8 text-sage-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-neutral-800 mb-4">Important Disclosure</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  CVS Capital operates under Institute for Wealth Management RIA (CRD #105986). 
                  This communication is for informational purposes only and does not constitute 
                  investment advice. All investments involve risk of loss.
                </p>
              </div>
            </Card>
          </div>

          <div className="mt-8 pt-8 border-t border-neutral-200">
            <div className="text-center">
              <p className="text-xs text-neutral-500 leading-relaxed max-w-3xl mx-auto">
                Securities offered through LPL Financial, Member FINRA/SIPC. Investment advice offered through 
                Institute for Wealth Management, a registered investment advisor and separate entity from LPL Financial. 
                CVS Capital and Institute for Wealth Management are separate entities from LPL Financial.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
