import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
    title: "Contact | Cafe Ara",
    description: "Get in touch with us.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-offwhite pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Info */}
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h1 className="font-display text-5xl md:text-6xl text-terracotta">Visit Us</h1>
                        <p className="font-body text-lg text-stone-600">
                            We are located in the heart of Cinnamon Gardens, surrounded by colonial architecture and lush greenery.
                        </p>
                    </div>

                    <div className="space-y-8 font-body text-charcoal">
                        <div className="flex items-start gap-4">
                            <MapPin className="text-terracotta mt-1" />
                            <div>
                                <h3 className="font-heading text-xl mb-1">Address</h3>
                                <p className="text-stone-600">123 Cinnamon Gardens,<br />Colombo 07, Sri Lanka</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone className="text-terracotta mt-1" />
                            <div>
                                <h3 className="font-heading text-xl mb-1">Phone</h3>
                                <p className="text-stone-600">+94 11 234 5678</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Mail className="text-terracotta mt-1" />
                            <div>
                                <h3 className="font-heading text-xl mb-1">Email</h3>
                                <p className="text-stone-600">hello@cafeara.lk</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Clock className="text-terracotta mt-1" />
                            <div>
                                <h3 className="font-heading text-xl mb-1">Hours</h3>
                                <p className="text-stone-600">Mon - Sun: 8:00 AM - 10:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="h-[400px] md:h-full bg-stone-200 rounded-2xl overflow-hidden relative min-h-[400px]">
                    <div className="absolute inset-0 bg-terracotta/5 flex items-center justify-center font-display text-2xl text-stone-400">
                        [Google Map Placeholder]
                    </div>
                </div>
            </div>
        </div>
    );
}
