import Link from "next/link"
import { Menu, ChevronDown } from "lucide-react"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-12 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src="/images/valta-logo.png"
              alt="Valta Property Valuations"
              width={200}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/about"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                <Link href="/services" className="flex items-center">
                  Services
                </Link>
                <ChevronDown className="ml-1 h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/services">All Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/multifamily">Multifamily Appraisals</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/self-storage">Self-Storage Valuations</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/commercial">Commercial Property</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                <Link href="/request-appraisal" className="flex items-center">
                  Request Appraisal
                </Link>
                <ChevronDown className="ml-1 h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/request-appraisal">Main Page</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/request-appraisal/intake">Intake Form</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/news"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              News/Blog
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
            <ModeToggle />
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
                        Self-Storage Valuations
                      </Link>
                      <Link
                        href="/services/commercial"
                        className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        Commercial Property
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Link
                      href="/request-appraisal"
                      className="text-sm font-medium transition-colors hover:text-primary"
                    >
                      Request Appraisal
                    </Link>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/request-appraisal/intake"
                        className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        Intake Form
                      </Link>
                    </div>
                  </div>
                  <Link href="/news" className="text-sm font-medium transition-colors hover:text-primary">
                    News/Blog
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
