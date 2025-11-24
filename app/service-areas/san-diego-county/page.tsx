import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, MapPin, Phone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Premium Door Installation in San Diego County | Scenic Doors",
  description:
    "Expert door installation in San Diego County. Serving La Jolla, Del Mar, Rancho Santa Fe, Carlsbad, and all San Diego communities. Factory-certified premium door installer.",
}

export default function SanDiegoCountyPage() {
  const cities = [
    "La Jolla",
    "Del Mar",
    "Rancho Santa Fe",
    "Carlsbad",
    "Encinitas",
    "Solana Beach",
    "Cardiff-by-the-Sea",
    "Coronado",
    "Point Loma",
    "Ocean Beach",
    "Pacific Beach",
    "Mission Beach",
    "Carmel Valley",
    "Torrey Pines",
    "Fairbanks Ranch",
    "Santaluz",
    "Poway",
    "Scripps Ranch",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <BreadcrumbNav
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: "San Diego County", href: "/service-areas/san-diego-county" },
        ]}
      />
      <main className="flex-1">
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
          <Image
            src="/custom-contemporary-glass-door-system-modern-archi.jpg"
            alt="Luxury door installation in San Diego County"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light text-foreground mb-6">
              San Diego County
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Where Year-Round Beauty Meets Masterful Craftsmanship
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

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-accent mb-6">
                <MapPin className="h-6 w-6" />
                <span className="text-lg font-medium">San Diego County Service Area</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-8">
                San Diego's Trusted Premium Door Installation Partner
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  For over 25 years, Scenic Doors has served San Diego County's finest properties—from coastal estates
                  in La Jolla and Del Mar to hillside retreats in Rancho Santa Fe and beyond. We understand that San
                  Diego's perfect climate calls for door systems that truly connect indoor and outdoor spaces.
                </p>
                <p>
                  As factory-certified installers for LaCantina, Western Window Systems, and Fleetwood, we deliver the
                  expertise and precision that San Diego's discerning homeowners and architects demand. Every
                  installation is executed with meticulous attention to detail and respect for your property.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-12 text-center">
                The Scenic Doors San Diego Advantage
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Climate-Optimized Solutions",
                    description:
                      "Expert selection and installation of door systems perfectly suited to San Diego's coastal climate, maximizing energy efficiency and durability.",
                  },
                  {
                    title: "Architectural Expertise",
                    description:
                      "Deep understanding of San Diego's diverse architectural styles from Spanish Colonial to Contemporary Coastal, ensuring perfect design harmony.",
                  },
                  {
                    title: "Factory-Certified Excellence",
                    description:
                      "Direct training and certification from premium manufacturers ensures flawless installation and full warranty protection.",
                  },
                  {
                    title: "Local Building Mastery",
                    description:
                      "Comprehensive knowledge of San Diego County building codes, permit requirements, and Coastal Commission regulations.",
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

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-12 text-center">
                San Diego Communities We Proudly Serve
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                Serving all San Diego County communities.{" "}
                <Link href="/quote" className="text-accent hover:underline">
                  Contact us
                </Link>{" "}
                today.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-12 text-center">
                Premium Door Systems for San Diego Homes
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Folding Glass Walls",
                    description:
                      "Transform your space with accordion-style doors that open completely, perfect for San Diego's indoor-outdoor lifestyle.",
                    image: "/luxury-folding-glass-doors-opening-to-beautiful-ou.jpg",
                  },
                  {
                    title: "Multi-Slide Systems",
                    description:
                      "Sleek, contemporary sliding doors with panoramic glass panels that frame your ocean, canyon, or garden views.",
                    image: "/elegant-modern-door-detail-closeup-luxury-installa.jpg",
                  },
                  {
                    title: "Custom Entry Doors",
                    description:
                      "Make an unforgettable statement with oversized pivot doors and custom designs that reflect your unique style.",
                    image: "/dramatic-oversized-pivot-entry-door-luxury-contemp.jpg",
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

        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-serif font-light mb-6">Elevate Your San Diego Home Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
              Discover why San Diego's finest properties trust Scenic Doors. Schedule your complimentary consultation.
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
