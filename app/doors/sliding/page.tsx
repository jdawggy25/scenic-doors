import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SlidingDoorsPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center">
          <Image
            src="/multi-slide-sliding-glass-doors-modern-home-minimal.jpg"
            alt="Multi-slide glass doors"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">Multi-Slide Systems</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Effortless operation meets expansive design
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Minimalist Elegance</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Multi-slide door systems represent the pinnacle of modern architectural design. These sleek systems
                    feature multiple panels that glide effortlessly on precision tracks, creating expansive openings
                    with minimal effort.
                  </p>
                  <p>
                    With ultra-slim sightlines and smooth operation, multi-slide doors offer unobstructed views and a
                    seamless connection between interior and exterior spaces. They're perfect for contemporary homes
                    that demand both beauty and performance.
                  </p>
                  <p>
                    Our expert installation ensures whisper-quiet operation and perfect alignment for decades of
                    trouble-free use.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/sliding-glass-door-system-modern-architecture-min.jpg"
                  alt="Multi-slide door system"
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
                Why multi-slide systems are the ultimate choice
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Effortless Operation",
                  description: "Precision bearing systems make opening large panels easy with minimal force",
                },
                {
                  title: "Slim Sightlines",
                  description: "Minimal framing maximizes glass area and unobstructed views",
                },
                {
                  title: "Stacking Options",
                  description: "Panels stack neatly to one or both sides, maximizing opening width",
                },
                {
                  title: "Weather Performance",
                  description: "Advanced sealing systems provide excellent protection from elements",
                },
                {
                  title: "Large Panels",
                  description: "Individual panels up to 5 feet wide and 12 feet tall",
                },
                {
                  title: "Quiet Operation",
                  description: "Premium rollers and tracks ensure smooth, silent movement",
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
              We install multi-slide systems from the industry's finest manufacturers
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
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Experience Effortless Living</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Discover how multi-slide systems can transform your home
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
