"use client"

import { ArrowRight, Clock, Shield, CheckCircle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function RequestAppraisalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Commercial Property Appraisal Request
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your professional property appraisal started in minutes. 
            Our streamlined process delivers peer-reviewed appraisals in 2-3 weeks.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle className="text-lg">1. Submit Request</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Complete our simple online form with your property details
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle className="text-lg">2. Review & Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Receive a detailed quote and timeline within 24 hours
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle className="text-lg">3. Get Appraisal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Receive your peer-reviewed appraisal report in 2-3 weeks
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Benefits */}
        <Card className="max-w-3xl mx-auto mb-12">
          <CardHeader>
            <CardTitle>Why Choose Valta Appraisals?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-gray-700">
                  <strong>Fast Turnaround:</strong> 2-3 weeks vs industry standard 4-6 weeks
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-gray-700">
                  <strong>Peer Reviewed:</strong> Every appraisal undergoes rigorous quality review
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-gray-700">
                  <strong>Transparent Pricing:</strong> Clear quotes with no hidden fees
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-gray-700">
                  <strong>Expert Team:</strong> Certified appraisers with local market expertise
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-6">
              Our secure online application takes just 5 minutes to complete
            </p>
            
            {/* This links to your APR Dashboard form */}
            <a 
              href="https://apr-dashboard-v2.vercel.app/"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-11 px-8"
            >
              Start Your Appraisal Request
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>

            <p className="text-sm text-gray-500 mt-4">
              <Clock className="inline h-4 w-4 mr-1" />
              Average completion time: 5 minutes
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Trusted by 200+ property investors and lenders across Western Canada
          </p>
        </div>
      </div>
    </div>
  )
}