import { sampleProposals } from "@/lib/sample-data"

export const generateStaticParams = () => {
  return sampleProposals.map((proposal) => ({
    id: proposal.id,
  }))
}

export const getProposalById = (id: string) => {
  return sampleProposals.find(p => p.id === id) || null
}

export default { generateStaticParams, getProposalById } 