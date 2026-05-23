import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, DollarSign, Calculator, TrendingUp, Users, Code, Server, Palette, Database, Cloud } from "lucide-react"

const targetCustomers = [
  "Universities",
  "Colleges", 
  "Government organizations",
  "Training centers",
  "HR companies"
]

const revenueStreams = [
  "Institution subscription",
  "Certificate issuance fees",
  "Premium HR tools",
  "API access",
  "White-label solutions"
]

const costs = [
  { icon: Server, label: "Hosting", amount: "$300" },
  { icon: Code, label: "Smart Contract", amount: "$400" },
  { icon: Palette, label: "UI/UX Design", amount: "$300" },
  { icon: Database, label: "Database", amount: "$200" },
  { icon: Cloud, label: "IPFS Storage", amount: "$300" }
]

const phases = [
  { phase: "Phase 1", title: "Universities adoption in Laos", status: "current" },
  { phase: "Phase 2", title: "Partnership with government", status: "upcoming" },
  { phase: "Phase 3", title: "LinkedIn-style verified talent platform", status: "upcoming" },
  { phase: "Phase 4", title: "Regional expansion (ASEAN)", status: "upcoming" }
]

export function BusinessSection() {
  return (
    <section id="business" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Business Model
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A sustainable approach to revolutionizing credential verification.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Target Customers */}
          <Card className="bg-card border border-border">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Target Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {targetCustomers.map((customer, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {customer}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          {/* Revenue Streams */}
          <Card className="bg-card border border-border">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-success" />
              </div>
              <CardTitle className="text-lg">Revenue Streams</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {revenueStreams.map((stream, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-success" />
                    {stream}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          {/* Estimated Costs */}
          <Card className="bg-card border border-border">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-warning" />
              </div>
              <CardTitle className="text-lg">Estimated Cost</CardTitle>
              <CardDescription>MVP Development Budget</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {costs.map((cost, index) => (
                  <li key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <cost.icon className="w-4 h-4" />
                      {cost.label}
                    </div>
                    <span className="font-medium text-foreground">{cost.amount}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <span className="font-semibold text-foreground">Total MVP</span>
                <span className="text-lg font-bold text-primary">~$1,500</span>
              </div>
            </CardContent>
          </Card>
          
          {/* Growth Plan */}
          <Card className="bg-card border border-border">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Growth Plan Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {phases.map((phase, index) => (
                  <div key={index} className="relative pl-6">
                    <div className={`absolute left-0 top-1 w-3 h-3 rounded-full ${phase.status === 'current' ? 'bg-primary' : 'bg-muted'}`} />
                    {index < phases.length - 1 && (
                      <div className="absolute left-1.5 top-4 w-px h-full -translate-x-1/2 bg-border" />
                    )}
                    <p className={`text-xs font-medium ${phase.status === 'current' ? 'text-primary' : 'text-muted-foreground'}`}>
                      {phase.phase}
                    </p>
                    <p className="text-sm text-foreground">{phase.title}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Partners/Users Section */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">Designed for leading institutions</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["National University", "Ministry of Education", "Lao PDR Gov", "ASEAN Partners"].map((partner, index) => (
              <div key={index} className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium text-foreground">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
