/**
 * InfoCard component
 * Displays a card with title, description, and optional icon
 */

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { InfoCardProps } from "@/types";

/**
 * InfoCard component
 * Displays a card with optional icon, title, and description
 * 
 * @param props - InfoCard component props
 * @returns InfoCard component
 */
export function InfoCard({
    title,
    description,
    icon: Icon,
    className,
    centered = false,
}: InfoCardProps) {
    return (
        <Card className={cn("glass-card rounded-3xl overflow-hidden", className)}>
            <CardContent className={cn("p-8 space-y-4", centered && "text-center")}>
                {Icon && (
                    <div
                        className={cn(
                            "w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent-secondary/10 flex items-center justify-center mb-4 animate-subtle-float",
                            centered && "mx-auto"
                        )}
                    >
                        <Icon className="w-7 h-7 text-primary" />
                    </div>
                )}
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
}
