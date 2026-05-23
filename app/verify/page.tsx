"use client"

import { useState, useEffect } from "react"
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
  Scan,
  Download,
  Share2,
  Copy,
  Check,
  AlertTriangle,
  Clock,
  FileText,
  Award,
  Link2,
  Printer
} from "lucide-react"
import Link from "next/link"

// Mock certificate data - in real app this would come from blockchain/API
const mockCertificates: Record<string, {
  id: string
  studentName: string
  studentNameLao: string
  degree: string
  degreeLao: string
  major: string
  university: string
  universityLao: string
  graduationYear: string
  issueDate: string
  gpa: string
  txHash: string
  blockNumber: string
  status: "valid" | "revoked" | "expired"
  issuedBy: string
  studentPhoto: string
}> = {
  "BCERT-2024-001234": {
    id: "BCERT-2024-001234",
    studentName: "Souphavanh Keomany",
    studentNameLao: "ສຸພາວັນ ແກ້ວມະນີ",
    degree: "Bachelor of Information Technology",
    degreeLao: "ປະລິນຍາຕີ ເຕັກໂນໂລຊີຂໍ້ມູນຂ່າວສານ",
    major: "Software Engineering",
    university: "National University of Laos",
    universityLao: "ມະຫາວິທະຍາໄລແຫ່ງຊາດລາວ",
    graduationYear: "2024",
    issueDate: "June 15, 2024",
    gpa: "3.75",
    txHash: "0x7f4e8c2a1b3d5f6e9a8b7c4d2e1f0a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f",
    blockNumber: "18,234,567",
    status: "valid",
    issuedBy: "Dr. Somphone Vilayvong, Dean of Faculty of Engineering",
    studentPhoto: "/api/placeholder/150/150"
  },
  "BCERT-2024-005678": {
    id: "BCERT-2024-005678",
    studentName: "Khamla Phommachanh",
    studentNameLao: "ຄຳລາ ພົມມະຈັນ",
    degree: "Master of Business Administration",
    degreeLao: "ປະລິນຍາໂທ ບໍລິຫານທຸລະກິດ",
    major: "Finance",
    university: "National University of Laos",
    universityLao: "ມະຫາວິທະຍາໄລແຫ່ງຊາດລາວ",
    graduationYear: "2024",
    issueDate: "May 20, 2024",
    gpa: "3.85",
    txHash: "0x9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f9a8b",
    blockNumber: "18,123,456",
    status: "valid",
    issuedBy: "Dr. Bounmy Soukhavong, Dean of Faculty of Economics",
    studentPhoto: "/api/placeholder/150/150"
  }
}

