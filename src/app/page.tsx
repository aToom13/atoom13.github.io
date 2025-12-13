"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Hero3D from "@/components/Hero3D";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Modal from "@/components/ui/Modal";
import { useModalStore } from "@/store/modalStore";
import clsx from "clsx";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";

export default function Home() {
  const { activeModal } = useModalStore();

  useEffect(() => {
    // Expose lenis to window for our Navbar hack if needed
    // In a real app we'd use a Context or a cleaner Ref approach
    const lenis = (window as any).lenis;
    if (lenis) {
      // ...
    }
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <main className="min-h-screen bg-transparent selection:bg-blue-500/30">
        {/* Global Background with Blur Effect on Modal Open */}
        <Hero3D className={clsx(activeModal ? "blur-md scale-95 opacity-50" : "scale-100 opacity-100")} />

        {/* Content */}
        <div className={clsx("relative z-10 transition-all duration-500", activeModal ? "opacity-30 pointer-events-none blur-sm" : "opacity-100")}>
          <Navbar />
          <Hero />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
          {/* Footer is inside Contact now or can be separate - Contact has its own footer area in this design */}
        </div>

        {/* Floating Modal Layer */}
        <Modal />
      </main>
    </ReactLenis>
  );
}
