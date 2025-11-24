import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, MapPin, Phone } from "lucide-react"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata = {
  title: "Premium Door Installation in Santa Monica | Scenic Doors",
  description:
    "Expert door installation services in Santa Monica, CA. Coastal-optimized folding glass walls, multi-slide systems, and pivot doors for beachfront homes.",
}

export default function SantaMonicaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/" },
          { label: "Los Angeles County", href: "/service-areas/los-angeles-county" },
          { label: "Santa Monica", href: "/service-areas/los-angeles-county/santa-monica" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-background via-secondary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Los Angeles County</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Coastal Door Solutions in Santa Monica
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Specializing in ocean-resistant, high-performance door systems designed for Santa Monica&apos;s unique
              coastal environment and lifestyle.
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

      {/* Featured Image */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/modern-santa-monica-beach-house-with-folding-glass.jpg"
              alt="Santa Monica Beach Home with Premium Doors"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Santa Monica Coastal Expertise
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Over 25 years of experience installing door systems that withstand salt air, marine humidity, and coastal
              weather while maximizing ocean views.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <CheckCircle2 className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Coastal-Optimized Materials</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Premium corrosion-resistant hardware and finishes engineered specifically for oceanfront environments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <CheckCircle2 className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Indoor-Outdoor Living</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Maximize your beachfront lifestyle with seamless transitions that bring the ocean breeze inside.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <CheckCircle2 className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Energy Efficiency</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced thermal performance to handle Santa Monica&apos;s temperature variations and reduce energy
                  costs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">
              Popular Coastal Door Solutions
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/folding-glass-walls-santa-monica-beach-house-ocean.jpg"
                    alt="Folding Glass Walls Santa Monica"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Coastal Folding Walls</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Marine-grade folding glass systems that fully retract to merge your home with the beach environment.
                  </p>
                  <Link href="/doors/folding" className="text-accent hover:text-accent/80 font-medium">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/multi-slide-doors-santa-monica-home-beach-patio.jpg"
                    alt="Multi-Slide Systems Santa Monica"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Beach Multi-Slide</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Smooth-gliding systems with salt-resistant hardware, perfect for oceanfront entertaining spaces.
                  </p>
                  <Link href="/doors/sliding" className="text-accent hover:text-accent/80 font-medium">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/coastal-pivot-entry-door-santa-monica-modern-beach.jpg"
                    alt="Pivot Entry Doors Santa Monica"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Coastal Pivot Doors</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Weather-sealed pivot entries that make a statement while standing up to coastal conditions.
                  </p>
                  <Link href="/doors/pivot" className="text-accent hover:text-accent/80 font-medium">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Served */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 text-center">
              Santa Monica Areas We Serve
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Santa Monica Beach</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Montana Avenue</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">North of Montana</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Sunset Park</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Ocean Park</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Mid-City</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-balance">
              Transform Your Santa Monica Home
            </h2>
            <p className="text-lg mb-8 text-pretty leading-relaxed opacity-90">
              Get a free consultation with our coastal door specialists. We&apos;ll assess your home and recommend the
              perfect solutions for beachfront living.
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
