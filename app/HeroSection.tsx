import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

interface HeroSectionProps {
  height: string
}

export function HeroSection({ height }: HeroSectionProps) {
  return (
    <section className={`relative w-full ${height} overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-cityscape.jpg" fill alt="Calgary cityscape" className="object-cover" priority />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 md:px-6 h-full">
        <div className="flex flex-col justify-center space-y-6 text-white max-w-4xl h-full">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
              Professional Commercial Property Appraisals
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
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
    </section>
  )
}
