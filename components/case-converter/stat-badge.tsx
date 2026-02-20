/**
 * StatBadge component
 * Displays a statistic with icon, label, and value
 */

import * as React from "react";
import { cn } from "@/lib/utils";
import type { StatBadgeProps } from "@/types";
import { STAT_COLORS, isValidStatColorKey } from "@/config/constants";

/**
 * StatBadge component
 * Displays a statistic with icon, label, and value in a styled badge
 * 
 * @param props - StatBadge component props
 * @returns StatBadge component
 */
export function StatBadge({
    icon: Icon,
    label,
    value,
}: StatBadgeProps) {
    const activeColor = isValidStatColorKey(label)
        ? STAT_COLORS[label]
        : "text-primary";

    return (
        <div className="flex items-center gap-2.5 px-5 py-3 bg-background/70 backdrop-blur-sm shadow-sm rounded-2xl ring-1 ring-border/50 transition-all duration-300 hover:ring-primary/50 hover:bg-background hover:scale-105 group/badge">
            <Icon className={cn("w-4 h-4 transition-colors", activeColor)} />
            <span className="text-sm font-semibold text-muted-foreground transition-colors group-hover/badge:text-foreground">
                {label}: <span className="text-foreground">{value}</span>
            </span>
        </div>
    );
}
