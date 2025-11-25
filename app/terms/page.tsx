import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Scenic Doors terms of service. Read our terms and conditions for using our website and services.",
  alternates: { canonical: "https://scenicdoors.com/terms" },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-serif font-light text-foreground mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="lead">Last updated: November 2024</p>
            
            <h2 className="text-2xl font-serif mt-8 mb-4 text-foreground">Agreement to Terms</h2>
            <p>By accessing our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>

            <h2 className="text-2xl font-serif mt-8 mb-4 text-foreground">Services</h2>
            <p>Scenic Doors provides premium door installation services including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Folding glass wall installation</li>
              <li>Multi-slide door system installation</li>
              <li>Pivot entry door installation</li>
              <li>Consultation and design services</li>
            </ul>

            <h2 className="text-2xl font-serif mt-8 mb-4 text-foreground">Quotes and Pricing</h2>
            <p>All quotes are estimates and may vary based on final measurements, site conditions, and product selections. Quotes are valid for 30 days unless otherwise stated.</p>

            <h2 className="text-2xl font-serif mt-8 mb-4 text-foreground">Warranty</h2>
            <p>We provide workmanship warranties on all installations. Product warranties are provided by the respective manufacturers. Details are provided with each project contract.</p>

            <h2 className="text-2xl font-serif mt-8 mb-4 text-foreground">Limitation of Liability</h2>
            <p>Scenic Doors shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website.</p>

            <h2 className="text-2xl font-serif mt-8 mb-4 text-foreground">Contact</h2>
            <p>For questions about these terms, contact us at:</p>
            <p>Email: info@scenicdoors.com<br />Phone: (800) 555-1234</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
