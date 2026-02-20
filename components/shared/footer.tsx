/**
 * Footer component
 * Displays the application footer with logo, copyright, and navigation links
 */

import * as React from "react";
import Link from "next/link";
import { Logo } from "./logo";
import type { NavLink } from "@/types";

/**
 * Navigation links for the footer
 */
const FOOTER_NAV_LINKS: NavLink[] = [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/contact", label: "Contact" },
] as const;

/**
 * Footer component
 * Displays logo, copyright information, and navigation links
 * 
 * @returns Footer component
 */
export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border/50 py-12 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center">
                        <Logo iconSize="w-6 h-6" textSize="text-sm" className="opacity-80" />
                        <span className="ml-2 text-sm text-muted-foreground font-medium">
                            &copy; {currentYear} All rights reserved.
                        </span>
                    </div>

                    <nav className="flex items-center gap-8 text-sm text-muted-foreground">
                        {FOOTER_NAV_LINKS.map((link) => (
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
