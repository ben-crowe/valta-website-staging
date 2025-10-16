"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Upload, FileText, MapPin, Users, Briefcase } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { supabase } from "@/lib/supabase"
import { Check } from "lucide-react"

export default function CareersPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    howHeard: "",
    resume: null as File | null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    setFormData(prev => ({ ...prev, resume: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // 1. Convert resume to base64 if provided
      let resumeBase64 = null
      let resumeFilename = null

      if (formData.resume) {
        resumeFilename = formData.resume.name

        // Convert file to base64
        const reader = new FileReader()
        resumeBase64 = await new Promise<string>((resolve, reject) => {
          reader.onload = () => {
            const base64 = reader.result as string
            // Remove data:application/pdf;base64, prefix
            const base64Content = base64.split(',')[1]
            resolve(base64Content)
          }
          reader.onerror = reject
          reader.readAsDataURL(formData.resume!)
        })
      }

      // 2. Save to database (optional record-keeping)
      const { data: submission, error: dbError } = await supabase
        .from('career_applications')
        .insert([{
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone || null,
          linkedin: formData.linkedin || null,
          portfolio: formData.portfolio || null,
          how_heard: formData.howHeard || null,
          resume_url: resumeFilename, // Just store filename for reference
          status: 'submitted',
          source: 'website-careers-form'
        }])
        .select()
        .single()

      if (dbError) {
        console.error('Database error:', dbError)
        throw new Error(`Failed to save application: ${dbError.message}`)
      }

      console.log('Application saved to database:', submission)

      // 3. Send team notification email with resume attached
      try {
        const { data: emailResult, error: emailError } = await supabase.functions.invoke('send-career-application', {
          body: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            linkedin: formData.linkedin,
            portfolio: formData.portfolio,
            howHeard: formData.howHeard,
            resumeBase64: resumeBase64,
            resumeFilename: resumeFilename
          }
        })

        if (emailError) {
          console.warn('Email notification failed (but application was saved):', emailError)
        } else {
          console.log('Email notification sent:', emailResult)
        }

      } catch (emailError) {
        console.warn('Email notification error (but application was saved):', emailError)
      }

      // Success
      setIsSubmitted(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        linkedin: "",
        portfolio: "",
        howHeard: "",
        resume: null
      })

    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToForm = () => {
    const rolesSection = document.getElementById('open-roles')
    if (rolesSection) {
      rolesSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden">
        <Image
          src="/images/01-updated-images/Career Posting.jpg"
          alt="Career opportunities at Valta Property Valuations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        
        <div className="relative z-10 container px-4 md:px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white mb-6">
              Careers
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Join a team built by developers and investors, for developers and investors. We move fast, solve hard problems, and value real‑world judgment.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToForm}
              className="bg-white text-slate-900 hover:bg-white/90 px-8 py-3 text-lg"
            >
              View Open Roles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section id="open-roles" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Open Roles</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Appraisal Assistant Job */}
            <Card className="border-0 bg-slate-50 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                  Appraisal Assistant Job
                </CardTitle>
                <div className="flex items-center gap-1 text-sm text-slate-600">
                  <MapPin className="h-4 w-4" />
                  Calgary, AB
                </div>
              </CardHeader>
            </Card>

            {/* AACI Candidate Job */}
            <Card className="border-0 bg-slate-50 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                  AACI Candidate Job
                </CardTitle>
                <div className="flex items-center gap-1 text-sm text-slate-600">
                  <MapPin className="h-4 w-4" />
                  Calgary, AB
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Apply</h2>
            <p className="text-lg text-slate-600">
              Use the form below to submit your resume.
            </p>
          </div>

          <Card className="bg-white shadow-lg rounded-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn URL</Label>
                    <Input
                      id="linkedin"
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => handleInputChange("linkedin", e.target.value)}
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio URL</Label>
                    <Input
                      id="portfolio"
                      type="url"
                      value={formData.portfolio}
                      onChange={(e) => handleInputChange("portfolio", e.target.value)}
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                </div>

                {/* Resume Upload */}
                <div className="space-y-2">
                  <Label htmlFor="resume">Resume *</Label>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-slate-400 transition-colors">
                    <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-sm text-slate-600 mb-2">
                      Drop your resume here or click to upload
                    </p>
                    <p className="text-xs text-slate-500">
                      PDF, DOC, DOCX up to 5MB
                    </p>
                    <Input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="mt-2"
                      required
                    />
                  </div>
                  {formData.resume && (
                    <p className="text-sm text-green-600 flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      {formData.resume.name}
                    </p>
                  )}
                </div>

                {/* How did you hear about us */}
                <div className="space-y-2">
                  <Label htmlFor="howHeard">How did you hear about us?</Label>
                  <Select value={formData.howHeard} onValueChange={(value) => handleInputChange("howHeard", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Company Website</SelectItem>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="referral">Employee Referral</SelectItem>
                      <SelectItem value="job-board">Job Board</SelectItem>
                      <SelectItem value="networking">Networking Event</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>
                </div>

                <p className="text-xs text-slate-500 text-center">
                  By submitting this application, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full bg-white shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Application Submitted!</h3>
              <p className="text-slate-600 mb-6">
                Thank you for your interest in joining the Valta team. We have received your application and will review your resume. 
                Our team will be in touch with you soon.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)} 
                className="w-full bg-slate-900 text-white hover:bg-slate-800"
              >
                Close
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Error Message */}
      {submitError && (
        <div className="fixed bottom-4 right-4 bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg shadow-lg max-w-md z-50">
          <p className="font-semibold mb-1">Error</p>
          <p className="text-sm">{submitError}</p>
          <button 
            onClick={() => setSubmitError(null)}
            className="absolute top-2 right-2 text-red-600 hover:text-red-800"
          >
            ×
          </button>
        </div>
      )}

    </div>
  )
}
