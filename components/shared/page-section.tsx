/**
 * PageSection component
 * Displays a section with title, optional icon, and content
 */

import * as React from "react";
import { cn } from "@/lib/utils";
import type { PageSectionProps } from "@/types";

/**
 * PageSection component
 * Displays a section with optional icon, title, and content
 * 
 * @param props - PageSection component props
 * @returns PageSection component
 */
export function PageSection({
    title,
    children,
    icon: Icon,
    className,
}: PageSectionProps) {
    return (
        <section className={cn("space-y-4", className)}>
            <div className="flex items-center gap-3">
                {Icon && (
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                    </div>
                )}
                <h2 className="text-xl font-semibold text-foreground">{title}</h2>
            </div>
            <div className="text-muted-foreground leading-relaxed space-y-4 pl-13">
                {children}
            </div>
        </section>
    );
}
