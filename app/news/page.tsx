"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "Western Canada Commercial Real Estate Market Outlook 2025",
    excerpt:
      "As we enter 2025, the Western Canadian commercial real estate market shows signs of stabilization after a volatile period. Interest rate adjustments and shifting investment patterns are creating new opportunities for savvy investors. Our analysis reveals key trends in cap rates, vacancy levels, and emerging asset classes that will define the market landscape.",
    image: "/placeholder.svg?height=400&width=600&text=Calgary+Skyline+2025",
    date: "January 15, 2025",
    category: "Market Analysis",
    author: "Michael Chen, AACI",
    slug: "western-canada-market-outlook-2025",
  },
  {
    id: 2,
    title: "Understanding Cap Rate Trends in Calgary's Multifamily Sector",
    excerpt:
      "Calgary's multifamily market has experienced significant cap rate compression over the past 18 months, with institutional investors driving demand for quality assets. We examine the factors behind this trend, including population growth, rental demand, and the impact of new supply on investment returns. Current cap rates range from 4.5% to 6.2% depending on asset quality and location.",
    image: "/placeholder.svg?height=400&width=600&text=Modern+Apartment+Building",
    date: "January 8, 2025",
    category: "Investment Analysis",
    author: "Sarah Thompson, AACI",
    slug: "calgary-multifamily-cap-rates",
  },
  {
    id: 3,
    title: "Self-Storage Investment Opportunities Across Alberta",
    excerpt:
      "The self-storage sector continues to outperform traditional commercial real estate asset classes, with Alberta leading Western Canada in new development activity. Rising urbanization and lifestyle changes are driving demand, while supply constraints in key markets create compelling investment opportunities. We analyze market fundamentals and identify emerging growth corridors.",
    image: "/placeholder.svg?height=400&width=600&text=Self+Storage+Facility",
    date: "December 28, 2024",
    category: "Industry Update",
    author: "David Rodriguez, AACI",
    slug: "alberta-self-storage-opportunities",
  },
  {
    id: 4,
    title: "Industrial Real Estate: The New Frontier for Institutional Capital",
    excerpt:
      "Industrial properties have emerged as the darling of institutional investors, driven by e-commerce growth and supply chain optimization. Western Canada's strategic location and transportation infrastructure position the region as a key logistics hub. We explore investment trends, rental growth patterns, and the impact of automation on facility design and valuation.",
    image: "/placeholder.svg?height=400&width=600&text=Modern+Warehouse+Facility",
    date: "December 20, 2024",
    category: "Market Analysis",
    author: "Jennifer Park, AACI",
    slug: "industrial-institutional-investment",
  },
  {
    id: 5,
    title: "Land Development Valuations in a Changing Regulatory Environment",
    excerpt:
      "Municipal policy changes and evolving zoning regulations are reshaping land development valuations across Western Canada. New density requirements, sustainability mandates, and infrastructure levies are impacting project feasibility and land values. Our comprehensive guide helps developers and investors navigate these complex valuation challenges.",
    image: "/placeholder.svg?height=400&width=600&text=Development+Site+Planning",
    date: "December 12, 2024",
    category: "Regulatory Update",
    author: "Michael Chen, AACI",
    slug: "land-development-regulatory-changes",
  },
  {
    id: 6,
    title: "Office Market Recovery: Lessons from Calgary's Downtown Core",
    excerpt:
      "Calgary's downtown office market is showing early signs of recovery as companies adapt to hybrid work models and seek quality space at competitive rates. Flight-to-quality trends are benefiting Class A properties while creating opportunities in the Class B segment. We analyze occupancy trends, rental rates, and the factors driving tenant decision-making in the post-pandemic era.",
    image: "/placeholder.svg?height=400&width=600&text=Calgary+Downtown+Office+Buildings",
    date: "November 30, 2024",
    category: "Market Analysis",
    author: "Sarah Thompson, AACI",
    slug: "calgary-office-market-recovery",
  },
]

export default function NewsPage() {
  const [selectedYear, setSelectedYear] = useState("all")
  const [visiblePosts, setVisiblePosts] = useState(6)
  const [email, setEmail] = useState("")

  const filteredPosts =
    selectedYear === "all" ? blogPosts : blogPosts.filter((post) => post.date.includes(selectedYear))

  const displayedPosts = filteredPosts.slice(0, visiblePosts)

  const loadMore = () => {
    setVisiblePosts((prev) => prev + 3)
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for subscribing to our newsletter!")
    setEmail("")
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-slate-900">
                Industry Insights & Updates
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
                Expert analysis on commercial real estate trends and market developments
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Main Blog Section */}
          <div className="lg:col-span-3">
            {/* Filter Section */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Label htmlFor="year-filter" className="text-sm font-medium">
                  Filter by year:
                </Label>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {displayedPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
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

                      <h2 className="text-xl font-bold leading-tight hover:text-blue-600 transition-colors">
                        <Link href={`/news/${post.slug}`}>{post.title}</Link>
                      </h2>

                      <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                      <Link href={`/news/${post.slug}`}>
                        <Button variant="outline" className="group bg-transparent">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            {visiblePosts < filteredPosts.length && (
              <div className="flex justify-center mt-12">
                <Button onClick={loadMore} size="lg" variant="outline">
                  Load More Articles
                </Button>
              </div>
            )}

            {/* No More Posts Message */}
            {visiblePosts >= filteredPosts.length && filteredPosts.length > 6 && (
              <div className="text-center mt-12">
                <p className="text-muted-foreground">You've reached the end of our articles.</p>
              </div>
            )}
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
                      Get the latest commercial real estate insights from Valta Property Valuations delivered to your
                      inbox.
                    </p>
                    <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                      <div className="space-y-2">
                        <Label htmlFor="newsletter-email" className="sr-only">
                          Email address
                        </Label>
                        <Input
                          id="newsletter-email"
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Subscribe
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>

              {/* Archive */}
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold">Archive</h3>
                    <div className="space-y-2">
                      <Link
                        href="/news?year=2025"
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        2025 ({blogPosts.filter((p) => p.date.includes("2025")).length} articles)
                      </Link>
                      <Link
                        href="/news?year=2024"
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        2024 ({blogPosts.filter((p) => p.date.includes("2024")).length} articles)
                      </Link>
                      <Link
                        href="/news?year=2023"
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        2023 (0 articles)
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold">Categories</h3>
                    <div className="space-y-2">
                      <Link
                        href="/news?category=market-analysis"
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        Market Analysis
                      </Link>
                      <Link
                        href="/news?category=investment-analysis"
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        Investment Analysis
                      </Link>
                      <Link
                        href="/news?category=industry-update"
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        Industry Update
                      </Link>
                      <Link
                        href="/news?category=regulatory-update"
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        Regulatory Update
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
