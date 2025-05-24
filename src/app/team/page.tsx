import { TeamHero, TeamOverview, AdvisorProfiles, TeamCredentials, TeamContact } from "./sections"

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <TeamHero />
      <TeamOverview />
      <AdvisorProfiles />
      <TeamCredentials />
      <TeamContact />
    </div>
  )
}
