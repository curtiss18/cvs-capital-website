import Link from "next/link"
import { Container } from "@/components/ui/container"

export function Footer() {
  const footerSections = [
    {
      title: "CVS Capital",
      content: [
        "Independent Investment Advisory Services",
        "Registered with The Institute for Wealth Management LLC",
        "CRD #127207"
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Investment Management", href: "/services" },
        { name: "Financial Planning", href: "/services" },
        { name: "Retirement Planning", href: "/services" },
        { name: "Risk Management", href: "/services" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Client Forms", href: "/resources" },
        { name: "Market Insights", href: "/blog" },
        { name: "Investment Strategies", href: "/resources" },
        { name: "Performance Reports", href: "/resources" }
      ]
    },
    {
      title: "Compliance",
      links: [
        { name: "Form ADV Part 2A", href: "/compliance" },
        { name: "Form ADV Part 2B", href: "/compliance" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" }
      ]
    }
  ]

  return (
    <footer className="bg-neutral-800 text-neutral-300">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-sage-400 font-medium text-lg mb-4">
                  {section.title}
                </h4>
                
                {section.content && (
                  <div className="space-y-2">
                    {section.content.map((item, index) => (
                      <p key={index} className="text-sm leading-relaxed">
                        {item}
                      </p>
                    ))}
                  </div>
                )}
                
                {section.links && (
                  <div className="space-y-2">
                    {section.links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block text-sm text-neutral-400 hover:text-sage-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="border-t border-neutral-700 mt-12 pt-8 text-center">
            <p className="text-sm text-neutral-500">
              &copy; 2025 CVS Capital. All rights reserved. Investment advisory services offered through The Institute for Wealth Management LLC, an SEC registered investment adviser.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
