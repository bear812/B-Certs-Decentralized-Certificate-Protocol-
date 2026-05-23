import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  CheckCircle2, 
  Shield, 
  MapPin, 
  Mail, 
  ExternalLink, 
  Download, 
  QrCode,
  Award,
  Calendar,
  Building2,
  Briefcase,
  GraduationCap,
  Code,
  FileText,
  Wallet
} from "lucide-react"

const skills = ["Blockchain", "Smart Contracts", "Web Development", "Database Management", "UI/UX Design"]

const certificates = [
  {
    title: "Bachelor of Information Technology",
    issuer: "National University of Laos",
    date: "June 2024",
    type: "Degree"
  },
  {
    title: "Blockchain Development Certification",
    issuer: "Lao Tech Academy",
    date: "March 2024",
    type: "Certificate"
  },
  {
    title: "Web Development Bootcamp",
    issuer: "Digital Skills Center",
    date: "December 2023",
    type: "Certificate"
  }
]

const activities = [
  { action: "Claimed certificate", detail: "Bachelor of IT", time: "2 days ago" },
  { action: "Updated profile", detail: "Added new skills", time: "1 week ago" },
  { action: "Verified by", detail: "Tech Company Laos", time: "2 weeks ago" }
]

export function ProfileDemo() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Public Profile Demo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A LinkedIn-inspired verified professional profile for graduates.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden bg-card border border-border shadow-xl">
            {/* Cover Image */}
            <div className="h-32 bg-gradient-to-r from-primary via-primary/80 to-primary/60" />
            
            <CardContent className="relative pt-0 pb-6">
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row gap-6 -mt-16 mb-6">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-2xl bg-secondary border-4 border-card overflow-hidden flex items-center justify-center">
                    <GraduationCap className="w-16 h-16 text-muted-foreground" />
                  </div>
                  {/* Verified badge */}
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-success flex items-center justify-center border-4 border-card">
                    <CheckCircle2 className="w-5 h-5 text-success-foreground" />
                  </div>
                </div>
                
                {/* Profile Info */}
                <div className="flex-1 pt-8 sm:pt-16">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-bold text-foreground">Souphavanh Keomany</h3>
                        <Badge variant="secondary" className="gap-1">
                          <Shield className="w-3 h-3" />
                          Verified
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mt-1">Software Developer & Blockchain Enthusiast</p>
                      
                      <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          National University of Laos
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          Vientiane, Laos
                        </div>
                        <div className="flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          souphavanh@email.com
                        </div>
                      </div>
                    </div>
                    
                    {/* QR Code */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-20 h-20 rounded-lg bg-foreground p-2">
                        <div className="w-full h-full grid grid-cols-5 gap-0.5">
                          {Array.from({ length: 25 }).map((_, i) => (
                            <div key={i} className={`bg-background ${Math.random() > 0.4 ? 'opacity-100' : 'opacity-0'}`} />
                          ))}
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">Scan to verify</span>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    <Button size="sm" className="gap-2">
                      <Download className="w-4 h-4" />
                      Download Resume
                    </Button>
                    <Button size="sm" variant="outline" className="gap-2">
                      <QrCode className="w-4 h-4" />
                      Share Profile
                    </Button>
                    <Button size="sm" variant="ghost" className="gap-2">
                      <Wallet className="w-4 h-4" />
                      0x7f4e...8a2b
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="md:col-span-2 space-y-6">
                  {/* Skills */}
                  <div className="p-4 rounded-xl bg-secondary/50">
                    <div className="flex items-center gap-2 mb-3">
                      <Code className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Skills</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-card">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Verified Certificates */}
                  <div className="p-4 rounded-xl bg-secondary/50">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Verified Certificates</h4>
                    </div>
                    <div className="space-y-3">
                      {certificates.map((cert, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 rounded-lg bg-card border border-border hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              {cert.type === "Degree" ? (
                                <GraduationCap className="w-5 h-5 text-primary" />
                              ) : (
                                <FileText className="w-5 h-5 text-primary" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-foreground text-sm">{cert.title}</p>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Building2 className="w-3 h-3" />
                                {cert.issuer}
                                <span>•</span>
                                <Calendar className="w-3 h-3" />
                                {cert.date}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-success/10 text-success text-xs">
                              <CheckCircle2 className="w-3 h-3" />
                              Verified
                            </div>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Activity */}
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-secondary/50">
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Recent Activity</h4>
                    </div>
                    <div className="space-y-3">
                      {activities.map((activity, index) => (
                        <div key={index} className="relative pl-4">
                          <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary" />
                          <p className="text-sm font-medium text-foreground">{activity.action}</p>
                          <p className="text-xs text-muted-foreground">{activity.detail}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Blockchain Badge */}
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                        <Shield className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">Blockchain Verified</p>
                        <p className="text-xs text-muted-foreground">All credentials verified on-chain</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
