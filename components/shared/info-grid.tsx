/**
 * InfoGrid component
 * Displays children in a responsive grid layout
 */

import * as React from "react";
import { cn } from "@/lib/utils";
import type { InfoGridProps } from "@/types";

/**
 * InfoGrid component
 * Displays children in a responsive grid with configurable columns
 * 
 * @param props - InfoGrid component props
 * @returns InfoGrid component
 */
export function InfoGrid({
    children,
    cols = 3,
    className,
}: InfoGridProps) {
    const gridCols = {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-3",
        4: "grid-cols-2 lg:grid-cols-4",
    }[cols];

    return (
        <div className={cn("grid gap-6", gridCols, className)}>
            {children}
        </div>
    );
}
