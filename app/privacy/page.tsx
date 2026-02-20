import { PageLayout, PageHeader, InfoCard, PageSection, InfoGrid, ContentCard } from "@/components/layout";
import { ShieldCheck, Lock, Eye, Shield } from "lucide-react";
import {
  PRIVACY_PAGE_SEO,
  generateOpenGraphMetadata,
  generateTwitterMetadata,
  generateAlternatesMetadata,
} from "@/config/seo";
import {
  generateFAQSchema,
  PRIVACY_PAGE_FAQS,
} from "@/lib/structured-data";

/**
 * Privacy page metadata
 * Comprehensive SEO metadata for the privacy policy page
 */
export const metadata = {
  title: PRIVACY_PAGE_SEO.title,
  description: PRIVACY_PAGE_SEO.description,
  keywords: PRIVACY_PAGE_SEO.keywords,
  openGraph: generateOpenGraphMetadata(
    PRIVACY_PAGE_SEO.title,
    PRIVACY_PAGE_SEO.description,
    PRIVACY_PAGE_SEO.canonical,
    PRIVACY_PAGE_SEO.ogImage
  ),
  twitter: generateTwitterMetadata(
    PRIVACY_PAGE_SEO.title,
    PRIVACY_PAGE_SEO.description,
    PRIVACY_PAGE_SEO.ogImage
  ),
  alternates: generateAlternatesMetadata(PRIVACY_PAGE_SEO.canonical),
};

/**
 * Privacy page component
 * Displays privacy policy information with SEO-optimized content
 */
export default function PrivacyPage() {
    return (
        <PageLayout>
            {/* Structured Data for Privacy Page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateFAQSchema(PRIVACY_PAGE_FAQS)),
                }}
            />

            <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
                <PageHeader
                    title="Privacy Policy"
                    description="Your privacy is our top priority. Learn how Convert Case protects your data with local processing and zero data storage."
                    gradient
                />

                <InfoGrid cols={2}>
                    <InfoCard
                        title="Local Processing"
                        description="All text conversions are performed locally in your browser using JavaScript. Your text never leaves your device and is never sent to our servers."
                        icon={Lock}
                    />
                    <InfoCard
                        title="No Data Storage"
                        description="We do not store, log, or track any of the text you input into our converter. Once you close the tab or refresh the page, your data is completely gone."
                        icon={ShieldCheck}
                    />
                    <InfoCard
                        title="No Cookies Required"
                        description="We use minimalist cookies strictly for functional purposes like remembering your theme preference. No tracking cookies or third-party analytics."
                        icon={Eye}
                    />
                    <InfoCard
                        title="100% Private"
                        description="Your privacy is guaranteed. We don't collect personal information, don't require registration, and don't share any data with third parties."
                        icon={Shield}
                    />
                </InfoGrid>

                <ContentCard>
                    <PageSection title="Detailed Information" icon={Eye}>
                        <p>
                            At Convert Case, we are committed to providing a secure and private environment for all users. This policy outlines our limited data collection practices and how we protect your privacy.
                        </p>
                    </PageSection>

                    <PageSection title="1. Data Collection">
                        <p>
                            We do not collect any personal identification information (PII). We may use anonymous analytics to understand general usage patterns and improve our user experience, but this never includes the content you convert. Your text data remains completely private and is never transmitted to our servers.
                        </p>
                    </PageSection>

                    <PageSection title="2. Local Processing">
                        <p>
                            All text conversions happen entirely within your web browser using JavaScript. This means your text never leaves your device, ensuring complete privacy and security. No internet connection is required for the actual conversion process.
                        </p>
                    </PageSection>

                    <PageSection title="3. Cookies">
                        <p>
                            We use minimalist cookies strictly for functional purposes, such as remembering your theme preference (if applicable) or for security measures. We do not use tracking cookies or third-party analytics services that would compromise your privacy.
                        </p>
                    </PageSection>

                    <PageSection title="4. Contact Privacy">
                        <p>
                            If you choose to contact us via email, your email address will only be used to respond to your inquiry and will never be shared with third parties. We respect your privacy and will never add you to mailing lists without your explicit consent.
                        </p>
                    </PageSection>

                    <PageSection title="5. Third-Party Services">
                        <p>
                            We do not use third-party services that would require sharing your text data. Any external services we use (such as email delivery for contact forms) are used strictly for their intended purpose and do not have access to your conversion data.
                        </p>
                    </PageSection>
                </ContentCard>

                {/* FAQ Section with structured data */}
                <div className="pt-8 pb-12">
                    <section aria-labelledby="privacy-faq-heading">
                        <h2 id="privacy-faq-heading" className="text-3xl font-bold text-center mb-8">
                            Privacy FAQ
                        </h2>
                        <div className="max-w-3xl mx-auto space-y-4">
                            {PRIVACY_PAGE_FAQS.map((faq, index) => (
                                <details
                                    key={index}
                                    className="group bg-card/50 border border-border/50 rounded-xl overflow-hidden"
                                >
                                    <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-muted/50 transition-colors">
                                        <h3 className="font-semibold pr-4">{faq.question}</h3>
                                        <span className="text-muted-foreground group-open:rotate-180 transition-transform">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </PageLayout>
    );
}
