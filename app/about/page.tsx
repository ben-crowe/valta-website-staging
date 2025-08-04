import Link from "next/link"
import { ArrowRight, Clock, Shield, Users, Award, Target, Eye, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-slate-100 to-blue-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full">
          <div className="container px-4 md:px-6 h-full">
            <div className="flex items-center h-full">
              <div className="max-w-2xl">
                <div className="flex flex-col justify-center space-y-6">
                  <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-slate-900">
                      Built by Developers, for Developers
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600">
                      We understand both sides of every transaction because we've been there ourselves.
                    </p>
                  </div>
                  <Card className="bg-blue-50 border-l-4 border-blue-500 shadow-lg rounded-xl border-0">
                    <CardContent className="p-4">
                      <p className="text-blue-800 font-semibold">
                        Trusted by 200+ property investors and lenders across Western Canada
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Meet Chris Chornohos, Founder & Principal Appraiser
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-yellow-50 border-l-4 border-yellow-400 shadow-lg rounded-xl border-0">
                <CardContent className="p-4">
                  <p className="text-yellow-800 text-sm font-semibold mb-2">[PLACEHOLDER BIO BELOW - TO BE UPDATED]</p>
                </CardContent>
              </Card>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Chris Chornohos brings over 15 years of combined experience in property development and commercial
                  real estate appraisal to Valta Property Valuations. As both a practicing developer and AACI-certified
                  appraiser, Chris has a unique perspective that bridges the gap between theoretical valuation and
                  real-world development challenges.
                </p>
                <p>
                  Prior to founding Valta, Chris developed multiple multifamily and commercial projects across Western
                  Canada, giving him firsthand experience with financing, construction, and market dynamics.
                </p>
              </div>
              <Card className="bg-yellow-50 border-l-4 border-yellow-400 shadow-lg rounded-xl border-0">
                <CardContent className="p-4">
                  <p className="text-yellow-800 text-sm font-semibold">[END PLACEHOLDER - REPLACE WITH ACTUAL BIO]</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-l-4 border-blue-500 shadow-lg rounded-xl border-0">
                <CardContent className="p-4">
                  <p className="text-blue-800 font-semibold italic">
                    "We understand the pressures of a proforma, the urgency of a financing deadline, and the real-world
                    factors that create value."
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Card className="overflow-hidden shadow-xl rounded-xl border-0">
                <div className="w-80 h-96 bg-slate-200 flex items-center justify-center">
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

      {/* Unique Value Proposition Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Finally, an Appraisal Firm That Speaks Your Language
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <Card className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Enhanced Understanding</h3>
                <p className="text-slate-600 leading-relaxed">
                  Accurate assessment of pro forma assumptions and construction practicalities based on real development
                  experience.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">More Accurate Valuations</h3>
                <p className="text-slate-600 leading-relaxed">
                  Sophisticated ability to project stabilized values critical for development financing and investment
                  decisions.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Innate Urgency Appreciation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Understanding of financing deadlines and rate lock pressures that drive real estate development
                  timelines.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Projects Showcase */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Not Just an Appraiser - An Active Developer
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl">
              Chris isn't just providing appraisal services to developers - he IS a developer. This gives Valta unique
              insights into what really drives property value.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-12">
            <Card className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 rounded-xl">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <div className="text-center text-slate-600">
                    <div className="text-lg font-semibold mb-2">[PLACEHOLDER PROJECT 1]</div>
                    <div className="text-sm">Project Image Here</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">
                  PLACEHOLDER CONTENT
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
                  45-Unit Multifamily Development
                </h3>
                <p className="text-slate-600 text-sm">
                  [Placeholder description of the multifamily development project, including key details about size,
                  location, and development challenges overcome.]
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 rounded-xl">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <div className="text-center text-slate-600">
                    <div className="text-lg font-semibold mb-2">[PLACEHOLDER PROJECT 2]</div>
                    <div className="text-sm">Project Image Here</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">
                  PLACEHOLDER CONTENT
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
                  Mixed-Use Commercial Project
                </h3>
                <p className="text-slate-600 text-sm">
                  [Placeholder description of the mixed-use commercial project, highlighting the complexity of multi-use
                  development and market positioning.]
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 rounded-xl">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <div className="text-center text-slate-600">
                    <div className="text-lg font-semibold mb-2">[PLACEHOLDER PROJECT 3]</div>
                    <div className="text-sm">Project Image Here</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">
                  PLACEHOLDER CONTENT
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
                  Self-Storage Facility
                </h3>
                <p className="text-slate-600 text-sm">
                  [Placeholder description of the self-storage facility development, emphasizing operational
                  understanding and market analysis expertise.]
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg border-slate-300 hover:bg-slate-50"
            >
              View Chris's Complete Development Portfolio
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Our Commitment to Excellence
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-900">Speed with Precision</h3>
                <p className="text-sm text-slate-600">2-3 week delivery vs 4-6 week industry standard</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-900">Expert-Led Specialization</h3>
                <p className="text-sm text-slate-600">Deep focus on multifamily and self-storage</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-900">Clarity</h3>
                <p className="text-sm text-slate-600">Lender-ready reports upon delivery</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-900">Client-Aligned Service</h3>
                <p className="text-sm text-slate-600">Understanding both sides of every transaction</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-900">Forward-Thinking</h3>
                <p className="text-sm text-slate-600">Tech-enhanced traditional expertise</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Mission Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Eye className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
                </div>
                <Card className="bg-blue-50 shadow-lg rounded-xl border-0">
                  <CardContent className="p-8">
                    <p className="text-xl text-slate-700 leading-relaxed">
                      To redefine excellence as the premier commercial real estate valuation provider in Canada
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
                </div>
                <Card className="bg-blue-50 shadow-lg rounded-xl border-0">
                  <CardContent className="p-8">
                    <p className="text-xl text-slate-700 leading-relaxed">
                      High-quality appraisals for multifamily, self-storage, and commercial real estate. We help clients
                      close deals faster, maximize returns, and solve housing challenges.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Promise Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">The Valta Difference</h2>
              <p className="text-xl text-slate-600">
                Professional accuracy with personalized service - we speak your language and help you de-risk your
                project
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mt-12">
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">2-3 Week Delivery Commitment</h3>
                  <p className="text-sm text-slate-600">Guaranteed turnaround faster than industry standard</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">Lender-Ready Reports Upon Delivery</h3>
                  <p className="text-sm text-slate-600">No revisions needed - accepted by all major lenders</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Award className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">AACI Certified Quality Assurance</h3>
                  <p className="text-sm text-slate-600">Professional standards and regulatory compliance guaranteed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="container px-4 md:px-6">
          <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-2xl rounded-2xl">
            <CardContent className="p-12 text-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                    Ready to Work with Someone Who's Been on Both Sides?
                  </h2>
                  <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                    Experience the difference of working with an appraiser who truly understands development challenges
                    and financing pressures.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-slate-900 text-white hover:bg-slate-800 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                  >
                    <Link href="/request-appraisal">
                      Request Your Appraisal
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900 bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                  >
                    <Link href="/contact">Schedule a Consultation</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
