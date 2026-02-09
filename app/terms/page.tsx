"use client";

import { PageLayout, PageHeader, InfoCard, PageSection, InfoGrid, ContentCard } from "@/components/layout";
import { Scale, CheckCircle2, AlertCircle } from "lucide-react";

export default function TermsPage() {
    return (
        <PageLayout>
            <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <PageHeader
                    title="Terms of Service"
                    description="Simple and transparent terms for using our platform."
                />

                <InfoGrid cols={3}>
                    <InfoCard
                        title="Free to Use"
                        description="Unlimited access to all conversion tools at no cost."
                        icon={CheckCircle2}
                        centered
                    />
                    <InfoCard
                        title="As-Is Basis"
                        description="Provided without warranties of any kind."
                        icon={Scale}
                        centered
                    />
                    <InfoCard
                        title="Fair Use"
                        description="Please do not use our tools for automated scrapers."
                        icon={AlertCircle}
                        centered
                    />
                </InfoGrid>

                <ContentCard gradientBar className="text-sm md:text-base">
                    <PageSection title="1. Acceptance of Terms">
                        <p>
                            By accessing and using Convert Case, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                        </p>
                    </PageSection>

                    <PageSection title="2. Use License">
                        <p>
                            Permission is granted to temporarily use the materials (information or software) on Convert Case&apos;s website for personal, non-commercial transitory viewing and use only.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>You may not use our service for any illegal purposes.</li>
                            <li>You may not attempt to decompile or reverse engineer any software contained on the website.</li>
                            <li>Commercial use of our conversion engine without prior consent is prohibited.</li>
                        </ul>
                    </PageSection>

                    <PageSection title="3. Limitation of Liability">
                        <p>
                            In no event shall Convert Case or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Convert Case.
                        </p>
                    </PageSection>

                    <PageSection title="4. Accuracy of Materials">
                        <p>
                            The materials appearing on Convert Case&apos;s website could include technical, typographical, or photographic errors. Convert Case does not warrant that any of the materials on its website are accurate, complete, or current.
                        </p>
                    </PageSection>
                </ContentCard>
            </div>
        </PageLayout>
    );
}
