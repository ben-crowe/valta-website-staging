"use client"

import Link from "next/link"
import { Menu, ChevronDown } from "lucide-react"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SiteHeader() {
  const router = useRouter()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const handleServiceClick = (href: string) => {
    setOpenDropdown(null)
    router.push(href)
  }


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-8 flex items-center space-x-2">
            <Image
              src="/images/ValtaLogo-Med-blue-2.png"
              alt="Valta Property Valuations"
              width={400}
              height={71}
              className="h-8 w-auto"
              priority
            />
          </Link>
          <nav className="hidden md:flex gap-8 items-center">
            <Link
              href="/about"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About
            </Link>
            <DropdownMenu open={openDropdown === 'services'} onOpenChange={(open) => setOpenDropdown(open ? 'services' : null)}>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Services
                <ChevronDown className="ml-1 h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleServiceClick("/services")}>
                  All Services
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleServiceClick("/services/multifamily")}>
                  Multifamily Appraisals
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleServiceClick("/services/self-storage")}>
                  Self-Storage Appraisals
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleServiceClick("/services/commercial")}>
                  Commercial Appraisals
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/request-appraisal"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Request Appraisal
            </Link>
            <Link
              href="/news"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              News/Blog
            </Link>
            <Link
              href="/careers"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link href="/request-appraisal">
              <Button
                size="sm"
                className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 font-medium"
              >
                Get Valuation
              </Button>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden bg-transparent">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                    About
                  </Link>
                  <div className="space-y-2">
                    <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
                      Services
                    </Link>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/services/multifamily"
                        className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        Multifamily Appraisals
                      </Link>
                      <Link
                        href="/services/self-storage"
                        className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        Self-Storage Appraisals
                      </Link>
                      <Link
                        href="/services/commercial"
                        className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        Commercial Appraisals
                      </Link>
                    </div>
                  </div>
                  <Link
                    href="/request-appraisal"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Request Appraisal
                  </Link>
                  <Link href="/news" className="text-sm font-medium transition-colors hover:text-primary">
                    News/Blog
                  </Link>
                  <Link href="/careers" className="text-sm font-medium transition-colors hover:text-primary">
                    Careers
                  </Link>
                  <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}