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
                Built by Developers, for Developers
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
