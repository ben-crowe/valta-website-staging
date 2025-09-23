"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  ArrowRight,
  Upload,
  FileText,
  Clock,
  CheckCircle,
  Shield,
  Phone,
  Mail,
  User,
  Building,
  MapPin,
  Loader2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAppraisalFormSubmission } from "@/hooks/useAppraisalFormSubmission"
import { type FormData } from "@/lib/supabase"

export default function IntakeFormPage() {
  const router = useRouter()
  const { submitForm, isSubmitting, isSubmitted, errors, setErrors } = useAppraisalFormSubmission()
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [formData, setFormData] = useState<FormData>({
    // Client Information - mapped to match Supabase fields
    clientFirstName: "",
    clientLastName: "",
    clientTitle: "",
    clientOrganization: "",
    clientAddress: "",
    clientPhone: "",
    clientEmail: "",

    // Property & Job Information
    propertyName: "",
    propertyAddress: "",
    propertyType: "",
    intendedUse: "",
    valuationPremises: "",
    assetCondition: "",
    additionalInfo: "",
  })

  // Check if user came from main page (in real app, this would come from URL params or state)
  const isNewClient = true // For demo purposes

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Add files to form data
    const submissionData = { ...formData, files: uploadedFiles }
    
    const result = await submitForm(submissionData)
    
    if (result.success) {
      // Redirect to success page or show success message
      alert("Appraisal request submitted successfully! You'll receive confirmation via email.")
      // Optionally redirect back to main request page
      setTimeout(() => {
        router.push("/request-appraisal")
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
      {/* Welcome Section */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                Complete Your Appraisal Request
              </h1>
              <p className="text-xl text-slate-600">
                {isNewClient
                  ? "Welcome! Let's gather your property details to get started."
                  : "Welcome back! Submit your new appraisal request below."}
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  ✓
                </div>
                <span className="text-sm text-slate-600">Account Setup</span>
              </div>
              <div className="h-px w-12 bg-blue-600"></div>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <span className="text-sm font-semibold text-slate-900">Property Details</span>
              </div>
            </div>
            <p className="text-sm text-slate-500">Step 2 of 2</p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Section 1: Client Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <User className="h-5 w-5 text-blue-600" />
                    Client Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
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
                        onChange={(e) => handleInputChange("clientPhone", e.target.value)}
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
                </CardContent>
              </Card>

              {/* Section 2: Property & Job Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Building className="h-5 w-5 text-blue-600" />
                    Property & Job Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
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
                        Property Type <span className="text-red-500">*</span>
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
                        <SelectItem value="new-development">New Development</SelectItem>
                        <SelectItem value="existing-property">Existing Property</SelectItem>
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
                </CardContent>
              </Card>

              {/* Section 3: Document Upload */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <FileText className="h-5 w-5 text-blue-600" />
                    Required Documents
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
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

                  {/* File Upload Component */}
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

                  {/* Uploaded Files List */}
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
                </CardContent>
              </Card>

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
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="w-full py-12 md:py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 mb-4">
                What Happens After You Submit
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div className="text-center space-y-4">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">Immediate Confirmation</h3>
                  <p className="text-slate-600 text-sm mb-2">You'll receive email confirmation and account details</p>
                  <div className="text-xs text-blue-600 font-semibold">Within 5 minutes</div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">24-Hour Review</h3>
                  <p className="text-slate-600 text-sm mb-2">
                    We'll contact you to confirm scope and provide fee quote
                  </p>
                  <div className="text-xs text-blue-600 font-semibold">Next business day</div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">Site Inspection</h3>
                  <p className="text-slate-600 text-sm mb-2">Professional property assessment and documentation</p>
                  <div className="text-xs text-blue-600 font-semibold">Week 1</div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                    <FileText className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">Report Delivery</h3>
                  <p className="text-slate-600 text-sm mb-2">Lender-ready appraisal within 2-3 weeks</p>
                  <div className="text-xs text-blue-600 font-semibold">Week 2-3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Section */}
      <section className="w-full py-12 md:py-16 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

            {/* Contact Support */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Questions?</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Call us at (587) 801-5151</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">clientcare@valta.ca</span>
                </div>
              </div>
            </div>

            {/* New Client Note */}
            <div className="bg-white border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-slate-600">
                <strong>New clients:</strong> You'll receive portal access details via email within 5 minutes of
                submission.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
