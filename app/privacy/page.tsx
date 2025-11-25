import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Scenic Doors privacy policy. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://scenicdoors.com/privacy" },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-serif font-light text-foreground mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="lead">Last updated: November 2024</p>
            
            <h2 className="text-2xl font-serif mt-8 mb-4 text-foreground">Information We Collect</h2>
            <p>When you visit our website or request a quote, we may collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (name, email, phone number)</li>
              <li>Project details and preferences</li>
              <li>Property address for service requests</li>
              <li>Website usage data through analytics</li>
            </ul>

            <h2 className="text-2xl font-serif mt-8 mb-4 text-foreground">How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to quote requests and inquiries</li>
              <li>Provide door installation services</li>
              <li>Send project updates and follow-ups</li>
              <li>Improve our website and services</li>
            </ul>

            <h2 className="text-2xl font-serif mt-8 mb-4 text-foreground">Information Sharing</h2>
            <p>We do not sell your personal information. We may share information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers who assist our operations</li>
              <li>Door manufacturers for warranty purposes</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2 className="text-2xl font-serif mt-8 mb-4 text-foreground">Contact Us</h2>
            <p>For privacy questions, contact us at:</p>
            <p>Email: info@scenicdoors.com<br />Phone: (800) 555-1234</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
