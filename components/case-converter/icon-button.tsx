/**
 * IconButton component
 * Displays an icon button with tooltip and optional success state
 */

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { IconButtonProps } from "@/types";

/**
 * IconButton component
 * Displays an icon button with tooltip and optional success state
 * 
 * @param props - IconButton component props
 * @returns IconButton component
 */
export function IconButton({
    icon: Icon,
    tooltip,
    onClick,
    disabled,
    className,
    success = false,
}: IconButtonProps) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={onClick}
                        disabled={disabled}
                        className={cn(
                            "w-14 h-14 rounded-2xl transition-all duration-300 hover:scale-110 active:scale-90 shadow-sm border-border bg-background hover:border-primary/50 hover:shadow-lg",
                            className
                        )}
                    >
                        {success ? (
                            <Check className="w-5 h-5 animate-in zoom-in text-green-500" />
                        ) : (
                            <Icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                        )}
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-foreground text-background font-bold border-none rounded-xl">
                    {tooltip}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
