"use client"

import { useEffect } from "react"
import { Loader2 } from "lucide-react"

export default function RequestAppraisalPage() {
  useEffect(() => {
    // Redirect to the APR Dashboard form
    // In production, this would be your custom domain like apply.valta.ca
    window.location.href = "https://apr-dashboard-v2.vercel.app/"
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-900">Redirecting to Appraisal Form...</h2>
        <p className="text-gray-600 mt-2">Taking you to our secure application portal</p>
      </div>
    </div>
  )
}