import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content - Compact */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & Contact */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-serif font-bold tracking-wide mb-4">SCENIC DOORS</h3>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <a href="tel:+18005551234" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-3.5 w-3.5" />
                (800) 555-1234
              </a>
              <a href="mailto:info@scenicdoors.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="h-3.5 w-3.5" />
                info@scenicdoors.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                Costa Mesa, CA
              </div>
            </div>
          </div>

          {/* Column 2: Our Doors */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-3 text-accent">Our Doors</h4>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/doors/folding" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Folding Glass Walls
                </Link>
              </li>
              <li>
                <Link href="/doors/sliding" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Multi-Slide Systems
                </Link>
              </li>
              <li>
                <Link href="/doors/pivot" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Pivot Entry Doors
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Project Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-3 text-accent">Company</h4>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Service Areas */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-3 text-accent">Service Areas</h4>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/service-areas/los-angeles-county" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Los Angeles County
                </Link>
              </li>
              <li>
                <Link href="/service-areas/orange-county" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Orange County
                </Link>
              </li>
              <li>
                <Link href="/service-areas/san-diego-county" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  San Diego County
                </Link>
              </li>
              <li>
                <Link href="/service-areas/ventura-county" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Ventura & Santa Barbara
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Slim */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-primary-foreground/50">
            <p>&copy; {new Date().getFullYear()} Scenic Doors. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms
              </Link>
              <span>CA Lic #123456</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
