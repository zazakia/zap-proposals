"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Zap,
  FileText,
  BarChart3,
  Users,
  CheckCircle,
  Code,
  Shield,
  Phone,
  Mail,
  Globe,
  Calendar,
  DollarSign,
  Settings,
  Target,
  Award,
  Briefcase,
} from "lucide-react"

export default function ZapWebApp() {
  const handleDownloadPDF = async () => {
    try {
      const { generatePDF } = await import("@/lib/utils")
      await generatePDF("main-content", "ZapWeb-Services-Proposal.pdf")
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Error generating PDF. Please try again.")
    }
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div id="main-content">
        {/* Header */}
        <header className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-purple-900">ZAPWEB.APP</span>
                <p className="text-xs text-purple-600 font-medium">ZAP INTO ACTION, BUILD FAST, WIN BIG</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#services" className="text-gray-600 hover:text-purple-600 transition-colors">
                Services
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">
                Pricing
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors">
                Contact
              </Link>
              <Button onClick={handleDownloadPDF} className="pdf-button flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Download PDF</span>
              </Button>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="#consultation">Get Started</Link>
              </Button>
            </nav>
          </div>
        </header>

        {/* Hero Section - Condensed */}
        <section className="py-12 px-4">
          <div className="container mx-auto text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-purple-900 mb-2">ZAPWEB.APP</h1>
            <p className="text-purple-600 font-semibold mb-4">ZAP INTO ACTION, BUILD FAST, WIN BIG!</p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-500">Custom Apps</span> That <span className="text-blue-500">Power</span> Your
              Business
            </h2>

            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Since 2007, we've been helping businesses worldwide scale with custom web and mobile apps. Modern, secure,
              and scalable solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" className="consultation-button">
                <Link href="#consultation">Get Free Consultation</Link>
              </Button>
              <Button
                size="lg"
                onClick={handleDownloadPDF}
                className="pdf-button flex items-center space-x-2"
              >
                <FileText className="w-4 h-4" />
                <span>Download PDF</span>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <span>📞 0915-891-8530</span>
              <span>🌐 www.zapweb.app</span>
            </div>
          </div>
        </section>

        {/* Stats - Condensed */}
        <section className="py-8 px-4 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-gray-600">Clients Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">17+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Packages - Condensed */}
        <section id="services" className="py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Service Packages</h2>
              <p className="text-lg text-gray-600">Comprehensive solutions tailored to your business needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Basic Package */}
              <Card className="relative">
                <CardHeader className="text-center pb-3">
                  <Badge className="bg-green-100 text-green-800 mb-2">For Small Businesses</Badge>
                  <CardTitle className="text-xl text-gray-900">Basic Package</CardTitle>
                  <div className="text-2xl font-bold text-blue-600">₱30,000 - ₱50,000</div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Dashboard with essential metrics</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>User registration & management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Product/service catalog</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Basic reporting & 3 months support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Standard Package */}
              <Card className="relative border-blue-200 bg-blue-50">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white text-xs">Most Popular</Badge>
                </div>
                <CardHeader className="text-center pb-3 pt-6">
                  <Badge className="bg-blue-100 text-blue-800 mb-2">For Growing Businesses</Badge>
                  <CardTitle className="text-xl text-gray-900">Standard Package</CardTitle>
                  <div className="text-2xl font-bold text-blue-600">₱60,000 - ₱100,000</div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-gray-600 mb-2">All Basic features plus:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Inventory management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Purchase order management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Multi-user access & 6 months support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Advanced Package */}
              <Card className="relative">
                <CardHeader className="text-center pb-3">
                  <Badge className="bg-purple-100 text-purple-800 mb-2">For Enterprises</Badge>
                  <CardTitle className="text-xl text-gray-900">Advanced Package</CardTitle>
                  <div className="text-2xl font-bold text-blue-600">₱110,000 - ₱200,000+</div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-gray-600 mb-2">All Standard features plus:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Manufacturing/production module</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Accounting integration</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Multi-branch & 12 months support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Project Timeline - Condensed */}
        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Project Timeline</h2>
              <p className="text-lg text-gray-600">~3 months total duration</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  { phase: "Preparation", timeline: "Week 1", icon: Users },
                  { phase: "Design", timeline: "Week 2-3", icon: Code },
                  { phase: "Development", timeline: "Week 4-8", icon: Settings },
                  { phase: "Testing", timeline: "Week 9-10", icon: Shield },
                  { phase: "Go Live", timeline: "Week 11-12", icon: Zap },
                ].map((item, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="p-4">
                      <item.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h3 className="font-semibold text-sm">{item.phase}</h3>
                      <p className="text-xs text-gray-600">{item.timeline}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & Payment Terms - Condensed */}
        <section id="pricing" className="py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Pricing & Payment Terms</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Payment Terms */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span>Payment Terms</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                      <div>
                        <h4 className="font-semibold text-sm">Down Payment</h4>
                        <p className="text-xs text-green-700">Upon project start</p>
                      </div>
                      <div className="text-xl font-bold text-green-600">30%</div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                      <div>
                        <h4 className="font-semibold text-sm">Midway Payment</h4>
                        <p className="text-xs text-blue-700">After development</p>
                      </div>
                      <div className="text-xl font-bold text-blue-600">30%</div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded">
                      <div>
                        <h4 className="font-semibold text-sm">Final Payment</h4>
                        <p className="text-xs text-purple-700">Upon completion</p>
                      </div>
                      <div className="text-xl font-bold text-purple-600">40%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Monthly Support */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span>Monthly Support</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <h4 className="font-semibold text-sm">Basic & Standard</h4>
                        <p className="text-xs text-gray-600">Essential hosting</p>
                      </div>
                      <div className="text-lg font-bold text-blue-600">₱500/month</div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <h4 className="font-semibold text-sm">Advanced</h4>
                        <p className="text-xs text-gray-600">Premium hosting</p>
                      </div>
                      <div className="text-lg font-bold text-blue-600">₱1,000-5,000/month</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded text-xs">
                      <p>
                        <strong>Support:</strong> FREE online/call support within SLA
                      </p>
                      <p>
                        <strong>Onsite:</strong> ₱5,000 + travel costs
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Add-ons - Condensed */}
        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Add-ons & Upgrades</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "SMS/Email Notifications", price: "₱10,000 - ₱30,000", icon: Mail },
                { title: "CRM Module", price: "₱30,000 - ₱60,000", icon: Users },
                { title: "Accounting Integration", price: "₱50,000 - ₱120,000", icon: BarChart3 },
                { title: "AI Analytics/Chatbot", price: "₱30,000 - ₱100,000", icon: Zap },
                { title: "API Integrations", price: "₱50,000 - ₱150,000", icon: Settings },
                { title: "Additional Branch", price: "₱3,500/branch", icon: Target },
              ].map((addon, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-4">
                    <addon.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-sm mb-1">{addon.title}</h3>
                    <div className="text-sm font-bold text-blue-600">{addon.price}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Condensed */}
        <section id="contact" className="py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-900">ZAPWEB.APP</h3>
                    <p className="text-sm text-purple-600 font-semibold">ZAP INTO ACTION, BUILD FAST, WIN BIG!</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-sm text-gray-600">📞 0915-891-8530</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-blue-600" />
                    <div>
                      <h4 className="font-semibold">Website</h4>
                      <p className="text-sm text-gray-600">🌐 www.zapweb.app</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    <div>
                      <h4 className="font-semibold">Solutions Analyst</h4>
                      <p className="text-sm text-gray-600">Brayan Lee A. Bautista</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded">
                  <h4 className="font-semibold text-blue-900 mb-2">Why Choose ZapWeb.App?</h4>
                  <ul className="space-y-1 text-sm">
                    <li>✓ 17+ years proven experience</li>
                    <li>✓ 100+ successful projects</li>
                    <li>✓ 98% client satisfaction</li>
                    <li>✓ Modern, secure solutions</li>
                  </ul>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Ready to Get Started?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">
                      Contact us for a free consultation and custom quote for your project.
                    </p>
                    <div className="space-y-3">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Free Consultation
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        <Phone className="w-4 h-4 mr-2" />
                        Call 0915-891-8530
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer - Minimal */}
        <footer className="bg-gray-900 text-white py-8 px-4">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">ZAPWEB.APP</span>
            </div>
            <p className="text-sm text-gray-400">
              &copy; 2024 ZapWeb.App. All rights reserved. | Zap into action, build fast, Win BIG!
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
