"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Shield, 
  GraduationCap,
  Building2,
  Users,
  FileText,
  Plus,
  Search,
  CheckCircle2,
  Clock,
  XCircle,
  MoreHorizontal,
  Eye,
  Download,
  Send,
  ChevronDown,
  LayoutDashboard,
  Settings,
  LogOut,
  Bell,
  Calendar,
  TrendingUp,
  Award,
  Hash,
  Filter,
  Upload,
  UserPlus,
  Edit,
  Trash2,
  RefreshCw,
  ExternalLink,
  Menu,
  X
} from "lucide-react"
import Link from "next/link"

// Mock data for the dashboard
const mockStats = {
  totalCertificates: 12847,
  pendingApprovals: 23,
  issuedThisMonth: 456,
  verificationRequests: 1289
}

const mockCertificates = [
  {
    id: "BCERT-2024-001234",
    studentName: "Souphavanh Keomany",
    studentId: "STU-2020-1234",
    degree: "Bachelor of Information Technology",
    major: "Software Engineering",
    status: "issued",
    issueDate: "2024-06-15",
    txHash: "0x7f4e8c2a...3f"
  },
  {
    id: "BCERT-2024-001235",
    studentName: "Khamla Phommachanh",
    studentId: "STU-2020-1235",
    degree: "Master of Business Administration",
    major: "Finance",
    status: "issued",
    issueDate: "2024-06-14",
    txHash: "0x9a8b7c6d...8b"
  },
  {
    id: "BCERT-2024-001236",
    studentName: "Viengkham Saysana",
    studentId: "STU-2021-2345",
    degree: "Bachelor of Engineering",
    major: "Civil Engineering",
    status: "pending",
    issueDate: null,
    txHash: null
  },
  {
    id: "BCERT-2024-001237",
    studentName: "Phonesavanh Boupha",
    studentId: "STU-2020-3456",
    degree: "Bachelor of Science",
    major: "Computer Science",
    status: "pending",
    issueDate: null,
    txHash: null
  },
  {
    id: "BCERT-2024-001238",
    studentName: "Anousone Thammavong",
    studentId: "STU-2019-4567",
    degree: "Bachelor of Arts",
    major: "English Literature",
    status: "revoked",
    issueDate: "2024-05-20",
    txHash: "0x5e4f3a2b...1c"
  }
]

const mockPendingRequests = [
  {
    id: 1,
    studentName: "Viengkham Saysana",
    degree: "Bachelor of Engineering",
    submittedDate: "2024-06-20",
    documents: 5
  },
  {
    id: 2,
    studentName: "Phonesavanh Boupha",
    degree: "Bachelor of Science",
    submittedDate: "2024-06-19",
    documents: 4
  },
  {
    id: 3,
    studentName: "Somphet Lattana",
    degree: "Master of Science",
    submittedDate: "2024-06-18",
    documents: 6
  }
]

const mockRecentActivity = [
  { action: "Certificate issued", target: "Souphavanh Keomany", time: "2 hours ago", type: "success" },
  { action: "Verification request", target: "BCERT-2024-001234", time: "3 hours ago", type: "info" },
  { action: "New student registered", target: "Bounmy Thongphanh", time: "5 hours ago", type: "info" },
  { action: "Certificate revoked", target: "Anousone Thammavong", time: "1 day ago", type: "warning" },
  { action: "Batch upload completed", target: "45 records", time: "2 days ago", type: "success" }
]

