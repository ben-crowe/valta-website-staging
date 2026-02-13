"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Shield, Users, Award, Target, Eye, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // About page hero images carousel
  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=800&fit=crop&crop=entropy",
      alt: "Modern apartment complex development",
      overlayClass: "bg-gradient-to-r from-black/70 via-black/50 to-transparent"
    },
    {
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&h=800&fit=crop&crop=entropy",
      alt: "Development planning and blueprints",
      overlayClass: "bg-gradient-to-r from-black/75 via-black/50 to-transparent"
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=800&fit=crop&crop=entropy",
      alt: "Modern housing development",
      overlayClass: "bg-gradient-to-r from-black/70 via-black/50 to-transparent"
    }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative w-full h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImages[currentImageIndex].src}
            fill
            alt={heroImages[currentImageIndex].alt}
            className="object-cover"
            priority
          />
          {/* Dynamic overlay for text readability */}
          <div className={`absolute inset-0 ${heroImages[currentImageIndex].overlayClass}`} />
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentImageIndex
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 container px-4 md:px-6 h-full flex items-center">
          <div className="flex flex-col justify-center space-y-6 text-center text-white w-full">
            <div className="space-y-4 max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
                For Developers and Investors, by Developers and Investors
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
                We understand both sides of every transaction because we've been there ourselves.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Link href="/request-appraisal">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  Request Appraisal
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
        
        {/* Image Counter in Bottom Right Corner */}
        <div className="absolute bottom-4 right-4 z-20 text-white/60 text-xs font-medium">
          Image {currentImageIndex + 1}/{heroImages.length}
        </div>
      </section>


      {/* Unique Value Proposition Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Finally, an Appraisal Firm That Speaks Your Language
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mt-4">
              "We understand the pressures of putting a deal together, the urgency of a financing condition, and the real-world factors that create value."
            </p>
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
                  Accurate assessment of market conditions, valuation assumptions and true comparables based on real world experience.
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
                <h3 className="text-xl font-bold mb-4 text-slate-900">Accurate Valuations</h3>
                <p className="text-slate-600 leading-relaxed">
                  Sophisticated ability to project stabilized values critical for development, acquisition and renewal financing.
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
                <h3 className="text-xl font-bold mb-4 text-slate-900">Real Urgency</h3>
                <p className="text-slate-600 leading-relaxed">
                  Understanding of financing conditions and rate lock pressures that drive real estate deal timelines.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Company Vision & Mission - Creative Design */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-600 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Main Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-slate-900">
                Our North Star
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
            </div>

            {/* Vision and Mission Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Vision Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <Card className="relative bg-white border-0 shadow-2xl rounded-3xl overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-300">
                  <CardContent className="p-10">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <Eye className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-2">Vision</h3>
                        <div className="h-1 w-20 bg-blue-200"></div>
                      </div>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed font-medium">
                      To redefine excellence as the premier commercial real estate valuation provider in Canada
                    </p>
                    <Link href="/request-appraisal">
                      <div className="mt-6 flex items-center text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
                        <span className="text-sm font-semibold">Leading the future</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              </div>

              {/* Mission Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-400 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                <Card className="relative bg-white border-0 shadow-2xl rounded-3xl overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-300">
                  <CardContent className="p-10">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-slate-500 to-slate-600 flex items-center justify-center flex-shrink-0">
                        <Target className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-2">Mission</h3>
                        <div className="h-1 w-20 bg-slate-200"></div>
                      </div>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed font-medium">
                      Fast, high-quality appraisals for multifamily, self-storage, and commercial real estate. We help clients close deals faster, maximize returns, and solve housing challenges.
                    </p>
                    <Link href="/request-appraisal">
                      <div className="mt-6 flex items-center text-slate-600 hover:text-slate-700 transition-colors cursor-pointer">
                        <span className="text-sm font-semibold">Delivering today</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-16 text-center">
              <p className="text-slate-600 text-lg italic">
                "Where vision meets execution, value is created"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Valta Difference - Narrative Style */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-8">
                Here's What Actually Sets Us Apart
              </h2>
              
              {/* Two Column Narrative Content */}
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column */}
                <div className="prose prose-lg text-slate-600">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-slate-900">You know that sinking feeling when your appraisal takes six weeks?</span> Rate 
                    locks expire. Sellers get nervous. Deals die. That's why we turned the traditional timeline on its head—delivering 
                    comprehensive reports in 2-3 weeks without cutting corners. Because in commercial real estate, time kills deals.
                  </p>
                  
                  <p className="leading-relaxed mt-6">
                    <span className="font-semibold text-slate-900">Here's something most appraisers won't tell you:</span> half
                    the reports that cross lenders' desks come back for revisions. More delays. More frustration. We engineered our
                    process differently. Every report is peer reviewed and lender-ready on the first submission—no revisions, no back-and-forth,
                    just clean approvals that keep your project moving.
                  </p>
                </div>

                {/* Right Column */}
                <div className="prose prose-lg text-slate-600">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-slate-900">Sure, we have the AACI designation, but there's more to the story.</span> We understand construction draws and why your property will achieve that rental or cap rate,
                    because we've sat on your side of the table. We've sweated the same deadlines, slogged through negotiations with
                    lenders, and know exactly what keeps developers and investors up at night.
                  </p>
                  
                  <p className="leading-relaxed mt-6">
                    <span className="font-semibold text-slate-900">Think of us as your inside advantage.</span> While traditional 
                    appraisers see numbers on a spreadsheet, we see the story behind your project—the vision, the challenges, the 
                    opportunity. That perspective transforms a routine valuation into strategic intelligence that actually helps 
                    you close more deals with confidence.
                  </p>
                </div>
              </div>

              {/* Bottom Call-out */}
              <div className="mt-12 p-8 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl border-l-4 border-blue-500">
                <p className="text-xl text-slate-800 font-medium italic">
                  When your appraiser has actually been a developer and an owner, you get more than a report—you get a partner
                  who genuinely understands what's at stake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/01-updated-images/Apartment Lobby.jpg"
            alt="Modern apartment lobby"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay - darker on the right side for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/70 to-black/80" />
        </div>
        
        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl">
              <CardContent className="p-12 text-center">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                      Ready to Work with Someone Who's<br/>Been on Both Sides?
                    </h2>
                    <p className="text-xl text-white/90">
                      Experience the difference of working with an appraiser who truly understands commercial real estate challenges
                      and financing pressures.
                    </p>
                  </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-slate-900 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
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
                    className="border-white/50 text-white hover:bg-white/10 hover:text-white bg-transparent backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                  >
                    <Link href="/contact">Schedule a Consultation</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

