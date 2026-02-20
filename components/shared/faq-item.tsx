/**
 * FAQItem component
 * Displays a single FAQ item with expandable details/summary
 */

import type { FAQItemProps } from "@/types";

/**
 * FAQItem component
 * Displays a single FAQ item with expandable details/summary
 *
 * @param props - FAQItem component props
 * @returns FAQItem component
 */
export function FAQItem({ question, answer, index }: FAQItemProps) {
    return (
        <details
            key={index}
            className="group bg-card/50 border border-border/50 rounded-xl overflow-hidden"
        >
            <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-muted/50 transition-colors">
                <h3 className="font-semibold pr-4">{question}</h3>
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
                {answer}
            </p>
        </details>
    );
}
