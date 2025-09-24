import Image from "next/image"
import { Bell, Calendar, User, Tag, Lock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

// Sample blog data for visual effect only
const blogPosts = [
  {
    id: 1,
    title: "Western Canada Commercial Real Estate Market Outlook 2025",
    excerpt: "As we enter 2025, the Western Canadian commercial real estate market shows signs of stabilization after a volatile period. Interest rate adjustments and shifting investment patterns are creating new opportunities.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    date: "January 15, 2025",
    category: "Market Analysis",
    author: "Chris Chornohos, AACI",
  },
  {
    id: 2,
    title: "Understanding Cap Rate Trends in Calgary's Multifamily Sector",
    excerpt: "Calgary's multifamily market has experienced significant cap rate compression over the past 18 months, with institutional investors driving demand for quality assets.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    date: "January 8, 2025",
    category: "Investment Analysis",
    author: "Valta Team",
  },
  {
    id: 3,
    title: "Self-Storage Investment Opportunities Across Alberta",
    excerpt: "The self-storage sector continues to outperform traditional commercial real estate asset classes, with Alberta leading Western Canada in new development activity.",
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&h=600&fit=crop",
    date: "December 28, 2024",
    category: "Industry Update",
    author: "Chris Chornohos, AACI",
  },
  {
    id: 4,
    title: "Industrial Real Estate: The New Frontier for Institutional Capital",
    excerpt: "Industrial properties have emerged as the darling of institutional investors, driven by e-commerce growth and supply chain optimization.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    date: "December 20, 2024",
    category: "Market Analysis",
    author: "Valta Team",
  },
  {
    id: 5,
    title: "Land Development Valuations in a Changing Regulatory Environment",
    excerpt: "Municipal policy changes and evolving zoning regulations are reshaping land development valuations across Western Canada.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
    date: "December 12, 2024",
    category: "Regulatory Update",
    author: "Chris Chornohos, AACI",
  },
  {
    id: 6,
    title: "Office Market Recovery: Lessons from Calgary's Downtown Core",
    excerpt: "Calgary's downtown office market is showing early signs of recovery as companies adapt to hybrid work models.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    date: "November 30, 2024",
    category: "Market Analysis",
    author: "Valta Team",
  },
]

export default function NewsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full Blog Layout - Visible but non-interactive */}
      <div className="pointer-events-none select-none">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=800&fit=crop"
              fill
              alt="Calgary Commercial District"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
          </div>
          
          <div className="relative z-10 container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4 max-w-4xl">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                  Industry Insights & Updates
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                  Expert analysis on commercial real estate trends and market developments
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Blog Layout with Sidebar - Just top section */}
        <div className="container px-4 md:px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Main Blog Section */}
            <div className="lg:col-span-3">
              {/* Filter Section */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Label className="text-sm font-medium">Filter by year:</Label>
                  <div className="w-32 h-10 bg-gray-100 rounded-md border"></div>
                </div>
              </div>

              {/* Blog Posts Grid - Only show first 2 to keep above fold */}
              <div className="grid gap-8 md:grid-cols-2">
                {blogPosts.slice(0, 2).map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    <div className="relative">
                      <Image
                        src={post.image}
                        width={600}
                        height={400}
                        alt={post.title}
                        className="aspect-video object-cover w-full"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          <Tag className="h-3 w-3" />
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {post.author}
                          </div>
                        </div>
                        <h2 className="text-xl font-bold leading-tight">{post.title}</h2>
                        <p className="text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                        <Button variant="outline" className="group">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Newsletter Signup */}
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold">Stay Informed</h3>
                      <p className="text-sm text-muted-foreground">
                        Get the latest commercial real estate insights delivered to your inbox.
                      </p>
                      <div className="space-y-3">
                        <Input placeholder="your@email.com" disabled />
                        <Button className="w-full" disabled>Subscribe</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Semi-Transparent Overlay with Coming Soon - Centered in viewport */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
        <div className="text-center space-y-6">
          {/* Lock Icon */}
          <div className="h-20 w-20 rounded-full bg-white/10 backdrop-blur flex items-center justify-center mx-auto">
            <Lock className="h-10 w-10 text-white" />
          </div>
          
          {/* Coming Soon Content */}
          <div className="space-y-4 max-w-2xl px-4">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl text-white">
              Coming Soon
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Our industry insights blog is launching soon.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-6">
                <Bell className="mr-2 h-5 w-5" />
                Notify Me
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20">
                Return Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}