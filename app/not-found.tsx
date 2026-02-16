import Link from "next/link";
import Button from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-cream flex flex-col items-center justify-center text-center px-6">
            <h2 className="font-display text-9xl text-terracotta/20 mb-4 select-none">404</h2>
            <h1 className="font-display text-5xl md:text-6xl text-charcoal mb-6">
                Table Not Found
            </h1>
            <p className="font-body text-stone-600 max-w-md mx-auto mb-10 text-lg">
                It seems you've wandered into an section of our kitchen that doesn't exist.
                Let's get you back to your table.
            </p>
            <Link href="/">
                <Button variant="primary">Return Home</Button>
            </Link>
        </div>
    );
}
