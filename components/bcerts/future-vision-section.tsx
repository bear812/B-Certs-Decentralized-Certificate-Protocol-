import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, Brain, Globe, Award, Users } from "lucide-react"

const futureFeatures = [
  {
    icon: Briefcase,
    title: "Job Marketplace",
    description: "Connect verified graduates directly with employers."
  },
  {
    icon: Users,
    title: "HR Matching System",
    description: "AI-powered talent matching for recruiters."
  },
  {
    icon: Brain,
    title: "AI-Powered Discovery",
    description: "Smart candidate recommendations based on verified skills."
  },
  {
    icon: Award,
    title: "Skill Verification",
    description: "Verify specific skills through assessments and endorsements."
  },
  {
    icon: Globe,
    title: "Cross-Border Credentials",
    description: "International recognition of education credentials."
  }
]

export function FutureVisionSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-8 md:p-16 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          
          <div className="relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground text-balance">
                The Future of Verified Talent
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                B-Certs aims to become the trusted digital identity layer for education and employment in Laos and ASEAN.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              {futureFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-primary-foreground/70">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button size="lg" variant="secondary" className="gap-2">
                Join the Waitlist
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
