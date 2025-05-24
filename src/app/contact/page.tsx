import { Metadata } from "next"
import { 
  ContactHero, 
  ContactForm, 
  OfficeInfo, 
  TeamDirect, 
  ContactCompliance 
} from "./sections"

export const metadata: Metadata = {
  title: "Contact CVS Capital | Schedule Investment Consultation",
  description: "Contact CVS Capital for personalized investment advisory services. Schedule a consultation with our experienced team in Reno, Nevada.",
  keywords: ["contact financial advisor", "investment consultation", "CVS Capital contact", "Reno financial advisor"]
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactForm />
      <OfficeInfo />
      <TeamDirect />
      <ContactCompliance />
    </div>
  )
}
