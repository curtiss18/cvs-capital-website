import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-neutral-700 via-sage-800 to-neutral-800 text-white overflow-hidden">
      {/* Background Pattern/Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22%3E%3Crect fill=%22%23ffffff%22 width=%221200%22 height=%22600%22/%3E%3Crect fill=%22%23f0f0f0%22 x=%22200%22 y=%22100%22 width=%22800%22 height=%22400%22 rx=%2210%22/%3E%3Ccircle fill=%22%238FA68E%22 cx=%22400%22 cy=%22200%22 r=%2220%22/%3E%3Ccircle fill=%22%238FA68E%22 cx=%22600%22 cy=%22250%22 r=%2215%22/%3E%3Ccircle fill=%22%238FA68E%22 cx=%22800%22 cy=%22180%22 r=%2218%22/%3E%3C/svg%3E')] bg-cover bg-center" />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-sage-600/40 via-sage-50/30 to-sage-600/40" />
      
      <Container className="relative z-10">
        <div className="py-24 lg:py-32">
          <div className="max-w-4xl">

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-light leading-tight mb-8">
              Investment Solutions for{" "}
              <span className="text-sage-300">Every Situation</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-12 max-w-3xl">
              At CVS Capital, we manage risk first and money second. Whether an individual investor, 
              corporate entity or government entity... when you partner with our team — we provide 
              full access to our advanced technology and senior experts to support your wealth 
              management needs.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-sage-400 hover:bg-sage-500 text-white px-8 py-4 text-base"
              >
                Get Started Today
              </Button>
              <Button 
                variant="secondary"
                size="lg"
                className="px-8 py-4 text-base"
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
