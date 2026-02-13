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
            src="/images/01-updated-images/Service- Multifamily -Multifamily Mid Rise.jpg"
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
                Multifamily Appraisals
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Expert valuations for purpose-built rental apartments and townhome properties. Lender-ready reports in 2-3 weeks.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/request-appraisal">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  Request Appraisal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section - Valta's Deep Multifamily Market Knowledge */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Valta's Deep Multifamily Market Knowledge
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Our specialized expertise in multifamily properties ensures accurate valuations that reflect current market conditions.
            </p>
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
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Existing & Value Add Properties</h3>
                  <p className="text-muted-foreground">
                    Expert appraisals for stabilized and major renovation projects. Comprehensive analysis and valuation for existing and value add rental properties. We understand the nuances of below market rents and capital expenditures on values.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Purpose-Built Rental Properties</h3>
                  <p className="text-muted-foreground">
                    Expert appraisals for new construction, purpose-built rentals. Our development and ownership background provides unique insight into construction costs, land values and rental rates.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Portfolio Valuations</h3>
                  <p className="text-muted-foreground">
                    Efficient multiple property valuations for real estate investors, institutional clients and financial reporting. Coordinated timing and consistent methodology across your entire portfolio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Valta's Multifamily Appraisal Process */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Valta's Multifamily Appraisal Process
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              A systematic approach that ensures thorough analysis and timely delivery of your appraisal report.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Property Analysis</h3>
                  <p className="text-muted-foreground">
                    Timely inspection and detailed physical and financial review to understand the property's physical characteristics and income potential.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Market Research</h3>
                  <p className="text-muted-foreground">
                    Extensive comparable sales and rental analysis to establish current market conditions and trends affecting property values.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Income Approach</h3>
                  <p className="text-muted-foreground">
                    Detailed NOI calculations and cap rate analysis using market-extracted rates to determine the property's investment value.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Report Delivery</h3>
                  <p className="text-muted-foreground">
                    Peer reviewed and CUSPAP compliant report delivered within 2-3 weeks, ready for lender submission and financing approval.
                  </p>
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
                Or call us at <strong>(587) 801-5151</strong> or email at <strong>clientcare@valta.ca</strong> for immediate consultation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}