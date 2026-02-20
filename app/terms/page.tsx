import { PageLayout, PageHeader, InfoCard, PageSection, InfoGrid, ContentCard, FAQSection } from "@/components/layout";
import { Scale, CheckCircle2, FileText, Shield } from "lucide-react";
import {
  TERMS_PAGE_SEO,
  generateOpenGraphMetadata,
  generateTwitterMetadata,
  generateAlternatesMetadata,
} from "@/config/seo";
import {
  generateFAQSchema,
  TERMS_PAGE_FAQS,
} from "@/lib/structured-data";

/**
 * Terms page metadata
 * Comprehensive SEO metadata for the terms of service page
 */
export const metadata = {
  title: TERMS_PAGE_SEO.title,
  description: TERMS_PAGE_SEO.description,
  keywords: TERMS_PAGE_SEO.keywords,
  openGraph: generateOpenGraphMetadata(
    TERMS_PAGE_SEO.title,
    TERMS_PAGE_SEO.description,
    TERMS_PAGE_SEO.canonical,
    TERMS_PAGE_SEO.ogImage
  ),
  twitter: generateTwitterMetadata(
    TERMS_PAGE_SEO.title,
    TERMS_PAGE_SEO.description,
    TERMS_PAGE_SEO.ogImage
  ),
  alternates: generateAlternatesMetadata(TERMS_PAGE_SEO.canonical),
};

/**
 * Terms page component
 * Displays terms of service information with SEO-optimized content
 */
export default function TermsPage() {
    return (
        <PageLayout>
            {/* Structured Data for Terms Page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateFAQSchema(TERMS_PAGE_FAQS)),
                }}
            />

            <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
                <PageHeader
                    title="Terms of Service"
                    description="Simple and transparent terms for using our free online text case converter tool. No registration required."
                    gradient
                />

                <InfoGrid cols={2}>
                    <InfoCard
                        title="Free to Use"
                        description="Access all our text conversion tools completely free of charge. No registration, no hidden fees, and no subscriptions required."
                        icon={CheckCircle2}
                    />
                    <InfoCard
                        title="Commercial Use Allowed"
                        description="Permission is granted for both personal and commercial use of our conversion engine. Use it for your projects without restrictions."
                        icon={Scale}
                    />
                    <InfoCard
                        title="No Account Required"
                        description="Start converting text immediately without creating an account. No personal information needed to use our service."
                        icon={Shield}
                    />
                    <InfoCard
                        title="As-Is Service"
                        description="We provide this tool on an as-is basis. While we strive for perfection, we are not liable for any inaccuracies in conversions."
                        icon={FileText}
                    />
                </InfoGrid>

                <ContentCard>
                    <PageSection title="Detailed Information" icon={FileText}>
                        <p>
                            By accessing and using Convert Case, you agree to be bound by these Terms of Service. This ensures a safe and productive environment for all our users. These terms are designed to be simple, transparent, and easy to understand.
                        </p>
                    </PageSection>

                    <PageSection title="1. Acceptance of Terms">
                        <p>
                            By accessing and using Convert Case, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our service.
                        </p>
                    </PageSection>

                    <PageSection title="2. Fair Use Policy">
                        <p>
                            Permission is granted for personal and commercial use of our conversion engine. You may convert unlimited text for any legitimate purpose. However, you may not use our service for any illegal purposes, attempt to disrupt the platform through automated scraping, or engage in any activity that harms the service or other users.
                        </p>
                    </PageSection>

                    <PageSection title="3. No Registration Required">
                        <p>
                            Convert Case is designed to be accessible without requiring user registration. You can use all features of our service without creating an account or providing any personal information. We believe in providing a frictionless experience for all users.
                        </p>
                    </PageSection>

                    <PageSection title="4. Limitation of Liability">
                        <p>
                            In no event shall Convert Case be liable for any damages arising out of the use or inability to use the materials on our platform, including but not limited to loss of data, profit, or other commercial losses. While we strive for accuracy, we provide this service on an as-is basis without warranties of any kind.
                        </p>
                    </PageSection>

                    <PageSection title="5. Content Accuracy">
                        <p>
                            While we aim for maximum accuracy in all our text conversions, we do not warrant that all converted materials are completely error-free. It is recommended to review critical conversions manually, especially for important documents, publications, or professional use cases.
                        </p>
                    </PageSection>

                    <PageSection title="6. Intellectual Property">
                        <p>
                            The Convert Case name, logo, website design, and underlying code are the intellectual property of Convert Case. You may not copy, modify, or redistribute our service without explicit permission. However, you own all rights to the text you convert using our service.
                        </p>
                    </PageSection>

                    <PageSection title="7. Modifications to Terms">
                        <p>
                            We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Your continued use of the service after any changes constitutes your acceptance of the new terms.
                        </p>
                    </PageSection>
                </ContentCard>

                {/* FAQ Section with structured data */}
                <FAQSection
                    title="Terms FAQ"
                    faqs={TERMS_PAGE_FAQS}
                    headingId="terms-faq-heading"
                    paddingBottom="small"
                />
            </div>
        </PageLayout>
    );
}
