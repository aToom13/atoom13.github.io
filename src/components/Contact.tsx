"use client";

import { motion } from "framer-motion";
import GlassContainer from "./ui/GlassContainer";
import { Copy, Github, ArrowDownToLine, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const email = "aekkonuksever@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4 block">
                    Initialize Connection
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Engineer the Future?
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto text-lg">
                    Open to discussing autonomous systems, renewable energy infrastructures, or high-performance visualization architectures.
                </p>
            </motion.div>

            <GlassContainer className="p-8 md:p-12 inline-flex flex-col items-center gap-8">
                <button
                    onClick={handleCopy}
                    className="group relative flex items-center gap-4 px-8 py-4 bg-slate-900/50 hover:bg-slate-900 text-white rounded-full border border-white/10 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/10"
                >
                    <span className="text-xl font-mono">{email}</span>
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                        {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-slate-400 group-hover:text-white" />}
                    </div>
                    {copied && (
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs text-green-400 font-mono bg-slate-900 border border-green-500/20 px-2 py-1 rounded">
                            Copied to clipboard
                        </span>
                    )}
                </button>

                <div className="flex gap-6">
                    <a
                        href="https://github.com/aToom13"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-slate-400 hover:text-white transition-all hover:scale-110"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                    <a
                        href="/CV.pdf"
                        download="Akif_Efe_Konuksever_CV.pdf"
                        className="group flex items-center gap-3 px-6 py-4 rounded-full bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 hover:border-blue-500/60 text-blue-200 hover:text-white transition-all hover:scale-105"
                    >
                        <ArrowDownToLine className="w-6 h-6 group-hover:animate-bounce" />
                        <span className="font-bold">Download CV</span>
                    </a>
                </div>
            </GlassContainer>

            <div className="mt-24 pt-8 border-t border-white/5 text-slate-600 text-sm font-mono">
                <p>Designed & Engineered by Akif Efe Konuksever.</p>
                <p className="mt-2 opacity-50">System Status: Operational • Next.js 14 • R3F</p>
            </div>
        </section>
    );
}
