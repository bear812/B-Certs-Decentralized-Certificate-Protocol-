"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  CheckCircle2, 
  Shield, 
  QrCode, 
  Search,
  ExternalLink,
  Calendar,
  Building2,
  GraduationCap,
  Hash,
  User,
  Scan
} from "lucide-react"

export function VerificationSection() {
  const [isVerified, setIsVerified] = useState(false)
  const [isScanning, setIsScanning] = useState(false)
  
  const handleVerify = () => {
    setIsScanning(true)
    setTimeout(() => {
      setIsScanning(false)
      setIsVerified(true)
    }, 2000)
  }

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Certificate Verification
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Verify any certificate instantly by scanning a QR code or entering a certificate ID.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left - QR Scanner */}
          <Card className="bg-card border border-border overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <QrCode className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">QR Code Scanner</h3>
              </div>
              
              {/* Scanner Area */}
              <div className="relative aspect-square max-w-sm mx-auto rounded-2xl bg-foreground/5 border-2 border-dashed border-border overflow-hidden">
                {/* Scanner frame */}
                <div className="absolute inset-4 border-2 border-primary/50 rounded-xl">
                  {/* Corner decorations */}
                  <div className="absolute -top-0.5 -left-0.5 w-6 h-6 border-t-4 border-l-4 border-primary rounded-tl-lg" />
                  <div className="absolute -top-0.5 -right-0.5 w-6 h-6 border-t-4 border-r-4 border-primary rounded-tr-lg" />
                  <div className="absolute -bottom-0.5 -left-0.5 w-6 h-6 border-b-4 border-l-4 border-primary rounded-bl-lg" />
                  <div className="absolute -bottom-0.5 -right-0.5 w-6 h-6 border-b-4 border-r-4 border-primary rounded-br-lg" />
                  
                  {/* Scan line animation */}
                  {isScanning && (
                    <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line" />
                  )}
                </div>
                
                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {isScanning ? (
                    <div className="text-center">
                      <Scan className="w-12 h-12 text-primary mx-auto animate-pulse" />
                      <p className="mt-4 text-sm text-muted-foreground">Scanning...</p>
                    </div>
                  ) : isVerified ? (
                    <div className="text-center">
                      <CheckCircle2 className="w-16 h-16 text-success mx-auto" />
                      <p className="mt-4 text-sm font-medium text-success">Verified!</p>
                    </div>
                  ) : (
                    <div className="text-center p-4">
                      <QrCode className="w-12 h-12 text-muted-foreground mx-auto" />
                      <p className="mt-4 text-sm text-muted-foreground">Position QR code in frame</p>
                    </div>
                  )}
                </div>
              </div>
              
              <Button 
                className="w-full mt-6 gap-2" 
                onClick={handleVerify}
                disabled={isScanning}
              >
                <Scan className="w-4 h-4" />
                {isScanning ? "Scanning..." : "Start Scanning"}
              </Button>
              
              {/* Manual Entry */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Or enter certificate ID manually</p>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Enter certificate ID or hash" 
                    className="flex-1"
                  />
                  <Button variant="outline" size="icon">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Right - Certificate Preview */}
          <Card className={`bg-card border-2 overflow-hidden transition-all ${isVerified ? 'border-success shadow-lg shadow-success/20' : 'border-border'}`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Certificate Details</h3>
                </div>
                {isVerified && (
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    Verified on Blockchain
                  </div>
                )}
              </div>
              
              {isVerified ? (
                <div className="space-y-4">
                  {/* Certificate info */}
                  <div className="p-4 rounded-xl bg-success/5 border border-success/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">Bachelor of Information Technology</p>
                        <p className="text-sm text-muted-foreground">Academic Degree</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-secondary/50">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <User className="w-4 h-4" />
                        <span className="text-xs">Student Name</span>
                      </div>
                      <p className="font-medium text-foreground">Souphavanh Keomany</p>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-secondary/50">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Building2 className="w-4 h-4" />
                        <span className="text-xs">University</span>
                      </div>
                      <p className="font-medium text-foreground">National University of Laos</p>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-secondary/50">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <GraduationCap className="w-4 h-4" />
                        <span className="text-xs">Graduation Year</span>
                      </div>
                      <p className="font-medium text-foreground">2024</p>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-secondary/50">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-xs">Issue Date</span>
                      </div>
                      <p className="font-medium text-foreground">June 15, 2024</p>
                    </div>
                  </div>
                  
                  {/* Transaction Hash */}
                  <div className="p-4 rounded-xl bg-secondary/50">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Hash className="w-4 h-4" />
                      <span className="text-xs">Blockchain Transaction Hash</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <code className="text-sm font-mono text-foreground">
                        0x7f4e8c2a1b3d5f6e9a8b7c4d2e1f0a9b8c7d6e5f
                      </code>
                      <Button size="sm" variant="ghost" className="h-8 gap-1">
                        <ExternalLink className="w-3 h-3" />
                        View
                      </Button>
                    </div>
                  </div>
                  
                  {/* Trust indicators */}
                  <div className="flex items-center justify-center gap-6 pt-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      Tamper-proof
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4 text-success" />
                      Blockchain secured
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center mb-4">
                    <Shield className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground">Scan a QR code or enter a certificate ID to verify</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
