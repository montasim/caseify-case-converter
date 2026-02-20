/**
 * ContentCard component
 * Displays a card with optional gradient bar and content
 */

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ContentCardProps } from "@/types";

/**
 * ContentCard component
 * Displays a card with optional gradient bar and content
 * 
 * @param props - ContentCard component props
 * @returns ContentCard component
 */
export function ContentCard({
    children,
    className,
    gradientBar = false,
}: ContentCardProps) {
    return (
        <Card className={cn("glass-card rounded-3xl overflow-hidden", className)}>
            {gradientBar && (
                <div className="h-2 bg-gradient-to-r from-primary via-accent-secondary to-accent animate-gradient-shift" />
            )}
            <CardContent className="p-8 space-y-8">{children}</CardContent>
        </Card>
    );
}
