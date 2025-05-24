export interface Advisor {
  name: string
  role: string
  title?: string
  education: string
  credentials: string
  experience: string
  contact: {
    email: string
    phone: string
  }
  details: {
    crd: string
    licensed: string
  }
  initials: string
  philosophy: string
  expertise: string[]
  achievements: string[]
  interests: string
  description?: string // For homepage about section
}

export const advisors: Advisor[] = [
  {
    name: "Creg V Shaffer",
    role: "Senior Investment Adviser Representative",
    title: "Principal & Co-Founder",
    education: "Master's in Economics, Iowa State University",
    credentials: "Series 65 Certified Since 2006",
    experience: "18+ Years in Financial Services",
    contact: {
      email: "cregs@instituteforwealth.com",
      phone: "(775) 315-7594"
    },
    details: {
      crd: "5070346",
      licensed: "2006"
    },
    initials: "CVS",
    philosophy: "I believe in building lasting relationships through disciplined investment strategies and transparent communication. My approach centers on understanding each client's unique goals and creating sustainable wealth-building plans.",
    expertise: [
      "Retirement Planning & Income Strategies",
      "Portfolio Risk Management", 
      "Economic Analysis & Market Research",
      "Business Succession Planning"
    ],
    achievements: [
      "18+ years serving individual investors",
      "Economics expertise from Iowa State University",
      "Founding partner of CVS Capital"
    ],
    interests: "Sustainable business practices, economic research, and community development initiatives.",
    description: "With extensive business management experience and nearly two decades in financial services, Creg provides strategic wealth management guidance focused on sustainable long-term growth strategies."
  },  {
    name: "Curtis L. Shaffer", 
    role: "Investment Adviser Representative",
    title: "Technology Sector Specialist & Co-Founder",
    education: "Bachelor's in Business Administration, Brigham Young University",
    credentials: "Series 65 Certified Since 2025",
    experience: "Technology Sector Expertise",
    contact: {
      email: "curtis.shaffer@instituteforwealth.com",
      phone: "(775) 309-7092"
    },
    details: {
      crd: "5601482",
      licensed: "2025"
    },
    initials: "CLS",
    philosophy: "I leverage analytical insights and technology sector knowledge to help clients navigate today's dynamic markets. My focus is on data-driven decisions and strategic market positioning.",
    expertise: [
      "Technology Sector Analysis",
      "Growth Stock Strategies",
      "Market Timing & Technical Analysis", 
      "Digital Investment Platforms"
    ],
    achievements: [
      "BYU Business Administration graduate",
      "Technology sector trading experience",
      "Co-founder of CVS Capital"
    ],
    interests: "Financial technology innovation, market analysis, and strategic business development.",
    description: "Curtis brings technology sector expertise and analytical market insight to help clients navigate complex investment decisions. His background includes experience with day trading and strategic market analysis."
  }
]

