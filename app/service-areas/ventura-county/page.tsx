import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, MapPin, Phone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Premium Door Installation in Ventura County | Scenic Doors",
  description:
    "Expert door installation in Ventura County. Serving Ojai, Westlake Village, Thousand Oaks, Camarillo, and coastal communities. Factory-certified premium door installer.",
}

export default function VenturaCountyPage() {
  const cities = [
    "Ojai",
    "Westlake Village",
    "Thousand Oaks",
    "Camarillo",
    "Ventura",
    "Oxnard",
    "Malibu Lake",
    "Lake Sherwood",
    "Moorpark",
    "Simi Valley",
    "Port Hueneme",
    "Oak Park",
    "Agoura Hills",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <BreadcrumbNav
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: "Ventura County", href: "/service-areas/ventura-county" },
        ]}
      />
      <main className="flex-1">
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
          <Image
            src="/elegant-wood-and-glass-sliding-doors-mediterranean-s.jpg"
            alt="Luxury door installation in Ventura County"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light text-foreground mb-6">
              Ventura County
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Coastal Luxury & Valley Sophistication Combined
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
                <span className="text-lg font-medium">Ventura County Service Area</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-8">
                Ventura County's Trusted Door Installation Experts
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  For over 25 years, Scenic Doors has served Ventura County's most beautiful properties—from serene
                  estates in Ojai Valley to sophisticated homes in Westlake Village and coastal residences along the
                  Pacific. We understand the unique character of each Ventura County community.
                </p>
                <p>
                  As factory-certified installers for LaCantina, Western Window Systems, and Fleetwood, we bring the
                  highest level of expertise to every project. Whether you're in the mountains, valleys, or along the
                  coast, we deliver door systems that enhance your lifestyle and property value.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-12 text-center">
                The Scenic Doors Ventura County Advantage
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Diverse Climate Expertise",
                    description:
                      "From coastal salt air to inland valley heat, we understand how to select and install doors optimized for your specific microclimate.",
                  },
                  {
                    title: "Architectural Versatility",
                    description:
                      "Experience with Ventura County's wide range of architectural styles—from Spanish Mediterranean to Modern Ranch to Contemporary Luxury.",
                  },
                  {
                    title: "Factory-Certified Excellence",
                    description:
                      "Direct manufacturer certification ensures authentic products, proper installation techniques, and full warranty protection.",
                  },
                  {
                    title: "Local Building Expertise",
                    description:
                      "Comprehensive knowledge of Ventura County building codes, permit requirements, and HOA regulations.",
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
                Ventura County Communities We Serve
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
                Serving all Ventura County communities.{" "}
                <Link href="/quote" className="text-accent hover:underline">
                  Contact us
                </Link>{" "}
                for availability in your area.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-12 text-center">
                Premium Door Systems for Ventura County
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Versatile Folding Systems",
                    description:
                      "Accordion-style doors that adapt to any setting—perfect for valley estates, mountain retreats, or coastal homes.",
                    image: "/luxury-folding-glass-doors-opening-to-beautiful-ou.jpg",
                  },
                  {
                    title: "Contemporary Multi-Slide",
                    description:
                      "Sleek sliding door systems with minimal profiles that complement modern architecture while maximizing natural light.",
                    image: "/sliding-glass-door-system-hillside-view-home-panor.jpg",
                  },
                  {
                    title: "Custom Entry Solutions",
                    description:
                      "Distinctive pivot and traditional entry doors that reflect your home's character and welcome guests in style.",
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
            <h2 className="text-4xl sm:text-5xl font-serif font-light mb-6">Elevate Your Ventura County Home</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
              Experience the perfect blend of form and function. Schedule your complimentary consultation today.
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
