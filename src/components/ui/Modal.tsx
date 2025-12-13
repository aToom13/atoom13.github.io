"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useModalStore } from "@/store/modalStore";
import { X, Github, ExternalLink, Maximize2 } from "lucide-react";
import { useState } from "react";
import { Project, Certificate } from "@/data";

export default function Modal() {
    const { activeModal, selectedItem, closeModal } = useModalStore();
    const [isExpanded, setIsExpanded] = useState(false);

    if (!activeModal || !selectedItem) return null;

    // Type guards (simple for now as we just cast)
    const isProject = activeModal === 'project';
    const item = selectedItem as Project & Certificate; // Union for easy access

    return (
        <AnimatePresence>
            {activeModal && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-slate-900/90 border border-white/10 w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl flex flex-col md:flex-row pointer-events-auto relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Left Column: Image / Media */}
                            <div
                                className="w-full md:w-1/2 bg-black/50 relative min-h-[300px] md:min-h-full group cursor-zoom-in"
                                onClick={() => setIsExpanded(true)}
                            >
                                <div className="absolute top-4 left-4 z-10 p-2 rounded-full bg-black/50 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    <Maximize2 className="w-4 h-4" />
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center text-slate-500 bg-slate-900">
                                    {item.image ? (
                                        <div className="relative w-full h-full">
                                            {/* Standard img tag for local assets */}
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                                            />
                                        </div>
                                    ) : (
                                        <span>No Image Available</span>
                                    )}
                                </div>
                            </div>

                            {/* Right Column: Info */}
                            <div className="w-full md:w-1/2 p-8 overflow-y-auto custom-scrollbar">
                                <div className="mb-6">
                                    <span className="text-blue-400 font-mono text-sm tracking-wider uppercase mb-2 block">
                                        {isProject ? item.category : item.issuer}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{item.title}</h2>
                                    <span className="text-slate-500 text-sm">
                                        {isProject ? "Project" : `Issued: ${item.year}`}
                                    </span>
                                </div>

                                <div className="prose prose-invert max-w-none mb-8 text-slate-300 leading-relaxed">
                                    <p>{isProject ? item.fullDesc : "Professional certification module completion."}</p>
                                </div>

                                {isProject && item.techStack && (
                                    <div className="mb-8">
                                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Tech Stack</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {item.techStack.map(stack => (
                                                <span key={stack} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-blue-200">
                                                    {stack}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                { /* Modules block removed as data doesn't support it anymore */}

                                <div className="flex gap-4 mt-auto pt-6 border-t border-white/10">
                                    {isProject && item.githubUrl && (
                                        <a
                                            href={item.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-lg font-bold hover:bg-slate-200 transition-colors"
                                        >
                                            <Github className="w-5 h-5" />
                                            View Source
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Lightbox Overlay */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsExpanded(false);
                                }}
                                className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
                            >
                                <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
                                    <X className="w-8 h-8" />
                                </button>

                                <motion.img
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0.9 }}
                                    src={item.image}
                                    alt={item.title}
                                    className="max-w-full max-h-[95vh] object-contain rounded-lg shadow-2xl"
                                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image itself? Actually clicking image to close is often expected in mobile lightbox, but let's allow image click to not close for pan/zoom potential usage, though simple tap-anywhere-to-close is simpler. Let's stick to simple "click anywhere to close".
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}
        </AnimatePresence>
    );
}
