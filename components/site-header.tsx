"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-primary/90 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span
              className={`text-2xl font-serif font-semibold tracking-wide transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              SCENIC DOORS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"
              }`}
            >
              Home
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`text-sm font-medium bg-transparent ${isScrolled ? "text-foreground" : "text-white"}`}
                  >
                    Our Doors
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/doors/folding"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10"
                          >
                            <div className="text-sm font-medium leading-none">Folding Glass Walls</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Transform walls into seamless transitions
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/doors/sliding"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10"
                          >
                            <div className="text-sm font-medium leading-none">Multi-Slide Systems</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Effortless operation, expansive design
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/doors/pivot"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10"
                          >
                            <div className="text-sm font-medium leading-none">Pivot Entry Doors</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Bold architectural presence
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`text-sm font-medium bg-transparent ${isScrolled ? "text-foreground" : "text-white"}`}
                  >
                    Service Areas
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] grid-cols-2 gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/service-areas/los-angeles-county"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10"
                          >
                            <div className="text-sm font-medium leading-none">Los Angeles County</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Beverly Hills, Malibu, Santa Monica
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/service-areas/orange-county"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10"
                          >
                            <div className="text-sm font-medium leading-none">Orange County</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Newport Beach, Laguna Beach, Irvine
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/service-areas/san-diego-county"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10"
                          >
                            <div className="text-sm font-medium leading-none">San Diego County</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              La Jolla, Del Mar, Carlsbad
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/service-areas/riverside-county"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10"
                          >
                            <div className="text-sm font-medium leading-none">Riverside County</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Palm Desert, Rancho Mirage, Indian Wells
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/service-areas/ventura-county"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10"
                          >
                            <div className="text-sm font-medium leading-none">Ventura County</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Thousand Oaks, Westlake Village, Camarillo
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/service-areas/santa-barbara-county"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10"
                          >
                            <div className="text-sm font-medium leading-none">Santa Barbara County</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Santa Barbara, Montecito, Carpinteria
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href="/gallery"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"
              }`}
            >
              About
            </Link>
            <Link
              href="/blog"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/quote">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className={isScrolled ? "text-foreground" : "text-white"}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/" className="text-lg font-medium text-foreground hover:text-accent transition-colors">
                  Home
                </Link>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-foreground">Our Doors</p>
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/doors/folding"
                      className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      Folding Glass Walls
                    </Link>
                    <Link
                      href="/doors/sliding"
                      className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      Multi-Slide Systems
                    </Link>
                    <Link
                      href="/doors/pivot"
                      className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      Pivot Entry Doors
                    </Link>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-foreground">Service Areas</p>
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/service-areas/los-angeles-county"
                      className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      Los Angeles County
                    </Link>
                    <Link
                      href="/service-areas/orange-county"
                      className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      Orange County
                    </Link>
                    <Link
                      href="/service-areas/san-diego-county"
                      className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      San Diego County
                    </Link>
                    <Link
                      href="/service-areas/riverside-county"
                      className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      Riverside County
                    </Link>
                    <Link
                      href="/service-areas/ventura-county"
                      className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      Ventura County
                    </Link>
                    <Link
                      href="/service-areas/santa-barbara-county"
                      className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      Santa Barbara County
                    </Link>
                  </div>
                </div>
                <Link
                  href="/gallery"
                  className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                >
                  Gallery
                </Link>
                <Link href="/about" className="text-lg font-medium text-foreground hover:text-accent transition-colors">
                  About
                </Link>
                <Link href="/blog" className="text-lg font-medium text-foreground hover:text-accent transition-colors">
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                >
                  Contact
                </Link>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 mt-4">
                  <Link href="/quote">Get a Quote</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
