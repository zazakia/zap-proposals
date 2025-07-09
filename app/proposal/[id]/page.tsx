import { sampleProposals } from "@/lib/sample-data"
import ProposalClient from "./proposal-client"
import { notFound } from "next/navigation"
import { Metadata } from "next"

export function generateStaticParams() {
  return sampleProposals.map((proposal) => ({
    id: proposal.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const proposal = sampleProposals.find(p => p.id === id)
  return {
    title: proposal ? `${proposal.title} - Proposal` : "Proposal Not Found",
  }
}

export default async function ProposalPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const proposal = sampleProposals.find(p => p.id === id)

  if (!proposal) {
    notFound()
  }

  // Add safety check for proposal data
  if (!proposal || typeof proposal !== 'object') {
    console.error('Invalid proposal data:', proposal)
    notFound()
  }

  return <ProposalClient proposal={proposal} />
}
