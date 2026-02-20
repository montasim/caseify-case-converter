/**
 * ConversionCardGrid component
 * Displays conversion options in a grid layout
 */

import type { ConversionGridProps } from "@/types";
import { cn } from "@/lib/utils";

/**
 * ConversionCardGrid component
 * Displays conversion options in a grid layout
 *
 * @param props - ConversionGridProps component props
 * @returns ConversionCardGrid component
 */
export function ConversionCardGrid({ children, cols = 2, className }: ConversionGridProps) {
    const colsClass = {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    }[cols];

    return (
        <div className={cn("max-w-4xl mx-auto grid gap-4", colsClass, className)}>
            {children}
        </div>
    );
}
