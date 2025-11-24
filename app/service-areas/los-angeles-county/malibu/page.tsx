import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, MapPin, Phone } from "lucide-react"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata = {
  title: "Luxury Coastal Door Installation in Malibu | Scenic Doors",
  description:
    "Premier door installation for Malibu oceanfront estates. Marine-grade folding glass walls, multi-slide systems designed for luxury coastal living.",
}

export default function MalibuPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/" },
          { label: "Los Angeles County", href: "/service-areas/los-angeles-county" },
          { label: "Malibu", href: "/service-areas/los-angeles-county/malibu" },
        ]}
      />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-background via-secondary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Los Angeles County</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Oceanfront Door Excellence in Malibu
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Serving Malibu&apos;s luxury oceanfront estates with marine-grade door systems that embrace the California
              coastal lifestyle.
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
              src="/luxury-malibu-beach-house-with-folding-glass-walls.jpg"
              alt="Malibu Oceanfront Home with Premium Doors"
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
              Malibu Oceanfront Mastery
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Decades of experience crafting door solutions for Malibu&apos;s most exclusive beachfront properties,
              where performance meets uncompromising luxury.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <CheckCircle2 className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Marine-Grade Materials</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Premium stainless steel hardware and finishes engineered to withstand direct ocean exposure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <CheckCircle2 className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Panoramic Ocean Views</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Maximize those million-dollar Pacific views with minimal framing and maximum glass.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <CheckCircle2 className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Hurricane-Rated Options</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Impact-resistant systems that protect your home during severe coastal weather events.
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
              Malibu Communities We Serve
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Carbon Beach</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Malibu Colony</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Point Dume</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Paradise Cove</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Serra Retreat</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Big Rock</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-balance">
              Elevate Your Malibu Oceanfront Estate
            </h2>
            <p className="text-lg mb-8 text-pretty leading-relaxed opacity-90">
              Schedule your complimentary on-site consultation. Our Malibu specialists will assess your property and
              design the perfect coastal door solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/quote">Get Your Free Consultation</Link>
              </Button>
              <div className="flex items-center gap-2 text-primary-foreground">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">(310) 555-DOOR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
