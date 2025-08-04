import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-8 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Your Business Name</h3>
            <p className="text-sm text-muted-foreground">Your business description and mission statement.</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-muted-foreground hover:text-foreground">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">
                  Design Consultation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">
                  Full Space Transformation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">
                  Custom Styling
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Your City, State</li>
              <li className="text-sm text-muted-foreground">your-email@domain.com</li>
              <li className="text-sm text-muted-foreground">Your phone number</li>
            </ul>
            <div className="flex space-x-3">
              <Link href="https://facebook.com/yourbusiness" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com/yourbusiness" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} DesignStudio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
