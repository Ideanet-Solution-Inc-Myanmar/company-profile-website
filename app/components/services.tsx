import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, CreditCard, Shield, BarChart3, Wallet, Database } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      features: ["React Native", "Flutter", "Native iOS/Android", "UI/UX Design"],
    },
    {
      icon: CreditCard,
      title: "Payment Solutions",
      description: "Secure payment gateways and processing systems that handle transactions with bank-grade security.",
      features: ["Payment Gateways", "Digital Wallets", "Cryptocurrency", "PCI Compliance"],
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Advanced security measures and regulatory compliance to protect sensitive financial data.",
      features: ["Data Encryption", "Fraud Detection", "KYC/AML", "Regulatory Compliance"],
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics dashboards and reporting tools for data-driven decision making.",
      features: ["Real-time Analytics", "Custom Reports", "Data Visualization", "Business Intelligence"],
    },
    {
      icon: Wallet,
      title: "Digital Banking",
      description: "Complete digital banking solutions including core banking systems and customer portals.",
      features: ["Core Banking", "Online Banking", "Mobile Banking", "Account Management"],
    },
    {
      icon: Database,
      title: "Blockchain Solutions",
      description: "Cutting-edge blockchain and DeFi solutions for modern financial applications.",
      features: ["Smart Contracts", "DeFi Protocols", "NFT Platforms", "Crypto Trading"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive fintech and mobile development services tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
