import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Clock, FileX, Users } from "lucide-react"

const problems = [
  {
    icon: AlertTriangle,
    title: "Fake Certificates",
    description: "Employers cannot easily verify authenticity of academic credentials, leading to fraud.",
    color: "text-destructive",
    bgColor: "bg-destructive/10"
  },
  {
    icon: Clock,
    title: "Slow Manual Verification",
    description: "HR departments must contact universities manually, taking days or weeks to verify.",
    color: "text-warning",
    bgColor: "bg-warning/10"
  },
  {
    icon: FileX,
    title: "Lost or Damaged Documents",
    description: "Physical certificates can be lost, damaged, or destroyed with no way to recover.",
    color: "text-destructive",
    bgColor: "bg-destructive/10"
  },
  {
    icon: Users,
    title: "No Unified Professional Identity",
    description: "Students and graduates lack trusted digital profiles to showcase their credentials.",
    color: "text-warning",
    bgColor: "bg-warning/10"
  }
]

export function ProblemSection() {
  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Problems With Traditional Certificates
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            The current credentialing system is broken. Here&apos;s why change is needed.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow bg-card">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-destructive to-warning" />
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl ${problem.bgColor} flex items-center justify-center mb-4`}>
                  <problem.icon className={`w-6 h-6 ${problem.color}`} />
                </div>
                <CardTitle className="text-lg">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {problem.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
