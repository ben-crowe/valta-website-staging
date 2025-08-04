import { HeroSection } from "./HeroSection"
import ServiceCard from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, Shield, Users } from "lucide-react"

export const metadata = {
  title: "Valta Property Valuations | Commercial Real Estate Appraisal Services",
  description:
    "Professional commercial real estate appraisals across Western Canada. Specializing in multifamily, self-storage, and commercial properties. AACI certified with 2-3 week delivery.",
}

export default function HomePage() {
  return (
    <div>
      <HeroSection height="h-[70vh] md:h-[80vh] lg:h-[90vh]" />

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Our Appraisal Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We provide comprehensive real estate appraisal services for various property types across Western Canada
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Commercial Property"
              description="Professional appraisals for office buildings, retail spaces, and industrial properties"
              icon="Home"
            />
            <ServiceCard
              title="Multifamily Properties"
              description="Accurate valuations for apartment complexes and residential investment properties"
              icon="Lightbulb"
            />
            <ServiceCard
              title="Self-Storage Facilities"
              description="Specialized appraisals for self-storage and mini-storage facilities"
              icon="Palette"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Why Choose Valta</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Built by developers, for developers. We understand both sides of every transaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">Fast Delivery</h3>
                <p className="text-sm text-slate-600">2-3 week turnaround vs 4-6 week industry standard</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">AACI Certified</h3>
                <p className="text-sm text-slate-600">Professional standards and lender acceptance guaranteed</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">Developer Experience</h3>
                <p className="text-sm text-slate-600">Real-world development experience and market knowledge</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">Lender Ready</h3>
                <p className="text-sm text-slate-600">Reports accepted by all major financial institutions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">About Valta Property Valuations</h2>
              <p className="text-lg text-slate-600 mb-6">
                Founded by Chris Chornohos, an active developer and AACI-certified appraiser, Valta brings a unique
                perspective to commercial real estate valuation.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                We understand the pressures of financing deadlines, the complexities of development pro formas, and the
                real-world factors that create value in commercial properties.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">15+ years combined development and appraisal experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Specialized in multifamily and self-storage properties</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Serving property investors across Western Canada</span>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Card className="overflow-hidden shadow-xl rounded-xl border-0">
                <div className="relative h-[350px] md:h-[400px] lg:h-[450px] bg-slate-200 flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <div className="text-lg font-semibold mb-2">Photo Placeholder</div>
                    <div className="text-sm">Chris Chornohos</div>
                    <div className="text-xs">Founder & Principal Appraiser</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-2xl">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Ready to Get Your Property Appraised?
              </h2>
              <p className="text-xl mb-8 text-slate-700">
                Contact us today for a professional appraisal consultation. Same-day response guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                >
                  <Link href="/request-appraisal">
                    Request Appraisal
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900 bg-white/50 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                >
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
              </div>
              <div className="mt-6 text-slate-600">
                <p className="text-sm">
                  Call us at <strong>(403) 555-VALTA</strong> for immediate consultation
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
