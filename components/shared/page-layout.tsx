/**
 * PageLayout component
 * Main layout wrapper with background effects, header, and footer
 */

import * as React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

/**
 * PageLayout component
 * Provides the main layout structure with background effects, header, and footer
 * 
 * @param props - Component props
 * @returns PageLayout component
 */
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
