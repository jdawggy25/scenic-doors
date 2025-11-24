import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, MapPin, Phone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Premium Door Installation in Santa Barbara County | Scenic Doors",
  description:
    "Expert door installation in Santa Barbara County. Serving Montecito, Hope Ranch, Santa Barbara, and coastal communities. Factory-certified premium door installer.",
}

export default function SantaBarbaraCountyPage() {
  const cities = [
    "Montecito",
    "Hope Ranch",
    "Santa Barbara",
    "Goleta",
    "Carpinteria",
    "Summerland",
    "Isla Vista",
    "Santa Ynez",
    "Los Olivos",
    "Solvang",
    "Buellton",
    "Lompoc",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <BreadcrumbNav
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: "Santa Barbara County", href: "/service-areas/santa-barbara-county" },
        ]}
      />
      <main className="flex-1">
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
          <Image
            src="/spanish-colonial-revival-doors-opening-to-courtyar.jpg"
            alt="Luxury door installation in Santa Barbara County"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light text-foreground mb-6">
              Santa Barbara County
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Where Timeless Mediterranean Beauty Meets Modern Luxury
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
                <span className="text-lg font-medium">Santa Barbara County Service Area</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-8">
                Santa Barbara's Premier Luxury Door Installation Partner
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Scenic Doors has been privileged to serve Santa Barbara County's most distinguished properties for
                  over 25 years. From historic estates in Montecito and Hope Ranch to contemporary coastal homes
                  throughout the American Riviera, we understand the refined aesthetic and exacting standards of the
                  region.
                </p>
                <p>
                  As factory-certified installers for LaCantina, Western Window Systems, and Fleetwood, we specialize in
                  door systems that honor Santa Barbara's architectural heritage while embracing modern performance and
                  efficiency. Our installations seamlessly blend with Spanish Colonial Revival, Mediterranean, and
                  Contemporary styles alike.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-12 text-center">
                Why Santa Barbara Chooses Scenic Doors
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Architectural Preservation",
                    description:
                      "Deep respect for Santa Barbara's unique architectural guidelines and aesthetic standards, with expertise in both historic preservation and contemporary design.",
                  },
                  {
                    title: "Coastal Environment Mastery",
                    description:
                      "Specialized knowledge in protecting against marine environments with proper materials, sealing, and corrosion-resistant hardware.",
                  },
                  {
                    title: "Factory-Certified Precision",
                    description:
                      "Direct manufacturer training and certification ensures impeccable installation standards and comprehensive warranty protection.",
                  },
                  {
                    title: "Discretion & Professionalism",
                    description:
                      "White-glove service that respects your privacy, property, and schedule—hallmarks of our Santa Barbara commitment.",
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
                Santa Barbara Communities We Serve
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
                Proudly serving all Santa Barbara County.{" "}
                <Link href="/quote" className="text-accent hover:underline">
                  Contact us
                </Link>{" "}
                for service in your area.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-12 text-center">
                Door Systems for Santa Barbara's Finest Homes
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Heritage-Inspired Folding Doors",
                    description:
                      "Contemporary folding glass systems with profiles and finishes that complement traditional Santa Barbara architecture.",
                    image: "/bifold-glass-doors-poolside-patio-outdoor-living-l.jpg",
                  },
                  {
                    title: "Seamless Multi-Slide Systems",
                    description:
                      "Minimalist sliding doors that frame ocean views and garden vistas while maintaining architectural integrity.",
                    image: "/custom-contemporary-glass-door-system-modern-archi.jpg",
                  },
                  {
                    title: "Timeless Entry Doors",
                    description:
                      "Custom pivot and traditional entry doors crafted to honor Santa Barbara's aesthetic while embracing modern security and efficiency.",
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
            <h2 className="text-4xl sm:text-5xl font-serif font-light mb-6">Enhance Your Santa Barbara Estate</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
              Join Santa Barbara's most discerning property owners. Schedule your private consultation with Scenic
              Doors.
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
