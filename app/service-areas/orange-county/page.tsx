import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, MapPin, Phone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Premium Door Installation in Orange County | Scenic Doors",
  description:
    "Expert door installation services in Orange County. Serving Newport Beach, Laguna Beach, Irvine, and all OC communities. Factory-certified LaCantina, Fleetwood & Western Window Systems installer.",
}

export default function OrangeCountyPage() {
  const cities = [
    "Newport Beach",
    "Laguna Beach",
    "Corona del Mar",
    "Irvine",
    "Huntington Beach",
    "San Clemente",
    "Dana Point",
    "Laguna Niguel",
    "Mission Viejo",
    "Coto de Caza",
    "Newport Coast",
    "Crystal Cove",
    "Turtle Rock",
    "Shady Canyon",
    "Anaheim Hills",
    "Yorba Linda",
    "Villa Park",
    "Orange",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <BreadcrumbNav
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: "Orange County", href: "/service-areas/orange-county" },
        ]}
      />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
          <Image
            src="/modern-multi-slide-glass-doors-minimalist-home-arc.jpg"
            alt="Luxury door installation in Orange County"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light text-foreground mb-6">
              Orange County
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Coastal Elegance Meets Precision Craftsmanship
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
                <span className="text-lg font-medium">Orange County Service Area</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-8">
                Orange County's Premier Door Installation Specialists
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Scenic Doors has been transforming Orange County homes for over 25 years, bringing factory-certified
                  expertise to every oceanfront estate, hillside residence, and luxury community from Newport Beach to
                  San Clemente.
                </p>
                <p>
                  We understand the unique demands of coastal living in Orange County—from salt air protection to
                  maximizing those incredible Pacific views. As authorized installers for LaCantina, Western Window
                  Systems, and Fleetwood, we deliver door systems that combine stunning aesthetics with lasting
                  performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-12 text-center">
                Why Orange County Chooses Scenic Doors
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Coastal Expertise",
                    description:
                      "Specialized knowledge in oceanfront installations with proper sealing, corrosion-resistant hardware, and materials built for the marine environment.",
                  },
                  {
                    title: "Premium Brand Partnerships",
                    description:
                      "Factory-certified for the industry's leading door manufacturers, ensuring authentic products, full warranties, and expert installation.",
                  },
                  {
                    title: "Orange County Building Knowledge",
                    description:
                      "In-depth familiarity with local building codes, permit processes, and architectural review requirements across all OC communities.",
                  },
                  {
                    title: "Luxury Service Standards",
                    description:
                      "Concierge-level communication, pristine job sites, and meticulous attention to every detail that defines Orange County luxury.",
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
                Orange County Communities We Serve
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
                Serving all of Orange County.{" "}
                <Link href="/quote" className="text-accent hover:underline">
                  Contact us
                </Link>{" "}
                for your specific location.
              </p>
            </div>
          </div>
        </section>

        {/* Door Systems */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-12 text-center">
                Door Systems Perfect for Orange County Living
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Oceanfront Folding Doors",
                    description:
                      "Designed for coastal environments with corrosion-resistant hardware and superior sealing. Open your home to ocean breezes and sunset views.",
                    image: "/bifold-glass-doors-poolside-patio-outdoor-l.jpg",
                  },
                  {
                    title: "Contemporary Multi-Slide",
                    description:
                      "Clean lines and minimal profiles that complement Orange County's modern architectural aesthetic while maximizing views.",
                    image: "/sliding-glass-door-system-hillside-view-home-panor.jpg",
                  },
                  {
                    title: "Statement Entry Doors",
                    description:
                      "Custom pivot and contemporary entry doors that create unforgettable first impressions for your coastal estate.",
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

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-serif font-light mb-6">Transform Your Orange County Home</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
              Experience the Scenic Doors difference. Schedule your complimentary consultation today.
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
