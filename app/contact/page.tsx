import React from "react";
import ContactHero from "@/components/contact/contact-hero";
import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import MapSection from "@/components/contact/map-section";
import FAQ from "@/components/contact/faq";

export const metadata = {
    title: "Contact | Cafe Ara",
    description: "Connect with our heritage.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-offwhite">
            <ContactHero />

            {/* Floating Card Container */}
            <div className="max-w-7xl mx-auto px-6 relative z-20 -mt-24 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </div>

            <MapSection />

            <div className="py-24">
                <FAQ />
            </div>
        </main>
    );
}
