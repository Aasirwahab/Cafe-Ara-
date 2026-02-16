import React from "react";
import MenuHero from "@/components/menu/menu-hero";
import ChefsSpecials from "@/components/menu/chefs-specials";
import Beverages from "@/components/menu/beverages";
import MenuGrid from "@/components/menu/menu-grid";

export const metadata = {
    title: "Menu | Cafe Ara",
    description: "Explore our authentic Sri Lankan and Indian cuisine.",
};

export default function MenuPage() {
    return (
        <main className="bg-cream min-h-screen">
            <MenuHero />

            <ChefsSpecials />

            <div className="py-20">
                <MenuGrid />
            </div>

            <Beverages />
        </main>
    );
}
