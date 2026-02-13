import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"

export default function FooterShowcase() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Footer Design Options</h1>
        <p className="text-center mb-12 text-gray-600">Scroll down to view different footer designs. Each one removes the logo to avoid duplication with the header.</p>
        
        {/* Footer Option 1: Compact 4-Column Grid */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold mb-4">Option 1: Compact 4-Column Grid</h2>
          <footer className="w-full border-t bg-white">
            <div className="container flex flex-col gap-8 py-8 md:py-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
                <div className="space-y-3">
                  <h3 className="text-lg font-medium">About Valta</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional commercial real estate appraisal services across Western Canada. Fast response, AACI designated appraisers specializing in multifamily, self-storage, and commercial properties.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-medium">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><Link href="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link></li>
                    <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link></li>
                    <li><Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">Services</Link></li>
                    <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-medium">Services</h3>
                  <ul className="space-y-2">
                    <li><Link href="/services/multifamily" className="text-sm text-muted-foreground hover:text-foreground">Multifamily Appraisals</Link></li>
                    <li><Link href="/services/self-storage" className="text-sm text-muted-foreground hover:text-foreground">Self Storage Appraisals</Link></li>
                    <li><Link href="/services/commercial" className="text-sm text-muted-foreground hover:text-foreground">Commercial Appraisals</Link></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-medium">Contact Info</h3>
                  <ul className="space-y-2">
                    <li className="text-sm text-muted-foreground">Calgary, AB</li>
                    <li className="text-sm text-muted-foreground">clientcare@valta.ca</li>
                    <li className="text-sm text-muted-foreground">(587) 801-5151</li>
                  </ul>
                  <div className="flex space-x-3">
                    <Link href="https://facebook.com/valtavaluations" className="text-muted-foreground hover:text-foreground">
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link href="https://instagram.com/valtavaluations" className="text-muted-foreground hover:text-foreground">
                      <Instagram className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      <Twitter className="h-5 w-5" />
                    </Link>
                    <Link href="https://linkedin.com/company/valta-property-valuations" className="text-muted-foreground hover:text-foreground">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="border-t pt-6 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Valta Property Valuations. All rights reserved.
              </div>
            </div>
          </footer>
        </div>

        {/* Footer Option 2: Centered with Icons */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold mb-4">Option 2: Centered Contact with Icons</h2>
          <footer className="w-full border-t bg-white">
            <div className="container py-12">
              <div className="max-w-6xl mx-auto">
                {/* Top Section - Company Info */}
                <div className="text-center mb-8">
                  <h3 className="text-lg font-semibold mb-3">Valta Property Valuations</h3>
                  <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                    Professional commercial real estate appraisal services across Western Canada. Fast response, AACI designated appraisers specializing in multifamily, self-storage, and commercial properties.
                  </p>
                </div>

                {/* Contact Info with Icons */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-muted-foreground">(587) 801-5151</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-muted-foreground">clientcare@valta.ca</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-muted-foreground">Calgary, AB</span>
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
                  <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link>
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">Services</Link>
                  <Link href="/services/multifamily" className="text-sm text-muted-foreground hover:text-foreground">Multifamily</Link>
                  <Link href="/services/self-storage" className="text-sm text-muted-foreground hover:text-foreground">Self Storage</Link>
                  <Link href="/services/commercial" className="text-sm text-muted-foreground hover:text-foreground">Commercial</Link>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 mb-8">
                  <Link href="https://facebook.com/valtavaluations" className="text-muted-foreground hover:text-foreground">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href="https://instagram.com/valtavaluations" className="text-muted-foreground hover:text-foreground">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="https://linkedin.com/company/valta-property-valuations" className="text-muted-foreground hover:text-foreground">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>

                {/* Copyright */}
                <div className="border-t pt-6 text-center text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Valta Property Valuations. All rights reserved. | 300, 4838 Richard Road SW, Calgary, AB, T3E 6L1
                </div>
              </div>
            </div>
          </footer>
        </div>

        {/* Footer Option 3: Minimal with CTA */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold mb-4">Option 3: Minimal with Call-to-Action</h2>
          <footer className="w-full border-t bg-white">
            <div className="container py-12">
              <div className="max-w-6xl mx-auto">
                {/* CTA Section */}
                <div className="bg-blue-50 rounded-lg p-8 mb-8 text-center">
                  <h3 className="text-xl font-semibold mb-2">Ready to Get Your Property Appraised?</h3>
                  <p className="text-muted-foreground mb-4">Fast, accurate appraisals from AACI designated professionals</p>
                  <div className="flex justify-center gap-4">
                    <Link href="/request-appraisal" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Request Appraisal <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link href="/contact" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      Contact Us
                    </Link>
                  </div>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                  <div>
                    <h4 className="font-medium mb-3">Company</h4>
                    <ul className="space-y-2">
                      <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link></li>
                      <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Services</h4>
                    <ul className="space-y-2">
                      <li><Link href="/services/multifamily" className="text-sm text-muted-foreground hover:text-foreground">Multifamily</Link></li>
                      <li><Link href="/services/self-storage" className="text-sm text-muted-foreground hover:text-foreground">Self Storage</Link></li>
                      <li><Link href="/services/commercial" className="text-sm text-muted-foreground hover:text-foreground">Commercial</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Contact</h4>
                    <ul className="space-y-2">
                      <li className="text-sm text-muted-foreground">(587) 801-5151</li>
                      <li className="text-sm text-muted-foreground">clientcare@valta.ca</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Follow Us</h4>
                    <div className="flex space-x-3">
                      <Link href="https://facebook.com/valtavaluations" className="text-muted-foreground hover:text-foreground">
                        <Facebook className="h-5 w-5" />
                      </Link>
                      <Link href="https://instagram.com/valtavaluations" className="text-muted-foreground hover:text-foreground">
                        <Instagram className="h-5 w-5" />
                      </Link>
                      <Link href="#" className="text-muted-foreground hover:text-foreground">
                        <Twitter className="h-5 w-5" />
                      </Link>
                      <Link href="https://linkedin.com/company/valta-property-valuations" className="text-muted-foreground hover:text-foreground">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Copyright with Address */}
                <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                  <span>© {new Date().getFullYear()} Valta Property Valuations. All rights reserved.</span>
                  <span>Calgary, Alberta, Canada</span>
                </div>
              </div>
            </div>
          </footer>
        </div>

        {/* Footer Option 4: Two-Row Simple */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold mb-4">Option 4: Two-Row Simple Layout</h2>
          <footer className="w-full border-t bg-white">
            <div className="container py-8">
              {/* Main Content Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                <div>
                  <h4 className="font-medium mb-2 text-sm">Valta Property Valuations</h4>
                  <p className="text-xs text-muted-foreground">
                    AACI designated appraisers serving Western Canada with fast, professional valuations.
                  </p>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center">
                  <Link href="/" className="text-xs text-muted-foreground hover:text-foreground">Home</Link>
                  <Link href="/about" className="text-xs text-muted-foreground hover:text-foreground">About</Link>
                  <Link href="/services" className="text-xs text-muted-foreground hover:text-foreground">Services</Link>
                  <Link href="/services/multifamily" className="text-xs text-muted-foreground hover:text-foreground">Multifamily</Link>
                  <Link href="/services/self-storage" className="text-xs text-muted-foreground hover:text-foreground">Self Storage</Link>
                  <Link href="/services/commercial" className="text-xs text-muted-foreground hover:text-foreground">Commercial</Link>
                  <Link href="/contact" className="text-xs text-muted-foreground hover:text-foreground">Contact</Link>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground mb-2">(587) 801-5151 | clientcare@valta.ca</p>
                  <div className="flex justify-end space-x-2">
                    <Link href="https://facebook.com/valtavaluations" className="text-muted-foreground hover:text-foreground">
                      <Facebook className="h-4 w-4" />
                    </Link>
                    <Link href="https://instagram.com/valtavaluations" className="text-muted-foreground hover:text-foreground">
                      <Instagram className="h-4 w-4" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      <Twitter className="h-4 w-4" />
                    </Link>
                    <Link href="https://linkedin.com/company/valta-property-valuations" className="text-muted-foreground hover:text-foreground">
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Bottom Row */}
              <div className="border-t pt-4 text-center text-xs text-muted-foreground">
                © {new Date().getFullYear()} Valta Property Valuations Ltd. | 300, 4838 Richard Road SW, Calgary, AB, T3E 6L1 | All rights reserved.
              </div>
            </div>
          </footer>
        </div>

      </div>
    </div>
  )
}