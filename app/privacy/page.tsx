import { PageLayout, PageHeader, InfoCard, PageSection, InfoGrid, ContentCard } from "@/components/layout";
import { ShieldCheck, Lock, Eye } from "lucide-react";
import { PAGE_TITLE_SUFFIX } from "@/config/constants";

/**
 * Privacy page metadata
 */
export const metadata = {
    title: `Privacy Policy${PAGE_TITLE_SUFFIX}`,
    description: "Your privacy is our top priority. Learn how we handle your data.",
};

/**
 * Privacy page component
 * Displays privacy policy information
 */
export default function PrivacyPage() {
    return (
        <PageLayout>
            <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
                <PageHeader
                    title="Privacy Policy"
                    description="Your privacy is our top priority. Learn how we handle your data."
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
                        description="We do not store, log, or track any of the text you input into our converter. Once you close the tab or refresh the page, your data is gone."
                        icon={ShieldCheck}
                    />
                </InfoGrid>

                <ContentCard>
                    <PageSection title="Detailed Information" icon={Eye}>
                        <p>
                            At Convert Case, we are committed to providing a secure and private environment for all users. This policy outlines our limited data collection practices.
                        </p>
                    </PageSection>

                    <PageSection title="1. Data Collection">
                        <p>
                            We do not collect any personal identification information (PII). We may use anonymous analytics to understand general usage patterns and improve our user experience, but this never includes the content you convert.
                        </p>
                    </PageSection>

                    <PageSection title="2. Cookies">
                        <p>
                            We use minimalist cookies strictly for functional purposes, such as remembering your theme preference (if applicable) or for security measures.
                        </p>
                    </PageSection>

                    <PageSection title="3. Contact Privacy">
                        <p>
                            If you choose to contact us via email, your email address will only be used to respond to your inquiry and will never be shared with third parties.
                        </p>
                    </PageSection>
                </ContentCard>
            </div>
        </PageLayout>
    );
}
