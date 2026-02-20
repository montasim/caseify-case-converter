"use client";

import React, { useState } from "react";
import { PageLayout, PageHeader, ContentCard } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send, Globe } from "lucide-react";
import { sendEmail } from "@/lib/actions";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const result = await sendEmail(formData);

        setIsSubmitting(false);
        if (result.success) {
            setSubmitted(true);
        } else {
            alert(result.error || "Something went wrong. Please try again.");
        }
    };

    return (
        <PageLayout>
            <div className="max-w-5xl mx-auto space-y-12 animate-fade-in-up">
                <PageHeader
                    title="Get in Touch"
                    description="Have questions or feedback? We'd love to hear from you. Our team is here to help and improve your experience."
                    gradient
                />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-2">
                        <ContentCard className="h-full">
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent-secondary/10 flex items-center justify-center shrink-0 animate-subtle-float">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Email Us</h3>
                                        <p className="text-muted-foreground">{contactEmail}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent-secondary/10 flex items-center justify-center shrink-0 animate-subtle-float">
                                        <MessageSquare className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Live Support</h3>
                                        <p className="text-muted-foreground">Available Mon-Fri, 9am - 5pm BST</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent-secondary/10 flex items-center justify-center shrink-0 animate-subtle-float">
                                        <Globe className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Global Reach</h3>
                                        <p className="text-muted-foreground">Trusted by users worldwide</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-border/50 mt-auto">
                                <h4 className="font-semibold mb-4 text-sm text-primary uppercase tracking-wider">Social Channels</h4>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        { label: "LinkedIn", href: "https://www.linkedin.com/in/montasim" },
                                        { label: "GitHub", href: "https://github.com/montasim" }
                                    ].map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-muted/80 hover:bg-gradient-to-br hover:from-primary hover:to-accent-secondary hover:text-primary-foreground rounded-xl transition-all duration-300 text-sm font-medium hover:scale-105"
                                        >
                                            {social.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </ContentCard>
                    </div>

                    <div className="lg:col-span-3">
                        <ContentCard className="h-full">
                            {submitted ? (
                                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in duration-500 py-12">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500/10 to-green-600/10 flex items-center justify-center animate-pulse-glow">
                                        <Send className="w-10 h-10 text-green-500" />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-bold gradient-text">Message Sent!</h2>
                                        <p className="text-muted-foreground max-w-sm">
                                            Thank you for reaching out. Our team will get back to you as soon as possible.
                                        </p>
                                    </div>
                                    <Button
                                        variant="outline"
                                        onClick={() => setSubmitted(false)}
                                        className="rounded-2xl px-8 h-12 hover:scale-105 transition-transform"
                                    >
                                        Send Another Message
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col justify-center">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-sm font-semibold uppercase tracking-wider">Full Name</Label>
                                            <Input id="name" name="name" placeholder="Enter your name" required className="input-modern rounded-2xl p-5" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-sm font-semibold uppercase tracking-wider">Email Address</Label>
                                            <Input id="email" name="email" type="email" placeholder="john@example.com" required className="input-modern rounded-2xl p-5" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject" className="text-sm font-semibold uppercase tracking-wider">Subject</Label>
                                        <Input id="subject" name="subject" placeholder="How can we help?" required className="input-modern rounded-2xl p-5" />
                                    </div>

                                    <div className="space-y-2 flex-1">
                                        <Label htmlFor="message" className="text-sm font-semibold uppercase tracking-wider">Message</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell us more about your inquiry..."
                                            required
                                            className="input-modern rounded-2xl min-h-[150px] p-5 resize-none"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full h-14 text-lg font-bold rounded-2xl shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] btn-gradient"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                <Send className="w-5 h-5" />
                                                Send Message
                                            </div>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </ContentCard>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
