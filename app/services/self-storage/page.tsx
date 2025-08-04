import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Building,
  Users,
  Smartphone,
  Shield,
  BarChart3,
  MapPin,
  Calculator,
  Thermometer,
  Car,
  Building2,
  Anchor,
  Wine,
  Store,
  Download,
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

export default function SelfStoragePage() {
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
                <BreadcrumbPage>Self-Storage Valuations</BreadcrumbPage>
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
            src="/placeholder.svg?height=800&width=1200&text=Modern+Self+Storage+Facility"
            fill
            alt="Modern Self Storage Facility"
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container px-4 md:px-6 h-full">
          <div className="flex flex-col justify-center space-y-6 text-white max-w-3xl h-full">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Self-Storage Facility Valuations
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
                Specialized appraisals for the fastest-growing commercial real estate sector. We understand operations,
                not just buildings.
              </p>
            </div>

            {/* Stats Bar */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 py-4">
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-teal-400">94%</div>
                <div className="text-sm text-white/80">Average Occupancy</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-teal-400">$24B</div>
                <div className="text-sm text-white/80">Market Size</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-teal-400">15%</div>
                <div className="text-sm text-white/80">YoY Growth</div>
              </div>
            </div>

            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Link href="/request-appraisal">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg">
                  Get Storage Appraisal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Market Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Self-Storage Isn't Just Real Estate—It's a Business
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Storage+Facility+Operations"
              width={600}
              height={400}
              alt="Storage Facility Operations"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            />
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <p className="text-muted-foreground md:text-lg">
                  Unlike traditional commercial real estate, self-storage facilities are operating businesses with
                  complex revenue models, customer management systems, and operational efficiencies that directly impact
                  value.
                </p>
                <ul className="grid gap-3">
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Revenue per square foot calculations</strong> - Understanding unit mix optimization and
                      pricing strategies across different unit sizes
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Occupancy and rental rate analysis</strong> - Seasonal trends, move-in/move-out patterns,
                      and market penetration rates
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Management efficiency factors</strong> - Staffing models, operational costs, and
                      automation impact on profitability
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Technology and security considerations</strong> - Modern access systems, surveillance, and
                      customer management platforms
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
                <p className="font-semibold text-teal-800">
                  We've appraised $50M+ in self-storage facilities across Western Canada
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Understanding the Self-Storage Market
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Key market dynamics driving value in the self-storage sector
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-teal-200">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Building className="h-12 w-12 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Supply Constraints</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Limited new development opportunities due to zoning restrictions and land costs
                </p>
                <div className="text-2xl font-bold text-teal-600">2.1%</div>
                <div className="text-xs text-muted-foreground">Annual supply growth</div>
              </CardContent>
            </Card>
            <Card className="border-teal-200">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Users className="h-12 w-12 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Demand Drivers</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Urbanization and downsizing trends creating consistent demand growth
                </p>
                <div className="text-2xl font-bold text-teal-600">4.2%</div>
                <div className="text-xs text-muted-foreground">Annual demand growth</div>
              </CardContent>
            </Card>
            <Card className="border-teal-200">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Smartphone className="h-12 w-12 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Technology Integration</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Automated facilities and online booking improving operational efficiency
                </p>
                <div className="text-2xl font-bold text-teal-600">78%</div>
                <div className="text-xs text-muted-foreground">Online rentals</div>
              </CardContent>
            </Card>
            <Card className="border-teal-200">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Shield className="h-12 w-12 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Investment Appeal</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Recession-resistant asset class with stable cash flows
                </p>
                <div className="text-2xl font-bold text-teal-600">6.5%</div>
                <div className="text-xs text-muted-foreground">Average cap rates</div>
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
                Our Self-Storage Valuation Methodology
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                A specialized approach that captures the unique operational aspects of self-storage facilities
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-6xl py-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="h-20 w-20 rounded-full bg-teal-100 flex items-center justify-center">
                  <BarChart3 className="h-10 w-10 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Operational Analysis</h3>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                      <span>Revenue stream breakdown by unit type and size</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                      <span>Operating expense ratios and management efficiency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                      <span>Customer acquisition and retention metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                      <span>Ancillary revenue opportunities assessment</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="h-20 w-20 rounded-full bg-teal-100 flex items-center justify-center">
                  <MapPin className="h-10 w-10 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Market Positioning</h3>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                      <span>Competition analysis within 3-5 mile radius</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                      <span>Pricing studies and rate optimization potential</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                      <span>Demographic trends and demand drivers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                      <span>Market penetration and growth opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="h-20 w-20 rounded-full bg-teal-100 flex items-center justify-center">
                  <Calculator className="h-10 w-10 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Financial Modeling</h3>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                      <span>Income approach with storage-specific metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                      <span>Stabilized NOI projections and lease-up analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                      <span>Cap rate extraction from comparable sales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                      <span>Sensitivity analysis for key performance metrics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Types Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Storage Facility Types We Appraise
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                From traditional drive-up units to specialized storage solutions
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-7xl py-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden border-teal-200">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Climate+Controlled+Storage"
                    width={400}
                    height={200}
                    alt="Climate-controlled facilities"
                    className="aspect-video object-cover w-full"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Thermometer className="h-5 w-5 text-teal-600" />
                    <h3 className="text-lg font-bold">Climate-Controlled Facilities</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">
                    Premium storage with temperature and humidity control for sensitive items.
                  </p>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Premium rates: $1.50-2.50/sq ft</span>
                    <span>85-95% occupancy</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-teal-200">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Drive+Up+Storage"
                    width={400}
                    height={200}
                    alt="Drive-up storage units"
                    className="aspect-video object-cover w-full"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Car className="h-5 w-5 text-teal-600" />
                    <h3 className="text-lg font-bold">Drive-Up Storage Units</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">
                    Traditional ground-level units with direct vehicle access for convenience.
                  </p>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Standard rates: $0.80-1.20/sq ft</span>
                    <span>90-95% occupancy</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-teal-200">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Multi+Story+Storage"
                    width={400}
                    height={200}
                    alt="Multi-story facilities"
                    className="aspect-video object-cover w-full"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="h-5 w-5 text-teal-600" />
                    <h3 className="text-lg font-bold">Multi-Story Facilities</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">
                    High-density urban facilities maximizing storage capacity per land area.
                  </p>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Mixed rates: $1.00-2.00/sq ft</span>
                    <span>88-93% occupancy</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-teal-200">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Boat+RV+Storage"
                    width={400}
                    height={200}
                    alt="Boat/RV storage"
                    className="aspect-video object-cover w-full"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Anchor className="h-5 w-5 text-teal-600" />
                    <h3 className="text-lg font-bold">Boat/RV Storage</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">
                    Specialized large-unit storage for recreational vehicles and watercraft.
                  </p>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Premium rates: $50-150/month</span>
                    <span>75-85% occupancy</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-teal-200">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Wine+Storage"
                    width={400}
                    height={200}
                    alt="Wine storage facilities"
                    className="aspect-video object-cover w-full"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Wine className="h-5 w-5 text-teal-600" />
                    <h3 className="text-lg font-bold">Wine Storage Facilities</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">
                    Ultra-premium climate-controlled storage for wine collections and valuables.
                  </p>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Luxury rates: $3.00-5.00/sq ft</span>
                    <span>95-98% occupancy</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-teal-200">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Mixed+Use+Storage"
                    width={400}
                    height={200}
                    alt="Mixed-use with retail"
                    className="aspect-video object-cover w-full"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Store className="h-5 w-5 text-teal-600" />
                    <h3 className="text-lg font-bold">Mixed-Use with Retail</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">
                    Storage facilities combined with retail space for moving supplies and services.
                  </p>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Combined revenue streams</span>
                    <span>Enhanced profitability</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to unlock your facility's true value?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Get an appraisal that reflects operational performance, not just square footage
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Link href="/request-appraisal">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 px-8 py-3 text-lg">
                  Request Storage Valuation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="text-center text-sm text-muted-foreground mt-4">
              <p>
                Questions? Call our storage specialists at <strong>(403) 555-STOR</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
