import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Award, Shield, Star, Users, CheckCircle2, TrendingUp } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Section 1: Hero */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/luxury-folding-glass-doors-opening-to-beautiful-ou.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light text-white mb-6 text-balance">
            Where Exceptional Design Meets Uncompromising Quality
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed text-pretty">
            Scenic Doors crafts premium folding, sliding, and pivot door systems that transform spaces and elevate
            living. Serving discerning homeowners and architects throughout Southern California.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
              <Link href="/doors">Explore Our Collections</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8"
            >
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2: Trust Bar */}
      <section className="bg-secondary py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            <div className="flex flex-col items-center text-center space-y-2">
              <Award className="h-8 w-8 text-accent" />
              <p className="text-sm font-medium text-foreground">25+ Years Excellence</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Shield className="h-8 w-8 text-accent" />
              <p className="text-sm font-medium text-foreground">Licensed & Insured</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <CheckCircle2 className="h-8 w-8 text-accent" />
              <p className="text-sm font-medium text-foreground">Manufacturer Certified</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Star className="h-8 w-8 text-accent" />
              <p className="text-sm font-medium text-foreground">5-Star Rated</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 col-span-2 md:col-span-1">
              <Users className="h-8 w-8 text-accent" />
              <p className="text-sm font-medium text-foreground">1000+ Installations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Introduction */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground text-balance">
                Redefining the Threshold Between Inside and Out
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Scenic Doors, we believe a door is more than a passage—it's a statement. It's the seamless
                  connection between your interior sanctuary and the world beyond.
                </p>
                <p>
                  Since 1998, we've partnered with Southern California's most discerning homeowners, architects, and
                  builders to install door systems that don't just function beautifully—they inspire.
                </p>
                <p>
                  We're not just installers. We're craftsmen, consultants, and perfectionists who won't rest until every
                  panel glides flawlessly and every sight line is unobstructed.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center text-accent hover:text-accent/80 font-medium group"
              >
                Discover Our Story
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="lg:col-span-2">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/elegant-modern-door-detail-closeup-luxury-installa.jpg"
                  alt="Elegant door detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Door Collections */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-4">
              Premium Door Systems for Extraordinary Spaces
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Folding Glass Walls */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="/bifold-folding-glass-doors-opening-to-pool-patio-m.jpg"
                  alt="Folding glass walls"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-serif font-semibold text-foreground">Folding Glass Walls</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transform entire walls into seamless indoor-outdoor transitions. Our folding systems stack
                  effortlessly, maximizing your opening and your view.
                </p>
                <Link
                  href="/doors/folding"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium group"
                >
                  Explore Folding Doors
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            {/* Card 2: Multi-Slide Systems */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="/multi-slide-sliding-glass-doors-sleek-modern-minim.jpg"
                  alt="Multi-slide systems"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-serif font-semibold text-foreground">Multi-Slide Systems</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Effortless operation meets expansive design. Multi-slide systems offer unparalleled flexibility for
                  large openings while maintaining clean architectural lines.
                </p>
                <Link
                  href="/doors/sliding"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium group"
                >
                  Explore Sliding Doors
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            {/* Card 3: Pivot Entry Doors */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="/dramatic-oversized-pivot-entry-door-modern-luxury-.jpg"
                  alt="Pivot entry doors"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-serif font-semibold text-foreground">Pivot Entry Doors</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Make a statement from the moment guests arrive. Our pivot doors combine engineering precision with
                  bold architectural presence.
                </p>
                <Link
                  href="/doors/pivot"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium group"
                >
                  Explore Pivot Doors
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground">The Scenic Doors Difference</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground">Manufacturer Certified</h3>
              <p className="text-muted-foreground leading-relaxed">
                Factory-trained technicians ensure every installation meets exact specifications and warranty
                requirements.
              </p>
            </div>

            <div className="space-y-4">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground">Precision Installation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Meticulous attention to alignment, weatherproofing, and operation. We don't consider a project complete
                until every detail is perfect.
              </p>
            </div>

            <div className="space-y-4">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground">Comprehensive Service</h3>
              <p className="text-muted-foreground leading-relaxed">
                From initial consultation through post-installation support, we guide you through every step of your
                transformation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground">Premium Partnerships</h3>
              <p className="text-muted-foreground leading-relaxed">
                Authorized dealers for the industry's most respected brands: LaCantina, Western Window Systems,
                Fleetwood, and more.
              </p>
            </div>

            <div className="space-y-4">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Star className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground">25+ Years Experience</h3>
              <p className="text-muted-foreground leading-relaxed">
                Thousands of successful installations across Southern California have made us the region's most trusted
                specialty door experts.
              </p>
            </div>

            <div className="space-y-4">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground">Warranty Protection</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our workmanship guarantee complements manufacturer warranties, giving you complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Featured Projects */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-4">
              Our Work Speaks for Itself
            </h2>
            <p className="text-xl text-muted-foreground">
              Browse recent installations showcasing the transformative power of premium door systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="group relative h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <img
                src="/luxury-coastal-home-with-folding-glass-walls-openi.jpg"
                alt="Folding Glass Wall - Coastal Home"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium">Folding Glass Wall - Malibu Estate</p>
                </div>
              </div>
            </div>

            <div className="group relative h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <img
                src="/modern-multi-slide-glass-doors-minimalist-home-arc.jpg"
                alt="Multi-Slide System - Modern Home"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium">Multi-Slide System - Beverly Hills</p>
                </div>
              </div>
            </div>

            <div className="group relative h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <img
                src="/dramatic-oversized-pivot-entry-door-luxury-contemp.jpg"
                alt="Pivot Entry Door - Contemporary Home"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium">Pivot Entry Door - Laguna Beach</p>
                </div>
              </div>
            </div>

            <div className="group relative h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <img
                src="/bifold-glass-doors-poolside-patio-outdoor-living-l.jpg"
                alt="Outdoor Living - Poolside Installation"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium">Outdoor Living - Newport Coast</p>
                </div>
              </div>
            </div>

            <div className="group relative h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <img
                src="/sliding-glass-door-system-hillside-view-home-panor.jpg"
                alt="Hillside Installation - View Home"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium">Hillside Installation - La Jolla</p>
                </div>
              </div>
            </div>

            <div className="group relative h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <img
                src="/custom-contemporary-glass-door-system-modern-archi.jpg"
                alt="Custom Solution - Modern Architecture"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium">Custom Solution - Rancho Santa Fe</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 7: Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="text-accent text-5xl font-serif">"</div>
                <p className="text-muted-foreground leading-relaxed italic">
                  Scenic Doors transformed our entire home. The folding glass wall they installed opened our living room
                  to the backyard in a way we never imagined possible. Their team was professional, meticulous, and a
                  pleasure to work with.
                </p>
                <div className="pt-4 border-t">
                  <p className="font-semibold text-foreground">Michael & Sarah T.</p>
                  <p className="text-sm text-muted-foreground">Newport Beach</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="text-accent text-5xl font-serif">"</div>
                <p className="text-muted-foreground leading-relaxed italic">
                  As an architect, I'm extremely particular about contractors. Scenic Doors has become my go-to for
                  every high-end residential project. Their installation quality is impeccable.
                </p>
                <div className="pt-4 border-t">
                  <p className="font-semibold text-foreground">David R., AIA</p>
                  <p className="text-sm text-muted-foreground">Los Angeles</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="text-accent text-5xl font-serif">"</div>
                <p className="text-muted-foreground leading-relaxed italic">
                  The pivot door Scenic installed is now the centerpiece of our home's entry. Every guest comments on
                  it. Worth every penny for the craftsmanship and the 'wow' factor.
                </p>
                <div className="pt-4 border-t">
                  <p className="font-semibold text-foreground">Jennifer L.</p>
                  <p className="text-sm text-muted-foreground">La Jolla</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 8: Service Areas */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-6">
            Proudly Serving Southern California
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            From coastal estates in Malibu to hillside retreats in the Inland Empire, Scenic Doors brings premium door
            solutions to discerning clients throughout the region.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg text-foreground font-medium">
            <Link href="/service-areas/los-angeles-county" className="hover:text-accent transition-colors">
              Los Angeles County
            </Link>
            <span className="text-accent">•</span>
            <Link href="/service-areas/orange-county" className="hover:text-accent transition-colors">
              Orange County
            </Link>
            <span className="text-accent">•</span>
            <Link href="/service-areas/san-diego-county" className="hover:text-accent transition-colors">
              San Diego County
            </Link>
            <span className="text-accent">•</span>
            <Link href="/service-areas/riverside-county" className="hover:text-accent transition-colors">
              Riverside County
            </Link>
            <span className="text-accent">•</span>
            <Link href="/service-areas/ventura-county" className="hover:text-accent transition-colors">
              Ventura County
            </Link>
            <span className="text-accent">•</span>
            <Link href="/service-areas/santa-barbara-county" className="hover:text-accent transition-colors">
              Santa Barbara County
            </Link>
          </div>
        </div>
      </section>

      {/* Section 9: CTA Banner */}
      <section className="relative py-32">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/elegant-interior-with-modern-glass-doors-luxury-ho.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Schedule a complimentary consultation with our design specialists and receive a detailed project estimate.
          </p>
          <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10">
            <Link href="/quote">Request Your Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Section 10: Blog Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground">Insights & Inspiration</h2>
            <p className="text-xl text-muted-foreground mt-4">Expert advice and design ideas for your door project</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="group hover:shadow-lg transition-shadow overflow-hidden border-0">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/folding-glass-doors-indoor-outdoor-living-modern-p.jpg"
                  alt="Folding doors indoor outdoor living"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-accent transition-colors">
                  5 Ways Folding Doors Enhance Indoor-Outdoor Living
                </h3>
                <p className="text-muted-foreground">
                  Discover how folding glass walls can transform your home and lifestyle by seamlessly connecting your
                  interior spaces with outdoor areas.
                </p>
                <Link
                  href="/blog/folding-doors-indoor-outdoor"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium text-sm group"
                >
                  Read More
                  <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow overflow-hidden border-0">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/modern-door-selection-coastal-climate-weather-resi.jpg"
                  alt="Door selection for coastal climate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-accent transition-colors">
                  Choosing the Perfect Door System for Your Climate
                </h3>
                <p className="text-muted-foreground">
                  Learn which door features matter most for Southern California weather and how to ensure long-lasting
                  performance in coastal environments.
                </p>
                <Link
                  href="/blog/door-system-climate-guide"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium text-sm group"
                >
                  Read More
                  <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow overflow-hidden border-0">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/pivot-door-design-contemporary-architecture-modern.jpg"
                  alt="Pivot door design architecture"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-accent transition-colors">
                  The Art of Pivot Door Design
                </h3>
                <p className="text-muted-foreground">
                  Explore the architectural possibilities of statement pivot entry doors and how they create
                  unforgettable first impressions.
                </p>
                <Link
                  href="/blog/pivot-door-design"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium text-sm group"
                >
                  Read More
                  <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
