import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Award, GraduationCap, TrendingUp } from "lucide-react"
import { advisors } from "@/lib/advisors"

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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

      {/* Team Overview */}
      <Section variant="cream" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-light text-neutral-800 mb-6">
                Your CVS Capital Advisory Team
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                At CVS Capital, we believe that successful investing requires both deep market knowledge 
                and a personal understanding of your unique goals. Our team combines extensive experience 
                in financial services with specialized expertise in key market sectors.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                As independent advisers working with the Institute for Wealth Management, we provide 
                objective guidance focused solely on your best interests. Our collaborative approach 
                ensures you benefit from diverse perspectives and comprehensive expertise.
              </p>
            </div>
            <div className="space-y-6">
              <Card padding="md" className="text-center">
                <div className="text-3xl font-light text-sage-600 mb-2">18+</div>
                <div className="text-sm uppercase tracking-wide text-neutral-600">Years Combined Experience</div>
              </Card>
              <Card padding="md" className="text-center">
                <div className="text-3xl font-light text-sage-600 mb-2">2</div>
                <div className="text-sm uppercase tracking-wide text-neutral-600">Series 65 Professionals</div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Individual Advisor Profiles */}
      <Section variant="default" padding="xl">
        <Container>
          <div className="space-y-16">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                id={`advisor-${advisor.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`scroll-mt-32 grid lg:grid-cols-12 gap-8 items-start ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Photo Column */}
                <div className={`lg:col-span-4 ${index % 2 === 1 ? "lg:col-start-9" : ""}`}>
                  <div className="bg-sage-100 rounded-lg p-8 text-center">
                    <div className="w-48 h-48 bg-sage-200 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-light text-sage-700">
                      {advisor.initials}
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center text-sage-600">
                        <Mail className="h-4 w-4 mr-2" />
                        <a href={`mailto:${advisor.contact.email}`} className="hover:text-sage-700 transition-colors">
                          {advisor.contact.email}
                        </a>
                      </div>
                      <div className="flex items-center justify-center text-sage-600">
                        <Phone className="h-4 w-4 mr-2" />
                        <a href={`tel:${advisor.contact.phone}`} className="hover:text-sage-700 transition-colors">
                          {advisor.contact.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <Card>
                    <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-light text-neutral-800 mb-2">
                        {advisor.name}
                      </h3>
                      <p className="text-lg text-sage-600 italic mb-1">{advisor.title}</p>
                      <p className="text-neutral-600">{advisor.role}</p>
                    </div>

                    {/* Philosophy */}
                    <div>
                      <h4 className="text-xl font-medium text-neutral-800 mb-3 flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2 text-sage-600" />
                        Investment Philosophy
                      </h4>
                      <p className="text-neutral-600 leading-relaxed italic">
                        &ldquo;{advisor.philosophy}&rdquo;
                      </p>
                    </div>

                    {/* Education & Credentials */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-medium text-neutral-800 mb-3 flex items-center">
                          <GraduationCap className="h-5 w-5 mr-2 text-sage-600" />
                          Education
                        </h4>
                        <p className="text-neutral-600">{advisor.education}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-neutral-800 mb-3 flex items-center">
                          <Award className="h-5 w-5 mr-2 text-sage-600" />
                          Credentials
                        </h4>
                        <p className="text-neutral-600">{advisor.credentials}</p>
                        <p className="text-sm text-neutral-500 mt-1">CRD# {advisor.details.crd}</p>
                      </div>
                    </div>

                    {/* Areas of Expertise */}
                    <div>
                      <h4 className="text-lg font-medium text-neutral-800 mb-3">Areas of Expertise</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {advisor.expertise.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center text-neutral-600">
                            <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Professional Achievements */}
                    <div>
                      <h4 className="text-lg font-medium text-neutral-800 mb-3">Professional Achievements</h4>
                      <ul className="space-y-2">
                        {advisor.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-neutral-600 flex items-start">
                            <div className="w-2 h-2 bg-sage-400 rounded-full mr-3 mt-2"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Professional Interests */}
                    <div>
                      <h4 className="text-lg font-medium text-neutral-800 mb-3">Professional Interests</h4>
                      <p className="text-neutral-600">{advisor.interests}</p>
                    </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Credentials & Compliance Section */}
      <Section variant="cream" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-neutral-800 mb-6">
              Professional Credentials & Compliance
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Our advisors maintain the highest standards of professional conduct and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {advisors.map((advisor, index) => (
              <Card key={index}>
                <h3 className="text-xl font-medium text-neutral-800 mb-4">{advisor.name}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">CRD Number:</span>
                    <span className="font-medium">{advisor.details.crd}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Licensed Since:</span>
                    <span className="font-medium">{advisor.details.licensed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Series 65:</span>
                    <span className="font-medium">Active</span>
                  </div>
                  <div className="pt-4 border-t border-sage-200">
                    <a 
                      href={`https://brokercheck.finra.org/individual/summary/${advisor.details.crd}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sage-600 hover:text-sage-700 text-sm underline"
                    >
                      View FINRA BrokerCheck Profile →
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact CTA Section */}
      <Section variant="sage" padding="lg">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-light text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-sage-100 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our experienced team to discuss your financial goals 
              and investment strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="secondary" size="lg">
                Learn About Our Services
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-sage-500/30">
              <p className="text-sage-100 mb-4">Contact Our Team Directly:</p>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {advisors.map((advisor, index) => (
                  <div key={index} className="text-center">
                    <h4 className="text-white font-medium mb-2">{advisor.name}</h4>
                    <div className="space-y-1 text-sm text-sage-100">
                      <div>{advisor.contact.phone}</div>
                      <div>{advisor.contact.email}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
