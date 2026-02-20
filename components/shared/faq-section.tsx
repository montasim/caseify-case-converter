/**
 * FAQSection component
 * Displays a complete FAQ section with heading and multiple FAQ items
 */

import { FAQItem } from "./faq-item";
import type { FAQSectionProps } from "@/types";
import { cn } from "@/lib/utils";

/**
 * FAQSection component
 * Displays a complete FAQ section with heading and multiple FAQ items
 *
 * @param props - FAQSection component props
 * @returns FAQSection component
 */
export function FAQSection({ title, faqs, headingId = "faq-heading", paddingBottom = "small" }: FAQSectionProps) {
    const paddingBottomClass = paddingBottom === "large" ? "pb-24" : "pb-12";

    return (
        <div className={cn("pt-8", paddingBottomClass)}>
            <section aria-labelledby={headingId}>
                <h2 id={headingId} className="text-3xl font-bold text-center mb-12">
                    {title}
                </h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            index={index}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
