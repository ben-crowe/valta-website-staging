import { HeroSection } from "./HeroSection"
import ServiceCard from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Clock, Shield, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div>
      <HeroSection />

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Our Appraisal Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We provide comprehensive real estate appraisal services for developers and investors for various property types across Western Canada
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Multifamily Properties"
              description="In-depth valuations for purpose-built apartment and townhouse properties"
              icon="Lightbulb"
              backgroundImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=entropy"
            />
            <ServiceCard
              title="Self-Storage Facilities"
              description="Specialized appraisals for next generation self-storage and mini-storage facilities"
              icon="Palette"
              backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=entropy"
            />
            <ServiceCard
              title="Commercial Properties"
              description="Professional appraisals for office buildings, retail buildings, and industrial properties"
              icon="Home"
              backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=entropy"
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
              Built by developers and investors, for developers and investors. We have been on your side of the table and understand the importance of getting fast, accurate and lender-ready reports to fund a deal.
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
                <p className="text-sm text-slate-600">Professional, peer reviewed and lender-approved appraisals for commercial, multifamily, and self-storage properties.</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">Developer & Investor Experience</h3>
                <p className="text-sm text-slate-600">Real-world development and investor experience and deep market knowledge</p>
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

      {/* Our Difference Section - Conversational Style */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/01-updated-images/Aparment New Developemt Calgary.jpg"
            alt="Modern apartment development in Calgary"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay - darker on the right side for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/70 to-black/80" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">What Makes Valta Different?</h2>
          
          <div className="prose prose-lg max-w-none text-white/90">
            <p className="text-xl leading-relaxed mb-6">
              <span className="font-semibold text-white">Here's the thing about traditional appraisers:</span> They've 
              never sweated a rate lock deadline. Never felt the stress during a deal because the valuation took six weeks. 
              Never had to explain to a lender or mortgage broker why the appraisal report doesn't reflect the upside potential of a development or value add play.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              <span className="font-semibold text-white">We're different because we've been you.</span> Active developers 
              and investors who got tired of appraisals that missed the mark. So we became AACI-certified appraisers ourselves—combining 
              20+ years of boots-on-the-ground development and investor experience with professional valuation expertise. The result? 
              Reports that actually reflect current construction costs, land values, rental market dynamics, and what makes a project viable.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl my-8 border-l-4 border-blue-400">
              <p className="text-lg leading-relaxed mb-4">
                <span className="font-semibold text-white">When you work with Valta, you get:</span>
              </p>
              <div className="space-y-3 ml-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span className="text-white/90">Someone who speaks fluent "developer and investor"—no translation needed</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span className="text-white/90">Deep expertise in multifamily and self-storage—where the action is</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span className="text-white/90">Coverage across Western Canada—because opportunities don't stop at city limits</span>
                </div>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed">
              <span className="font-semibold text-white">Ready to experience the difference?</span> Let's talk about your 
              deal and how we can help you close faster with confidence.
            </p>
            
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-slate-900 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
              >
                <Link href="/about">
                  Learn More About Our Approach
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
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
                Contact us today for a professional appraisal. Same-day response guaranteed.
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
                  Call us at <strong>(587) 801-5151</strong> or email <strong>clientcare@valta.ca</strong> for immediate consultation
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
