import { Header } from "@/components/bcerts/header"
import { HeroSection } from "@/components/bcerts/hero-section"
import { ProblemSection } from "@/components/bcerts/problem-section"
import { SolutionSection } from "@/components/bcerts/solution-section"
import { BusinessSection } from "@/components/bcerts/business-section"
import { ArchitectureSection } from "@/components/bcerts/architecture-section"
import { WorkflowSection } from "@/components/bcerts/workflow-section"
import { ProfileDemo } from "@/components/bcerts/profile-demo"
import { VerificationSection } from "@/components/bcerts/verification-section"
import { FutureVisionSection } from "@/components/bcerts/future-vision-section"
import { Footer } from "@/components/bcerts/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BusinessSection />
      <ArchitectureSection />
      <WorkflowSection />
      <ProfileDemo />
      <VerificationSection />
      <FutureVisionSection />
      <Footer />
    </main>
  )
}
