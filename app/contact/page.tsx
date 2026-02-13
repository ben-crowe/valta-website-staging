"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Loader2, Phone, Mail, Clock, MapPin, Shield, FileText, Users, Award, ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    requestType: "",
    propertyType: "",
    timeline: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // 1. Save to database first (data protection)
      const { data: submission, error: dbError } = await supabase
        .from('contact_submissions')
        .insert([{
          full_name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          company: formData.company || null,
          request_type: formData.requestType || null,
          property_type: formData.propertyType || null,
          timeline: formData.timeline || null,
          message: formData.message,
          status: 'submitted',
          source: 'website-contact-form'
        }])
        .select()
        .single()

      if (dbError) {
        console.error('Database error:', dbError)
        throw new Error(`Failed to save form data: ${dbError.message}`)
      }

      console.log('Form saved to database:', submission)

      // 2. Send team notification email (non-blocking)
      try {
        const { data: emailResult, error: emailError } = await supabase.functions.invoke('send-contact-notification', {
          body: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            requestType: formData.requestType,
            propertyType: formData.propertyType,
            timeline: formData.timeline,
            message: formData.message
          }
        })

        if (emailError) {
          console.warn('Email notification failed (but form was saved):', emailError)
          // Don't throw - form was successfully saved
        } else {
          console.log('Email notification sent:', emailResult)
        }

      } catch (emailError) {
        console.warn('Email notification error (but form was saved):', emailError)
        // Don't throw - form was successfully saved
      }

      // Success - form saved (with or without email)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        requestType: "",
        propertyType: "",
        timeline: "",
        message: "",
      })

    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Single Image */}
      <section className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/01-updated-images/Contact-Amenity Rooftop.jpg"
            fill
            alt="Modern amenity rooftop space"
            className="object-cover"
            priority
          />
          {/* Custom overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                Contact Valta Property Valuations
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Ready to discuss your commercial property appraisal needs? Get in touch with our team of designated
                professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Contact Form */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-slate-900">Send Us a Message</h2>
                <p className="text-slate-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              {submitError && (
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="pt-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-700">
                          <strong>Submission Error:</strong> {submitError}
                        </p>
                        <p className="text-xs text-red-600 mt-1">
                          Please try again or contact us directly at <a href="tel:+15878015151" className="underline">(587) 801-5151</a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {isSubmitted ? (
                <Card className="border-0 shadow-xl rounded-xl bg-slate-50">
                  <CardContent className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
                    <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-slate-900">Thank You!</h3>
                      <p className="text-slate-600 max-w-md">
                        Your message has been received. We'll get back to you within the day to discuss how we can work together.
                      </p>
                    </div>
                    <Button
                      onClick={() => {
                        window.location.href = '/'
                      }}
                      variant="outline"
                      className="shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                    >
                      Return to Website
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-0 shadow-xl rounded-xl bg-white">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">
                            Your Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="John Smith"
                            required
                            className="shadow-sm rounded-lg border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">
                            Email Address <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="john@company.com"
                            required
                            className="shadow-sm rounded-lg border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="(587) 801-5151"
                          className="shadow-sm rounded-lg border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="requestType">Request Type</Label>
                          <Select
                            value={formData.requestType}
                            onValueChange={(value) => handleInputChange("requestType", value)}
                          >
                            <SelectTrigger className="shadow-sm rounded-lg border-slate-200 focus:border-blue-500 focus:ring-blue-500">
                              <SelectValue placeholder="Select request type" />
                            </SelectTrigger>
                            <SelectContent className="rounded-lg shadow-xl">
                              <SelectItem value="appraisal">Appraisal Request</SelectItem>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="consultation">Consultation</SelectItem>
                              <SelectItem value="existing-client">Existing Client Support</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="propertyType">Property Type</Label>
                          <Select
                            value={formData.propertyType}
                            onValueChange={(value) => handleInputChange("propertyType", value)}
                          >
                            <SelectTrigger className="shadow-sm rounded-lg border-slate-200 focus:border-blue-500 focus:ring-blue-500">
                              <SelectValue placeholder="Select property type" />
                            </SelectTrigger>
                            <SelectContent className="rounded-lg shadow-xl">
                              <SelectItem value="multifamily">Multifamily</SelectItem>
                              <SelectItem value="self-storage">Self-Storage</SelectItem>
                              <SelectItem value="commercial">Commercial</SelectItem>
                              <SelectItem value="industrial">Industrial</SelectItem>
                              <SelectItem value="land">Land</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="timeline">Timeline</Label>
                        <Select
                          value={formData.timeline}
                          onValueChange={(value) => handleInputChange("timeline", value)}
                        >
                          <SelectTrigger className="shadow-sm rounded-lg border-slate-200 focus:border-blue-500 focus:ring-blue-500">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent className="rounded-lg shadow-xl">
                            <SelectItem value="urgent">Urgent (1-2 weeks)</SelectItem>
                            <SelectItem value="standard">Standard (2-3 weeks)</SelectItem>
                            <SelectItem value="flexible">Flexible (4+ weeks)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">
                          Message <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Please describe your property and appraisal requirements..."
                          className="min-h-[120px] shadow-sm rounded-lg border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Right Column - Contact Information */}
            <div className="space-y-8">
              {/* Company Details */}
              <Card className="border-0 shadow-xl rounded-xl bg-white">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900">Company Details</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-slate-900">Valta Property Valuations Ltd.</h4>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Methods */}
              <Card className="border-0 shadow-xl rounded-xl bg-white">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900">Contact Methods</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Phone className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">Phone</p>
                          <p className="text-slate-600">(587) 801-5151</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Mail className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">Email</p>
                          <p className="text-slate-600">clientcare@valta.ca</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Clock className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">Office Hours</p>
                          <p className="text-slate-600">Monday - Friday, 8:00 AM - 5:00 PM MST</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section - Simplified */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <p className="text-xl text-slate-600 max-w-3xl">
              Serving commercial property owners, developers, and lenders across:
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
