import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Building,
  Factory,
  MapPin,
  FileText,
  TrendingUp,
  Calculator,
  CheckCircle,
  ShoppingCart,
  Download,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CommercialPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=800&fit=crop&crop=entropy"
            fill
            alt="Modern commercial office building"
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
                Commercial Property Appraisals
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Comprehensive valuations for office, industrial, retail, and land. Supporting your business decisions with accurate market insights.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/request-appraisal">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  Request Commercial Appraisal
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

      {/* Commercial Properties We Appraise */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Commercial Properties We Appraise
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <MapPin className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-center">Land & Development</h3>
                <p className="text-muted-foreground text-sm text-center mb-4">
                  Commercial sites, development sites, land assemblies, and highest-best-use analysis
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <Building className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-center">Office Buildings</h3>
                <p className="text-muted-foreground text-sm text-center mb-4">
                  Class A, B, C properties and professional buildings across all market segments
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <Factory className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-center">Industrial Properties</h3>
                <p className="text-muted-foreground text-sm text-center mb-4">
                  Warehouses, manufacturing facilities, distribution centers, and flex space
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <ShoppingCart className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-center">Retail Properties</h3>
                <p className="text-muted-foreground text-sm text-center mb-4">
                  Shopping centers, standalone retail, mixed-use developments, and specialty retail
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Commercial Property Expertise
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Comprehensive valuations across all commercial sectors
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Building className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Office Buildings</h3>
                <p className="text-muted-foreground text-sm">
                  Class A, B, and C office properties, from single-tenant buildings to multi-floor complexes
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Factory className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Industrial Facilities</h3>
                <p className="text-muted-foreground text-sm">
                  Warehouses, distribution centers, manufacturing facilities, and flex industrial spaces
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <MapPin className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Development Land</h3>
                <p className="text-muted-foreground text-sm">
                  Raw land, infill sites, and development-ready parcels with highest and best use analysis
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <FileText className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Income Analysis</h3>
                <p className="text-muted-foreground text-sm">
                  Cap rate analysis, rent roll review, and stabilized income projections
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <TrendingUp className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Market Analysis</h3>
                <p className="text-muted-foreground text-sm">
                  Comparable sales analysis, market trends, and absorption rate studies
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Calculator className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Investment Support</h3>
                <p className="text-muted-foreground text-sm">
                  Portfolio valuations, acquisition due diligence, and disposition strategies
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
                Our Commercial Valuation Methodology
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Comprehensive analysis using all three approaches to value
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
                  <h3 className="text-xl font-bold mb-4">Income Approach</h3>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Direct capitalization analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Discounted cash flow projections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Market rent analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Operating expense review</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">
                  <Building className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Cost Approach</h3>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Replacement cost new</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Depreciation analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Land value assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Site improvements valuation</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">
                  <TrendingUp className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Sales Comparison</h3>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Comparable sales analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Market trend adjustments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Location and size analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Property condition factors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Western Canada Market Knowledge Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Western Canada Market Knowledge
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Deep local expertise across major Western Canadian commercial markets.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Contact us today to discuss your property valuation needs and how we can help with your project.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Link href="/request-appraisal">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
                  Request Commercial Appraisal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
                <Download className="mr-2 h-5 w-5" />
                Download Commercial Market Report
              </Button>
            </div>
            <div className="text-center mt-6">
              <p className="text-muted-foreground">
                Serving investors, lenders, and developers across Western Canada.
              </p>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              <p>
                Questions? Call us at <strong>(587) 801-5151</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}