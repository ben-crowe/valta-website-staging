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
            src="/images/01-updated-images/Service- Commercial-Calgary Commerical Building.webp"
            fill
            alt="Modern commercial office building in Calgary"
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

      {/* Main Content Section - Commercial Properties We Appraise */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Commercial Properties We Appraise
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Expert valuations across all commercial property sectors.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <Image
              src="/images/commercial/professional-office-entrance.jpg"
              width={600}
              height={400}
              alt="Professional office interior with modern design"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            />
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Land & Development</h3>
                  <p className="text-muted-foreground">
                    Commercial sites, development sites, land assemblies, and highest-best-use analysis
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Office Buildings</h3>
                  <p className="text-muted-foreground">
                    Class A, B, C properties and professional buildings across all market segments
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Industrial Properties</h3>
                  <p className="text-muted-foreground">
                    Warehouses, manufacturing facilities, distribution centers, and flex space
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Retail Properties</h3>
                  <p className="text-muted-foreground">
                    Shopping centers, standalone retail, mixed-use developments, and specialty retail
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Western Canada Market Knowledge Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
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
                Ready to discuss your commercial property?
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Get expert analysis and market insights for your commercial real estate financing.
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
          </div>
        </div>
      </section>
    </div>
  )
}