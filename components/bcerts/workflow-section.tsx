import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Upload, Send, UserPlus, QrCode, Wallet, ClipboardCheck, Building2, User, Shield } from "lucide-react"

const workflows = [
  {
    title: "Admin Workflow",
    icon: Shield,
    color: "from-blue-500 to-blue-600",
    steps: [
      { icon: ClipboardCheck, label: "Review institution request" },
      { icon: Wallet, label: "Approve university wallet" },
      { icon: UserPlus, label: "Whitelist issuer" }
    ]
  },
  {
    title: "Issuer Workflow",
    icon: Building2,
    color: "from-emerald-500 to-emerald-600",
    steps: [
      { icon: Wallet, label: "Login with institution wallet" },
      { icon: Upload, label: "Upload student data" },
      { icon: ClipboardCheck, label: "Generate certificate metadata" },
      { icon: Shield, label: "Mint certificate on blockchain" },
      { icon: Send, label: "Send claim link to student" }
    ]
  },
  {
    title: "User / HR Workflow",
    icon: User,
    color: "from-purple-500 to-purple-600",
    steps: [
      { icon: CheckCircle2, label: "Student claims certificate" },
      { icon: User, label: "Build public profile" },
      { icon: QrCode, label: "Share QR code" },
      { icon: QrCode, label: "HR scans QR" },
      { icon: Shield, label: "System verifies on-chain" }
    ]
  }
]

export function WorkflowSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Platform Workflow
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, streamlined processes for administrators, issuers, and users.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {workflows.map((workflow, workflowIndex) => (
            <Card key={workflowIndex} className="relative overflow-hidden bg-card border border-border">
              {/* Header gradient */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${workflow.color}`} />
              
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${workflow.color} flex items-center justify-center`}>
                    <workflow.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{workflow.title}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
                  
                  <div className="space-y-4">
                    {workflow.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="relative flex items-center gap-4 pl-2">
                        {/* Step number circle */}
                        <div className={`relative z-10 w-8 h-8 rounded-full bg-gradient-to-br ${workflow.color} flex items-center justify-center text-white text-sm font-medium shadow-lg`}>
                          {stepIndex + 1}
                        </div>
                        
                        {/* Step content */}
                        <div className="flex-1 flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                          <step.icon className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-foreground">{step.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
