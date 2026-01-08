import { FileText, FileImage, Award, Shield } from "lucide-react"

const downloads = [
  {
    title: "Product Catalogue",
    description: "Comprehensive guide of all our lighting products",
    icon: FileText,
    file: "catalogue.pdf",
  },
  {
    title: "Installation Guidelines",
    description: "Step-by-step installation and maintenance guide",
    icon: FileImage,
    file: "installation.pdf",
  },
  {
    title: "Certificate",
    description: "ISO and quality certification documents",
    icon: Award,
    file: "certificate.pdf",
  },
  {
    title: "Warranty Policy",
    description: "Complete warranty terms and conditions",
    icon: Shield,
    file: "warranty.pdf",
  },
]

export default function DownloadsSection() {
  return (
    <section id="downloads" className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Downloads</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {downloads.map((item) => {
            const IconComponent = item.icon
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  <button className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-accent transition-colors text-sm font-medium">
                    Download PDF
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
