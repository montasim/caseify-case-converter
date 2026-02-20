/**
 * Header component
 * Displays the application header with logo, theme toggle, and GitHub link
 */

import * as React from "react";
import Link from "next/link";
import { Github } from "lucide-react";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";

/**
 * Header component
 * Fixed at the top of the page with logo, theme toggle, and GitHub link
 * 
 * @returns Header component
 */
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
