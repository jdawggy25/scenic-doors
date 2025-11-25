import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const siteUrl = "https://scenicdoors.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Scenic Doors | Premium Door Installation | Southern CA",
    template: "%s | Scenic Doors",
  },
  description:
    "Southern California's premier luxury door installer. Factory-certified folding glass walls, multi-slide systems & pivot doors. Free quotes. 25+ years experience.",
  keywords: [
    "folding doors",
    "sliding glass doors",
    "pivot doors",
    "glass walls",
    "LaCantina doors",
    "door installation",
    "Southern California doors",
    "luxury doors",
    "bi-fold doors",
    "multi-slide doors",
    "indoor outdoor living",
    "Beverly Hills doors",
    "Malibu doors",
    "Newport Beach doors",
  ],
  authors: [{ name: "Scenic Doors" }],
  creator: "Scenic Doors",
  publisher: "Scenic Doors",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Scenic Doors",
    title: "Scenic Doors | Premium Door Installation | Southern CA",
    description:
      "Southern California's premier luxury door installer. Factory-certified folding glass walls, multi-slide systems & pivot doors. Free quotes.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Scenic Doors - Premium Folding, Sliding & Pivot Door Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scenic Doors | Premium Door Installation",
    description: "Southern California's premier luxury door installer. Folding glass walls, multi-slide systems & pivot doors.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "your-google-verification-code",
  },
}

// JSON-LD Schema for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#organization`,
  name: "Scenic Doors",
  description: "Southern California's premier luxury door installation company specializing in folding glass walls, multi-slide systems, and pivot entry doors.",
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  image: `${siteUrl}/og-image.jpg`,
  telephone: "+1-800-555-1234",
  email: "info@scenicdoors.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Design Boulevard",
    addressLocality: "Costa Mesa",
    addressRegion: "CA",
    postalCode: "92626",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.6846,
    longitude: -117.9187,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  priceRange: "$$$",
  areaServed: [
    { "@type": "State", name: "California" },
    { "@type": "City", name: "Los Angeles" },
    { "@type": "City", name: "Beverly Hills" },
    { "@type": "City", name: "Malibu" },
    { "@type": "City", name: "Santa Monica" },
    { "@type": "City", name: "Newport Beach" },
    { "@type": "City", name: "Laguna Beach" },
    { "@type": "City", name: "San Diego" },
    { "@type": "City", name: "La Jolla" },
  ],
  sameAs: [
    "https://www.facebook.com/scenicdoors",
    "https://www.instagram.com/scenicdoors",
    "https://www.linkedin.com/company/scenicdoors",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Door Installation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Folding Glass Wall Installation",
          description: "Professional installation of bi-fold and folding glass wall systems",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Multi-Slide Door Installation",
          description: "Expert installation of multi-panel sliding door systems",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pivot Door Installation",
          description: "Precision installation of oversized pivot entry doors",
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
