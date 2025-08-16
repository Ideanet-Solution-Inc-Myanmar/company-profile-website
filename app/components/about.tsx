import { Card, CardContent } from "@/components/ui/card"
import { Users, Clock, TrendingUp } from "lucide-react"

export function About() {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Clock, value: "12+", label: "Years Experience" },
    { icon: TrendingUp, value: "99%", label: "Success Rate" },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Ideanet Solution Inc.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading technology company specializing in fintech and mobile development solutions. At Ideanet, we
            believe that great ideas deserve exceptional technological implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Where Innovation Meets Implementation</h3>
            <p className="text-gray-600 leading-relaxed">
              Since our founding, Ideanet Solution Inc. has been dedicated to transforming visionary ideas into
              practical, scalable technology solutions. Our expertise spans fintech innovation, mobile application
              development, and comprehensive digital transformation services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We pride ourselves on being the bridge between creative ideation and technical execution, helping
              businesses turn their most ambitious concepts into market-ready solutions that drive growth and success.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">ISO 27001 Certified Security Standards</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700">PCI DSS Compliant Payment Processing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">24/7 Technical Support & Maintenance</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Our Technology Expertise</h4>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-blue-600 font-bold text-lg">KMP</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900">Kotlin Multiplatform</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-purple-600 font-bold text-lg">AF</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900">Apache Fineract</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-green-600 font-bold text-lg">NG</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900">Angular</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-orange-600 font-bold text-lg">SB</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900">Spring Boot</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h5 className="font-semibold text-gray-900 mb-3">Why Choose Ideanet?</h5>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      Proven track record in microfinance solutions
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                      Cross-platform mobile expertise
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                      End-to-end project delivery
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                      Agile development methodology
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-4">
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto" />
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
