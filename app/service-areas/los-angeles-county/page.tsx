import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, MapPin, Phone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Premium Door Installation in Los Angeles County | Scenic Doors",
  description:
    "Expert door installation services in Los Angeles County. Serving Beverly Hills, Malibu, Santa Monica, Pasadena, and surrounding areas. Factory-certified LaCantina, Fleetwood & Western Window Systems installer.",
}

export default function LosAngelesCountyPage() {
  const cities = [
    "Beverly Hills",
    "Malibu",
    "Santa Monica",
    "Pasadena",
    "Manhattan Beach",
    "Hermosa Beach",
    "Redondo Beach",
    "Calabasas",
    "West Hollywood",
    "Pacific Palisades",
    "Bel Air",
    "Brentwood",
    "Studio City",
    "Encino",
    "Sherman Oaks",
    "Glendale",
    "Burbank",
    "Arcadia",
    "San Marino",
    "La Cañada Flintridge",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <BreadcrumbNav
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: "Los Angeles County", href: "/service-areas/los-angeles-county" },
        ]}
      />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
          <Image
            src="/luxury-coastal-home-with-folding-glass-walls-openi.jpg"
            alt="Luxury door installation in Los Angeles County"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light text-foreground mb-6">
              Los Angeles County
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Premium Door Solutions for L.A.'s Most Prestigious Properties
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/quote">Request Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="tel:+18005551234">
                  <Phone className="mr-2 h-5 w-5" />
                  (800) 555-1234
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-accent mb-6">
                <MapPin className="h-6 w-6" />
                <span className="text-lg font-medium">Los Angeles County Service Area</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-8">
                Elevating Los Angeles Living with Exceptional Door Systems
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  For over 25 years, Scenic Doors has been the trusted choice for luxury door installations throughout
                  Los Angeles County. From the coastal estates of Malibu to the hillside mansions of Beverly Hills, we
                  bring unmatched expertise and craftsmanship to every project.
                </p>
                <p>
                  As factory-certified installers for LaCantina, Western Window Systems, and Fleetwood, we specialize in
                  transforming Southern California homes with doors that blur the line between indoor and outdoor
                  living. Our team understands the unique architectural styles and climate considerations of the Los
                  Angeles region, ensuring perfect installations every time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for LA County */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-12 text-center">
                Why Los Angeles Trusts Scenic Doors
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Local Expertise",
                    description:
                      "Deep understanding of L.A. building codes, permit requirements, and architectural styles from Mid-Century Modern to Contemporary Mediterranean.",
                  },
                  {
                    title: "Factory-Certified Installation",
                    description:
                      "Authorized installer for premium brands with direct factory training and support, ensuring warranty protection and flawless execution.",
                  },
                  {
                    title: "Coastal Climate Specialists",
                    description:
                      "Expert knowledge of salt air considerations, UV protection, and weather sealing for oceanfront properties from Malibu to Manhattan Beach.",
                  },
                  {
                    title: "White-Glove Service",
                    description:
                      "Meticulous attention to detail with respect for your property, timeline, and investment. We treat every home like our own.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-serif font-light text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cities We Serve */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-12 text-center">
                Communities We Serve in Los Angeles County
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {cities.map((city, index) => (
                  <div
                    key={index}
                    className="text-center py-4 px-2 rounded-lg border border-border hover:border-accent transition-colors"
                  >
                    <span className="text-foreground font-medium">{city}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-8 text-lg">
                Don't see your city? We serve all of Los Angeles County.{" "}
                <Link href="/quote" className="text-accent hover:underline">
                  Contact us
                </Link>{" "}
                to confirm service availability.
              </p>
            </div>
          </div>
        </section>

        {/* Door Systems Section */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-12 text-center">
                Premium Door Systems for Los Angeles Homes
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Folding Glass Doors",
                    description:
                      "Create seamless indoor-outdoor transitions perfect for L.A.'s year-round entertaining lifestyle. Ideal for patios, pools, and canyon views.",
                    image: "/bifold-folding-glass-doors-opening-to-pool-patio-m.jpg",
                  },
                  {
                    title: "Multi-Slide Doors",
                    description:
                      "Sleek, minimalist systems that disappear into walls, maximizing views of the ocean, mountains, or city skyline.",
                    image: "/multi-slide-sliding-glass-doors-sleek-modern-minim.jpg",
                  },
                  {
                    title: "Pivot Entry Doors",
                    description:
                      "Make a dramatic first impression with oversized pivot doors that define luxury at your entrance.",
                    image: "/dramatic-oversized-pivot-entry-door-modern-luxury-.jpg",
                  },
                ].map((item, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="relative h-80 mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-2xl font-serif font-light text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-serif font-light mb-6">
              Ready to Transform Your Los Angeles Home?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
              Schedule a free consultation with our Los Angeles County team and discover why the region's top architects
              and homeowners choose Scenic Doors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/quote">Request Free Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="tel:+18005551234">
                  <Phone className="mr-2 h-5 w-5" />
                  (800) 555-1234
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
