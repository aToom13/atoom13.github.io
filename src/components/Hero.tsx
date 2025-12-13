"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* 3D Background is global now (outside) */}

            {/* Content Overlay */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 text-center pointer-events-none">
                <div className="pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-center gap-2 mb-6 text-slate-400 font-mono text-sm"
                    >
                        <MapPin className="w-4 h-4 text-blue-400" />
                        <span>Elbasan, Albania</span>
                        <span className="mx-2">•</span>
                        <span className="text-emerald-400">🚀 Open for R&D Projects</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-4 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    >
                        Akif Efe <br />
                        Konuksever
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-2xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
                    >
                        Software Engineer & AI Architect
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        Specializing in Autonomous Agents, LLM Frameworks, and Sustainable Energy Systems. <br className="hidden md:block" />
                        Bridging the gap between cognitive AI and physical reality.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <Link
                            href="#projects"
                            className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-all backdrop-blur-md border border-white/10 hover:border-white/20 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
                        >
                            Explore Work
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
