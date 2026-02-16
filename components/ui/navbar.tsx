"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import Button from "./button";
import { Menu, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLAnchorElement>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                start: "top -80",
                end: 99999,
                onToggle: (self) => {
                    const classes = "bg-cream/80 backdrop-blur-md shadow-sm py-2".split(" ");
                    if (self.isActive) {
                        navRef.current?.classList.add(...classes);
                    } else {
                        navRef.current?.classList.remove(...classes);
                    }
                },
                onUpdate: (self) => {
                    if (self.direction === 1 && self.progress > 0.05) {
                        // Scrolling down - hide or compact? specific request says "solid on scroll"
                        // The toggleClass above handles the visual change.
                    }
                }
            });
        });

        return () => ctx.revert();
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header
            ref={navRef}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 transition-all duration-500 will-change-transform"
        >
            <Link href="/" ref={logoRef} className="font-display text-3xl font-bold text-terracotta z-50 relative">
                Cafe Ara
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={cn(
                            "font-subheading text-sm uppercase tracking-widest hover:text-terracotta transition-colors",
                            pathname === link.href ? "text-terracotta border-b-2 border-terracotta" : "text-charcoal"
                        )}
                    >
                        {link.name}
                    </Link>
                ))}
                <Link href="/reservations">
                    <Button variant="primary">Reserve</Button>
                </Link>
            </nav>

            {/* Mobile Toggle */}
            <button onClick={toggleMobileMenu} className="md:hidden z-50 text-terracotta">
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-cream flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="font-display text-4xl text-terracotta hover:text-terracotta-dark"
                    >
                        {link.name}
                    </Link>
                ))}
                <Link href="/reservations" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="primary">Reserve a Table</Button>
                </Link>
            </div>
        </header>
    );
}
