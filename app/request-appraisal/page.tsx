"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Clock, Shield, Users, Phone, FileText, Search, BarChart3, ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RequestAppraisalPage() {
  const [showExistingClientForm, setShowExistingClientForm] = useState(false)
  const [showNewClientForm, setShowNewClientForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
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

  // Hero carousel images
  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop",
      alt: "Professional workspace with documents",
      overlayClass: "bg-gradient-to-r from-black/80 via-black/60 to-transparent"
    },
    {
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&h=800&fit=crop", 
      alt: "Modern office workspace",
      overlayClass: "bg-gradient-to-b from-black/70 via-black/50 to-black/70"
    },
    {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=800&fit=crop",
      alt: "Clean document workspace",
      overlayClass: "bg-gradient-to-br from-black/80 via-black/50 to-transparent"
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=800&fit=crop",
      alt: "Data visualization",
      overlayClass: "bg-gradient-to-t from-black/80 to-black/40"
    }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Image Carousel */}
      <section className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImages[currentImageIndex].src}
            fill
            alt={heroImages[currentImageIndex].alt}
            className="object-cover transition-all duration-700"
            priority
          />
          {/* Custom overlay for each image */}
          <div className={`absolute inset-0 ${heroImages[currentImageIndex].overlayClass}`} />
        </div>
        
        {/* Carousel Controls */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
        
        {/* Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentImageIndex
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Content */}
        <div className="relative z-10 container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                Get Your Commercial Appraisal Started
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Professional property valuations delivered in 2-3 weeks, not 4-6. Get started with a quick consultation.
              </p>
              <div className="flex items-center justify-center gap-2 text-white/80">
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
                              placeholder="(587) 801-5151"
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

      {/* Why Choose Us - Narrative Style */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-8">
              Why Property Professionals Trust Their Deals to Us
            </h2>
            
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="text-xl leading-relaxed mb-6">
                <span className="font-semibold text-slate-900">Remember your last appraisal nightmare?</span> Six weeks of 
                waiting. Daily calls to check status. A report that came back needing revisions because the appraiser didn't 
                understand your development model. Sound familiar?
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                <span className="font-semibold text-slate-900">We built Valta because we lived that nightmare too.</span> As 
                active developers ourselves, we got tired of appraisers who didn't understand proformas, construction draws, 
                or why missing a rate lock deadline could kill an entire project. So we became AACI-certified appraisers and 
                fixed the broken process.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-8 rounded-2xl my-8 border-l-4 border-blue-500">
                <p className="text-lg font-semibold text-slate-900 mb-4">
                  Here's what that means for your next deal:
                </p>
                <div className="space-y-4 ml-4">
                  <div>
                    <span className="font-bold text-slate-900">Your report in 2-3 weeks, guaranteed.</span>
                    <span className="text-slate-700"> Not "approximately" or "hopefully"—we commit to dates because we know 
                    rate locks don't wait. Track progress in real-time through your portal, with rush options when you really need them.</span>
                  </div>
                  
                  <div>
                    <span className="font-bold text-slate-900">Lender-ready on first submission.</span>
                    <span className="text-slate-700"> Our reports sail through bank reviews because we know exactly what lenders 
                    look for. AACI certification is just the baseline—we go beyond to ensure zero friction in your financing process.</span>
                  </div>
                  
                  <div>
                    <span className="font-bold text-slate-900">A partner who actually gets it.</span>
                    <span className="text-slate-700"> When we review your proforma, we understand the assumptions because we've 
                    built our own. When you explain your exit strategy, we see the vision because we've executed similar plans ourselves.</span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed italic">
                <span className="font-semibold text-slate-900">The bottom line?</span> You're not hiring just another appraiser. 
                You're partnering with someone who's closed deals from both sides of the table—and knows exactly what it takes 
                to get yours across the finish line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Clean Steps */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4 text-center">
              Our Simple Four-Step Process
            </h2>
            <p className="text-xl text-slate-600 text-center mb-16">
              No complexity. No confusion. Just results.
            </p>
            
            {/* Clean Steps Layout */}
            <div className="space-y-12 md:space-y-16">
              
              {/* Step One */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="text-5xl md:text-6xl font-bold text-blue-600 uppercase tracking-tight">
                    One
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Submit Your Request</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-4">
                    Fill out our intake form with your property details. Upload documents, photos, and any relevant 
                    materials. Takes about 10 minutes—no phone tag required.
                  </p>
                  <div className="inline-flex items-center text-sm text-blue-600 font-medium">
                    <Clock className="h-4 w-4 mr-2" />
                    Same day acknowledgment
                  </div>
                </div>
              </div>
              
              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
              
              {/* Step Two */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="text-5xl md:text-6xl font-bold text-blue-600 uppercase tracking-tight">
                    Two
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Get Your Quote</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-4">
                    Within 24 hours, receive a detailed scope confirmation, transparent fee quote, and firm delivery 
                    date. No surprises, no hidden fees, no "it depends."
                  </p>
                  <div className="inline-flex items-center text-sm text-blue-600 font-medium">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Guaranteed pricing
                  </div>
                </div>
              </div>
              
              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
              
              {/* Step Three */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="text-5xl md:text-6xl font-bold text-blue-600 uppercase tracking-tight">
                    Three
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Professional Inspection</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-4">
                    Our AACI appraiser conducts a thorough site inspection. We document everything, ask the right 
                    questions, and gather all necessary data for an accurate valuation.
                  </p>
                  <div className="inline-flex items-center text-sm text-blue-600 font-medium">
                    <Search className="h-4 w-4 mr-2" />
                    Comprehensive assessment
                  </div>
                </div>
              </div>
              
              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
              
              {/* Step Four */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="text-5xl md:text-6xl font-bold text-green-600 uppercase tracking-tight">
                    Four
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Receive Your Report</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-4">
                    Your lender-ready report arrives on schedule. Access it anytime through your client portal, 
                    along with all supporting documentation. Need another copy? It's always there.
                  </p>
                  <div className="inline-flex items-center text-sm text-green-600 font-medium">
                    <Shield className="h-4 w-4 mr-2" />
                    Bank-approved format
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom CTA */}
            <div className="mt-20 text-center">
              <div className="inline-block p-8 bg-white rounded-2xl shadow-lg">
                <p className="text-lg text-slate-700 mb-4">
                  <span className="font-bold text-slate-900">Start to finish in 2-3 weeks.</span> That's our promise.
                </p>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Start Your Appraisal Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
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
                <div className="text-2xl font-bold text-slate-900">(587) 801-5151</div>
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
