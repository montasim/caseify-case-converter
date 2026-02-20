/**
 * ConversionGrid component
 * Displays a grid of conversion option buttons
 */

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ConversionOption } from "@/types";

/**
 * ConversionGrid component props
 */
export interface ConversionGridProps {
    /** Conversion options to display */
    options: ConversionOption[];
    /** Callback when a conversion is selected */
    onConversionSelect: (conversion: ConversionOption) => void;
    /** Whether the grid should be disabled */
    disabled?: boolean;
    /** Additional CSS classes */
    className?: string;
}

/**
 * ConversionGrid component
 * Displays conversion options in a responsive grid layout
 * 
 * @param props - ConversionGrid component props
 * @returns ConversionGrid component
 */
export function ConversionGrid({
    options,
    onConversionSelect,
    disabled,
    className,
}: ConversionGridProps) {
    return (
        <div className={cn(
            "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4",
            className
        )}>
            {options.map((option) => (
                <Button
                    key={option.id}
                    variant="secondary"
                    className="rounded-2xl h-14 text-sm font-semibold transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] bg-secondary/80 hover:bg-gradient-to-br hover:from-primary hover:to-accent-secondary hover:text-primary-foreground shadow-sm hover:shadow-primary/30 border border-transparent hover:border-primary/30"
                    onClick={() => onConversionSelect(option)}
                    disabled={disabled}
                >
                    {option.label}
                </Button>
            ))}
        </div>
    );
}
