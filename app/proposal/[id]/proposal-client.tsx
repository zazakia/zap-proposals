"use client"

import { useState } from "react"
import ProposalTemplate from "./template"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Eye, Clock, CheckCircle } from "lucide-react"

type ProposalStatus = "sent" | "viewed"

interface Proposal {
  id: string
  title: string
  client_company: string
  client_contact: string
  client_email: string
  client_industry: string
  description: string
  pricing_data: Array<{
    id: string
    description: string
    quantity: number
    rate: number
    amount: number
  }>
  terms_conditions: string
  expiration_date: string
  status: ProposalStatus
  created_at: string
  view_count: number
}

interface ProposalClientProps {
  proposal: Proposal
}

export default function ProposalClient({ proposal: initialProposal }: ProposalClientProps) {
  const [proposal, setProposal] = useState(initialProposal)
  const [accepting, setAccepting] = useState(false)

  const handleDownloadPDF = async () => {
    try {
      const { generatePDF } = await import("@/lib/utils")
      await generatePDF("proposal-content", `Proposal-${proposal?.client_company || 'Document'}.pdf`)
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Error generating PDF. Please try again.")
    }
  }

  const handleAcceptProposal = async () => {
    if (!proposal) return
    
    setAccepting(true)
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      setProposal({ ...proposal, status: "viewed" })
      alert("Proposal accepted successfully! (Demo mode)")
    } catch (error) {
      console.error("Error accepting proposal:", error)
      alert("Error accepting proposal. Please try again.")
    } finally {
      setAccepting(false)
    }
  }

  const getStatusIcon = (status: ProposalStatus) => {
    switch (status) {
      case "viewed":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "sent":
        return <Eye className="w-4 h-4 text-blue-600" />
      default:
        return <Clock className="w-4 h-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: ProposalStatus) => {
    switch (status) {
      case "viewed":
        return "bg-green-100 text-green-800"
      case "sent":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with actions */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="text-xl font-bold text-gray-900">{proposal.title}</h1>
                <p className="text-gray-600">{proposal.client_company}</p>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusIcon(proposal.status)}
                <Badge className={getStatusColor(proposal.status)}>
                  {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
                </Badge>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button size="sm" onClick={handleDownloadPDF} className="pdf-button">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              
              {proposal.status === "sent" && (
                <Button 
                  size="sm" 
                  onClick={handleAcceptProposal}
                  disabled={accepting}
                  className="bg-green-600 hover:bg-green-700"
                >
                  {accepting ? "Accepting..." : "Accept Proposal"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 max-w-6xl mx-auto">
        <div id="proposal-content">
          <ProposalTemplate proposal={proposal} />
        </div>

        {/* Action Buttons - keep existing logic */}
        {proposal.status === "viewed" && (
          <Card className="mt-8 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Proposal Viewed
              </CardTitle>
              <CardDescription className="text-green-700">
                This proposal has been viewed. Thank you for your interest!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-green-700">
                Next steps: Our team will reach out to you within 24 hours to discuss your needs.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
} 