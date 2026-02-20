/**
 * ConversionCard component
 * Displays a single conversion option with icon and description
 */

import type { ConversionCardProps } from "@/types";
import { cn } from "@/lib/utils";

/**
 * ConversionCard component
 * Displays a single conversion option with icon and description
 *
 * @param props - ConversionCard component props
 * @returns ConversionCard component
 */
export function ConversionCard({ title, description, icon: Icon, className }: ConversionCardProps) {
    return (
        <div className={cn("bg-card/50 border border-border/50 rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10", className)}>
            {Icon && (
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent-secondary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                </div>
            )}
            <h3 className="font-semibold mb-2 text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
            </p>
        </div>
    );
}
