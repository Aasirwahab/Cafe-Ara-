export default function Loading() {
    return (
        <div className="fixed inset-0 bg-cream z-[100] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border-4 border-terracotta/20 border-t-terracotta rounded-full animate-spin" />
                <p className="font-subheading text-xs uppercase tracking-widest text-terracotta animate-pulse">
                    Preparing...
                </p>
            </div>
        </div>
    );
}
