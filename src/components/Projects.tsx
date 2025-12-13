"use client";

import { motion } from "framer-motion";
import SpotlightCard from "./ui/SpotlightCard";
import GlassContainer from "./ui/GlassContainer";
import { ArrowUpRight, Cpu, Sun, Car } from "lucide-react";
import { projects } from "@/data"; // Import data
import { useModalStore } from "@/store/modalStore";

// Helper to get icon based on ID (since data.ts strings can't store JSX component directly easily without hydration issues or massive maps)
// Faster to just map here or store icon name in data and map.
// For now, let's just map manually for the limited set.
const getIcon = (id: string) => {
    switch (id) {
        case 'atom-agent': return <Cpu className="w-8 h-8 text-blue-400" />;
        case 'echo-sun-bank': return <Sun className="w-8 h-8 text-yellow-400" />;
        case 'ecodrive-auto': return <Car className="w-8 h-8 text-emerald-400" />;
        default: return <Cpu className="w-8 h-8 text-white" />;
    }
};

const getSize = (id: string) => {
    // Hardcoded layout logic for the bento grid vibe
    if (id === 'atom-agent') return "col-span-1 md:col-span-2 row-span-2";
    return "col-span-1 row-span-1";
}

export default function Projects() {
    const { openModal } = useModalStore();

    return (
        <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-3xl font-bold text-white mb-2">Deployed Architectures</h2>
                <p className="text-slate-400">Selected heavy-engineering milestones.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                {projects.map((project, idx) => (
                    <GlassContainer key={project.id} className={`${getSize(project.id)} group p-0 cursor-pointer`}>
                        <div onClick={() => openModal('project', project)} className="h-full w-full">
                            <SpotlightCard className="h-full w-full border-none bg-transparent">
                                <div className="p-8 h-full flex flex-col justify-between relative z-10">
                                    <div>
                                        <div className="mb-4 p-3 bg-slate-800/50 w-fit rounded-lg border border-white/5">
                                            {getIcon(project.id)}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                                            {project.shortDesc}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between mt-6">
                                        <div className="flex gap-2 flex-wrap">
                                            {project.techStack.slice(0, 3).map((tag) => (
                                                <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-slate-300 border border-white/5">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                            </SpotlightCard>
                        </div>
                    </GlassContainer>
                ))}
            </div>
        </section>
    );
}
