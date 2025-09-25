"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Professional property valuation images carousel
  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=800&fit=crop&crop=entropy",
      alt: "Modern glass office building",
      overlayClass: "bg-gradient-to-r from-black/80 via-black/60 to-transparent"
    },
    {
      src: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1920&h=800&fit=crop&crop=entropy",
      alt: "Calgary downtown skyline",
      overlayClass: "bg-gradient-to-r from-black/75 via-black/50 to-transparent"
    },
    {
      src: "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=1920&h=800&fit=crop&crop=entropy",
      alt: "Modern residential complex",
      overlayClass: "bg-gradient-to-br from-black/80 via-black/50 to-transparent"
    },
    {
      src: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1920&h=800&fit=crop&crop=entropy",
      alt: "Professional business meeting",
      overlayClass: "bg-gradient-to-r from-black/80 via-black/60 to-black/30"
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop&crop=entropy",
      alt: "Professional office workspace",
      overlayClass: "bg-gradient-to-b from-black/70 via-black/50 to-black/40"
    },
    {
      src: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&h=800&fit=crop&crop=entropy",
      alt: "Commercial real estate complex",
      overlayClass: "bg-gradient-to-r from-black/75 via-black/50 to-transparent"
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
      <section className="relative w-full py-12 md:py-16 lg:py-24 overflow-hidden">
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
          <div className="flex flex-col items-center justify-center space-y-6 text-center text-white">
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
                Our Valuation Services
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
                Professional property appraisal services with specialized expertise across multiple property types.
              </p>
            </div>
          </div>
        </div>
        
      </section>

      {/* Multifamily Appraisals Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Multifamily Appraisals</h2>
                <p className="text-muted-foreground md:text-lg">
                  Our primary specialization with deep expertise in purpose-built rental apartments and townhome properties. We understand the complexities of income-producing multifamily properties and provide comprehensive market analysis.
                </p>
              </div>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Purpose-Built Apartments</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Purpose-Built Townhome</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Mixed Use</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Build to Rent Single Family</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Multifamily Land</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Market Rent Studies</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/services/multifamily">
                  <Button>
                    Learn More About Multifamily Appraisals
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative mx-auto">
              <Image
                src="/images/Multifamily Mid Rise.jpg"
                width={600}
                height={450}
                alt="Multifamily Apartment Complex"
                className="rounded-xl object-cover shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                style={{ filter: 'drop-shadow(0 15px 20px rgb(0 0 0 / 0.5))' }}
              />
              <div className="absolute -bottom-3 left-6 right-6 h-6 bg-black/60 blur-md rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Self-Storage Valuations Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative mx-auto lg:order-first">
              <Image
                src="/images/Self Storage Exterior.jpg"
                width={600}
                height={450}
                alt="Self Storage Facility"
                className="rounded-xl object-cover shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                style={{ filter: 'drop-shadow(0 15px 20px rgb(0 0 0 / 0.5))' }}
              />
              <div className="absolute -bottom-3 left-6 right-6 h-6 bg-black/60 blur-md rounded-full" />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Self-Storage Valuations</h2>
                <p className="text-muted-foreground md:text-lg">
                  Specialized knowledge in the rapidly growing self-storage market. We understand the unique operational aspects of self storage facilities, including occupancy rates, rental rates, and the impact of location and competition on facility performance.
                </p>
              </div>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>New Generation Self Storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Mini Storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Land Valuation</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/services/self-storage">
                  <Button>
                    Learn More About Self-Storage Valuations
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Property Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Commercial Property</h2>
                <p className="text-muted-foreground md:text-lg">
                  Professional appraisals for office, retail, and industrial land. We provide thorough analysis using all three approaches to value, with particular expertise in development-ready land and income-producing commercial properties.
                </p>
              </div>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Office buildings and campus</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Industrial and warehouse facilities</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Retail and shopping centres</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/services/commercial">
                  <Button>
                    Learn More About Commercial Property
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=450&fit=crop&crop=entropy"
                width={600}
                height={450}
                alt="Commercial Office Building"
                className="rounded-xl object-cover shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                style={{ filter: 'drop-shadow(0 15px 20px rgb(0 0 0 / 0.5))' }}
              />
              <div className="absolute -bottom-3 left-6 right-6 h-6 bg-black/60 blur-md rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Contact us today to discuss your property valuation needs and how we can help with your project.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/request-appraisal">
                <Button size="lg">
                  Request Appraisal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
