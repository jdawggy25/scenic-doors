import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Door Systems | Folding, Sliding & Pivot",
  description:
    "Explore our premium door systems: folding glass walls, multi-slide doors & pivot entry doors. Factory-certified installation in Southern California.",
  alternates: {
    canonical: "https://scenicdoors.com/doors",
  },
  openGraph: {
    title: "Our Door Systems | Folding, Sliding & Pivot",
    description: "Explore our premium door systems: folding glass walls, multi-slide doors & pivot entry doors.",
    url: "https://scenicdoors.com/doors",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
}

export default function DoorsPage() {
  const doorTypes = [
    {
      title: "Folding Glass Walls",
      description: "Transform entire walls into seamless indoor-outdoor transitions. Our bi-fold systems stack effortlessly, maximizing your opening and your view.",
      image: "/bifold-folding-glass-doors-opening-to-pool-patio-m.jpg",
      href: "/doors/folding",
      features: ["LaCantina Certified", "Up to 12 panels", "Aluminum or wood frames"]
    },
    {
      title: "Multi-Slide Systems",
      description: "Effortless operation meets expansive design. Multi-slide systems offer unparalleled flexibility for large openings while maintaining clean architectural lines.",
      image: "/multi-slide-sliding-glass-doors-sleek-modern-minim.jpg",
      href: "/doors/sliding",
      features: ["Pocket or stacking", "Floor-to-ceiling glass", "Motorized options"]
    },
    {
      title: "Pivot Entry Doors",
      description: "Make a statement from the moment guests arrive. Our pivot doors combine engineering precision with bold architectural presence.",
      image: "/dramatic-oversized-pivot-entry-door-modern-luxury-.jpg",
      href: "/doors/pivot",
      features: ["Up to 12ft tall", "Custom materials", "Concealed hardware"]
    },
  ]

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-serif font-light text-foreground mb-6">
              Premium Door Systems
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover our collection of luxury door systems designed to transform your space. 
              From seamless indoor-outdoor transitions to statement entries, we offer 
              factory-certified installation of the industry's finest brands.
            </p>
          </div>
        </div>
      </section>

      {/* Door Types */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {doorTypes.map((door, index) => (
              <div 
                key={door.title} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                    <img
                      src={door.image}
                      alt={door.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-4xl font-serif font-light text-foreground mb-6">{door.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">{door.description}</p>
                  <ul className="space-y-2 mb-8">
                    {door.features.map((feature) => (
                      <li key={feature} className="flex items-center text-muted-foreground">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href={door.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-light mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a complimentary consultation with our design specialists.
          </p>
          <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/quote">Get a Free Quote</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
