"use client";

import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    children: React.ReactNode;
}

export default function Button({
    className,
    variant = "primary",
    children,
    ...props
}: ButtonProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        gsap.to(buttonRef.current, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        gsap.to(buttonRef.current, {
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
        });
        if (textRef.current) {
            gsap.to(textRef.current, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current) return;
        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(buttonRef.current, {
            x: x * 0.2, // Magnetic pull strength
            y: y * 0.2,
            duration: 0.3,
            ease: "power2.out",
        });

        if (textRef.current) {
            gsap.to(textRef.current, {
                x: x * 0.1, // Text moves slightly less for depth
                y: y * 0.1,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    };

    const variants = {
        primary: "bg-terracotta text-white hover:bg-terracotta-light",
        secondary: "bg-forest text-cream hover:bg-forest-light",
        outline: "border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-white",
    };

    return (
        <button
            ref={buttonRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            className={cn(
                "relative overflow-hidden rounded-full px-8 py-3 font-subheading uppercase tracking-widest text-sm transition-colors duration-300",
                variants[variant],
                className
            )}
            {...props}
        >
            <span ref={textRef} className="relative z-10 block">
                {children}
            </span>
        </button>
    );
}
