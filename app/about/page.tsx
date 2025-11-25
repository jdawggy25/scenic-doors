import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Users, Wrench } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | 25+ Years of Excellence",
  description:
    "Learn about Scenic Doors - Southern California's trusted luxury door installer since 1998. Factory-certified team, 1000+ installations, 5-star rated service.",
  alternates: {
    canonical: "https://scenicdoors.com/about",
  },
  openGraph: {
    title: "About Scenic Doors | 25+ Years of Excellence",
    description: "Southern California's trusted luxury door installer since 1998. Factory-certified team.",
    url: "https://scenicdoors.com/about",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center">
          <Image
            src="/elegant-interior-with-modern-glass-doors-luxury-ho.jpg"
            alt="Scenic Doors professional installation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">About Scenic Doors</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              25+ years of excellence in luxury door installation across Southern California
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    For over 25 years, Scenic Doors has been the trusted name in luxury door installation throughout
                    Southern California. We've built our reputation on exceptional craftsmanship, unparalleled attention
                    to detail, and an unwavering commitment to customer satisfaction.
                  </p>
                  <p>
                    What started as a passion for architectural design has evolved into Southern California's premier
                    door installation company, serving the region's most discerning homeowners, architects, and
                    builders.
                  </p>
                  <p>
                    Today, we're proud to be factory-certified installers for the industry's leading brands, including
                    LaCantina, Western Window Systems, and Fleetwood. Our team brings decades of combined experience to
                    every project, ensuring flawless execution from consultation to installation.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/scenic-doors-team-professional-luxury-door-insta.jpg"
                  alt="Scenic Doors team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Us</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience the difference that true craftsmanship makes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-accent/20">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">Factory Certified</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Authorized installers for premium brands like LaCantina, Western Window Systems, and Fleetwood
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">25+ Years Experience</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Over two decades of excellence in luxury door installation across Southern California
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">Expert Team</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Skilled craftsmen dedicated to precision installation and customer satisfaction
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Wrench className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">Full Service</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    From consultation to installation and beyond, we're with you every step of the way
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Certified Excellence</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Factory-certified installers for the industry's finest brands
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="border-accent/20">
                <CardContent className="p-8 text-center">
                  <h3 className="font-serif text-2xl font-semibold mb-2">LaCantina Doors</h3>
                  <p className="text-muted-foreground">Factory Certified Installer</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardContent className="p-8 text-center">
                  <h3 className="font-serif text-2xl font-semibold mb-2">Western Window Systems</h3>
                  <p className="text-muted-foreground">Authorized Dealer & Installer</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardContent className="p-8 text-center">
                  <h3 className="font-serif text-2xl font-semibold mb-2">Fleetwood</h3>
                  <p className="text-muted-foreground">Certified Installation Partner</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can bring your vision to life with premium doors that elevate your home
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
              >
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
