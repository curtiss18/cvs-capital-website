import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Award, GraduationCap, TrendingUp } from "lucide-react"
import { advisors } from "@/lib/advisors"

export function AdvisorProfiles() {
  return (
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
  )
}