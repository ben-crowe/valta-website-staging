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
            src="/images/01-updated-images/Service- Self-Storage -Self Storage Units - Interior.jpg"
            fill
            alt="Modern self storage facility interior units"
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
                Specialized appraisals for the fastest-growing commercial real estate sector. We understand operations, not just the real estate.
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

      {/* Main Content Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Self-Storage Isn't Just Real Estate—It's a Business
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Unlike traditional commercial real estate, self-storage facilities are operating businesses with complex revenue models, customer management systems, and operational efficiencies that directly impact value.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <Image
              src="/images/Selfstorage-hero3.jpg"
              width={600}
              height={400}
              alt="Modern self-storage facility with orange roll-up doors"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            />
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Revenue per square foot calculations</h3>
                  <p className="text-muted-foreground">
                    Understanding unit mix optimization and pricing strategies across different unit sizes
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Occupancy and rental rate analysis</h3>
                  <p className="text-muted-foreground">
                    Seasonal trends, move-in/move-out patterns, and market penetration rates
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Management efficiency factors</h3>
                  <p className="text-muted-foreground">
                    Staffing models, operational costs, and automation impact on profitability
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Technology and security considerations</h3>
                  <p className="text-muted-foreground">
                    Modern access systems, surveillance, and customer management platforms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Understanding the Self-Storage Market
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Key market dynamics driving value in the self-storage sector
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
                  <h3 className="text-xl font-bold mb-2">Supply Constraints</h3>
                  <p className="text-muted-foreground">
                    Limited new development opportunities due to zoning restrictions and land costs. Annual supply growth of 2.1% creates favorable market conditions.
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
                  <h3 className="text-xl font-bold mb-2">Demand Drivers</h3>
                  <p className="text-muted-foreground">
                    Urbanization and downsizing trends creating consistent demand growth. Annual demand growth of 4.2% outpaces supply expansion.
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
                  <h3 className="text-xl font-bold mb-2">Technology Integration</h3>
                  <p className="text-muted-foreground">
                    Automated facilities and online booking improving operational efficiency. 78% of rentals now completed online, reducing overhead costs.
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
                  <h3 className="text-xl font-bold mb-2">Investment Appeal</h3>
                  <p className="text-muted-foreground">
                    Recession-resistant asset class with stable cash flows and predictable revenue streams across economic cycles.
                  </p>
                </div>
              </div>
            </div>
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
                      <span>Income approach with self-storage specific metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Stabilized NOI projections and lease-up analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Cap rate extraction from comparable sales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Storage Facility Types Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Self-Storage Facility Types We Appraise
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              From traditional drive-up units to specialized new generation multi storey self storage properties.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <Building2 className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Mult-Storey Self-Storage Facilities</h3>
                <p className="text-muted-foreground">
                  Premium storage with temperature and humidity control for sensitive items. High-density urban facilities maximizing storage capacity per land area.
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <Car className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Drive-Up Mini Storage</h3>
                <p className="text-muted-foreground">
                  Traditional ground-level units with direct vehicle access for convenience.
                </p>
              </CardContent>
            </Card>
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
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Get an appraisal that reflects operational performance, not just square footage.
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
