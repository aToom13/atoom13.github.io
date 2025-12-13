import { clsx } from "clsx";
import { ReactNode } from "react";

interface GlassContainerProps {
    children: ReactNode;
    className?: string;
}

export default function GlassContainer({ children, className }: GlassContainerProps) {
    return (
        <div
            className={clsx(
                "bg-slate-950/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl",
                className
            )}
        >
            {children}
        </div>
    );
}
