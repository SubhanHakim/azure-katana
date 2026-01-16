import { motion } from 'framer-motion';
import communityBg from '../assets/community_bg.jpg';

const CommunitySection = () => {
    return (
        <section id="vision" className="py-32 relative overflow-hidden flex items-center justify-center min-h-[60vh]">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={communityBg}
                    alt="Community Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-[#020617]/60"></div>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
            </div>

            <div className="container mx-auto px-8 md:px-16 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-8xl font-black text-white mb-6 md:mb-8 uppercase tracking-tighter drop-shadow-2xl">
                        JOIN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-azure-accent to-red-600 block md:inline">VANGUARD</span>
                    </h2>

                    <p className="text-white/90 text-lg md:text-2xl mb-8 md:mb-12 leading-relaxed font-light drop-shadow-lg px-4 md:px-0">
                        We are building a legacy. The Azure Katana community is a gathering of the sharpest minds.
                        <br className="hidden md:block" />
                        <span className="font-semibold text-azure-accent">Do not hesitate. The blade is waiting.</span>
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6 w-full px-6 md:px-0">
                        <motion.a
                            href="https://x.com/i/communities/2012058032772170029"
                            target="_blank"
                            whileHover={{ scale: 1.05, backgroundColor: "#dc2626", color: "#ffffff", borderColor: "#dc2626" }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full md:w-auto px-8 py-4 md:px-12 md:py-6 bg-black/50 border-2 border-white text-white font-display font-black text-xl md:text-2xl uppercase tracking-widest transition-all skew-x-[-10deg] backdrop-blur-md hover:bg-black/70 flex justify-center items-center"
                        >
                            <span className="skew-x-[10deg] inline-block">X COMMUNITY</span>
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#020617] to-transparent z-10"></div>
        </section>
    );
};

export default CommunitySection;
