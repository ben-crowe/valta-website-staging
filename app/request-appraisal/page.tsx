"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, Shield, Users, Phone, FileText, Search, BarChart3 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RequestAppraisalPage() {
  const [showExistingClientForm, setShowExistingClientForm] = useState(false)
  const [showNewClientForm, setShowNewClientForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
  const [newClientData, setNewClientData] = useState({
    companyName: "",
    name: "",
    email: "",
    phone: "",
  })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    propertyAddress: "",
    description: "",
    timeline: "standard",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // Here you would typically redirect to a success page or show success message
      alert("Request submitted successfully! We'll contact you within 24 hours.")
    }, 2000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleLoginChange = (field: string, value: string) => {
    setLoginData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNewClientChange = (field: string, value: string) => {
    setNewClientData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-slate-900">
                Get Your Commercial Appraisal Started
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
                Professional property valuations delivered in 2-3 weeks, not 4-6. Get started with a quick consultation.
              </p>
              <div className="flex items-center justify-center gap-2 text-slate-500">
                <Shield className="h-5 w-5" />
                <span className="text-lg">Trusted by 200+ property investors and lenders across Western Canada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Path Selection Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Choose Your Path
            </h2>
            <div className="grid gap-8 lg:grid-cols-2 max-w-5xl w-full">
              {/* Existing Clients Card */}
              <Card className="border-2 border-blue-200 bg-blue-50/50">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-slate-900">Welcome Back</CardTitle>
                  <p className="text-slate-600">
                    Access your client portal to place new appraisals, track order status, and view completed reports
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-slate-600">Track appraisal progress</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-slate-600">Download reports</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-slate-600">Place rush orders</span>
                    </li>
                  </ul>
                  <div className="space-y-3">
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
                      onClick={() => setShowExistingClientForm(!showExistingClientForm)}
                    >
                      Access Your Account
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>

                    {/* Existing Client Login Form */}
                    {showExistingClientForm && (
                      <div className="mt-4 p-4 bg-white rounded-lg border animate-in slide-in-from-top duration-300">
                        <form className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="existing-email">Email/Username</Label>
                            <Input
                              id="existing-email"
                              type="email"
                              value={loginData.email}
                              onChange={(e) => handleLoginChange("email", e.target.value)}
                              placeholder="your@email.com"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="existing-password">Password</Label>
                            <Input
                              id="existing-password"
                              type="password"
                              value={loginData.password}
                              onChange={(e) => handleLoginChange("password", e.target.value)}
                              placeholder="Enter your password"
                              required
                            />
                          </div>
                          <Button
                            type="button"
                            className="w-full bg-blue-600 hover:bg-blue-700"
                            onClick={() => {
                              // For testing purposes, navigate to intake form
                              alert("Would navigate to intake form")
                            }}
                          >
                            Access Intake Form
                          </Button>
                          <Link
                            href="/forgot-password"
                            className="block text-sm text-blue-600 hover:underline text-center"
                          >
                            Forgot password?
                          </Link>
                          <p className="text-xs text-slate-500 text-center">
                            Takes you directly to the appraisal submission form
                          </p>
                        </form>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* New Clients Card */}
              <Card className="border-2 border-slate-200 hover:border-slate-300 transition-colors">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-slate-900">Start Your First Appraisal</CardTitle>
                  <p className="text-slate-600">
                    Tell us about your property and we'll get you started with our streamlined process
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-slate-600" />
                      <span className="text-slate-600">Same day response guarantee</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-slate-600" />
                      <span className="text-slate-600">Personalized consultation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-slate-600" />
                      <span className="text-slate-600">Client portal access</span>
                    </li>
                  </ul>
                  <div className="space-y-3">
                    <Button
                      className="w-full bg-slate-900 hover:bg-slate-800 text-lg py-6"
                      onClick={() => setShowNewClientForm(!showNewClientForm)}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>

                    {/* New Client Form */}
                    {showNewClientForm && (
                      <div className="mt-4 p-4 bg-white rounded-lg border animate-in slide-in-from-top duration-300">
                        <form className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="company-name">
                              Company Name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="company-name"
                              value={newClientData.companyName}
                              onChange={(e) => handleNewClientChange("companyName", e.target.value)}
                              placeholder="Your company name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="new-name">
                              Your Name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="new-name"
                              value={newClientData.name}
                              onChange={(e) => handleNewClientChange("name", e.target.value)}
                              placeholder="Your full name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="new-email">
                              Email <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="new-email"
                              type="email"
                              value={newClientData.email}
                              onChange={(e) => handleNewClientChange("email", e.target.value)}
                              placeholder="your@email.com"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="new-phone">
                              Phone <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="new-phone"
                              type="tel"
                              value={newClientData.phone}
                              onChange={(e) => handleNewClientChange("phone", e.target.value)}
                              placeholder="(403) 555-0123"
                              required
                            />
                          </div>
                          <Button
                            type="button"
                            className="w-full bg-slate-900 hover:bg-slate-800"
                            onClick={() => {
                              // For testing purposes, navigate to intake form
                              alert("Would navigate to intake form")
                            }}
                          >
                            Continue to Intake Form
                          </Button>
                          <p className="text-xs text-slate-500 text-center">
                            We'll create your account and take you to the full submission form
                          </p>
                        </form>
                      </div>
                    )}

                    <p className="text-sm text-slate-500">We'll create your client account during this process</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Preview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              See How Easy It Is To Work With Us
            </h2>

            {/* Large centered mockup */}
            <div className="max-w-4xl w-full">
              <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-3 w-3 rounded-full bg-red-400"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                      <div className="h-3 w-3 rounded-full bg-green-400"></div>
                      <div className="flex-1 bg-slate-100 rounded-full h-8 flex items-center px-4">
                        <span className="text-sm text-slate-600">valta.app/intake-form</span>
                      </div>
                    </div>
                    <div className="text-left space-y-3">
                      <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                      <div className="h-3 bg-slate-100 rounded w-2/3"></div>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="h-10 bg-blue-50 border-2 border-blue-200 rounded"></div>
                        <div className="h-10 bg-slate-50 border rounded"></div>
                      </div>
                      <div className="h-20 bg-slate-50 border rounded mt-4"></div>
                      <div className="flex gap-2 mt-4">
                        <div className="h-8 w-24 bg-blue-600 rounded"></div>
                        <div className="h-8 w-20 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xl text-slate-600 max-w-3xl">
              No phone tag. No back-and-forth emails. Submit all your property details in one organized form.
            </p>

            {/* 3-column benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full mt-12">
              <div className="text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Upload Documents Directly</h3>
                <p className="text-slate-600">Drag and drop property docs, photos, surveys</p>
              </div>
              <div className="text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Track Progress Real-Time</h3>
                <p className="text-slate-600">Know exactly where your appraisal stands</p>
              </div>
              <div className="text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Automated Updates</h3>
                <p className="text-slate-600">Email notifications at each milestone</p>
              </div>
            </div>

            {/* Social proof callout */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg max-w-4xl w-full">
              <p className="text-blue-800 font-semibold text-lg">
                "Our clients love the streamlined process - no more 20-question phone calls"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Building Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Why Property Professionals Choose Us
            </h2>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Developer Experience</h3>
                <p className="text-slate-600 mb-4">
                  Built by developers who understand your timeline pressures and financing requirements
                </p>
                <ul className="text-left space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-blue-600" />
                    <span>Real-world development experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-blue-600" />
                    <span>Understanding of financing deadlines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-blue-600" />
                    <span>Proforma validation expertise</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Guaranteed Delivery</h3>
                <p className="text-slate-600 mb-4">
                  2-3 week turnaround with real-time progress tracking through your portal
                </p>
                <ul className="text-left space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-blue-600" />
                    <span>Firm delivery commitments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-blue-600" />
                    <span>Real-time progress updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-blue-600" />
                    <span>Rush options available</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Lender Acceptance</h3>
                <p className="text-slate-600 mb-4">
                  AACI certified reports accepted by all major lenders and institutions
                </p>
                <ul className="text-left space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-blue-600" />
                    <span>AACI certified professionals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-blue-600" />
                    <span>Bank-ready reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-blue-600" />
                    <span>Institutional standards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Our Streamlined Process
            </h2>
          </div>
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">Submit Request</h3>
                  <p className="text-slate-600 text-sm">
                    Initial property details and consultation to understand your needs
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">24-Hour Response</h3>
                  <p className="text-slate-600 text-sm">
                    Scope confirmation and detailed fee quote with delivery timeline
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <Search className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">Site Inspection</h3>
                  <p className="text-slate-600 text-sm">Professional assessment and comprehensive documentation</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">Report & Portal</h3>
                  <p className="text-slate-600 text-sm">
                    Final delivery with ongoing client portal access for future needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-slate-900">
              Prefer to discuss your project first?
            </h2>
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-blue-600" />
              <div className="text-left">
                <div className="text-2xl font-bold text-slate-900">(403) 555-VALTA</div>
                <div className="text-slate-600">Call for immediate consultation</div>
              </div>
            </div>
            <p className="text-sm text-slate-500">Current clients can also call for priority support</p>
          </div>
        </div>
      </section>
    </div>
  )
}
