"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Shield, 
  Phone, 
  FileText, 
  Search, 
  BarChart3, 
  ChevronLeft, 
  ChevronRight,
  Upload,
  Mail,
  User,
  Building,
  Loader2,
  ZapIcon
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAppraisalFormSubmission } from "@/hooks/useAppraisalFormSubmission"
import { type FormData } from "@/lib/supabase"

export default function RequestAppraisalPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const formRef = useRef<HTMLDivElement>(null)
  const { submitForm, isSubmitting, isSubmitted, errors, setErrors } = useAppraisalFormSubmission()
  
  // Phone number formatting function
  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const phoneNumber = value.replace(/\D/g, '')
    
    // Apply formatting
    if (phoneNumber.length <= 3) {
      return phoneNumber
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    } else if (phoneNumber.length <= 10) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
    } else {
      // Don't allow more than 10 digits
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
    }
  }
  
  const [showExistingClientForm, setShowExistingClientForm] = useState(false)
  const [showNewClientForm, setShowNewClientForm] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  
  // Login data for existing clients
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
  
  // Mini-form data for new clients
  const [newClientData, setNewClientData] = useState({
    companyName: "",
    name: "",
    email: "",
    phone: "",
  })
  
  // Main intake form data
  const [formData, setFormData] = useState<FormData>({
    // Client Information
    clientFirstName: "",
    clientLastName: "",
    clientTitle: "",
    clientOrganization: "",
    clientAddress: "",
    clientPhone: "",
    clientEmail: "",
    // Property Information
    propertyName: "",
    propertyAddress: "",
    propertyType: "",
    intendedUse: "",
    valuationPremises: "",
    assetCondition: "",
    additionalInfo: "",
  })

  // Check if we should scroll to form on mount (from direct link)
  useEffect(() => {
    if (searchParams.get('form') === 'direct') {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [searchParams])

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

  const handleLoginChange = (field: string, value: string) => {
    setLoginData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNewClientChange = (field: string, value: string) => {
    setNewClientData((prev) => ({ ...prev, [field]: value }))
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setUploadedFiles((prev) => [...prev, ...files])
  }

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  // Handle existing client login - populate form and scroll
  const handleExistingClientSubmit = () => {
    // Populate email in main form
    setFormData(prev => ({
      ...prev,
      clientEmail: loginData.email
    }))
    // Close the mini form
    setShowExistingClientForm(false)
    // Scroll to main form
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  // Handle new client mini-form - populate main form and scroll
  const handleNewClientSubmit = () => {
    // Parse the name into first and last
    const nameParts = newClientData.name.trim().split(' ')
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''
    
    // Populate main form with data from mini-form
    setFormData(prev => ({
      ...prev,
      clientFirstName: firstName,
      clientLastName: lastName,
      clientOrganization: newClientData.companyName,
      clientPhone: newClientData.phone,
      clientEmail: newClientData.email,
    }))
    // Close the mini form
    setShowNewClientForm(false)
    // Scroll to main form
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Add files to form data
    const submissionData = { ...formData, files: uploadedFiles }
    
    const result = await submitForm(submissionData)
    
    if (result.success) {
      // Show success message and redirect
      alert("Appraisal request submitted successfully! You'll receive confirmation via email.")
      // Reset form or redirect
      setTimeout(() => {
        router.push("/")
      }, 2000)
    } else {
      // Error handling is managed by the hook
      if (result.error) {
        alert(result.error)
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Image Carousel */}
      <section className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImages[currentImageIndex].src}
            fill
            alt={heroImages[currentImageIndex].alt}
            className="object-cover transition-all duration-700"
            priority
          />
          <div className={`absolute inset-0 ${heroImages[currentImageIndex].overlayClass}`} />
        </div>
        
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
        
        <div className="relative z-10 container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                Get Your Commercial Appraisal Started
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Professional peer reviewed property appraisals delivered in 2-3 weeks, not 4-6. Get started with a quick consultation.
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
                            onClick={handleExistingClientSubmit}
                          >
                            Continue to Form
                          </Button>
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
                            onClick={handleNewClientSubmit}
                          >
                            Continue to Form
                          </Button>
                          <p className="text-xs text-slate-500 text-center">
                            We'll populate the form with your information
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

      {/* NEW: Submit Without Account Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50" ref={formRef}>
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
                <ZapIcon className="h-5 w-5" />
                <span className="font-semibold">Quick Submit - No Account Required</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                Or Submit Your Appraisal Request Directly
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Skip the account setup and submit your property details immediately. We'll create your account 
                automatically and send you access details via email.
              </p>
            </div>

            {/* Embedded Intake Form */}
            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-blue-50/50">
                <CardTitle className="text-2xl text-center">Complete Appraisal Request Form</CardTitle>
              </CardHeader>
              <CardContent className="pt-8">
                <form onSubmit={handleSubmit} className="space-y-12">
                  {/* Section 1: Client Information */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                      <User className="h-5 w-5 text-blue-600" />
                      Client Information
                    </h3>
                    <div className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="clientFirstName">
                            First Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="clientFirstName"
                            value={formData.clientFirstName}
                            onChange={(e) => handleInputChange("clientFirstName", e.target.value)}
                            placeholder="John"
                            required
                            className={errors.clientFirstName ? "border-red-500" : ""}
                          />
                          {errors.clientFirstName && (
                            <p className="text-sm text-red-500">{errors.clientFirstName}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="clientLastName">
                            Last Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="clientLastName"
                            value={formData.clientLastName}
                            onChange={(e) => handleInputChange("clientLastName", e.target.value)}
                            placeholder="Smith"
                            required
                            className={errors.clientLastName ? "border-red-500" : ""}
                          />
                          {errors.clientLastName && (
                            <p className="text-sm text-red-500">{errors.clientLastName}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="clientTitle">Client Title</Label>
                          <Input
                            id="clientTitle"
                            value={formData.clientTitle}
                            onChange={(e) => handleInputChange("clientTitle", e.target.value)}
                            placeholder="Development Manager"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="clientOrganization">Client Organization</Label>
                          <Input
                            id="clientOrganization"
                            value={formData.clientOrganization}
                            onChange={(e) => handleInputChange("clientOrganization", e.target.value)}
                            placeholder="ABC Development Corp"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="clientAddress">Client Organization Address</Label>
                        <Input
                          id="clientAddress"
                          value={formData.clientAddress}
                          onChange={(e) => handleInputChange("clientAddress", e.target.value)}
                          placeholder="123 Main Street, Calgary, AB T2P 1A1"
                        />
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="clientPhone">
                            Phone <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="clientPhone"
                            type="tel"
                            value={formData.clientPhone}
                            onChange={(e) => {
                              const formatted = formatPhoneNumber(e.target.value)
                              handleInputChange("clientPhone", formatted)
                            }}
                            placeholder="(587) 801-5151"
                            required
                            className={errors.clientPhone ? "border-red-500" : ""}
                          />
                          {errors.clientPhone && (
                            <p className="text-sm text-red-500">{errors.clientPhone}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="clientEmail">
                            Email <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="clientEmail"
                            type="email"
                            value={formData.clientEmail}
                            onChange={(e) => handleInputChange("clientEmail", e.target.value)}
                            placeholder="john@abcdevelopment.com"
                            required
                            className={errors.clientEmail ? "border-red-500" : ""}
                          />
                          {errors.clientEmail && (
                            <p className="text-sm text-red-500">{errors.clientEmail}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Property & Job Information */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                      <Building className="h-5 w-5 text-blue-600" />
                      Property & Job Information
                    </h3>
                    <div className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="propertyName">
                            Property Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="propertyName"
                            value={formData.propertyName}
                            onChange={(e) => handleInputChange("propertyName", e.target.value)}
                            placeholder="Riverside Apartments"
                            required
                            className={errors.propertyName ? "border-red-500" : ""}
                          />
                          {errors.propertyName && (
                            <p className="text-sm text-red-500">{errors.propertyName}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="propertyAddress">Property Address</Label>
                          <Input
                            id="propertyAddress"
                            value={formData.propertyAddress}
                            onChange={(e) => handleInputChange("propertyAddress", e.target.value)}
                            placeholder="456 River Road, Calgary, AB T2P 2B2"
                          />
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="propertyType">
                            Property Type
                          </Label>
                          <Select
                            value={formData.propertyType}
                            onValueChange={(value) => handleInputChange("propertyType", value)}
                          >
                            <SelectTrigger className={errors.propertyType ? "border-red-500" : ""}>
                              <SelectValue placeholder="Please Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="multifamily">Multifamily</SelectItem>
                              <SelectItem value="self-storage">Self Storage</SelectItem>
                              <SelectItem value="retail">Retail</SelectItem>
                              <SelectItem value="industrial">Industrial</SelectItem>
                              <SelectItem value="land">Land</SelectItem>
                              <SelectItem value="office">Office</SelectItem>
                              <SelectItem value="hotel">Hotel</SelectItem>
                              <SelectItem value="senior">Senior</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.propertyType && (
                            <p className="text-sm text-red-500">{errors.propertyType}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="intendedUse">Intended Use</Label>
                          <Select
                            value={formData.intendedUse}
                            onValueChange={(value) => handleInputChange("intendedUse", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Please Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="financing">Financing Purposes</SelectItem>
                              <SelectItem value="internal">Internal Business Decisions</SelectItem>
                              <SelectItem value="underwriting">Underwriting Decisions</SelectItem>
                              <SelectItem value="litigation">Litigation Purposes</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="valuationPremises">Valuation Premises</Label>
                        <Select
                          value={formData.valuationPremises}
                          onValueChange={(value) => handleInputChange("valuationPremises", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Please Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="market-value-as-is">Market Value As Is</SelectItem>
                            <SelectItem value="market-value-as-is-stabilized">
                              Market Value As Is & As Stabilized
                            </SelectItem>
                            <SelectItem value="market-value-complete-stabilized">
                              Market Value As Complete & As Stabilized
                            </SelectItem>
                            <SelectItem value="market-value-land-complete-stabilized">
                              Market Value Land As Is & As Complete & As Stabilized
                            </SelectItem>
                            <SelectItem value="market-value-land-as-is">Market Value Land As Is</SelectItem>
                            <SelectItem value="market-value-land-rezoned">Market Value Land As Is & As Rezoned</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="assetCondition">Asset Current Condition</Label>
                        <Select
                          value={formData.assetCondition}
                          onValueChange={(value) => handleInputChange("assetCondition", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Please Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="New Development">New Development</SelectItem>
                            <SelectItem value="Existing Property">Existing Property</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additionalInfo">Additional Information</Label>
                        <Textarea
                          id="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                          placeholder="Please provide any additional details about the property, special circumstances, timeline requirements, or other relevant information..."
                          className="min-h-[120px]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Document Upload */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      Required Documents
                    </h3>
                    <div className="space-y-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 mb-3">Please upload the following documents:</h4>
                        <ul className="space-y-2 text-sm text-blue-800">
                          <li className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                            <span>Full Property Details or Prior Appraisal</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                            <span>Proforma</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                            <span>Unit Mix (MF/SS) or Rent Roll (Retail/Office/Industrial)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                            <span>Operating Expenses (1-3 Years Historical and Budget)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                            <span>Drawings/Plans (New Developments only)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                            <span>Contact for property tour (Existing Buildings only)</span>
                          </li>
                        </ul>
                      </div>

                      <div className="relative border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                        <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                        <div className="space-y-2">
                          <p className="text-lg font-medium text-slate-700">Drop files here or click to upload</p>
                          <p className="text-sm text-slate-500">
                            Supported formats: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG (Max 10MB per file)
                          </p>
                        </div>
                        <input
                          type="file"
                          multiple
                          accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                          onChange={handleFileUpload}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                      </div>

                      {uploadedFiles.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="font-medium text-slate-900">Uploaded Files:</h4>
                          <div className="space-y-2">
                            {uploadedFiles.map((file, index) => (
                              <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                <div className="flex items-center gap-2">
                                  <FileText className="h-4 w-4 text-slate-500" />
                                  <span className="text-sm text-slate-700">{file.name}</span>
                                  <span className="text-xs text-slate-500">
                                    ({(file.size / 1024 / 1024).toFixed(1)} MB)
                                  </span>
                                </div>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeFile(index)}
                                  className="text-red-600 hover:text-red-700"
                                >
                                  Remove
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 px-12 py-4 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Submitting Request...
                        </>
                      ) : (
                        <>
                          Submit Appraisal Request
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="flex items-center justify-center gap-2">
                <Shield className="h-6 w-6 text-blue-600" />
                <span className="font-semibold text-slate-900">Secure Submission</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-6 w-6 text-blue-600" />
                <span className="font-semibold text-slate-900">AACI Certified</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="h-6 w-6 text-blue-600" />
                <span className="font-semibold text-slate-900">2-3 Week Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 text-center">
              Four Simple Steps to Your Appraisal
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
              No games. No surprises. No six-week waits. Just a straightforward process that respects your time and gets deals done.
            </p>
            
            <div className="space-y-12">
              <div className="border-l-4 border-blue-600 pl-8">
                <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Step One</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Submit Your Request</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Fill out our intake form with your property details. Upload documents, photos, and any relevant 
                  materials. Takes about 10 minutes—no phone tag required.
                </p>
                <div className="mt-4 inline-flex items-center text-sm text-blue-600 font-medium">
                  <Clock className="h-4 w-4 mr-2" />
                  Same day acknowledgment
                </div>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-8">
                <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Step Two</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Get Your Quote</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Within 24 hours, receive a detailed scope confirmation, transparent fee quote, and firm delivery 
                  date. No surprises, no hidden fees, no "it depends."
                </p>
                <div className="mt-4 inline-flex items-center text-sm text-blue-600 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Guaranteed pricing
                </div>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-8">
                <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Step Three</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Professional Inspection</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our AACI appraiser conducts a thorough site inspection. We document everything, ask the right 
                  questions, and gather all necessary data for an accurate valuation.
                </p>
                <div className="mt-4 inline-flex items-center text-sm text-blue-600 font-medium">
                  <Search className="h-4 w-4 mr-2" />
                  Comprehensive assessment
                </div>
              </div>
              
              <div className="border-l-4 border-green-600 pl-8">
                <div className="text-sm font-bold text-green-600 uppercase tracking-wider mb-2">Step Four</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Receive Your Report</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Your peer reviewed, lender-ready report arrives on schedule. Access it anytime through your client portal, 
                  along with all supporting documentation. Need another copy? It's always there.
                </p>
                <div className="mt-4 inline-flex items-center text-sm text-green-600 font-medium">
                  <Shield className="h-4 w-4 mr-2" />
                  Bank-approved format
                </div>
              </div>
            </div>
            
            <div className="mt-20 text-center">
              <div className="inline-block p-8 bg-white rounded-2xl shadow-lg">
                <p className="text-lg text-slate-700 mb-4">
                  <span className="font-bold text-slate-900">Start to finish in 2-3 weeks.</span> That's our promise.
                </p>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                  onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
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
                <div className="text-lg text-slate-700">clientcare@valta.ca</div>
                <div className="text-slate-600">Call or email for immediate consultation</div>
              </div>
            </div>
            <p className="text-sm text-slate-500">Current clients can also call for priority support</p>
          </div>
        </div>
      </section>
    </div>
  )
}