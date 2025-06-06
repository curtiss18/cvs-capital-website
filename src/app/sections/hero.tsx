import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-sage-200 via-cream-100 to-sage-300 text-neutral-800 overflow-hidden">
      {/* Subtle Geometric Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M0 0h100v100H0z%22 fill=%22none%22/%3E%3Cpath d=%22M0 0l100 100M100 0L0 100%22 stroke=%22%23888965%22 stroke-width=%220.5%22/%3E%3C/svg%3E')] bg-repeat" />
      </div>
      
      <Container className="relative z-10">
        <div className="py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <h1 className="text-4xl lg:text-6xl font-light leading-tight mb-8">
                Sophisticated Wealth Management for<br />
                <span className="text-sage-700">Discerning Clients</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-neutral-700 leading-relaxed mb-12 max-w-3xl">
                At CVS Capital, we manage risk first and money second. Our discretionary investment 
                management approach provides you with access to sophisticated strategies and institutional-quality 
                resources, all while maintaining our commitment to act solely in your best interests.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button 
                    size="lg"
                    className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 text-base w-full border border-sage-600"
                  >
                    Schedule Consultation
                  </Button>
                </Link>
                <Link href="/services" className="w-full sm:w-auto">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="px-8 py-4 text-base w-full border-sage-600 text-sage-700 hover:bg-sage-50 hover:text-sage-700"
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>

            {/* Value Propositions */}
            <div className="lg:col-span-4">
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-sage-300/50 shadow-lg">
                  <h3 className="text-lg font-semibold text-sage-700 mb-2">Fiduciary Standard</h3>
                  <p className="text-neutral-600 text-sm">
                    Your best interests are always our highest priority and primary concern
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-sage-300/50 shadow-lg">
                  <h3 className="text-lg font-semibold text-sage-700 mb-2">Personalized Strategies</h3>
                  <p className="text-neutral-600 text-sm">
                    Customized investment solutions for your life&apos;s important goals
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-sage-300/50 shadow-lg">
                  <h3 className="text-lg font-semibold text-sage-700 mb-2">Comprehensive Service</h3>
                  <p className="text-neutral-600 text-sm">
                    From wealth preservation to legacy planning—we guide every aspect
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
