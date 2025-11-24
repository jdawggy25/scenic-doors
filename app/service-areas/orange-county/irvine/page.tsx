import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, MapPin, Phone } from "lucide-react"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata = {
  title: "Modern Door Installation in Irvine | Scenic Doors",
  description:
    "Contemporary door systems for Irvine's master-planned communities. Energy-efficient folding glass walls and multi-slide doors for modern living.",
}

export default function IrvinePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/" },
          { label: "Orange County", href: "/service-areas/orange-county" },
          { label: "Irvine", href: "/service-areas/orange-county/irvine" },
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
              Contemporary Door Solutions in Irvine
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Serving Irvine&apos;s modern communities with energy-efficient door systems designed for California
              contemporary living.
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
              src="/modern-contemporary-irvine-home-with-sleek-folding.jpg"
              alt="Irvine Modern Home with Premium Doors"
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
              Irvine Modern Living Experts
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Specializing in door solutions for Irvine&apos;s master-planned communities, from Shady Canyon to Orchard
              Hills and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <CheckCircle2 className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Energy Efficiency</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced thermal performance for Southern California climate with substantial energy savings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <CheckCircle2 className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Contemporary Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sleek, minimalist aesthetics that complement Irvine&apos;s modern architectural character.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <CheckCircle2 className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">HOA Compliance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Expert navigation of Irvine Company and community association requirements.
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
              Irvine Communities We Serve
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Shady Canyon</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Turtle Rock</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Orchard Hills</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Quail Hill</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Woodbury</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Northwood</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-balance">Modernize Your Irvine Home</h2>
            <p className="text-lg mb-8 text-pretty leading-relaxed opacity-90">
              Schedule a consultation with our Irvine door specialists. We&apos;ll help you select the perfect
              contemporary solution for your home.
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
