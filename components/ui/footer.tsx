"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-forest text-cream py-16 px-6 md:px-12 mt-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* About Column */}
                <div className="space-y-4">
                    <h3 className="font-display text-3xl">Cafe Ara</h3>
                    <p className="font-body text-cream/80 text-sm leading-relaxed max-w-xs">
                        A culinary sanctuary blending the warmth of Sri Lankan spices with
                        global flavors. Taste the tradition, feel the earth.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h4 className="font-heading text-xl text-gold">Explore</h4>
                    <ul className="space-y-2 font-subheading text-sm uppercase tracking-wide">
                        <li><Link href="/menu" className="hover:text-gold transition-colors">Our Menu</Link></li>
                        <li><Link href="/reservations" className="hover:text-gold transition-colors">Reservations</Link></li>
                        <li><Link href="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
                        <li><Link href="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                    <h4 className="font-heading text-xl text-gold">Visit Us</h4>
                    <div className="space-y-3 font-body text-sm text-cream/80">
                        <p className="flex items-start gap-2">
                            <MapPin size={18} className="text-gold mt-1 shrink-0" />
                            123 Cinnamon Gardens,<br />Colombo 07, Sri Lanka
                        </p>
                        <p className="flex items-center gap-2">
                            <Phone size={18} className="text-gold shrink-0" />
                            +94 11 234 5678
                        </p>
                        <p className="flex items-center gap-2">
                            <Mail size={18} className="text-gold shrink-0" />
                            hello@cafeara.lk
                        </p>
                    </div>
                </div>

                {/* Hours & Social */}
                <div className="space-y-4">
                    <h4 className="font-heading text-xl text-gold">Hours</h4>
                    <div className="font-body text-sm text-cream/80 space-y-1">
                        <p>Mon - Sun: 8:00 AM - 10:00 PM</p>
                        <p>Holidays: 9:00 AM - 11:00 PM</p>
                    </div>
                    <div className="flex gap-4 pt-4">
                        <Link href="#" className="p-2 bg-forest-light rounded-full hover:bg-gold hover:text-forest transition-all">
                            <Instagram size={20} />
                        </Link>
                        <Link href="#" className="p-2 bg-forest-light rounded-full hover:bg-gold hover:text-forest transition-all">
                            <Facebook size={20} />
                        </Link>
                        <Link href="#" className="p-2 bg-forest-light rounded-full hover:bg-gold hover:text-forest transition-all">
                            <Twitter size={20} /> {/* Assuming Twitter/X for now, can swap for TikTok */}
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-forest-light/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-body text-cream/60">
                <p>© {new Date().getFullYear()} Cafe Ara. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="/privacy" className="hover:text-gold">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-gold">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
