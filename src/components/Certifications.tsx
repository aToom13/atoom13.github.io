"use client";

import { motion, AnimatePresence } from "framer-motion";
import GlassContainer from "./ui/GlassContainer";
import { Award, Medal, BookOpen, GraduationCap, Trophy } from "lucide-react";
import { certificates } from "@/data";
import { useModalStore } from "@/store/modalStore";
import { useState } from "react";
import clsx from "clsx";

type Category = "Competitive Awards" | "Specialized Diplomas" | "Professional Workshops";

const tabs: { label: Category; icon: any }[] = [
    { label: "Competitive Awards", icon: Trophy },
    { label: "Specialized Diplomas", icon: GraduationCap },
    { label: "Professional Workshops", icon: BookOpen },
];

export default function Certifications() {
    const { openModal } = useModalStore();
    const [activeTab, setActiveTab] = useState<Category>("Competitive Awards");

    const filteredCerts = certificates.filter(c => c.category === activeTab);

    return (
        <section id="certifications" className="py-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-2 block">
                    Proven Excellence
                </span>
                <h2 className="text-3xl font-bold text-white mb-2">Verified Authority</h2>
                <p className="text-slate-400">Competitive achievements and specialized training.</p>
            </motion.div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-4 mb-12">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                        <button
                            key={tab.label}
                            onClick={() => setActiveTab(tab.label)}
                            className={clsx(
                                "flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300",
                                activeTab === tab.label
                                    ? "bg-blue-500/20 border-blue-500/50 text-white shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                                    : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white"
                            )}
                        >
                            <Icon className="w-4 h-4" />
                            <span className="font-medium text-sm md:text-base">{tab.label}</span>
                        </button>
                    )
                })}
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {filteredCerts.map((cert) => (
                        <motion.div
                            layout
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => openModal('certificate', cert)}
                            className="cursor-pointer"
                        >
                            <GlassContainer className="p-6 h-full flex flex-col items-start gap-4 hover:border-blue-500/40 transition-all hover:bg-slate-900/80 group">
                                <div className="flex w-full justify-between items-start">
                                    <div className="p-3 bg-gradient-to-br from-white/10 to-white/5 rounded-xl group-hover:from-blue-500/20 group-hover:to-blue-500/10 transition-colors">
                                        {activeTab === "Competitive Awards" ? (
                                            <Medal className="w-6 h-6 text-yellow-400" />
                                        ) : (
                                            <Award className="w-6 h-6 text-blue-300" />
                                        )}
                                    </div>
                                    <span className="text-xs font-mono text-slate-500 border border-white/5 px-2 py-1 rounded bg-black/20">
                                        {cert.year}
                                    </span>
                                </div>

                                <div className="mt-2">
                                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-tight mb-2">
                                        {cert.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm border-l-2 border-white/10 pl-3 leading-relaxed">
                                        {cert.issuer}
                                    </p>
                                </div>
                            </GlassContainer>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
