import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Building,
  Calculator,
  Home,
  Building2,
  TrendingUp,
  FileText,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function MultifamilyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Multifamily%20Mid%20Rise.jpg"
            fill
            alt="Modern multifamily apartment building"
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center text-white">
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Multifamily Property Appraisals
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Expert valuations for apartment buildings and residential investment properties across Western Canada
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/request-appraisal">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  Request Multifamily Appraisal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section - Using Client's Text */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Multifamily Appraisals
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <Image
              src="/images/Multifamily%20Condo.webp"
              width={600}
              height={400}
              alt="Modern multifamily condominium"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            />
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <p className="text-muted-foreground md:text-lg">
                  Our primary specialization with deep expertise in apartment and townhouse rental properties. We understand the complexities of purpose built rentals and provide comprehensive market analysis and appraisal reports.
                </p>
                <ul className="grid gap-3">
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <div>
                      Apartment complexes and condominiums
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <div>
                      Multi-unit residential properties
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <div>
                      Income approach valuations
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <div>
                      Market rent analysis
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <div>
                      Operating expense analysis
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="font-semibold text-blue-800">
                  Trusted experts in purpose-built rental valuations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types We Appraise */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Multifamily Property Types We Appraise
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Comprehensive valuations for all types of multifamily residential properties
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Building2 className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Apartment Buildings</h3>
                <p className="text-muted-foreground text-sm">
                  Low-rise, mid-rise, and high-rise apartment complexes with comprehensive income analysis
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Home className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Townhouse Complexes</h3>
                <p className="text-muted-foreground text-sm">
                  Purpose-built rental townhomes and row housing developments
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Building className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Condominium Buildings</h3>
                <p className="text-muted-foreground text-sm">
                  Entire condominium complexes and bulk unit portfolios
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Calculator className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Mixed-Use Residential</h3>
                <p className="text-muted-foreground text-sm">
                  Properties with residential units and commercial components
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <TrendingUp className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Student Housing</h3>
                <p className="text-muted-foreground text-sm">
                  Purpose-built student accommodations near colleges and universities
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <FileText className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Senior Housing</h3>
                <p className="text-muted-foreground text-sm">
                  Independent living, assisted living, and senior apartment communities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valuation Approach Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Multifamily Valuation Approach
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Specialized methodology for accurate multifamily property valuations
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-6xl py-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">
                  <Calculator className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Income Analysis</h3>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Rent roll verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Market rent analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Operating expense review</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Cap rate extraction</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">
                  <Building className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Physical Inspection</h3>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Unit mix assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Condition evaluation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Amenity review</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Maintenance assessment</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">
                  <TrendingUp className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Market Analysis</h3>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Comparable sales review</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Rental market survey</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Vacancy rate analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Market trend assessment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Get Your Multifamily Property Appraised?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Fast, accurate appraisals from experts who understand the investment perspective
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Link href="/request-appraisal">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
                  Start Your Appraisal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="text-center text-sm text-muted-foreground mt-4">
              <p>
                Questions? Call us at <strong>(587) 801-5151</strong> for immediate consultation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}