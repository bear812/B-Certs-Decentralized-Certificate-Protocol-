import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Blocks, QrCode, User, Database, Zap, Globe, ArrowRight, Building2, CheckCircle2 } from "lucide-react"

const solutions = [
  {
    icon: Blocks,
    title: "Immutable Blockchain Records",
    description: "Certificates are permanently recorded on the blockchain, impossible to alter or forge."
  },
  {
    icon: QrCode,
    title: "QR Code Verification",
    description: "Instant verification by scanning a QR code - no manual processes required."
  },
  {
    icon: User,
    title: "Public Professional Profile",
    description: "Students get a verified digital identity to showcase all their credentials."
  },
  {
    icon: Database,
    title: "Secure Decentralized Storage",
    description: "Certificate data stored across IPFS/Arweave for maximum availability."
  },
  {
    icon: Zap,
    title: "Fast Employer Verification",
    description: "HR teams can verify any certificate in seconds, not days or weeks."
  },
  {
    icon: Globe,
    title: "Web3-Ready Identity System",
    description: "Built for the future with soulbound NFT certificates and wallet integration."
  }
]

export function SolutionSection() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            How B-Certs Solves This
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete blockchain-based solution for credential verification.
          </p>
        </div>
        
        {/* Flow Diagram */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {[
              { icon: Building2, label: "University" },
              { icon: Blocks, label: "Blockchain" },
              { icon: User, label: "Student Profile" },
              { icon: CheckCircle2, label: "HR Verification" }
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-4 md:gap-8">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{step.label}</span>
                </div>
                {index < 3 && (
                  <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all hover:-translate-y-1 bg-card border border-border">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {solution.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
