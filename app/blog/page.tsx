import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Ways Folding Doors Enhance Indoor-Outdoor Living",
      excerpt:
        "Discover how folding glass walls can transform your home and lifestyle by seamlessly connecting your interior spaces with outdoor areas. Learn about design considerations and real-world benefits.",
      image: "folding+glass+doors+indoor+outdoor+living+modern+patio+design",
      category: "Design Ideas",
      date: "March 15, 2024",
      readTime: "5 min read",
      slug: "folding-doors-indoor-outdoor",
    },
    {
      id: 2,
      title: "Choosing the Perfect Door System for Your Climate",
      excerpt:
        "Learn which door features matter most for Southern California weather and how to ensure long-lasting performance in coastal environments. From corrosion resistance to thermal efficiency.",
      image: "modern+door+selection+coastal+climate+weather+resistant+design",
      category: "Buyer's Guide",
      date: "March 10, 2024",
      readTime: "7 min read",
      slug: "door-system-climate-guide",
    },
    {
      id: 3,
      title: "The Art of Pivot Door Design",
      excerpt:
        "Explore the architectural possibilities of statement pivot entry doors and how they create unforgettable first impressions. From sizing to materials and hardware selection.",
      image: "pivot+door+design+contemporary+architecture+modern+entry",
      category: "Design Ideas",
      date: "March 5, 2024",
      readTime: "6 min read",
      slug: "pivot-door-design",
    },
    {
      id: 4,
      title: "Understanding Door System Warranties and Maintenance",
      excerpt:
        "A comprehensive guide to what's covered in manufacturer warranties and how proper maintenance protects your investment. Tips for keeping your doors operating smoothly for decades.",
      image: "door+maintenance+care+warranty+professional+service",
      category: "Maintenance",
      date: "February 28, 2024",
      readTime: "8 min read",
      slug: "warranties-maintenance",
    },
    {
      id: 5,
      title: "How to Maximize Natural Light with Glass Door Systems",
      excerpt:
        "Strategic placement and design of glass doors can dramatically increase natural light in your home. Explore how to balance views, privacy, and solar heat gain.",
      image: "natural+light+glass+doors+bright+interior+design+windows",
      category: "Design Ideas",
      date: "February 20, 2024",
      readTime: "5 min read",
      slug: "maximize-natural-light",
    },
    {
      id: 6,
      title: "Multi-Slide vs Folding Doors: Which is Right for You?",
      excerpt:
        "Compare the pros and cons of multi-slide and folding door systems. Learn about operation styles, opening sizes, costs, and which works best for different applications.",
      image: "comparison+multi+slide+folding+glass+doors+side+by+side",
      category: "Buyer's Guide",
      date: "February 15, 2024",
      readTime: "10 min read",
      slug: "multi-slide-vs-folding",
    },
    {
      id: 7,
      title: "The Complete Guide to Door System Security Features",
      excerpt:
        "Your investment in beautiful doors shouldn't compromise home security. Explore locking mechanisms, glass options, and advanced security features available in modern door systems.",
      image: "secure+door+locks+safety+glass+home+security+system",
      category: "Security",
      date: "February 8, 2024",
      readTime: "9 min read",
      slug: "door-security-features",
    },
    {
      id: 8,
      title: "Energy Efficiency in Premium Door Systems",
      excerpt:
        "Understanding U-factors, SHGC ratings, and how premium door systems can actually improve your home's energy performance while expanding your living space.",
      image: "energy+efficient+glass+doors+thermal+performance+home",
      category: "Technical",
      date: "February 1, 2024",
      readTime: "7 min read",
      slug: "energy-efficiency",
    },
    {
      id: 9,
      title: "Top 10 Questions to Ask Before Buying Doors",
      excerpt:
        "A practical checklist of essential questions to ask manufacturers and installers before making your purchase decision. Avoid common pitfalls and ensure a successful project.",
      image: "homeowner+consultation+door+selection+planning+meeting",
      category: "Buyer's Guide",
      date: "January 25, 2024",
      readTime: "6 min read",
      slug: "questions-before-buying",
    },
  ]

  const categories = ["All", "Design Ideas", "Buyer's Guide", "Maintenance", "Security", "Technical"]

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-serif font-light text-foreground mb-6">Insights & Inspiration</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Expert advice, design ideas, and practical guidance for your premium door project. From selection to
              maintenance, we share our 25+ years of experience.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-accent text-accent-foreground"
                    : "bg-background text-foreground hover:bg-accent/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={`/.jpg?height=400&width=600&query=${post.image}`}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-accent hover:text-accent/80 font-medium text-sm group/link"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-foreground">
              Stay Updated with Expert Insights
            </h2>
            <p className="text-lg text-muted-foreground">
              Subscribe to receive the latest design trends, installation tips, and exclusive offers delivered to your
              inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
