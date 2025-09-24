import Image from "next/image"
import { Bell, Calendar, User, Tag, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

// Sample blog data for visual effect only
const blogPosts = [
  {
    id: 1,
    title: "Western Canada Commercial Real Estate Market Outlook 2025",
    excerpt: "As we enter 2025, the Western Canadian commercial real estate market shows signs of stabilization after a volatile period...",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    date: "January 15, 2025",
    category: "Market Analysis",
    author: "Chris Chornohos, AACI",
  },
  {
    id: 2,
    title: "Understanding Cap Rate Trends in Calgary's Multifamily Sector",
    excerpt: "Calgary's multifamily market has experienced significant cap rate compression over the past 18 months...",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    date: "January 8, 2025",
    category: "Investment Analysis",
    author: "Valta Team",
  },
  {
    id: 3,
    title: "Self-Storage Investment Opportunities Across Alberta",
    excerpt: "The self-storage sector continues to outperform traditional commercial real estate asset classes...",
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&h=600&fit=crop",
    date: "December 28, 2024",
    category: "Industry Update",
    author: "Chris Chornohos, AACI",
  },
  {
    id: 4,
    title: "Industrial Real Estate: The New Frontier for Institutional Capital",
    excerpt: "Industrial properties have emerged as the darling of institutional investors...",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    date: "December 20, 2024",
    category: "Market Analysis",
    author: "Valta Team",
  },
]

export default function NewsPage() {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Blurred Blog Content Background */}
      <div className="pointer-events-none select-none">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden opacity-40 blur-[2px]">
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

        {/* Blog Grid - Blurred and Non-Interactive */}
        <div className="container px-4 md:px-6 py-12 opacity-30 blur-sm">
          <div className="grid gap-8 lg:grid-cols-3">
            {blogPosts.map((post) => (
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
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            {/* Lock Icon */}
            <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center shadow-lg">
              <Lock className="h-12 w-12 text-blue-600" />
            </div>
            
            {/* Coming Soon Content */}
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Coming Soon
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Our industry insights blog is launching soon. Get ready for expert analysis on commercial real estate trends across Western Canada.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 shadow-lg">
                  <Bell className="mr-2 h-5 w-5" />
                  Notify Me When Live
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" className="shadow-lg">
                  Return to Homepage
                </Button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg max-w-md">
              <p className="text-sm text-muted-foreground">
                Need immediate insights? Call us at{" "}
                <strong className="text-slate-900">(587) 801-5151</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}