import Link from "next/link"
import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-accent-foreground mb-2">
                Ready to Transform Your Space?
              </h3>
              <p className="text-accent-foreground/80">
                Get a free consultation and quote from our design specialists.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 group"
            >
              <Link href="/quote">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Column 1: Logo & About */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h3 className="text-3xl font-serif font-bold tracking-wide">SCENIC DOORS</h3>
              <div className="w-16 h-1 bg-accent mt-3"></div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Southern California's premier luxury door installation company. Crafting premium door systems that
              transform spaces and elevate living since 1998.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Our Doors */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-accent">Our Doors</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/doors/folding" className="text-primary-foreground/80 hover:text-accent transition-colors inline-flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Folding Glass Walls
                </Link>
              </li>
              <li>
                <Link href="/doors/sliding" className="text-primary-foreground/80 hover:text-accent transition-colors inline-flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Multi-Slide Systems
                </Link>
              </li>
              <li>
                <Link href="/doors/pivot" className="text-primary-foreground/80 hover:text-accent transition-colors inline-flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Pivot Entry Doors
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-primary-foreground/80 hover:text-accent transition-colors inline-flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Project Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-accent">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors inline-flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-foreground/80 hover:text-accent transition-colors inline-flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Blog & Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors inline-flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-primary-foreground/80 hover:text-accent transition-colors inline-flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-accent">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+18005551234" className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-sm text-primary-foreground/60">Call Us</span>
                    <span className="font-medium">(800) 555-1234</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@scenicdoors.com" className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-sm text-primary-foreground/60">Email Us</span>
                    <span className="font-medium">info@scenicdoors.com</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-foreground/80">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-sm text-primary-foreground/60">Visit Us</span>
                    <span className="font-medium">123 Design Boulevard<br />Costa Mesa, CA 92626</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-foreground/80">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-sm text-primary-foreground/60">Hours</span>
                    <span className="font-medium">Mon–Fri: 8am–5pm<br />Sat: By appointment</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">Proudly Serving</h4>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/70">
            <Link href="/service-areas/los-angeles-county" className="hover:text-accent transition-colors">
              Los Angeles County
            </Link>
            <span className="text-primary-foreground/30">•</span>
            <Link href="/service-areas/orange-county" className="hover:text-accent transition-colors">
              Orange County
            </Link>
            <span className="text-primary-foreground/30">•</span>
            <Link href="/service-areas/san-diego-county" className="hover:text-accent transition-colors">
              San Diego County
            </Link>
            <span className="text-primary-foreground/30">•</span>
            <Link href="/service-areas/riverside-county" className="hover:text-accent transition-colors">
              Riverside County
            </Link>
            <span className="text-primary-foreground/30">•</span>
            <Link href="/service-areas/ventura-county" className="hover:text-accent transition-colors">
              Ventura County
            </Link>
            <span className="text-primary-foreground/30">•</span>
            <Link href="/service-areas/santa-barbara-county" className="hover:text-accent transition-colors">
              Santa Barbara County
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 bg-primary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Scenic Doors. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <span className="text-primary-foreground/30">|</span>
              <span>CA License #123456</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
