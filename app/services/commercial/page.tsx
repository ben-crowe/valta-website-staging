import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Building,
  Factory,
  Store,
  MapPin,
  FileText,
  Search,
  CheckCircle,
  Users,
  Calculator,
  BarChart3,
  Download,
  Phone,
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

export default function CommercialPage() {
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
                <BreadcrumbPage>Commercial Property Appraisals</BreadcrumbPage>
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
            src="/placeholder.svg?height=800&width=1200&text=Modern+Commercial+Office+Building"
            fill
            alt="Modern Commercial Office Building"
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 container px-4 md:px-6 h-full">
          <div className="flex justify-end h-full items-center">
            <div className="bg-slate-900/90 backdrop-blur-sm p-8 md:p-12 rounded-lg max-w-2xl">
              <div className="space-y-6 text-white">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Commercial Property Appraisals
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90">
                    Comprehensive valuations for office, industrial, retail, and land. Supporting your business
                    decisions with accurate market insights.
                  </p>
                  <div className="text-lg font-semibold text-blue-300">From single assets to entire portfolios</div>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                      Schedule Consultation
                      <Phone className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg bg-transparent"
                  >
                    View Property Types
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Commercial Properties We Appraise
            </h2>
            <p className="max-w-[900px] text-slate-600 md:text-xl">
              Expert valuations across all commercial property sectors
            </p>
          </div>
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=300&width=600&text=Development+Land+Site"
                  width={600}
                  height={300}
                  alt="Development Land"
                  className="aspect-video object-cover w-full transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-6 w-6 text-blue-400" />
                    <h3 className="text-2xl font-bold">Land & Development</h3>
                  </div>
                  <p className="text-white/90 mb-4">
                    Commercial lots, development sites, assemblages, and highest-best-use analysis
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=300&width=600&text=Modern+Office+Building"
                  width={600}
                  height={300}
                  alt="Office Buildings"
                  className="aspect-video object-cover w-full transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="h-6 w-6 text-blue-400" />
                    <h3 className="text-2xl font-bold">Office Buildings</h3>
                  </div>
                  <p className="text-white/90 mb-4">
                    Class A, B, C properties and professional buildings across all market segments
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=300&width=600&text=Industrial+Warehouse+Facility"
                  width={600}
                  height={300}
                  alt="Industrial Properties"
                  className="aspect-video object-cover w-full transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Factory className="h-6 w-6 text-blue-400" />
                    <h3 className="text-2xl font-bold">Industrial Properties</h3>
                  </div>
                  <p className="text-white/90 mb-4">
                    Warehouses, manufacturing facilities, distribution centers, and flex space
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=300&width=600&text=Retail+Shopping+Plaza"
                  width={600}
                  height={300}
                  alt="Retail Properties"
                  className="aspect-video object-cover w-full transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Store className="h-6 w-6 text-blue-400" />
                    <h3 className="text-2xl font-bold">Retail Properties</h3>
                  </div>
                  <p className="text-white/90 mb-4">
                    Shopping centers, standalone retail, mixed-use developments, and specialty retail
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Highlights Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Specialized Commercial Expertise
            </h2>
            <p className="max-w-[900px] text-slate-600 md:text-xl">
              Comprehensive analysis tailored to your specific commercial property needs
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border-slate-200">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <BarChart3 className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Portfolio Analysis</h3>
                <ul className="text-left space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Multi-property valuations for REITs and institutional investors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Bulk discount analysis and portfolio optimization strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Market positioning and competitive analysis across markets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Coordinated delivery timelines for complex transactions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <Building className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Development Support</h3>
                <ul className="text-left space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Land assemblage valuations and highest-best-use analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Construction-to-permanent loan appraisals and progress reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Feasibility studies and development pro forma validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Zoning and entitlement impact analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <Calculator className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Investment Analysis</h3>
                <ul className="text-left space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Cap rate analysis and market rent studies by property type</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Comprehensive lease review and income stabilization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Cash flow projections and sensitivity analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Market cycle analysis and timing considerations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Coverage Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Western Canada Market Knowledge
            </h2>
            <p className="max-w-[900px] text-slate-600 md:text-xl">
              Deep local expertise across major Western Canadian commercial markets
            </p>
          </div>
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Western+Canada+Map"
                  width={600}
                  height={400}
                  alt="Western Canada Market Coverage Map"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white p-3 rounded-lg">
                  <p className="text-sm font-semibold">We track 500+ commercial transactions annually</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Primary Markets</h3>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span className="text-slate-600">
                        Calgary - Downtown core, suburban office parks, industrial corridors
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span className="text-slate-600">
                        Edmonton - Government district, industrial zones, retail centers
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span className="text-slate-600">
                        Vancouver - Metro area, industrial lands, mixed-use developments
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Secondary Markets</h3>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-slate-600" />
                      <span className="text-slate-600">
                        Regina, Saskatoon - Government and agricultural service centers
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-slate-600" />
                      <span className="text-slate-600">Winnipeg - Transportation hub and distribution centers</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Specialty Coverage</h3>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-amber-600" />
                      <span className="text-slate-600">Fort McMurray, Grande Prairie - Resource sector properties</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Streamlined Commercial Appraisal Process
            </h2>
            <p className="max-w-[900px] text-slate-600 md:text-xl">
              A systematic approach ensuring thorough analysis and timely delivery
            </p>
          </div>
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
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
                  <h3 className="text-lg font-bold mb-2 text-slate-900">Initial Review</h3>
                  <p className="text-slate-600 text-sm mb-2">
                    Property type assessment, scope definition, and timeline discussion
                  </p>
                  <div className="text-xs text-blue-600 font-semibold">Same Day</div>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">Proposal & Engagement</h3>
                  <p className="text-slate-600 text-sm mb-2">Detailed fee quote and firm turnaround commitment</p>
                  <div className="text-xs text-blue-600 font-semibold">1-2 Days</div>
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
                  <h3 className="text-lg font-bold mb-2 text-slate-900">Research & Inspection</h3>
                  <p className="text-slate-600 text-sm mb-2">Comprehensive market analysis and detailed site visit</p>
                  <div className="text-xs text-blue-600 font-semibold">3-5 Days</div>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <Calculator className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">Valuation & Review</h3>
                  <p className="text-slate-600 text-sm mb-2">
                    Multiple valuation approaches with internal quality control
                  </p>
                  <div className="text-xs text-blue-600 font-semibold">5-10 Days</div>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-bold">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">Delivery & Support</h3>
                  <p className="text-slate-600 text-sm mb-2">
                    Final report delivery with client consultation available
                  </p>
                  <div className="text-xs text-blue-600 font-semibold">Final Day</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-100">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">$500M+</div>
                <div className="text-slate-600 text-sm">Properties Valued</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">2-3 Week</div>
                <div className="text-slate-600 text-sm">Standard Delivery</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">AACI</div>
                <div className="text-slate-600 text-sm">Certified Professionals</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">15+</div>
                <div className="text-slate-600 text-sm">Years Market Experience</div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-center text-slate-500 text-sm mb-6">Trusted by leading organizations</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="h-12 w-24 bg-slate-300 rounded flex items-center justify-center text-xs text-slate-600">
                  Valta Client
                </div>
                <div className="h-12 w-24 bg-slate-300 rounded flex items-center justify-center text-xs text-slate-600">
                  Valta Client
                </div>
                <div className="h-12 w-24 bg-slate-300 rounded flex items-center justify-center text-xs text-slate-600">
                  Valta Client
                </div>
                <div className="h-12 w-24 bg-slate-300 rounded flex items-center justify-center text-xs text-slate-600">
                  Valta Client
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">
                  Ready to discuss your commercial property?
                </h2>
                <p className="text-slate-600 md:text-lg">
                  Get expert analysis and market insights for your commercial real estate decisions.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
                    Request Commercial Appraisal
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 text-lg bg-transparent"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Commercial Market Report
                </Button>
              </div>
            </div>
            <div className="text-center text-slate-500 text-sm mt-8">
              Serving investors, lenders, and developers across Western Canada
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
