"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, ChevronLeft, ChevronRight } from "lucide-react"

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Professional Calgary and property images carousel
  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1920&h=800&fit=crop&crop=entropy",
      alt: "Calgary skyline at dusk",
      overlayClass: "bg-gradient-to-r from-black/70 via-black/50 to-transparent"
    },
    {
      src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&h=800&fit=crop&crop=entropy",
      alt: "Calgary downtown towers",
      overlayClass: "bg-gradient-to-b from-black/60 via-black/50 to-black/70"
    },
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=800&fit=crop&crop=entropy",
      alt: "Modern office building",
      overlayClass: "bg-gradient-to-r from-black/75 via-black/50 to-transparent"
    },
    {
      src: "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=1920&h=800&fit=crop&crop=entropy",
      alt: "Residential complex",
      overlayClass: "bg-gradient-to-br from-black/70 via-black/50 to-black/30"
    },
    {
      src: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&h=800&fit=crop&crop=entropy",
      alt: "Commercial property",
      overlayClass: "bg-gradient-to-r from-black/80 via-black/60 to-transparent"
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
    <section className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden">
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
      <div className="relative z-10 container px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-6 text-white max-w-4xl">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg">
              Professional Commercial Property Appraisals
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl drop-shadow-md">
              Expert valuations for multifamily, self-storage, and commercial properties across Western Canada.
              Lender-ready reports in 2-3 weeks.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 py-4">
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-blue-300">AACI</div>
              <div className="text-sm text-white/80">Certified</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-blue-300">200+</div>
              <div className="text-sm text-white/80">Clients Served</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-blue-300">2-3 Week</div>
              <div className="text-sm text-white/80">Delivery</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/request-appraisal">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
              >
                Request Appraisal
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (587) 801-5151
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
  )
}