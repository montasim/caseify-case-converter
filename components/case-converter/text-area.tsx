/**
 * TextArea component
 * Displays a styled textarea for text input
 */

import * as React from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

/**
 * TextArea component props
 */
export interface TextAreaProps {
    /** Current text value */
    value: string;
    /** Callback when text changes */
    onChange: (value: string) => void;
    /** Placeholder text */
    placeholder?: string;
    /** Reference to the textarea element */
    ref?: React.RefObject<HTMLTextAreaElement>;
    /** Additional CSS classes */
    className?: string;
    /** Minimum height */
    minHeight?: string;
}

/**
 * TextArea component
 * Displays a styled textarea for text input with placeholder
 * 
 * @param props - TextArea component props
 * @returns TextArea component
 */
export const TextArea = React.forwardRef<HTMLTextAreaElement, Omit<TextAreaProps, "ref">>(
    (
        {
            value,
            onChange,
            placeholder = "Type or paste your content here...",
            className,
            minHeight = "min-h-[250px] md:min-h-[300px]",
        },
        ref
    ) => {
        return (
            <div className="relative">
                <Textarea
                    ref={ref}
                    placeholder={placeholder}
                    className={cn(
                        "p-8 md:p-12 text-xl border-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent resize-y transition-all duration-300 placeholder:text-muted-foreground/60 leading-relaxed font-medium",
                        minHeight,
                        className
                    )}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        );
    }
);

TextArea.displayName = "TextArea";
