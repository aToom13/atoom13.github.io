"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";

// Using anchors directly works with Lenis if configured to intercept clicks or using 'lenis.scrollTo'.
// For simplicity in this setup without complex Context hook for Lenis, standard anchors usually work fine 
// as Lenis normalizes the scroll behavior. But let's add a small helper for smooth anchor clicks if needed.
// Actually, standard hashes work best for SEO.

const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "#projects" },
    { name: "Experience", path: "#experience" },
    { name: "Credentials", path: "#certifications" },
    { name: "Contact", path: "#contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    // Simple smooth scroll handler if Lenis doesn't auto-catch anchor links (it usually does if configured)
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        if (path.startsWith("#")) {
            e.preventDefault();
            const element = document.querySelector(path);
            if (element) {
                // We can rely on Lenis instance if available or just experimental scrollIntoView
                // element.scrollIntoView({ behavior: 'smooth' });
                // Better: Let Lenis handle it via global window instance or just let native behavior 
                // fall through if we verify Lenis catches it. 
                // To be safe with Lenis + Next.js App Router hash issues:
                const lenis = (window as any).lenis;
                if (lenis) {
                    lenis.scrollTo(path);
                } else {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
        >
            <div className="flex items-center gap-1 px-3 py-2.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl shadow-blue-900/10">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        onClick={(e) => handleScroll(e, item.path)}
                        className={clsx(
                            "px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 relative group",
                            pathname === item.path ? "text-white" : "text-slate-400 hover:text-white"
                        )}
                    >
                        {item.name}
                        <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        {pathname === item.path && (
                            <span className="absolute inset-0 bg-white/5 rounded-full -z-10" />
                        )}
                    </Link>
                ))}
            </div>
        </motion.nav>
    );
}
