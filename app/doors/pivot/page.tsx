import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PivotDoorsPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center">
          <Image
            src="/oversized-pivot-entry-door-modern-luxury-home-archit.jpg"
            alt="Oversized pivot entry door"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">Pivot Entry Doors</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Make a bold architectural statement
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Dramatic Presence</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Pivot doors are the ultimate statement piece for luxury homes. Unlike traditional hinged doors,
                    pivot doors rotate on a central axis, allowing for dramatic proportions and effortless operation
                    even with massive panels.
                  </p>
                  <p>
                    These architectural masterpieces can reach impressive heights of 12+ feet while maintaining perfect
                    balance and smooth operation. The unique pivot mechanism creates a striking visual effect as the
                    door opens, commanding attention and setting the tone for your entire home.
                  </p>
                  <p>
                    Our precision installation ensures flawless alignment and reliable performance for your grand
                    entrance.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/pivot-door-luxury-entry-modern-home-oversized-arch.jpg"
                  alt="Luxury pivot entry door"
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
                Why pivot doors are the choice for discerning homeowners
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Oversized Capability",
                  description: "Create dramatic entrances with doors up to 12+ feet tall and 5+ feet wide",
                },
                {
                  title: "Balanced Operation",
                  description: "Central pivot point makes even massive doors easy to open with minimal effort",
                },
                {
                  title: "Striking Visual",
                  description: "Unique opening motion creates an unforgettable first impression",
                },
                {
                  title: "Custom Design",
                  description: "Endless material and finish options to match your architectural vision",
                },
                {
                  title: "Minimal Hardware",
                  description: "Clean, uncluttered appearance with concealed mechanisms",
                },
                {
                  title: "Secure & Weathertight",
                  description: "Multi-point locking and advanced seals provide excellent security",
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

        {/* Materials */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Premium Materials</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Choose from a wide range of materials and finishes
            </p>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {["Solid Wood", "Steel", "Aluminum", "Glass & Metal"].map((material, index) => (
                <Card key={index} className="border-accent/20">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold">{material}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Create Your Grand Entrance</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Let's design a pivot door that makes an unforgettable statement
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
