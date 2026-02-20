/**
 * ConversionGrid component
 * Displays conversion options in a grid layout
 */

import type { CaseConversionOption } from "@/features/case-converter/types/conversion.types";
import { cn } from "@/lib/utils";

interface ConversionGridProps {
    options: CaseConversionOption[];
    onConversionSelect: (conversion: CaseConversionOption) => void;
    disabled?: boolean;
}

/**
 * ConversionGrid component
 * Displays conversion options in a grid layout
 *
 * @param props - ConversionGridProps component props
 * @returns ConversionGrid component
 */
export function ConversionGrid({ options, onConversionSelect, disabled = false }: ConversionGridProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {options.map((option) => (
                <button
                    key={option.id}
                    onClick={() => onConversionSelect(option)}
                    disabled={disabled}
                    className={cn(
                        "flex items-center justify-center p-4 rounded-xl border border-border/50 bg-card/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-card/50 disabled:hover:border-border/50",
                        disabled && "opacity-50 cursor-not-allowed"
                    )}
                >
                    <span className="text-sm font-medium text-center">{option.label}</span>
                </button>
            ))}
        </div>
    );
}
