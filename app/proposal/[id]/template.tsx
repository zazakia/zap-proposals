import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Zap, Code, Database, Shield, Smartphone } from "lucide-react"

interface ProposalTemplateProps {
  proposal: any
}

export default function ProposalTemplate({ proposal }: ProposalTemplateProps) {
  // Add safety check for proposal data
  if (!proposal || typeof proposal !== 'object') {
    console.error('Invalid proposal data in template:', proposal)
    return (
      <div className="p-8 text-center">
        <h1 className="text-xl font-bold text-red-600">Error: Invalid proposal data</h1>
        <p className="text-gray-600 mt-2">Unable to render proposal template</p>
      </div>
    )
  }

  const getPackageFeatures = (packageType: string) => {
    const features = {
      basic: [
        "Dashboard with essential metrics",
        "User registration & management",
        "Product/service catalog management",
        "Simple sales/orders module",
        "Basic reporting (daily, monthly summaries)",
        "Responsive web design",
        "3 months free support",
      ],
      standard: [
        "All Basic Package features",
        "Inventory management module",
        "Purchase order management",
        "Payment records and invoicing",
        "Multi-user role-based access",
        "Customizable reporting and data exports",
        "SMS/Email notifications integration",
        "Expiration date reminders",
        "6 months free support",
      ],
      advanced: [
        "All Standard Package features",
        "Manufacturing/production module",
        "Full accounting module integration",
        "Advanced analytics and dashboards",
        "CRM integration for customer management",
        "API integrations with ERP/third-party systems",
        "Multi-branch/location management",
        "Data backup redundancy and disaster recovery",
        "Payroll module",
        "12 months free support",
      ],
    }
    return features[packageType as keyof typeof features] || features.basic
  }

  const getPackageType = () => {
    try {
      const total = proposal?.pricing_data?.reduce((sum: number, item: any) => sum + (item?.amount || 0), 0) || 0
      if (total >= 110000) return "advanced"
      if (total >= 60000) return "standard"
      return "basic"
    } catch (error) {
      console.error('Error calculating package type:', error)
      return "basic"
    }
  }

  const packageType = getPackageType()
  const features = getPackageFeatures(packageType)

  return (
    <div className="space-y-8">
      {/* Header with ZapWeb.App Branding */}
      <Card>
        <CardContent className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-purple-900">ZapProposals</h1>
                <p className="text-purple-600 font-medium">Send better proposals. Close more deals.</p>
                <p className="text-sm text-gray-600">Professional Web Development Proposals</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Web Application Development Proposal</p>
              <p className="text-sm text-gray-600">Prepared for: {proposal.client_company}</p>
              <p className="text-sm text-gray-600">Date: {new Date(proposal.created_at).toLocaleDateString()}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="text-purple-900">1. INTRODUCTION</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed mb-4">
            In today's dynamic and competitive environment, digital solutions are critical to streamlining operations,
            enhancing customer experience, and enabling business growth. At <strong>ZapProposals</strong>, we specialize
            in crafting <strong>customized web applications</strong> that align with your business goals and workflows.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are pleased to present this proposal for the design, development, and implementation of a web application
            tailored to your requirements.
          </p>
        </CardContent>
      </Card>

      {/* Project Scope */}
      <Card>
        <CardHeader>
          <CardTitle className="text-purple-900">2. PROJECT SCOPE</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>Design, development, and deployment of responsive web application</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>User access control and authentication</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>Integration with existing workflows and third-party systems</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>User training and post-deployment support</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Proposed System Features */}
      <Card>
        <CardHeader>
          <CardTitle className="text-purple-900">3. PROPOSED SYSTEM FEATURES</CardTitle>
          <CardDescription>
            <Badge className="bg-purple-100 text-purple-800 capitalize">
              {packageType} Package - Perfect for {proposal.client_industry || "your business"}
            </Badge>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Project Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="text-purple-900">4. PROJECT TIMELINE</CardTitle>
          <CardDescription>Estimated Total Duration: ~3 months (subject to final scoping)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                phase: "1. Preparation",
                activities: "Kick-off meeting, requirement gathering",
                timeline: "Week 1",
                icon: Users,
              },
              {
                phase: "2. Design & Blueprint",
                activities: "Wireframes, database and workflow design",
                timeline: "Week 2-3",
                icon: Code,
              },
              {
                phase: "3. Development",
                activities: "Coding, internal QA, module integrations",
                timeline: "Week 4-8",
                icon: Database,
              },
              {
                phase: "4. Testing & Training",
                activities: "UAT, user training, final revisions",
                timeline: "Week 9-10",
                icon: Shield,
              },
              {
                phase: "5. Go Live & Support",
                activities: "Deployment, monitoring, project closure",
                timeline: "Week 11-12",
                icon: Zap,
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <item.icon className="w-8 h-8 text-purple-600" />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{item.phase}</h4>
                  <p className="text-sm text-gray-600">{item.activities}</p>
                </div>
                <Badge variant="outline">{item.timeline}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Technology Stack */}
      <Card>
        <CardHeader>
          <CardTitle className="text-purple-900">5. TECHNOLOGY STACK</CardTitle>
          <CardDescription>Modern, secure, and scalable technologies</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold">Frontend</h4>
              <p className="text-sm text-gray-600">React, Next.js, Tailwind CSS</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Database className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold">Backend</h4>
              <p className="text-sm text-gray-600">Node.js, PostgreSQL</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold">Security</h4>
              <p className="text-sm text-gray-600">SSL, Authentication, RLS</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Smartphone className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <h4 className="font-semibold">Deployment</h4>
              <p className="text-sm text-gray-600">Vercel, Cloud Hosting</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Support & Maintenance */}
      <Card>
        <CardHeader>
          <CardTitle className="text-purple-900">6. SUPPORT & MAINTENANCE</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Included Support</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Online/Call Support (FREE within SLA)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Bug fixes and minor adjustments</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">System monitoring and maintenance</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Monthly Hosting & Support</h4>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span className="text-sm">Basic & Standard:</span>
                  <Badge>₱500/month</Badge>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm">Advanced:</span>
                  <Badge>₱1,000-5,000/month</Badge>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm">Onsite Visit:</span>
                  <Badge>₱5,000 + travel</Badge>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
