import { motion } from 'framer-motion';
import { useState } from 'react';

// Dynamically import all images from the gallery folder
const images = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,svg}', { eager: true });
const galleryImages = Object.values(images).map((img: any) => img.default);

const GallerySection = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <section id="gallery" className="py-24 bg-[#020617] relative">
            {/* Dark Tech Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20"></div>

            <div className="container mx-auto px-8 md:px-16 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2"
                    >
                        <div className="w-12 h-1 bg-azure-accent"></div>
                        <span className="text-azure-accent font-display tracking-[0.3em] font-bold uppercase text-sm">Visual Records</span>
                        <div className="w-12 h-1 bg-azure-accent"></div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white italic tracking-tighter"
                    >
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-azure-gray">ARCHIVE</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {galleryImages.map((src, index) => (
                        <motion.div
                            key={index}
                            layoutId={`card-${index}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedId(index)}
                            className="bg-white/5 border border-white/10 p-2 cursor-pointer group hover:border-azure-accent/50 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-azure-accent/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>

                            {/* Image */}
                            <img
                                src={src}
                                alt={`Gallery ${index}`}
                                className="w-full h-64 object-cover transition-all duration-500"
                            />

                            {/* Tech Overlay Text */}
                            <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-azure-accent font-mono text-xs tracking-widest bg-black/80 px-2 py-1">
                                    IMG_00{index + 1}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedId !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-20"
                    onClick={() => setSelectedId(null)}
                >
                    <motion.div
                        layoutId={`card-${selectedId}`}
                        className="relative max-w-5xl w-full max-h-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute -top-12 right-0 text-white font-bold text-xl hover:text-azure-accent transition-colors"
                            onClick={() => setSelectedId(null)}
                        >
                            [CLOSE]
                        </button>
                        <img
                            src={galleryImages[selectedId]}
                            alt="Full view"
                            className="w-full h-auto max-h-[85vh] object-contain border-2 border-azure-accent/30 shadow-[0_0_50px_rgba(220,38,38,0.2)]"
                        />
                        <div className="absolute bottom-4 left-4 bg-black/80 text-azure-accent px-4 py-2 font-mono text-sm border-l-2 border-azure-accent">
                            // VIEWING_RECORD_00{selectedId + 1}
                        </div>
                    </motion.div>
                </div>
            )}
        </section>
    );
};

export default GallerySection;
