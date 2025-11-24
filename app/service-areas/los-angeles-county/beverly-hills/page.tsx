import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, MapPin, Phone } from "lucide-react"

export const metadata = {
  title: "Luxury Door Installation in Beverly Hills | Scenic Doors",
  description:
    "Premium door installation services in Beverly Hills, CA. Specializing in custom folding glass walls, multi-slide systems, and pivot entry doors for luxury homes.",
}

export default function BeverlyHillsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <BreadcrumbNav
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: "Los Angeles County", href: "/service-areas/los-angeles-county" },
          { label: "Beverly Hills", href: "/service-areas/los-angeles-county/beverly-hills" },
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
              Luxury Door Installation in Beverly Hills
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Serving Beverly Hills&apos; most prestigious estates with premium door solutions that match the
              city&apos;s legendary elegance and sophistication.
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
              src="/luxury-beverly-hills-estate-with-modern-folding-gl.jpg"
              alt="Luxury Beverly Hills Home with Premium Doors"
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
              Beverly Hills Door Specialists
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              With over 25 years serving Beverly Hills&apos; luxury real estate market, we understand the exacting
              standards required for homes in the 90210.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <CheckCircle2 className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Beverly Hills Expertise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deep knowledge of local architecture, from classic Mediterranean estates to contemporary masterpieces.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <CheckCircle2 className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">White-Glove Service</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Discreet, professional installations that respect your privacy and home&apos;s pristine condition.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <CheckCircle2 className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Premium Brands</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Factory-certified for LaCantina, Fleetwood, Western Window Systems, and other luxury brands.
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
              Popular Door Solutions in Beverly Hills
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/luxury-folding-glass-walls-beverly-hills-estate-po.jpg"
                    alt="Folding Glass Walls Beverly Hills"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Folding Glass Walls</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Create seamless indoor-outdoor transitions perfect for Beverly Hills&apos; ideal climate and
                    entertaining lifestyle.
                  </p>
                  <Link href="/doors/folding" className="text-accent hover:text-accent/80 font-medium">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/pivot-entry-door-beverly-hills-mansion-modern-luxu.jpg"
                    alt="Pivot Entry Doors Beverly Hills"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Pivot Entry Doors</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Make a grand first impression with oversized pivot doors that embody Beverly Hills luxury and
                    architectural drama.
                  </p>
                  <Link href="/doors/pivot" className="text-accent hover:text-accent/80 font-medium">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/multi-slide-glass-doors-beverly-hills-home-city-vi.jpg"
                    alt="Multi-Slide Systems Beverly Hills"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Multi-Slide Systems</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Effortless operation and expansive views ideal for Beverly Hills homes with spectacular vistas and
                    outdoor living.
                  </p>
                  <Link href="/doors/sliding" className="text-accent hover:text-accent/80 font-medium">
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
              Beverly Hills Neighborhoods We Serve
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Beverly Hills Flats</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Trousdale Estates</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Beverly Park</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Beverly Hills Gateway</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Mulholland Estates</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow">
                <p className="font-medium text-foreground">Benedict Canyon</p>
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
              Ready to Elevate Your Beverly Hills Home?
            </h2>
            <p className="text-lg mb-8 text-pretty leading-relaxed opacity-90">
              Schedule a complimentary consultation with our door specialists. We&apos;ll visit your property to discuss
              your vision and provide expert recommendations.
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

      {/* Local Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">About Beverly Hills</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Beverly Hills is synonymous with luxury, elegance, and architectural excellence. Home to some of the
                world&apos;s most prestigious estates, the city demands the highest standards in every detail—including
                door systems that combine beauty, security, and performance.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From the iconic Beverly Hills Flats to the hillside estates of Trousdale and Beverly Park, each
                neighborhood has its unique character. Our door solutions are tailored to complement these distinctive
                architectural styles while meeting the city&apos;s stringent building codes and HOA requirements.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you&apos;re renovating a classic Mediterranean villa or building a contemporary masterpiece,
                Scenic Doors brings the expertise and attention to detail that Beverly Hills homeowners expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
