import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Building,
  Calculator,
  FileText,
  Search,
  TrendingUp,
  Home,
  Building2,
  GraduationCap,
  Heart,
  Store,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function MultifamilyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb Navigation */}
      <section className="w-full py-4 bg-muted/20">
        <div className="container px-4 md:px-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/services">Services</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Multifamily Appraisals</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1200&text=Modern+Multifamily+Apartment+Building"
            fill
            alt="Multifamily Apartment Building"
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container px-4 md:px-6 h-full">
          <div className="flex flex-col items-center justify-center space-y-6 text-center text-white h-full">
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Valta Property Valuations: Multifamily Property Appraisals
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Expert valuations for apartment buildings, condos, and residential investment properties. Lender-ready
                reports in 2-3 weeks.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Link href="/request-appraisal">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
                  Request Appraisal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
              >
                View Sample Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Valta's Deep Multifamily Market Knowledge
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Our specialized expertise in multifamily properties ensures accurate valuations that reflect current
                market conditions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <TrendingUp className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Investment Properties</h3>
                <p className="text-muted-foreground">
                  Comprehensive cap rate analysis and income approach valuations for existing rental properties. We
                  understand the nuances of NOI calculations and market-derived capitalization rates.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Building className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Development Projects</h3>
                <p className="text-muted-foreground">
                  Expert appraisals for new construction and major renovation projects. Our development background
                  provides unique insight into construction costs and project feasibility.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Building2 className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Portfolio Valuations</h3>
                <p className="text-muted-foreground">
                  Efficient multiple property assessments for real estate investors and institutional clients.
                  Coordinated timing and consistent methodology across your entire portfolio.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Valta's Multifamily Appraisal Process
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                A systematic approach that ensures thorough analysis and timely delivery of your appraisal report.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-6xl py-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary text-white text-sm flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Property Analysis</h3>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive site inspection and detailed unit mix review to understand the property's physical
                    characteristics and income potential.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary text-white text-sm flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Market Research</h3>
                  <p className="text-muted-foreground text-sm">
                    Extensive comparable sales and rental analysis to establish current market conditions and trends
                    affecting property values.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calculator className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary text-white text-sm flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Income Approach</h3>
                  <p className="text-muted-foreground text-sm">
                    Detailed NOI calculations and cap rate analysis using market-extracted rates to determine the
                    property's investment value.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary text-white text-sm flex items-center justify-center font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Report Delivery</h3>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive AACI-compliant report delivered within 2-3 weeks, ready for lender submission and
                    financing decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Valta's Multifamily Property Types We Appraise
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                From small apartment buildings to large residential complexes, we have expertise across all multifamily
                property types.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Low-Rise+Apartments"
                  width={400}
                  height={200}
                  alt="Low-rise apartments"
                  className="aspect-video object-cover w-full"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Home className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold">Low-Rise Apartments</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  4-6 unit buildings and small apartment complexes. Perfect for individual investors and small-scale
                  developers.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Mid-Rise+Developments"
                  width={400}
                  height={200}
                  alt="Mid-rise developments"
                  className="aspect-video object-cover w-full"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Building className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold">Mid-Rise Developments</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  20-100 unit properties with amenities and professional management. The backbone of institutional
                  multifamily investing.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=High-Rise+Towers"
                  width={400}
                  height={200}
                  alt="High-rise towers"
                  className="aspect-video object-cover w-full"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold">High-Rise Towers</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  100+ unit luxury developments with extensive amenities. Complex valuations requiring specialized
                  market knowledge.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Student+Housing"
                  width={400}
                  height={200}
                  alt="Student housing complexes"
                  className="aspect-video object-cover w-full"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold">Student Housing Complexes</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Purpose-built student accommodation with unique rental structures and occupancy patterns near
                  universities.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Senior+Living"
                  width={400}
                  height={200}
                  alt="Senior living facilities"
                  className="aspect-video object-cover w-full"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold">Senior Living Facilities</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Independent living and assisted care facilities with specialized design features and service
                  components.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Mixed-Use+Development"
                  width={400}
                  height={200}
                  alt="Mixed-use developments"
                  className="aspect-video object-cover w-full"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Store className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold">Mixed-Use Developments</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Residential units combined with retail or office space. Complex valuations requiring analysis of
                  multiple property types.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to get your multifamily property appraised by Valta?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Get your lender-ready report in 2-3 weeks
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Link href="/request-appraisal">
                <Button size="lg" className="px-8 py-3 text-lg">
                  Start Your Appraisal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="text-center text-sm text-muted-foreground mt-4">
              <p>
                Or call us at <strong>(403) 555-VALTA</strong> for immediate consultation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
