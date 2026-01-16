import { motion } from 'framer-motion';

const LoreSection = () => {
    return (
        <section id="lore" className="py-16 md:py-32 bg-azure-dark relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-16 relative z-10 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-azure-accent tracking-[0.5em] text-xs md:text-sm font-bold uppercase mb-4 block"
                >
                    The Legend
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-7xl font-bold text-white mb-8 md:mb-12"
                >
                    THE ETERNAL <span className="text-azure-accent">EDGE</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto space-y-8 text-lg md:text-xl text-azure-muted leading-relaxed"
                >
                    <p>
                        In the era of infinite noise, the Azure Katana was forged not from steel, but from pure, unyielding code.
                        It is said that one who wields the Azure Katana commands not just the market, but the flow of time itself.
                    </p>
                    <p>
                        We are the Ronin of the blockchain. We serve no master but the truth.
                        Our path is solitary, our discipline absolute. Join us, and sharpen your mind.
                    </p>
                </motion.div>
            </div>

            {/* Background Japanese/Tech Pattern */}
            <motion.div
                initial={{ x: "-50%", y: "-50%", opacity: 0 }}
                whileInView={{ opacity: 0.1 }}
                transition={{ duration: 1.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] md:text-[20rem] font-bold text-white/5 pointer-events-none select-none whitespace-nowrap"
            >
                AZURE BLADE
            </motion.div>
        </section>
    );
};

export default LoreSection;
