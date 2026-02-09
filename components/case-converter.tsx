"use client";

import * as React from "react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
    Copy,
    Download,
    Trash2,
    Type,
    Check,
    Hash,
    FileText,
    Zap,
    Layout,
    Shield,
    AlignLeft
} from "lucide-react";
import {
    toSentenceCase,
    toLowerCase,
    toUpperCase,
    toCapitalizedCase,
    toAlternatingCase,
    toTitleCase,
    toInverseCase
} from "@/lib/conversions";
import { cn } from "@/lib/utils";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { PageHeader, InfoCard, InfoGrid } from "@/components/layout";

export function CaseConverter() {
    const [text, setText] = useState("");
    const [copied, setCopied] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const stats = {
        characters: text.length,
        words: text.trim() === "" ? 0 : text.trim().split(/\s+/).length,
        sentences: text.trim() === "" ? 0 : text.split(/[\.\!\?]+/).filter(Boolean).length,
        lines: text.trim() === "" ? 0 : text.split(/\n/).length,
    };

    const handleCopy = async () => {
        if (!text) return;
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownload = () => {
        if (!text) return;
        const element = document.createElement("a");
        const file = new Blob([text], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "converted-text.txt";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    const handleClear = () => {
        setText("");
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    };

    const applyConversion = (conversionFn: (t: string) => string) => {
        if (!text) return;
        setText(conversionFn(text));
    };

    return (
        <div className="w-full max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <PageHeader
                title="Smart Case Converter"
                description="The most advanced online case conversion tool. Transform your text instantly with premium accuracy and a clean interface."
                icon={Type}
                gradient
            />

            <Card className="border-none shadow-2xl bg-card/50 backdrop-blur-sm overflow-hidden ring-1 ring-border/50 py-0">
                <CardContent className="p-0">
                    <div className="relative group">
                        <Textarea
                            ref={textareaRef}
                            placeholder="Paste or type your text here..."
                            className="min-h-[200px] md:min-h-[300px] p-6 md:p-8 text-lg border-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent resize-y transition-all duration-300 placeholder:text-muted-foreground/50"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 p-4 md:px-8 md:py-6 bg-muted/30 border-t border-border/50">
                        <div className="flex flex-wrap gap-6 text-sm font-medium text-muted-foreground">
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-background/50 rounded-full ring-1 ring-border/50">
                                <Hash className="w-4 h-4" />
                                <span>Chars: <span className="text-foreground">{stats.characters}</span></span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-background/50 rounded-full ring-1 ring-border/50">
                                <FileText className="w-4 h-4" />
                                <span>Words: <span className="text-foreground">{stats.words}</span></span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-background/50 rounded-full ring-1 ring-border/50">
                                <AlignLeft className="w-4 h-4" />
                                <span>Lines: <span className="text-foreground">{stats.lines}</span></span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={handleCopy}
                                            disabled={!text}
                                            className={cn(
                                                "rounded-xl transition-all duration-300",
                                                copied && "bg-green-500/10 border-green-500/50 text-green-600 hover:bg-green-500/20"
                                            )}
                                        >
                                            {copied ? <Check className="w-4 h-4 animate-in zoom-in" /> : <Copy className="w-4 h-4" />}
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Copy to Clipboard</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={handleDownload}
                                            disabled={!text}
                                            className="rounded-xl"
                                        >
                                            <Download className="w-4 h-4" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Download as TXT</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={handleClear}
                                            disabled={!text}
                                            className="rounded-xl hover:bg-destructive/10 hover:text-destructive transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Clear All</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {[
                    { label: "Sentence case", fn: toSentenceCase },
                    { label: "lower case", fn: toLowerCase },
                    { label: "UPPER CASE", fn: toUpperCase },
                    { label: "Capitalized Case", fn: toCapitalizedCase },
                    { label: "aLtErNaTiNg cAsE", fn: toAlternatingCase },
                    { label: "Title Case", fn: toTitleCase },
                    { label: "InVeRsE CaSe", fn: toInverseCase },
                ].map((btn) => (
                    <Button
                        key={btn.label}
                        variant="secondary"
                        className="rounded-xl h-12 font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] bg-secondary hover:bg-primary hover:text-primary-foreground shadow-sm"
                        onClick={() => applyConversion(btn.fn)}
                    >
                        {btn.label}
                    </Button>
                ))}
            </div>

            <div className="pt-6">
                <InfoGrid>
                    <InfoCard
                        title="Fast & Simple"
                        description="Just paste your text and click a button. Our algorithm handles the rest instantly, saving you time and effort."
                        icon={Zap}
                    />
                    <InfoCard
                        title="Clean Interface"
                        description="A minimalist, distraction-free environment designed for maximum productivity and ease of use."
                        icon={Layout}
                    />
                    <InfoCard
                        title="Secure & Private"
                        description="Your text never leaves your browser. All conversions are performed locally, ensuring your data remains private."
                        icon={Shield}
                    />
                </InfoGrid>
            </div>
        </div>
    );
}
