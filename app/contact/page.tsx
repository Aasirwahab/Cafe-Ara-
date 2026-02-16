import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import FAQ from "@/components/contact/faq";

export const metadata = {
    title: "Contact | Cafe Ara",
    description: "Get in touch with us.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-offwhite pt-32 pb-24">
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
                    <div className="absolute inset-0 bg-stone-300">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.194308556886!2d79.861243!3d6.914717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596318d55555%3A0x2db2c938f135b9!2sCinnamon%20Gardens%2C%20Colombo!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                            width="100%"
                            height="100%"
                            title="Cafe Ara Location"
                            className="border-0 grayscale contrast-125"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>

            <FAQ />
        </main>
    );
}
