import React from "react";
import ReservationsHero from "@/components/reservations/reservations-hero";
import BookingForm from "@/components/reservations/booking-form";
import PrivateDining from "@/components/reservations/private-dining";

export const metadata = {
    title: "Reservations | Cafe Ara",
    description: "Book your table at Cafe Ara. Experience our earthen sophistication.",
};

export default function ReservationsPage() {
    return (
        <main className="min-h-screen bg-offwhite">
            <ReservationsHero />

            {/* Booking Section */}
            <section className="relative -mt-24 md:-mt-32 z-20 max-w-5xl mx-auto px-6 mb-24">
                <div className="bg-white p-8 md:p-16 shadow-2xl shadow-charcoal/10 rounded-sm">
                    <BookingForm />
                </div>
            </section>

            <PrivateDining />
        </main>
    );
}
