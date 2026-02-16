import React from "react";
import GalleryGrid from "@/components/gallery/gallery-grid";

export const metadata = {
    title: "Gallery | Cafe Ara",
    description: "Visual journey through our ambiance and cuisine.",
};

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-cream pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h1 className="font-display text-5xl md:text-7xl text-terracotta">Gallery</h1>
                    <p className="font-body text-stone-600 max-w-xl mx-auto">
                        A glimpse into the soul of Cafe Ara. From the fire in our kitchen to the
                        calm of our dining hall.
                    </p>
                </div>
                <GalleryGrid />
            </div>
        </div>
    );
}
