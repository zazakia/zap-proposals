"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Plus, Trash2, Zap } from "lucide-react"
import Link from "next/link"

interface ServiceItem {
  name: string
  description: string
  price: number
}

export default function NewProposal() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    project_title: "",
    client_company: "",
    client_contact: "",
    client_email: "",
    project_description: "",
    duration: "",
    package_type: "basic"
  })
  const [services, setServices] = useState<ServiceItem[]>([
    { name: "Website Development", description: "Custom responsive website", price: 50000 },
    { name: "Database Setup", description: "Database design and implementation", price: 15000 }
  ])

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const addService = () => {
    setServices(prev => [...prev, { name: "", description: "", price: 0 }])
  }

  const updateService = (index: number, field: keyof ServiceItem, value: string | number) => {
    setServices(prev => prev.map((service, i) => 
      i === index ? { ...service, [field]: value } : service
    ))
  }

  const removeService = (index: number) => {
    setServices(prev => prev.filter((_, i) => i !== index))
  }

  const calculateTotal = () => {
    return services.reduce((total, service) => total + service.price, 0)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // For demo purposes, just show success and redirect
      alert("Proposal created successfully! (Demo mode)")
      router.push("/dashboard")
    } catch (error) {
      console.error("Error creating proposal:", error)
      alert("Error creating proposal. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Header */}
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.zapweb.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">ZapProposals</span>
              </a>
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/dashboard" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Dashboard
                </Link>
                <a 
                  href="https://www.zapweb.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Home
                </a>
              </nav>
            </div>
            
            <Link href="/dashboard" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Create New Proposal</h1>
          <p className="text-gray-600 mt-2">Build a professional proposal for your client</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Project Information */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Project Information</CardTitle>
              <CardDescription>Basic details about the project and client</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="project_title">Project Title</Label>
                  <Input
                    id="project_title"
                    value={formData.project_title}
                    onChange={(e) => handleInputChange("project_title", e.target.value)}
                    placeholder="E-commerce Website Development"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="client_company">Client Company</Label>
                  <Input
                    id="client_company"
                    value={formData.client_company}
                    onChange={(e) => handleInputChange("client_company", e.target.value)}
                    placeholder="ABC Corporation"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="client_contact">Contact Person</Label>
                  <Input
                    id="client_contact"
                    value={formData.client_contact}
                    onChange={(e) => handleInputChange("client_contact", e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="client_email">Contact Email</Label>
                  <Input
                    id="client_email"
                    type="email"
                    value={formData.client_email}
                    onChange={(e) => handleInputChange("client_email", e.target.value)}
                    placeholder="john@abccorp.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="project_description">Project Description</Label>
                <Textarea
                  id="project_description"
                  value={formData.project_description}
                  onChange={(e) => handleInputChange("project_description", e.target.value)}
                  placeholder="Detailed description of the project requirements..."
                  rows={4}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="duration">Project Duration</Label>
                  <Input
                    id="duration"
                    value={formData.duration}
                    onChange={(e) => handleInputChange("duration", e.target.value)}
                    placeholder="4-6 weeks"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="package_type">Package Type</Label>
                  <Select 
                    value={formData.package_type} 
                    onValueChange={(value) => handleInputChange("package_type", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic</SelectItem>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Services & Pricing</CardTitle>
                  <CardDescription>Add services and their pricing details</CardDescription>
                </div>
                <Button type="button" variant="outline" onClick={addService}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Service
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-medium">Service {index + 1}</h4>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeService(index)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label>Service Name</Label>
                        <Input
                          value={service.name}
                          onChange={(e) => updateService(index, "name", e.target.value)}
                          placeholder="Website Development"
                          required
                        />
                      </div>
                      <div>
                        <Label>Description</Label>
                        <Input
                          value={service.description}
                          onChange={(e) => updateService(index, "description", e.target.value)}
                          placeholder="Custom responsive website"
                          required
                        />
                      </div>
                      <div>
                        <Label>Price (PHP)</Label>
                        <Input
                          type="number"
                          value={service.price || ""}
                          onChange={(e) => updateService(index, "price", parseInt(e.target.value) || 0)}
                          placeholder="50000"
                          required
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total Project Cost:</span>
                  <span className="text-green-600">₱{calculateTotal().toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <Link href="/dashboard">
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Link>
            <Button type="submit" disabled={loading}>
              {loading ? "Creating Proposal..." : "Create Proposal"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
