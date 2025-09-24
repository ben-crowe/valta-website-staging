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

export default function SelfStoragePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Self%20Storage%20Exterior.jpg"
            fill
            alt="Modern self storage facility with glass facade and orange storage units"
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
                Self-Storage Facility Valuations
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Specialized appraisals for the fastest-growing commercial real estate sector. We understand operations,
                not just buildings.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/request-appraisal">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  Request Storage Appraisal
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

      {/* Why Different Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Self-Storage Valuations
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <Image
              src="/images/storagebuildinghome.jpg"
              width={600}
              height={400}
              alt="Modern self-storage facility with orange roll-up doors"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            />
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <p className="text-muted-foreground md:text-lg">
                  Specialized knowledge in the rapidly growing self-storage market. We understand the unique operational aspects of storage facilities, including occupancy rates, rental rates, and the impact of location and competition on facility performance.
                </p>
                <ul className="grid gap-3">
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <div>
                      Climate-controlled and standard storage units
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <div>
                      Facility operations analysis
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <div>
                      Market positioning assessment
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <div>
                      Occupancy and rental rate analysis
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <div>
                      Investment potential evaluation
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="font-semibold text-blue-800">
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
            <Card className="border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Building className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Supply Constraints</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Limited new development opportunities due to zoning restrictions and land costs
                </p>
                <div className="text-2xl font-bold text-blue-600">2.1%</div>
                <div className="text-xs text-muted-foreground">Annual supply growth</div>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Users className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Demand Drivers</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Urbanization and downsizing trends creating consistent demand growth
                </p>
                <div className="text-2xl font-bold text-blue-600">4.2%</div>
                <div className="text-xs text-muted-foreground">Annual demand growth</div>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Smartphone className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Technology Integration</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Automated facilities and online booking improving operational efficiency
                </p>
                <div className="text-2xl font-bold text-blue-600">78%</div>
                <div className="text-xs text-muted-foreground">Online rentals</div>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Shield className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Investment Appeal</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Recession-resistant asset class with stable cash flows
                </p>
                <div className="text-2xl font-bold text-blue-600">6.5%</div>
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
                <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">
                  <BarChart3 className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Operational Analysis</h3>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Revenue stream breakdown by unit type and size</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Operating expense ratios and management efficiency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Customer acquisition and retention metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Ancillary revenue opportunities assessment</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">
                  <MapPin className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Market Positioning</h3>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Competition analysis within 3-5 mile radius</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Pricing studies and rate optimization potential</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Demographic trends and demand drivers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Market penetration and growth opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">
                  <Calculator className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Financial Modeling</h3>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Income approach with storage-specific metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Stabilized NOI projections and lease-up analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Cap rate extraction from comparable sales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Sensitivity analysis for key performance metrics</span>
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
                Ready to unlock your facility's true value?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Get an appraisal that reflects operational performance, not just square footage
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Link href="/request-appraisal">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
                  Request Storage Valuation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="text-center text-sm text-muted-foreground mt-4">
              <p>
                Questions? Call our storage specialists at <strong>(587) 801-5151</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
