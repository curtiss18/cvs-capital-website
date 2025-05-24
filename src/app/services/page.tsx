import { Metadata } from 'next'
import { 
  ServicesHero, 
  CoreServices, 
  InvestmentStrategies, 
  ServiceProcess, 
  FeeTransparency, 
  ComplianceCredentials, 
  ServicesCTA 
} from "./sections"

export const metadata: Metadata = {
  title: 'Investment Services | CVS Capital',
  description: 'Comprehensive wealth management services including portfolio management, financial planning, and specialized investment strategies. Fiduciary responsibility with personalized approach.',
  keywords: 'investment management, financial planning, wealth management, portfolio management, investment strategies'
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHero />
      <CoreServices />
      <InvestmentStrategies />
      <ServiceProcess />
      <FeeTransparency />
      <ComplianceCredentials />
      <ServicesCTA />
    </main>
  )
}
