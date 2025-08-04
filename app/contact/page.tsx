"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Loader2, Phone, Mail, Clock, MapPin, Shield, FileText, Users, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-slate-900">
                Contact Valta Property Valuations
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
                Ready to discuss your commercial property appraisal needs? Get in touch with our team of certified
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

              {isSubmitted ? (
                <Card className="border-0 shadow-xl rounded-xl bg-green-50">
                  <CardContent className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-slate-900">Thank You!</h3>
                      <p className="text-slate-600 max-w-md">
                        Your message has been received. We'll get back to you within 24 hours to discuss your appraisal
                        needs.
                      </p>
                    </div>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          requestType: "",
                          propertyType: "",
                          timeline: "",
                          message: "",
                        })
                      }}
                      variant="outline"
                      className="shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                    >
                      Send Another Message
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
                          placeholder="(403) 555-0123"
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
                        <p className="text-slate-600">AACI Certified Professionals</p>
                        <p className="text-slate-600">Serving Western Canada</p>
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
                          <p className="text-slate-600">(403) 555-VALTA</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Mail className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">Email</p>
                          <p className="text-slate-600">info@valtavaluations.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Clock className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">Office Hours</p>
                          <p className="text-slate-600">Monday - Friday, 8:00 AM - 6:00 PM MST</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 shadow-xl rounded-xl bg-white">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900">Quick Actions</h3>
                    <div className="space-y-3">
                      <Link href="/request-appraisal">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg">
                          Request Appraisal
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="w-full bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg border-slate-200 hover:bg-slate-50"
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        Download Sample Report
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg border-slate-200 hover:bg-slate-50"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Schedule Consultation Call
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">Our Service Area</h2>
              <p className="text-xl text-slate-600 max-w-3xl">
                Serving commercial property owners, developers, and lenders across:
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="w-full max-w-4xl">
              <Card className="border-0 shadow-xl rounded-xl overflow-hidden">
                <div className="relative bg-gradient-to-br from-blue-100 to-slate-100 p-8">
                  <Image
                    src="/placeholder.svg?height=400&width=800&text=Western+Canada+Service+Area+Map"
                    width={800}
                    height={400}
                    alt="Western Canada Service Area Map"
                    className="mx-auto aspect-video overflow-hidden rounded-lg object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                    <p className="text-sm font-semibold text-slate-900">Coverage: 5 Provinces</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Service Areas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full mt-12">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl bg-white">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Primary Markets</h3>
                  <ul className="space-y-1 text-slate-600">
                    <li>Calgary</li>
                    <li>Edmonton</li>
                    <li>Vancouver</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl bg-white">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Secondary Markets</h3>
                  <ul className="space-y-1 text-slate-600">
                    <li>Regina</li>
                    <li>Saskatoon</li>
                    <li>Winnipeg</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl bg-white">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Specialty Coverage</h3>
                  <ul className="space-y-1 text-slate-600">
                    <li>Fort McMurray</li>
                    <li>Grande Prairie</li>
                    <li>Surrounding Areas</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">Why Choose Valta</h2>

            {/* Trust Indicators Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl w-full">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <Award className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-4 text-slate-900">AACI Certified Professionals</h3>
                  <p className="text-sm text-slate-600">Recognized credentials and industry expertise</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <Clock className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-4 text-slate-900">2-3 Week Standard Delivery</h3>
                  <p className="text-sm text-slate-600">Faster turnaround than industry average</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <Shield className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-4 text-slate-900">Lender-Ready Reports</h3>
                  <p className="text-sm text-slate-600">Accepted by all major financial institutions</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-4 text-slate-900">15+ Years Combined Experience</h3>
                  <p className="text-sm text-slate-600">Deep market knowledge and proven track record</p>
                </CardContent>
              </Card>
            </div>

            {/* Client Testimonials */}
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl w-full mt-12">
              <Card className="bg-blue-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                <CardContent className="p-6">
                  <p className="text-slate-700 italic mb-4">
                    "Valta's team understands the development business. Their reports are thorough, delivered on time,
                    and accepted by our lenders without question."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center">
                      <span className="text-blue-700 font-semibold text-sm">MR</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Mike Rodriguez</p>
                      <p className="text-sm text-slate-600">Development Manager, Pinnacle Properties</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                <CardContent className="p-6">
                  <p className="text-slate-700 italic mb-4">
                    "Finally, an appraisal firm that speaks our language. Fast, accurate, and they understand what
                    drives value in commercial properties."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center">
                      <span className="text-slate-700 font-semibold text-sm">JL</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Jennifer Liu</p>
                      <p className="text-sm text-slate-600">Investment Director, Western Capital</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">
              Prefer a Different Approach?
            </h2>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl w-full">
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-900">For Existing Clients</h3>
                  <p className="text-slate-600 mb-4">Access your client portal for new requests and order tracking</p>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg border-slate-200 hover:bg-slate-50"
                  >
                    Client Portal Login
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-900">For Urgent Requests</h3>
                  <p className="text-slate-600 mb-4">Call us directly for same-day response</p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-900">For General Questions</h3>
                  <p className="text-slate-600 mb-4">Email us anytime - we respond within 24 hours</p>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg border-slate-200 hover:bg-slate-50"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
