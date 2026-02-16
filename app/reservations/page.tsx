import React from "react";
import BookingForm from "@/components/reservations/booking-form";

export const metadata = {
    title: "Reservations | Cafe Ara",
    description: "Book your table at Cafe Ara.",
};

export default function ReservationsPage() {
    return (
        <div className="min-h-screen pt-24 pb-12 bg-cream flex flex-col md:flex-row">
            {/* Left Side: Images/Context */}
            <div className="hidden md:flex flex-1 relative flex-col justify-center items-center px-12 lg:px-24">
                <div className="max-w-md space-y-8 relative z-10">
                    <h1 className="font-display text-5xl lg:text-7xl text-terracotta leading-tight">
                        Join Us at <br /> <span className="text-charcoal opacity-80">the Table</span>
                    </h1>
                    <div className="space-y-6 font-body text-lg text-stone-600">
                        <p>
                            We accept reservations up to 30 days in advance. For larger parties or private events, please contact us directly.
                        </p>
                        <div className="space-y-2">
                            <strong className="block text-charcoal font-heading">Dining Hours</strong>
                            <p>Monday - Sunday: 5:00 PM - 10:00 PM</p>
                        </div>
                    </div>
                </div>
                {/* Background Texture/Image for Left Side */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
            </div>

            {/* Right Side: Form */}
            <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-forest/5 md:bg-transparent">
                <BookingForm />
            </div>
        </div>
    );
}
