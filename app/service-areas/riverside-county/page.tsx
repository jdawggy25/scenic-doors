import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, MapPin, Phone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Premium Door Installation in Riverside County | Scenic Doors",
  description:
    "Expert door installation in Riverside County. Serving Temecula, Palm Desert, Indian Wells, La Quinta, and Inland Empire communities. Factory-certified premium door installer.",
}

export default function RiversideCountyPage() {
  const cities = [
    "Temecula",
    "Palm Desert",
    "Indian Wells",
    "La Quinta",
    "Rancho Mirage",
    "Palm Springs",
    "Murrieta",
    "Corona",
    "Riverside",
    "Eastvale",
    "Jurupa Valley",
    "Norco",
    "Canyon Lake",
    "Lake Elsinore",
    "Menifee",
    "Hemet",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <BreadcrumbNav
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: "Riverside County", href: "/service-areas/riverside-county" },
        ]}
      />
      <main className="flex-1">
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
          <Image
            src="/modern-contemporary-home-with-large-glass-pivot-door.jpg"
            alt="Luxury door installation in Riverside County"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light text-foreground mb-6">
              Riverside County
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Premium Door Solutions for the Inland Empire & Desert Communities
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
                <span className="text-lg font-medium">Riverside County Service Area</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-8">
                Inland Empire's Premier Door Installation Specialists
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Scenic Doors brings over 25 years of expertise to Riverside County, serving the diverse communities of
                  the Inland Empire and Coachella Valley. From wine country estates in Temecula to luxurious desert
                  retreats in Indian Wells and Palm Desert, we understand the unique requirements of the region.
                </p>
                <p>
                  As factory-certified installers for LaCantina, Western Window Systems, and Fleetwood, we specialize in
                  door systems engineered to handle both the desert heat and cooler mountain climates while maintaining
                  energy efficiency and lasting beauty.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-12 text-center">
                Why Riverside County Trusts Scenic Doors
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Desert Climate Expertise",
                    description:
                      "Specialized knowledge in selecting and installing doors optimized for extreme heat, UV exposure, and temperature fluctuations.",
                  },
                  {
                    title: "Energy Efficiency Focus",
                    description:
                      "Advanced thermal performance solutions that keep your home comfortable year-round while reducing energy costs.",
                  },
                  {
                    title: "Regional Building Knowledge",
                    description:
                      "In-depth understanding of Riverside County building codes, HOA requirements, and permit processes across all communities.",
                  },
                  {
                    title: "Premium Service Standards",
                    description:
                      "Professional, courteous installation teams who treat your property with care and complete projects on schedule.",
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
                Riverside County Communities We Serve
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
                Serving all Riverside County areas.{" "}
                <Link href="/quote" className="text-accent hover:underline">
                  Contact us
                </Link>{" "}
                for service in your community.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-12 text-center">
                Door Systems Built for Riverside County
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Desert-Ready Folding Doors",
                    description:
                      "High-performance folding glass systems with superior UV protection and thermal insulation for desert living.",
                    image: "/bifold-folding-glass-doors-opening-to-pool-patio-m.jpg",
                  },
                  {
                    title: "Energy-Efficient Multi-Slide",
                    description:
                      "Advanced multi-slide doors with thermal breaks and low-E glass to maximize views while minimizing heat transfer.",
                    image: "/multi-slide-sliding-glass-doors-sleek-modern-minim.jpg",
                  },
                  {
                    title: "Architectural Entry Doors",
                    description:
                      "Statement-making pivot and custom entry doors that withstand the elements while creating stunning first impressions.",
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

        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-serif font-light mb-6">Transform Your Riverside County Home</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
              Experience premium door solutions designed for the Inland Empire. Schedule your free consultation today.
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