export default function VerifyPage() {
  const [certificateId, setCertificateId] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [isScanning, setIsScanning] = useState(false)
  const [certificate, setCertificate] = useState<typeof mockCertificates[string] | null>(null)
  const [notFound, setNotFound] = useState(false)
  const [copied, setCopied] = useState(false)

  // Check URL params on load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const id = params.get("id")
    if (id) {
      setCertificateId(id)
      handleSearch(id)
    }
  }, [])

  const handleSearch = (id?: string) => {
    const searchId = id || certificateId
    if (!searchId.trim()) return
    
    setIsSearching(true)
    setNotFound(false)
    setCertificate(null)
    
    // Simulate API call
    setTimeout(() => {
      const found = mockCertificates[searchId.toUpperCase()]
      if (found) {
        setCertificate(found)
      } else {
        setNotFound(true)
      }
      setIsSearching(false)
    }, 1500)
  }

  const handleScan = () => {
    setIsScanning(true)
    // Simulate scanning
    setTimeout(() => {
      setIsScanning(false)
      setCertificateId("BCERT-2024-001234")
      handleSearch("BCERT-2024-001234")
    }, 2000)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "valid": return "text-success bg-success/10 border-success/20"
      case "revoked": return "text-destructive bg-destructive/10 border-destructive/20"
      case "expired": return "text-warning bg-warning/10 border-warning/20"
      default: return "text-muted-foreground bg-muted border-border"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "valid": return <CheckCircle2 className="w-5 h-5" />
      case "revoked": return <AlertTriangle className="w-5 h-5" />
      case "expired": return <Clock className="w-5 h-5" />
      default: return <Shield className="w-5 h-5" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">B-Certs</span>
            </Link>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-success" />
              <span>Blockchain Verified</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Verify Certificate Authenticity
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ກວດສອບໃບຢັ້ງຢືນຜ່ານ Blockchain - Instantly verify any certificate by scanning QR code or entering certificate ID
          </p>
        </div>

        {/* Search Box */}
        <Card className="bg-card border border-border mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Enter certificate ID (e.g., BCERT-2024-001234)" 
                  className="pl-10 h-12 text-base"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>
              <Button 
                className="h-12 px-8 gap-2" 
                onClick={() => handleSearch()}
                disabled={isSearching || !certificateId.trim()}
              >
                {isSearching ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <Shield className="w-4 h-4" />
                    Verify
                  </>
                )}
              </Button>
            </div>

            {/* QR Scanner Option */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-border" />
                <span className="text-sm text-muted-foreground">or scan QR code</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              
              <div className="mt-6 flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 rounded-2xl bg-secondary/50 border-2 border-dashed border-border flex items-center justify-center">
                    {isScanning ? (
                      <div className="text-center">
                        <Scan className="w-12 h-12 text-primary mx-auto animate-pulse" />
                        <p className="mt-2 text-sm text-muted-foreground">Scanning...</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <QrCode className="w-12 h-12 text-muted-foreground mx-auto" />
                        <p className="mt-2 text-sm text-muted-foreground">Camera preview</p>
                      </div>
                    )}
                    
                    {/* Scanner corners */}
                    <div className="absolute top-2 left-2 w-6 h-6 border-t-3 border-l-3 border-primary rounded-tl-lg" />
                    <div className="absolute top-2 right-2 w-6 h-6 border-t-3 border-r-3 border-primary rounded-tr-lg" />
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-b-3 border-l-3 border-primary rounded-bl-lg" />
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-b-3 border-r-3 border-primary rounded-br-lg" />
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="mt-4 w-full gap-2"
                    onClick={handleScan}
                    disabled={isScanning}
                  >
                    <Scan className="w-4 h-4" />
                    {isScanning ? "Scanning..." : "Start Camera"}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Not Found State */}
        {notFound && (
          <Card className="bg-card border-2 border-destructive/20 mb-8">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Certificate Not Found</h3>
              <p className="text-muted-foreground mb-4">
                No certificate found with ID: <code className="px-2 py-1 bg-secondary rounded text-sm">{certificateId}</code>
              </p>
              <p className="text-sm text-muted-foreground">
                Please check the certificate ID and try again. If you believe this is an error, contact the issuing institution.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Certificate Result */}
        {certificate && (
          <div className="space-y-6">
            {/* Status Banner */}
            <Card className={`border-2 ${certificate.status === "valid" ? "border-success bg-success/5" : "border-destructive bg-destructive/5"}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${certificate.status === "valid" ? "bg-success/20" : "bg-destructive/20"}`}>
                      {getStatusIcon(certificate.status)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-xl font-bold text-foreground">
                          {certificate.status === "valid" ? "Certificate Verified" : "Certificate Invalid"}
                        </h2>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(certificate.status)}`}>
                          {certificate.status.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-1">
                        {certificate.status === "valid" 
                          ? "This certificate is authentic and recorded on blockchain"
                          : "This certificate has been revoked or is expired"}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Printer className="w-4 h-4" />
                      Print
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certificate Details */}
            <Card className="bg-card border border-border overflow-hidden">
              <div className="bg-primary/5 border-b border-border p-6">
                <div className="flex items-start gap-6">
                  {/* University Logo Placeholder */}
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-10 h-10 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground">{certificate.degree}</h3>
                    <p className="text-lg text-primary mt-1">{certificate.degreeLao}</p>
                    <p className="text-muted-foreground mt-2">{certificate.university}</p>
                    <p className="text-sm text-muted-foreground">{certificate.universityLao}</p>
                  </div>
                  {/* QR Code */}
                  <div className="hidden sm:block w-24 h-24 rounded-xl bg-card border border-border p-2">
                    <div className="w-full h-full bg-foreground/5 rounded-lg flex items-center justify-center">
                      <QrCode className="w-12 h-12 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Student Info */}
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                        <User className="w-3 h-3" />
                        Student Name
                      </label>
                      <p className="text-lg font-semibold text-foreground mt-1">{certificate.studentName}</p>
                      <p className="text-muted-foreground">{certificate.studentNameLao}</p>
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                        <FileText className="w-3 h-3" />
                        Major
                      </label>
                      <p className="text-foreground font-medium mt-1">{certificate.major}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                        <GraduationCap className="w-3 h-3" />
                        Graduation Year
                      </label>
                      <p className="text-foreground font-medium mt-1">{certificate.graduationYear}</p>
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                        <Award className="w-3 h-3" />
                        GPA
                      </label>
                      <p className="text-foreground font-medium mt-1">{certificate.gpa} / 4.00</p>
                    </div>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="grid sm:grid-cols-2 gap-4 p-4 rounded-xl bg-secondary/30 mb-6">
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                      <Hash className="w-3 h-3" />
                      Certificate ID
                    </label>
                    <div className="flex items-center gap-2 mt-1">
                      <code className="text-sm font-mono text-foreground">{certificate.id}</code>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-6 w-6 p-0"
                        onClick={() => copyToClipboard(certificate.id)}
                      >
                        {copied ? <Check className="w-3 h-3 text-success" /> : <Copy className="w-3 h-3" />}
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      Issue Date
                    </label>
                    <p className="text-foreground font-medium mt-1">{certificate.issueDate}</p>
                  </div>
                </div>

                {/* Blockchain Info */}
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground">Blockchain Verification</h4>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-muted-foreground uppercase tracking-wide">Transaction Hash</label>
                      <div className="flex items-center gap-2 mt-1">
                        <code className="text-xs font-mono text-foreground bg-secondary/50 px-2 py-1 rounded flex-1 truncate">
                          {certificate.txHash}
                        </code>
                        <Button variant="outline" size="sm" className="gap-1 flex-shrink-0">
                          <ExternalLink className="w-3 h-3" />
                          Explorer
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div>
                        <label className="text-xs text-muted-foreground uppercase tracking-wide">Block Number</label>
                        <p className="text-foreground font-mono mt-1">{certificate.blockNumber}</p>
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground uppercase tracking-wide">Network</label>
                        <p className="text-foreground font-medium mt-1">Ethereum Mainnet</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Issued By */}
                <div className="mt-6 pt-6 border-t border-border">
                  <label className="text-xs text-muted-foreground uppercase tracking-wide">Issued By</label>
                  <p className="text-foreground mt-1">{certificate.issuedBy}</p>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1 gap-2">
                <Download className="w-4 h-4" />
                Download Certificate
              </Button>
              <Button variant="outline" className="flex-1 gap-2">
                <Link2 className="w-4 h-4" />
                Copy Verification Link
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-8 py-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-success" />
                Tamper-proof
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-success" />
                Blockchain secured
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-success" />
                Real-time verification
              </div>
            </div>
          </div>
        )}

        {/* Demo Note */}
        <div className="mt-12 p-4 rounded-xl bg-secondary/30 border border-border text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Demo Mode:</strong> Try searching for <code className="px-2 py-0.5 bg-secondary rounded">BCERT-2024-001234</code> or <code className="px-2 py-0.5 bg-secondary rounded">BCERT-2024-005678</code>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            Powered by <Link href="/" className="text-primary hover:underline">B-Certs</Link> - Decentralized Certificate Protocol
          </p>
        </div>
      </footer>
    </div>
  )
}
