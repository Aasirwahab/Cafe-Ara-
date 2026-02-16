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
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                start: "top -80",
                end: 99999,
                onToggle: (self) => {
                    setIsScrolled(self.isActive);
                },
            });
        });

        return () => ctx.revert();
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    // Determine text color based on scroll state or specific pages (like Gallery)
    const isDarkText = isScrolled || pathname === "/gallery";
    const textColorClass = isDarkText ? "text-charcoal" : "text-offwhite";
    const logoColorClass = isDarkText ? "text-terracotta" : "text-offwhite";

    return (
        <header
            ref={navRef}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 transition-all duration-500 will-change-transform",
                isScrolled ? "bg-cream/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
            )}
        >
            <Link href="/" className={cn("font-display text-3xl font-bold z-50 relative transition-colors", logoColorClass)}>
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
                            pathname === link.href
                                ? "text-terracotta border-b-2 border-terracotta"
                                : textColorClass
                        )}
                    >
                        {link.name}
                    </Link>
                ))}
                <Link href="/reservations">
                    <Button variant={isDarkText ? "primary" : "outline"} className={isDarkText ? "" : "text-offwhite border-offwhite hover:bg-offwhite hover:text-charcoal"}>
                        Reserve
                    </Button>
                </Link>
            </nav>

            {/* Mobile Toggle */}
            <button onClick={toggleMobileMenu} className={cn("md:hidden z-50 transition-colors", isMobileMenuOpen ? "text-terracotta" : logoColorClass)}>
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
