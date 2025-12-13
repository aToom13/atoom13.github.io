"use client";

import { motion } from "framer-motion";
import GlassContainer from "./ui/GlassContainer";
import { experience } from "@/data";
import { Calendar, Briefcase } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-2 block">
                    Career & Leadership
                </span>
                <h2 className="text-3xl font-bold text-white">Engineering Timeline</h2>
                <p className="text-slate-400">Project leadership and industrial R&D execution.</p>
            </motion.div>

            <GlassContainer className="p-8 md:p-12 bg-slate-950/40"> {/* Slightly darker/more transparent for density */}
                <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12">
                    {experience.map((job, idx) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative pl-8 md:pl-12 group"
                        >
                            {/* Connector Node */}
                            <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-600 group-hover:border-blue-400 group-hover:bg-blue-500 transition-all shadow-[0_0_0_4px_rgba(2,6,23,1)] z-10" />

                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                        {job.role}
                                    </h3>
                                    <div className="flex items-center gap-2 mt-1 text-slate-300 font-medium">
                                        <Briefcase className="w-4 h-4 text-blue-500" />
                                        <span>{job.organization}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit h-fit">
                                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                                    <span className="font-mono text-xs text-slate-300">{job.period}</span>
                                </div>
                            </div>

                            {job.context && (
                                <div className="mb-4 inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-xs font-mono text-emerald-300 uppercase tracking-wide">
                                    {job.context}
                                </div>
                            )}

                            <p className="text-slate-400 text-base leading-relaxed border-l-2 border-white/5 pl-4 group-hover:border-blue-500/30 transition-colors">
                                {job.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </GlassContainer>
        </section>
    );
}
