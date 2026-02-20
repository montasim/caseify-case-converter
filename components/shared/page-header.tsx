/**
 * PageHeader component
 * Displays a page title with optional icon and description
 */

import * as React from "react";
import { cn } from "@/lib/utils";
import type { PageHeaderProps } from "@/types";

/**
 * PageHeader component
 * Displays a centered title with optional icon, description, and gradient text
 * 
 * @param props - PageHeader component props
 * @returns PageHeader component
 */
export function PageHeader({
    title,
    description,
    icon: Icon,
    gradient = false,
    className,
}: PageHeaderProps) {
    return (
        <div className={cn("flex flex-col items-center text-center space-y-4 mb-8 animate-fade-in-up", className)}>
            {Icon && (
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-2 animate-subtle-float">
                    <Icon className="w-6 h-6 text-primary" />
                </div>
            )}
            <h1
                className={cn(
                    "text-3xl md:text-4xl font-bold tracking-tight",
                    gradient && "gradient-text animate-gradient-shift"
                )}
            >
                {title}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl px-4 mx-auto leading-relaxed">
                {description}
            </p>
        </div>
    );
}
