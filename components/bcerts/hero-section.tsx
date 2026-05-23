"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Lock, QrCode, Fingerprint, CheckCircle2, Blocks } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      
      {/* Floating elements */}
      <div className="absolute top-40 left-10 w-20 h-20 rounded-2xl bg-primary/10 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-60 right-20 w-16 h-16 rounded-xl bg-primary/15 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-1/4 w-12 h-12 rounded-lg bg-primary/20 animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              <Blocks className="w-4 h-4 mr-2" />
              Built on Blockchain Technology
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
              Trusted Digital Certificates on{" "}
              <span className="text-primary">Blockchain</span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-balance">
              Secure, transparent, and verifiable academic credentials for the future workforce of Laos.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <QrCode className="w-4 h-4" />
                Verify Certificate
              </Button>
            </div>
            
            {/* Feature badges */}
            <div className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-card border border-border shadow-sm">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Blockchain Verified</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-card border border-border shadow-sm">
                <Lock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Tamper Proof</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-card border border-border shadow-sm">
                <QrCode className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">QR Verification</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-card border border-border shadow-sm">
                <Fingerprint className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Soulbound Certificate</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Certificate Preview */}
          <div className="relative">
            <div className="relative mx-auto max-w-md">
              {/* Main Certificate Card */}
              <div className="glass rounded-2xl p-6 shadow-2xl animate-pulse-glow">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">B-Certs</p>
                      <p className="text-xs text-muted-foreground">Digital Certificate</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-success/10 text-success text-xs font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-secondary/50">
                    <p className="text-xs text-muted-foreground mb-1">Certificate Holder</p>
                    <p className="font-semibold text-foreground">Souphavanh Keomany</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-secondary/50">
                      <p className="text-xs text-muted-foreground mb-1">Degree</p>
                      <p className="font-medium text-foreground text-sm">Bachelor of IT</p>
                    </div>
                    <div className="p-4 rounded-xl bg-secondary/50">
                      <p className="text-xs text-muted-foreground mb-1">Issued</p>
                      <p className="font-medium text-foreground text-sm">June 2024</p>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-secondary/50">
                    <p className="text-xs text-muted-foreground mb-1">Issuing Institution</p>
                    <p className="font-medium text-foreground text-sm">National University of Laos</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="w-16 h-16 rounded-lg bg-foreground p-2">
                      {/* QR Code placeholder */}
                      <div className="w-full h-full grid grid-cols-4 gap-0.5">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div key={i} className={`bg-background ${Math.random() > 0.5 ? 'opacity-100' : 'opacity-0'}`} />
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Transaction Hash</p>
                      <p className="font-mono text-xs text-foreground">0x7f4e...8a2b</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating verification badge */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-success shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                <CheckCircle2 className="w-10 h-10 text-success-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