export default function UniversityDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [searchQuery, setSearchQuery] = useState("")
  const [showIssueModal, setShowIssueModal] = useState(false)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "issued":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
            <CheckCircle2 className="w-3 h-3" />
            Issued
          </span>
        )
      case "pending":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-warning/10 text-warning">
            <Clock className="w-3 h-3" />
            Pending
          </span>
        )
      case "revoked":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-destructive/10 text-destructive">
            <XCircle className="w-3 h-3" />
            Revoked
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-200 lg:translate-x-0 lg:static ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-lg font-bold text-foreground">B-Certs</span>
                  <p className="text-xs text-muted-foreground">University Portal</p>
                </div>
              </Link>
              <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            <Button 
              variant={activeTab === "dashboard" ? "secondary" : "ghost"} 
              className="w-full justify-start gap-3"
              onClick={() => setActiveTab("dashboard")}
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </Button>
            <Button 
              variant={activeTab === "certificates" ? "secondary" : "ghost"} 
              className="w-full justify-start gap-3"
              onClick={() => setActiveTab("certificates")}
            >
              <FileText className="w-4 h-4" />
              Certificates
              <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                {mockStats.totalCertificates.toLocaleString()}
              </span>
            </Button>
            <Button 
              variant={activeTab === "students" ? "secondary" : "ghost"} 
              className="w-full justify-start gap-3"
              onClick={() => setActiveTab("students")}
            >
              <Users className="w-4 h-4" />
              Students
            </Button>
            <Button 
              variant={activeTab === "pending" ? "secondary" : "ghost"} 
              className="w-full justify-start gap-3"
              onClick={() => setActiveTab("pending")}
            >
              <Clock className="w-4 h-4" />
              Pending Approvals
              <span className="ml-auto text-xs bg-warning/10 text-warning px-2 py-0.5 rounded-full">
                {mockStats.pendingApprovals}
              </span>
            </Button>
            <Button 
              variant={activeTab === "analytics" ? "secondary" : "ghost"} 
              className="w-full justify-start gap-3"
              onClick={() => setActiveTab("analytics")}
            >
              <TrendingUp className="w-4 h-4" />
              Analytics
            </Button>
            <Button 
              variant={activeTab === "settings" ? "secondary" : "ghost"} 
              className="w-full justify-start gap-3"
              onClick={() => setActiveTab("settings")}
            >
              <Settings className="w-4 h-4" />
              Settings
            </Button>
          </nav>

          {/* University Info */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">National University of Laos</p>
                <p className="text-xs text-muted-foreground">Admin Portal</p>
              </div>
              <Button variant="ghost" size="sm">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-40">
          <div className="px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
                  <Menu className="w-5 h-5" />
                </Button>
                <div>
                  <h1 className="text-xl font-bold text-foreground">
                    {activeTab === "dashboard" && "Dashboard"}
                    {activeTab === "certificates" && "Certificate Management"}
                    {activeTab === "students" && "Student Records"}
                    {activeTab === "pending" && "Pending Approvals"}
                    {activeTab === "analytics" && "Analytics"}
                    {activeTab === "settings" && "Settings"}
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    {activeTab === "dashboard" && "Overview of certificate issuance and verification"}
                    {activeTab === "certificates" && "Manage and issue blockchain certificates"}
                    {activeTab === "students" && "View and manage student records"}
                    {activeTab === "pending" && "Review and approve certificate requests"}
                    {activeTab === "analytics" && "View statistics and reports"}
                    {activeTab === "settings" && "Configure system settings"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className="hidden sm:flex gap-2">
                  <Bell className="w-4 h-4" />
                  <span className="w-2 h-2 rounded-full bg-destructive" />
                </Button>
                <Button className="gap-2" onClick={() => setShowIssueModal(true)}>
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Issue Certificate</span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 overflow-auto">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">{mockStats.totalCertificates.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">Total Certificates</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-warning" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">{mockStats.pendingApprovals}</p>
                        <p className="text-sm text-muted-foreground">Pending Approval</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                        <Award className="w-6 h-6 text-success" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">{mockStats.issuedThisMonth}</p>
                        <p className="text-sm text-muted-foreground">Issued This Month</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-chart-4/10 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-chart-4" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">{mockStats.verificationRequests.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">Verifications</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Recent Certificates */}
                <Card className="lg:col-span-2 bg-card border border-border">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Recent Certificates</CardTitle>
                      <Button variant="ghost" size="sm" onClick={() => setActiveTab("certificates")}>
                        View All
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {mockCertificates.slice(0, 4).map((cert) => (
                        <div key={cert.id} className="flex items-center justify-between p-3 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <GraduationCap className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{cert.studentName}</p>
                              <p className="text-sm text-muted-foreground">{cert.degree}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            {getStatusBadge(cert.status)}
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Pending Approvals */}
                <Card className="bg-card border border-border">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Pending Approvals</CardTitle>
                      <span className="text-xs bg-warning/10 text-warning px-2 py-1 rounded-full">
                        {mockPendingRequests.length} requests
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {mockPendingRequests.map((request) => (
                        <div key={request.id} className="p-3 rounded-xl bg-secondary/30">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <p className="font-medium text-foreground text-sm">{request.studentName}</p>
                              <p className="text-xs text-muted-foreground">{request.degree}</p>
                            </div>
                            <span className="text-xs text-muted-foreground">{request.submittedDate}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">{request.documents} documents</span>
                            <div className="flex gap-1">
                              <Button size="sm" variant="outline" className="h-7 px-2 text-xs">
                                Review
                              </Button>
                              <Button size="sm" className="h-7 px-2 text-xs bg-success hover:bg-success/90">
                                Approve
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card className="bg-card border border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockRecentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/30 transition-colors">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.type === "success" ? "bg-success" :
                          activity.type === "warning" ? "bg-warning" : "bg-primary"
                        }`} />
                        <div className="flex-1">
                          <p className="text-sm text-foreground">
                            <span className="font-medium">{activity.action}</span>
                            <span className="text-muted-foreground"> - {activity.target}</span>
                          </p>
                        </div>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "certificates" && (
            <div className="space-y-6">
              {/* Search and Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search by name, ID, or certificate number..." 
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="gap-2">
                    <Filter className="w-4 h-4" />
                    Filter
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Upload className="w-4 h-4" />
                    Batch Import
                  </Button>
                  <Button className="gap-2" onClick={() => setShowIssueModal(true)}>
                    <Plus className="w-4 h-4" />
                    Issue New
                  </Button>
                </div>
              </div>

              {/* Certificates Table */}
              <Card className="bg-card border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-secondary/50">
                      <tr>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">Certificate ID</th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">Student</th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">Degree</th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">Issue Date</th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockCertificates.map((cert) => (
                        <tr key={cert.id} className="border-t border-border hover:bg-secondary/20">
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <Hash className="w-4 h-4 text-muted-foreground" />
                              <code className="text-sm text-foreground">{cert.id}</code>
                            </div>
                          </td>
                          <td className="p-4">
                            <div>
                              <p className="font-medium text-foreground">{cert.studentName}</p>
                              <p className="text-sm text-muted-foreground">{cert.studentId}</p>
                            </div>
                          </td>
                          <td className="p-4">
                            <div>
                              <p className="text-foreground">{cert.degree}</p>
                              <p className="text-sm text-muted-foreground">{cert.major}</p>
                            </div>
                          </td>
                          <td className="p-4">
                            {getStatusBadge(cert.status)}
                          </td>
                          <td className="p-4 text-sm text-muted-foreground">
                            {cert.issueDate || "-"}
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-1">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Download className="w-4 h-4" />
                              </Button>
                              {cert.status === "pending" && (
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-success">
                                  <Send className="w-4 h-4" />
                                </Button>
                              )}
                              {cert.txHash && (
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <ExternalLink className="w-4 h-4" />
                                </Button>
                              )}
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Pagination */}
                <div className="flex items-center justify-between p-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">Showing 1-5 of {mockStats.totalCertificates.toLocaleString()} certificates</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>Previous</Button>
                    <Button variant="outline" size="sm">Next</Button>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeTab === "pending" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">Review and approve certificate issuance requests from students</p>
                <Button variant="outline" className="gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Refresh
                </Button>
              </div>

              <div className="grid gap-4">
                {mockPendingRequests.map((request) => (
                  <Card key={request.id} className="bg-card border border-border">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl bg-warning/10 flex items-center justify-center">
                            <Clock className="w-7 h-7 text-warning" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground text-lg">{request.studentName}</h3>
                            <p className="text-muted-foreground">{request.degree}</p>
                            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {request.submittedDate}
                              </span>
                              <span className="flex items-center gap-1">
                                <FileText className="w-4 h-4" />
                                {request.documents} documents
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" className="gap-2">
                            <Eye className="w-4 h-4" />
                            Review Documents
                          </Button>
                          <Button variant="outline" className="gap-2 text-destructive hover:text-destructive">
                            <XCircle className="w-4 h-4" />
                            Reject
                          </Button>
                          <Button className="gap-2 bg-success hover:bg-success/90">
                            <CheckCircle2 className="w-4 h-4" />
                            Approve & Issue
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "students" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search students..." className="pl-10" />
                </div>
                <Button className="gap-2">
                  <UserPlus className="w-4 h-4" />
                  Add Student
                </Button>
              </div>

              <Card className="bg-card border border-border">
                <CardContent className="p-8 text-center">
                  <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Student Management</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    View, add, and manage student records. Import student data from your university&apos;s student information system.
                  </p>
                  <div className="flex justify-center gap-3 mt-6">
                    <Button variant="outline" className="gap-2">
                      <Upload className="w-4 h-4" />
                      Import CSV
                    </Button>
                    <Button className="gap-2">
                      <UserPlus className="w-4 h-4" />
                      Add Manually
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-1">Certificates This Year</p>
                    <p className="text-3xl font-bold text-foreground">2,847</p>
                    <p className="text-sm text-success mt-1">+12% from last year</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-1">Verification Rate</p>
                    <p className="text-3xl font-bold text-foreground">94.2%</p>
                    <p className="text-sm text-success mt-1">+5% from last month</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-1">Average Issue Time</p>
                    <p className="text-3xl font-bold text-foreground">2.3 days</p>
                    <p className="text-sm text-success mt-1">-0.5 days improved</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border border-border">
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-1">Active Students</p>
                    <p className="text-3xl font-bold text-foreground">15,420</p>
                    <p className="text-sm text-muted-foreground mt-1">Across all faculties</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle>Certificate Issuance Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    <TrendingUp className="w-16 h-16" />
                  </div>
                  <p className="text-center text-sm text-muted-foreground">Chart visualization would appear here</p>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-6 max-w-2xl">
              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle>Institution Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">Institution Name</label>
                    <Input className="mt-1" defaultValue="National University of Laos" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Institution Name (Lao)</label>
                    <Input className="mt-1" defaultValue="ມະຫາວິທະຍາໄລແຫ່ງຊາດລາວ" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Blockchain Wallet Address</label>
                    <Input className="mt-1 font-mono" defaultValue="0x1234...5678" />
                  </div>
                  <Button className="gap-2">
                    <Settings className="w-4 h-4" />
                    Save Settings
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle>API Configuration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">API Key</label>
                    <div className="flex gap-2 mt-1">
                      <Input className="font-mono" type="password" defaultValue="sk_live_xxxxx" />
                      <Button variant="outline">Regenerate</Button>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Webhook URL</label>
                    <Input className="mt-1" placeholder="https://your-server.com/webhook" />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>

      {/* Issue Certificate Modal */}
      {showIssueModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50">
          <Card className="bg-card border border-border w-full max-w-lg">
            <CardHeader className="border-b border-border">
              <div className="flex items-center justify-between">
                <CardTitle>Issue New Certificate</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setShowIssueModal(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground">Student ID</label>
                <Input className="mt-1" placeholder="STU-2020-XXXX" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Student Name</label>
                <Input className="mt-1" placeholder="Full name" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Degree</label>
                <Input className="mt-1" placeholder="Bachelor of..." />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Major</label>
                <Input className="mt-1" placeholder="Computer Science" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Graduation Year</label>
                <Input className="mt-1" placeholder="2024" />
              </div>
              <div className="flex gap-3 pt-4">
                <Button variant="outline" className="flex-1" onClick={() => setShowIssueModal(false)}>
                  Cancel
                </Button>
                <Button className="flex-1 gap-2">
                  <Send className="w-4 h-4" />
                  Issue to Blockchain
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
