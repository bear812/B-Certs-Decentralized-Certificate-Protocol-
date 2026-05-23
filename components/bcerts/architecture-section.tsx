import { Monitor, Server, Blocks, Database, Globe, Wallet, FileJson, Shield, Cpu, Cloud } from "lucide-react"

const layers = [
  {
    title: "Frontend Layer",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    items: [
      { icon: Monitor, label: "Next.js / React" },
      { icon: Globe, label: "Responsive UI" },
      { icon: Wallet, label: "Wallet Connection" },
      { icon: Shield, label: "Public Verification Portal" }
    ]
  },
  {
    title: "Backend & Storage",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    items: [
      { icon: Database, label: "PostgreSQL / Supabase" },
      { icon: Server, label: "User Profiles & HR System" },
      { icon: FileJson, label: "Certificate Metadata" },
      { icon: Cloud, label: "IPFS / Arweave Storage" }
    ]
  },
  {
    title: "Blockchain Layer",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    items: [
      { icon: Cpu, label: "Smart Contracts" },
      { icon: Blocks, label: "Soulbound NFT Certificates" },
      { icon: Shield, label: "ERC-721 / ERC-1155" },
      { icon: Globe, label: "On-chain Verification" }
    ]
  }
]

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            System Architecture
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A modern, scalable infrastructure built for security and performance.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection lines - visible on lg+ */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="rgb(16, 185, 129)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {layers.map((layer, layerIndex) => (
              <div
                key={layerIndex}
                className={`relative rounded-2xl border-2 ${layer.borderColor} ${layer.bgColor} p-6 backdrop-blur-sm`}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${layer.color} opacity-5`} />
                
                {/* Layer header */}
                <div className="relative">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${layer.color} text-white text-sm font-medium mb-6`}>
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    Layer {layerIndex + 1}
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-6">{layer.title}</h3>
                  
                  <div className="space-y-3">
                    {layer.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-border/50 hover:bg-card transition-colors"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${layer.color} flex items-center justify-center`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Connection indicator */}
                {layerIndex < layers.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <div className="w-2 h-2 rounded-full bg-white animate-ping" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Tech Stack */}
        <div className="mt-16 p-8 rounded-2xl bg-card border border-border">
          <h3 className="text-lg font-semibold text-foreground text-center mb-8">Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              "React",
              "Next.js",
              "TailwindCSS",
              "Node.js",
              "PostgreSQL",
              "Ethereum",
              "Polygon",
              "IPFS"
            ].map((tech, index) => (
              <div
                key={index}
                className="px-4 py-3 rounded-xl bg-secondary text-center text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
