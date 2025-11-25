import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Project Gallery | Door Installation Portfolio",
  description:
    "View our portfolio of luxury door installations. Folding glass walls, multi-slide systems & pivot doors in Beverly Hills, Malibu, Newport Beach & more.",
  alternates: {
    canonical: "https://scenicdoors.com/gallery",
  },
  openGraph: {
    title: "Project Gallery | Door Installation Portfolio",
    description: "View our portfolio of luxury door installations across Southern California.",
    url: "https://scenicdoors.com/gallery",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
}

export default function GalleryPage() {
  const projects = [
    {
      title: "Beverly Hills Contemporary Estate",
      location: "Beverly Hills, CA",
      type: "Multi-Slide Glass Doors",
      image: "/beverly-hills-estate-multi-slide-glass-doors-luxury.jpg",
    },
    {
      title: "Malibu Beachfront Villa",
      location: "Malibu, CA",
      type: "Folding Glass Walls",
      image: "/malibu-beachfront-villa-folding-glass-walls-ocean.jpg",
    },
    {
      title: "Newport Beach Coastal Residence",
      location: "Newport Beach, CA",
      type: "Pivot Entry Door",
      image: "/newport-beach-coastal-home-pivot-entry-door-modern.jpg",
    },
    {
      title: "Santa Monica Modern Home",
      location: "Santa Monica, CA",
      type: "Folding Glass Walls",
      image: "/santa-monica-modern-home-folding-glass-walls-patio.jpg",
    },
    {
      title: "Pasadena Craftsman Update",
      location: "Pasadena, CA",
      type: "Custom Pivot Door",
      image: "/pasadena-craftsman-home-custom-pivot-door-traditio.jpg",
    },
    {
      title: "Laguna Beach Hillside Estate",
      location: "Laguna Beach, CA",
      type: "Multi-Slide System",
      image: "/laguna-beach-hillside-estate-multi-slide-doors-oce.jpg",
    },
    {
      title: "La Jolla Modern Masterpiece",
      location: "La Jolla, CA",
      type: "Folding Glass Walls",
      image: "/la-jolla-modern-home-folding-glass-walls-coastal-v.jpg",
    },
    {
      title: "Palm Desert Resort Living",
      location: "Palm Desert, CA",
      type: "Multi-Slide Glass Doors",
      image: "/palm-desert-resort-home-multi-slide-glass-doors-de.jpg",
    },
    {
      title: "Irvine Contemporary Design",
      location: "Irvine, CA",
      type: "Pivot Entry & Multi-Slide",
      image: "/irvine-contemporary-home-pivot-door-multi-slide-mo.jpg",
    },
  ]

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">Project Gallery</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of luxury door installations across Southern California
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm font-medium mb-1 text-accent">{project.type}</p>
                      <h3 className="font-serif text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white/90">{project.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's create something beautiful together
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
