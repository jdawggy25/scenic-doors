import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, MapPin, Phone } from "lucide-react"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata = {
  title: "Custom Door Installation in Pasadena | Scenic Doors",
  description:
    "Expert door installation in Pasadena, CA. Specializing in doors for Craftsman, Spanish Revival, and historic homes with modern performance.",
}

export default function PasadenaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/" },
          { label: "Los Angeles County", href: "/service-areas/los-angeles-county" },
          { label: "Pasadena", href: "/service-areas/los-angeles-county/pasadena" },
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
              Premium Door Solutions in Pasadena
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Honoring Pasadena&apos;s architectural heritage with door systems that blend historic character with
              modern performance and luxury.
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
              src="/craftsman-style-pasadena-home-with-modern-folding-.jpg"
              alt="Pasadena Historic Home with Modern Doors"
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
              Pasadena Architectural Specialists
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Expert in blending historic Craftsman, Spanish Revival, and Mediterranean styles with contemporary door
              technology and energy efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <CheckCircle2 className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Historic Home Expertise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sensitive installations that respect original architecture while adding modern functionality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <CheckCircle2 className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Energy Efficiency</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced thermal performance for Pasadena&apos;s hot summers while maintaining period-appropriate
                  aesthetics.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <CheckCircle2 className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Custom Craftsmanship</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bespoke solutions tailored to your home&apos;s unique character and architectural details.
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
              Pasadena Neighborhoods We Serve
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">San Rafael</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Linda Vista</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Oak Knoll</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Bungalow Heaven</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Madison Heights</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Hastings Ranch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-balance">Enhance Your Pasadena Home</h2>
            <p className="text-lg mb-8 text-pretty leading-relaxed opacity-90">
              Get expert guidance on door solutions that honor your home&apos;s heritage. Schedule a free consultation
              with our Pasadena specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/quote">Get Your Free Consultation</Link>
              </Button>
              <div className="flex items-center gap-2 text-primary-foreground">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">(626) 555-DOOR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
