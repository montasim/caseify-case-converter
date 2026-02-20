import * as React from "react";
import Link from "next/link";
import { Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export function Logo({ className, iconSize = "w-10 h-10", textSize = "text-2xl", showText = true }: {
    className?: string;
    iconSize?: string;
    textSize?: string;
    showText?: boolean;
}) {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <div className={cn("relative rounded-2xl flex items-center justify-center shrink-0 overflow-hidden", iconSize)}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent-secondary animate-gradient-shift" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                <span className="relative text-white font-black leading-none" style={{ fontSize: '1.5rem' }}>C</span>
            </div>
            {showText && (
                <span className={cn("font-black tracking-tight leading-none gradient-text", textSize)}>
                    Convert Case
                </span>
            )}
        </div>
    );
}

import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
    return (
        <header className="fixed top-0 w-full z-50 border-b border-border/50 glass-card">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="group transition-opacity hover:opacity-90">
                    <Logo />
                </Link>

                <div className="flex items-center gap-2">
                    <ModeToggle />
                    <a
                        href="https://github.com/montasim/caseify-case-converter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 hover:bg-primary/10 rounded-full transition-all duration-300 flex items-center justify-center w-10 h-10 group/icon"
                    >
                        <Github className="w-5 h-5 text-muted-foreground group-hover/icon:text-primary transition-colors" />
                    </a>
                </div>
            </div>
        </header>
    );
}

export function Footer() {
    return (
        <footer className="border-t border-border/50 py-12 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center">
                        <Logo iconSize="w-6 h-6" textSize="text-sm" className="opacity-80" />
                        <span className="ml-2 text-sm text-muted-foreground font-medium">
                            &copy; {new Date().getFullYear()}{' '} All rights reserved.
                        </span>
                    </div>

                    <nav className="flex items-center gap-8 text-sm text-muted-foreground">
                        {[
                            { href: "/privacy", label: "Privacy" },
                            { href: "/terms", label: "Terms" },
                            { href: "/contact", label: "Contact" }
                        ].map((link) => (
                            <Link 
                                key={link.href} 
                                href={link.href} 
                                className="hover:text-primary transition-colors relative group/link"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen relative overflow-hidden bg-background/50 selection:bg-primary/20 selection:text-primary">
            {/* Isometric grid background */}
            <div className="absolute inset-0 isometric-grid pointer-events-none" />
            
            {/* Mesh gradient background */}
            <div className="absolute inset-0 mesh-gradient pointer-events-none" />
            
            {/* Floating gradient orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-blob pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-chart-2/10 rounded-full blur-[120px] animate-blob animation-delay-2000 pointer-events-none" />
            <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-chart-3/10 rounded-full blur-[120px] animate-blob animation-delay-4000 pointer-events-none" />

            <Header />
            <div className="relative z-10 w-full flex flex-col min-h-screen">
                <div className="container mx-auto px-4 pt-36 pb-20 flex-grow">
                    {children}
                </div>
                <Footer />
            </div>
        </main>
    );
}

export function PageHeader({
    title,
    description,
    icon: Icon,
    gradient = false,
    className
}: {
    title: string;
    description: string;
    icon?: React.ElementType;
    gradient?: boolean;
    className?: string;
}) {
    return (
        <div className={cn("flex flex-col items-center text-center space-y-4 mb-8 animate-fade-in-up", className)}>
            {Icon && (
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-2 animate-subtle-float">
                    <Icon className="w-6 h-6 text-primary" />
                </div>
            )}
            <h1 className={cn(
                "text-3xl md:text-4xl font-bold tracking-tight",
                gradient && "gradient-text animate-gradient-shift"
            )}>
                {title}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl px-4 mx-auto leading-relaxed">
                {description}
            </p>
        </div>
    );
}

export function InfoCard({
    title,
    description,
    icon: Icon,
    className,
    centered = false
}: {
    title: string;
    description: string;
    icon?: React.ElementType;
    className?: string;
    centered?: boolean;
}) {
    return (
        <Card className={cn("glass-card rounded-3xl overflow-hidden", className)}>
            <CardContent className={cn("p-8 space-y-4", centered && "text-center")}>
                {Icon && (
                    <div className={cn(
                        "w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent-secondary/10 flex items-center justify-center mb-4 animate-subtle-float",
                        centered && "mx-auto"
                    )}>
                        <Icon className="w-7 h-7 text-primary" />
                    </div>
                )}
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
}

export function PageSection({
    title,
    children,
    icon: Icon,
    className
}: {
    title: string;
    children: React.ReactNode;
    icon?: React.ElementType;
    className?: string;
}) {
    return (
        <section className={cn("space-y-4", className)}>
            <div className="flex items-center gap-3">
                {Icon && (
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                    </div>
                )}
                <h2 className="text-xl font-semibold text-foreground">{title}</h2>
            </div>
            <div className="text-muted-foreground leading-relaxed space-y-4 pl-13">
                {children}
            </div>
        </section>
    );
}

export function InfoGrid({
    children,
    cols = 3,
    className
}: {
    children: React.ReactNode;
    cols?: 1 | 2 | 3 | 4;
    className?: string;
}) {
    const gridCols = {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-3",
        4: "grid-cols-2 lg:grid-cols-4"
    }[cols];

    return (
        <div className={cn("grid gap-6", gridCols, className)}>
            {children}
        </div>
    );
}

export function ContentCard({
    children,
    className,
    gradientBar = false
}: {
    children: React.ReactNode;
    className?: string;
    gradientBar?: boolean;
}) {
    return (
        <Card className={cn("glass-card rounded-3xl overflow-hidden", className)}>
            {gradientBar && <div className="h-2 bg-gradient-to-r from-primary via-accent-secondary to-accent animate-gradient-shift" />}
            <CardContent className="p-8 space-y-8">
                {children}
            </CardContent>
        </Card>
    );
}
