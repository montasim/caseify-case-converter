import { CaseConverter } from "@/components/case-converter";
import { PageLayout } from "@/components/layout";
import { PageHeader, InfoCard, InfoGrid, FAQSection } from "@/components/layout";
import { Zap, Layout, Shield, CheckCircle, Clock, Globe } from "lucide-react";
import {
  HOME_PAGE_SEO,
  generateOpenGraphMetadata,
  generateTwitterMetadata,
  generateAlternatesMetadata,
} from "@/config/seo";
import {
  generateFAQSchema,
  HOME_PAGE_FAQS,
  generateHowToSchema,
} from "@/lib/structured-data";

/**
 * Home page metadata
 * Comprehensive SEO metadata for the main converter page
 */
export const metadata = {
  title: HOME_PAGE_SEO.title,
  description: HOME_PAGE_SEO.description,
  keywords: HOME_PAGE_SEO.keywords,
  openGraph: generateOpenGraphMetadata(
    HOME_PAGE_SEO.title,
    HOME_PAGE_SEO.description,
    HOME_PAGE_SEO.canonical,
    HOME_PAGE_SEO.ogImage
  ),
  twitter: generateTwitterMetadata(
    HOME_PAGE_SEO.title,
    HOME_PAGE_SEO.description,
    HOME_PAGE_SEO.ogImage
  ),
  alternates: generateAlternatesMetadata(HOME_PAGE_SEO.canonical),
};

/**
 * Home page component
 * Main page with SEO-optimized content and structured data
 */
export default function Home() {
  return (
    <PageLayout>
      {/* Structured Data for Home Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(HOME_PAGE_FAQS)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateHowToSchema()),
        }}
      />

      <div className="w-full max-w-5xl mx-auto space-y-10 animate-fade-in-up">
        {/* SEO-optimized H1 heading */}
        <PageHeader
          title="Free Online Text Case Converter Tool"
          description="Transform your text instantly with our powerful case converter. Convert to uppercase, lowercase, title case, sentence case, and more. Fast, secure, and private - no sign-up required."
          icon={Zap}
          gradient
        />

        <CaseConverter />

        {/* Features Section with SEO keywords */}
        <div className="pt-24 pb-8">
          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="text-3xl font-bold text-center mb-12">
              Why Choose Convert Case?
            </h2>
            
            <InfoGrid>
              <InfoCard
                title="Instant Conversion"
                description="Transform text in milliseconds with our lightning-fast case converter. No waiting, no complex menus - just instant results."
                icon={Zap}
              />
              <InfoCard
                title="Modern Interface"
                description="A clean, colorful, and distraction-free environment designed for your focus. Enjoy a seamless user experience across all devices."
                icon={Layout}
              />
              <InfoCard
                title="Secure & Private"
                description="Your data never leaves your device. All processing happens locally in your browser. We don't store, log, or track your text."
                icon={Shield}
              />
              <InfoCard
                title="100% Free Forever"
                description="Access all our text conversion tools completely free of charge. No registration, no hidden fees, no subscriptions required."
                icon={CheckCircle}
              />
              <InfoCard
                title="Works Everywhere"
                description="Fully responsive design that works perfectly on desktop, tablet, and mobile devices. Convert text anywhere, anytime."
                icon={Globe}
              />
              <InfoCard
                title="No Time Limits"
                description="Convert unlimited text without any restrictions. Perfect for both quick conversions and large documents."
                icon={Clock}
              />
            </InfoGrid>
          </section>
        </div>

        {/* FAQ Section with structured data */}
        <FAQSection
          title="Frequently Asked Questions"
          faqs={HOME_PAGE_FAQS}
          headingId="faq-heading"
          paddingBottom="large"
        />

        {/* Available Conversions Section */}
        <div className="pt-8 pb-24">
          <section aria-labelledby="conversions-heading">
            <h2 id="conversions-heading" className="text-3xl font-bold text-center mb-12">
              Available Text Case Conversions
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card/50 border border-border/50 rounded-xl p-5">
                <h3 className="font-semibold mb-2">Sentence case</h3>
                <p className="text-sm text-muted-foreground">
                  Capitalize the first letter of each sentence. Perfect for paragraphs and articles.
                </p>
              </div>
              <div className="bg-card/50 border border-border/50 rounded-xl p-5">
                <h3 className="font-semibold mb-2">lower case</h3>
                <p className="text-sm text-muted-foreground">
                  Convert all text to lowercase. Great for email addresses and URLs.
                </p>
              </div>
              <div className="bg-card/50 border border-border/50 rounded-xl p-5">
                <h3 className="font-semibold mb-2">UPPER CASE</h3>
                <p className="text-sm text-muted-foreground">
                  Convert all text to uppercase. Ideal for headings and emphasis.
                </p>
              </div>
              <div className="bg-card/50 border border-border/50 rounded-xl p-5">
                <h3 className="font-semibold mb-2">Capitalized Case</h3>
                <p className="text-sm text-muted-foreground">
                  Capitalize the first letter of each word. Perfect for titles and names.
                </p>
              </div>
              <div className="bg-card/50 border border-border/50 rounded-xl p-5">
                <h3 className="font-semibold mb-2">Title Case</h3>
                <p className="text-sm text-muted-foreground">
                  Capitalize words except for small articles and prepositions. Best for book and article titles.
                </p>
              </div>
              <div className="bg-card/50 border border-border/50 rounded-xl p-5">
                <h3 className="font-semibold mb-2">aLtErNaTiNg cAsE</h3>
                <p className="text-sm text-muted-foreground">
                  Alternate between lowercase and uppercase letters. Fun for social media and creative text.
                </p>
              </div>
              <div className="bg-card/50 border border-border/50 rounded-xl p-5 md:col-span-2">
                <h3 className="font-semibold mb-2">InVeRsE CaSe</h3>
                <p className="text-sm text-muted-foreground">
                  Invert the case of each letter. Great for creating unique text styles and visual effects.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
