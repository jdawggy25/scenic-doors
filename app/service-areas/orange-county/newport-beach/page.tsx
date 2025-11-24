import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, MapPin, Phone } from "lucide-react"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata = {
  title: "Luxury Door Installation in Newport Beach | Scenic Doors",
  description:
    "Premium door systems for Newport Beach waterfront estates. Coastal-engineered folding glass walls and multi-slide doors for luxury harbor living.",
}

export default function NewportBeachPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/" },
          { label: "Orange County", href: "/service-areas/orange-county" },
          { label: "Newport Beach", href: "/service-areas/orange-county/newport-beach" },
        ]}
      />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-background via-secondary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Orange County</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Waterfront Door Excellence in Newport Beach
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Serving Newport Beach&apos;s most prestigious waterfront estates with marine-grade door systems designed
              for harbor living luxury.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/quote">Schedule Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 bg-transparent"
              >
                <Link href="/gallery">View Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/luxury-newport-beach-harbor-home-with-folding-glas.jpg"
              alt="Newport Beach Waterfront Home with Premium Doors"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Newport Beach Harbor Specialists
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Over 25 years perfecting door solutions for Newport Beach&apos;s waterfront properties, from Balboa Island
              to Harbor Island.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <CheckCircle2 className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Marine Environment Mastery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Premium materials and finishes engineered for Newport Harbor&apos;s saltwater environment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <CheckCircle2 className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Harbor View Optimization</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Maximize your yacht and harbor views with expansive glass systems and minimal framing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <CheckCircle2 className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Luxury Craftsmanship</h3>
                <p className="text-muted-foreground leading-relaxed">
                  White-glove service and meticulous installations worthy of Newport Beach&apos;s finest addresses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 text-center">
              Newport Beach Communities We Serve
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Balboa Island</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Corona del Mar</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Harbor Island</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Lido Isle</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Newport Coast</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Balboa Peninsula</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-balance">
              Transform Your Newport Beach Estate
            </h2>
            <p className="text-lg mb-8 text-pretty leading-relaxed opacity-90">
              Schedule a waterfront consultation with our Newport Beach specialists. We&apos;ll design the perfect door
              solution for your harbor lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/quote">Get Your Free Consultation</Link>
              </Button>
              <div className="flex items-center gap-2 text-primary-foreground">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">(949) 555-DOOR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
