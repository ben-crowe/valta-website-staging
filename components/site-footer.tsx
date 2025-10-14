import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-8 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_2fr]">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">About Valta</h3>
            <p className="text-sm text-muted-foreground">
              Professional commercial real estate appraisal services across Western Canada. Fast response, AACI designated appraisers specializing in multifamily, self-storage, and commercial properties.
            </p>
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
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">
                  Services
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
                <Link href="/services/multifamily" className="text-sm text-muted-foreground hover:text-foreground">
                  Multifamily Appraisals
                </Link>
              </li>
              <li>
                <Link href="/services/self-storage" className="text-sm text-muted-foreground hover:text-foreground">
                  Self Storage Appraisals
                </Link>
              </li>
              <li>
                <Link href="/services/commercial" className="text-sm text-muted-foreground hover:text-foreground">
                  Commercial Appraisals
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span>clientcare@valta.ca</span>
                <span className="text-slate-400">|</span>
                <span>(587) 801-5151</span>
              </div>
              <p className="text-sm text-muted-foreground mt-3">#300-4838 Richard Road SW, Calgary, AB T3E 6L1</p>
            </div>
            <div className="flex space-x-3">
              <Link href="https://facebook.com/valtavaluations" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com/valtavaluations"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com/company/valta-property-valuations"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Valta Property Valuations. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
