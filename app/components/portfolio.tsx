import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export function Portfolio() {
  const projects = [
    {
      title: "Mifos Web Application",
      description:
        "Complete web-based microfinance management system built with Apache Fineract core banking platform for comprehensive financial institution operations.",
      image: "/images/mifos-web-app.png",
      tags: ["Angular", "Apache Fineract", "Spring Boot", "MySQL"],
      category: "Web Application",
    },
    {
      title: "Mifos Mobile Banking",
      description:
        "Native mobile banking application for clients to access their accounts, make transactions, and manage their financial services on the go.",
      image: "/images/mifos-mobile-banking-app.png",
      tags: ["Kotlin Multiplatform", "REST API", "Biometric Auth", "Offline Support"],
      category: "Mobile Banking",
    },
    {
      title: "Mifos Field Officer App",
      description:
        "Mobile application for field officers to manage client onboarding, loan applications, and collection activities in remote areas.",
      image: "/images/mifos-field-officer-app.png",
      tags: ["Kotlin Multiplatform", "Offline Sync", "GPS Tracking", "Document Scanner"],
      category: "Field Operations",
    },
    {
      title: "Mifos Payment Gateway",
      description:
        "Integrated payment processing system supporting mobile money, bank transfers, and digital wallet transactions.",
      image: "/images/mifos-payment-gateway.webp",
      tags: ["Kotlin Multiplatform", "Payment APIs", "Webhook Integration", "Security"],
      category: "Payment Solutions",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Mifos Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive microfinance and digital banking solutions built on Apache Fineract and Mifos platform,
            empowering financial institutions worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-contain bg-gray-50 p-2 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-3 pt-4 mt-auto">
                  <Link href="#contact">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Request Demo
                    </Button>
                  </Link>
                  <Button size="sm" variant="ghost">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
