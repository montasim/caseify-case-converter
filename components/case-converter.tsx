"use client";

import * as React from "react";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Download, Trash2, Type, Zap, Layout, Shield } from "lucide-react";
import { PageHeader, InfoCard, InfoGrid } from "@/components/layout";
import { StatBadge } from "@/components/case-converter/stat-badge";
import { IconButton } from "@/components/case-converter/icon-button";
import { ConversionGrid } from "@/components/case-converter/conversion-grid";
import { TextArea } from "@/components/case-converter/text-area";
import { useCaseConverter } from "@/lib/hooks";
import { CONVERSION_OPTIONS } from "@/features/case-converter/constants/conversion-options";
import { cn } from "@/lib/utils";

/**
 * CaseConverter component
 * Main component for text case conversion with statistics and actions
 */
export function CaseConverter() {
    const {
        text,
        setText,
        stats,
        copied,
        handleCopy,
        handleDownload,
        handleClear,
        applyConversion,
    } = useCaseConverter();

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const onClear = () => {
        handleClear();
        textareaRef.current?.focus();
    };

    const onConversionSelect = (conversion: typeof CONVERSION_OPTIONS[number]) => {
        applyConversion(conversion.fn);
    };

    return (
        <div className="w-full max-w-5xl mx-auto space-y-10 animate-fade-in-up">
            <Card className="dark:shadow-primary/10 bg-card/90 backdrop-blur-xl overflow-hidden py-0 group/card">
                <CardContent className="p-0">
                    <TextArea
                        value={text}
                        onChange={setText}
                        ref={textareaRef}
                    />

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 md:px-12 md:py-8 bg-muted/30 border-t border-border/50 backdrop-blur-md">
                        <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                            <StatBadge icon={Copy} label="Characters" value={stats.characters} />
                            <StatBadge icon={Download} label="Words" value={stats.words} />
                            <StatBadge icon={Trash2} label="Lines" value={stats.lines} />
                        </div>

                        <div className="flex items-center gap-3">
                            <IconButton
                                icon={Copy}
                                tooltip="Copy"
                                onClick={handleCopy}
                                success={copied}
                                disabled={!text}
                                className={cn(copied && "bg-green-500/10 border-green-500/50 text-green-600 hover:bg-green-500/20 hover:border-green-500/60")}
                            />
                            <IconButton
                                icon={Download}
                                tooltip="Save as TXT"
                                onClick={handleDownload}
                                disabled={!text}
                            />
                            <IconButton
                                icon={Trash2}
                                tooltip="Clear content"
                                onClick={onClear}
                                disabled={!text}
                                className="hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <ConversionGrid
                options={CONVERSION_OPTIONS}
                onConversionSelect={onConversionSelect}
                disabled={!text}
            />
        </div>
    );
}
