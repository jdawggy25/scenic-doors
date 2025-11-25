import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Folding Glass Walls | Bi-Fold Door Installation",
  description:
    "Transform your space with folding glass walls. LaCantina certified installer. Seamless indoor-outdoor living. Free consultation in Southern California.",
  alternates: {
    canonical: "https://scenicdoors.com/doors/folding",
  },
  openGraph: {
    title: "Folding Glass Walls | Bi-Fold Door Installation",
    description: "Transform your space with folding glass walls. LaCantina certified installer.",
    url: "https://scenicdoors.com/doors/folding",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
}

export default function FoldingDoorsPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center">
          <Image
            src="/folding-glass-walls-bifold-doors-patio-opening-lux.jpg"
            alt="Folding glass walls opening to patio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">Folding Glass Walls</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Transform your space with seamless indoor-outdoor living
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Seamless Transitions</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Folding glass walls, also known as bifold doors, revolutionize the way you experience your home.
                    These elegant systems fold open to create expansive openings, seamlessly connecting indoor and
                    outdoor spaces.
                  </p>
                  <p>
                    Perfect for patios, pool areas, and entertainment spaces, folding glass walls offer unobstructed
                    views, abundant natural light, and the flexibility to fully open your space to the outdoors.
                  </p>
                  <p>
                    Our factory-certified installation ensures smooth operation, perfect alignment, and weather-tight
                    performance for years to come.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/bifold-doors-folding-open-luxury-patio-outdoor-liv.jpg"
                  alt="Bifold doors folding open"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Key Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Why folding glass walls are perfect for your home
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Expansive Openings",
                  description: "Create wall-to-wall openings up to 50 feet wide, perfect for entertaining",
                },
                {
                  title: "Space Saving",
                  description: "Panels fold neatly to the side, maximizing usable space when open",
                },
                {
                  title: "Smooth Operation",
                  description: "Premium hardware ensures effortless opening and closing",
                },
                {
                  title: "Energy Efficient",
                  description: "Multi-point locking and weather seals provide excellent insulation",
                },
                {
                  title: "Custom Configurations",
                  description: "Available in various panel counts and opening directions",
                },
                {
                  title: "Premium Materials",
                  description: "Aluminum or wood frames with low-E glass for optimal performance",
                },
              ].map((feature, index) => (
                <Card key={index} className="border-accent/20">
                  <CardContent className="p-6">
                    <CheckCircle className="w-8 h-8 text-accent mb-4" />
                    <h3 className="font-serif text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Premium Brands</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              We install folding glass walls from the industry's finest manufacturers
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {["LaCantina Doors", "Western Window Systems", "Fleetwood"].map((brand, index) => (
                <Card key={index} className="border-accent/20">
                  <CardContent className="p-8">
                    <h3 className="font-serif text-2xl font-semibold">{brand}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Transform Your Space Today</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how folding glass walls can enhance your home
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
                <Link href="/gallery">View Gallery</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
