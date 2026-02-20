/**
 * Logo component
 * Displays the application logo with optional text
 */

import * as React from "react";
import { cn } from "@/lib/utils";
import type { LogoProps } from "@/types";

/**
 * Logo component with gradient icon and optional text
 * 
 * @param props - Logo component props
 * @returns Logo component
 */
export function Logo({
    className,
    iconSize = "w-10 h-10",
    textSize = "text-2xl",
    showText = true,
}: LogoProps) {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <div
                className={cn(
                    "relative rounded-2xl flex items-center justify-center shrink-0 overflow-hidden",
                    iconSize
                )}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent-secondary animate-gradient-shift" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                <span
                    className="relative text-white font-black leading-none"
                    style={{ fontSize: "1.5rem" }}
                >
                    C
                </span>
            </div>
            {showText && (
                <span
                    className={cn(
                        "font-black tracking-tight leading-none gradient-text",
                        textSize
                    )}
                >
                    Convert Case
                </span>
            )}
        </div>
    );
}
