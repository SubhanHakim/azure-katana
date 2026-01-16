import { motion } from 'framer-motion';
import aboutImg from '../assets/about_char.jpg';

const AboutSection = () => {
    return (
        <section id="about" className="py-16 md:py-32 bg-[#020617] relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-1/4 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-azure-blue/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(220,38,38,0.05)_0%,transparent_50%)]"></div>

            <div className="container mx-auto px-6 md:px-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left: Image (New Addition) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative order-2 lg:order-1"
                    >
                        {/* Image Container with Tech Frame */}
                        <div className="relative z-10 p-4 border border-white/10 bg-white/5 backdrop-blur-sm">
                            {/* Corner Details */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-azure-accent"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-azure-accent"></div>

                            <img
                                src={aboutImg}
                                alt="Azure Katana Enforcer"
                                className="w-full h-auto object-cover grayscale-0 hover:grayscale-0 transition-all duration-500 shadow-2xl"
                            />

                            {/* Scanning Line Animation */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-azure-accent/10 to-transparent h-[10%] w-full animate-scan pointer-events-none opacity-50"></div>
                        </div>

                        {/* Backing Block */}
                        <div className="absolute top-8 left-8 w-full h-full border-2 border-white/5 z-0"></div>
                    </motion.div>

                    {/* Right: Content (Text + Stats) */}
                    <div className="space-y-12 order-1 lg:order-2">

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="relative">
                                <span className="text-azure-accent font-display font-bold tracking-[0.2em] uppercase mb-2 block flex items-center gap-2">
                                    <span className="w-2 h-2 bg-azure-accent rounded-full animate-pulse"></span>
                                    System Data
                                </span>
                                <h2 className="w-full text-4xl sm:text-5xl md:text-7xl font-black text-white italic tracking-tighter leading-tight py-4">
                                    ABOUT <br />
                                    <span className="inline-block pr-4 text-transparent bg-clip-text bg-gradient-to-r from-azure-gray to-white">AZURE</span>
                                </h2>
                            </div>

                            <div className="space-y-6 text-lg text-azure-muted leading-relaxed font-light border-l-2 border-white/10 pl-6">
                                <p>
                                    <strong className="text-white">Azure Katana</strong> is a disciplined force in a chaotic market. While others chase noise, we sharpen our edge.
                                </p>
                                <p>
                                    Precision. Honor. Code. These are not just words; they are the protocol. We are the calm before the strike.
                                </p>
                            </div>
                        </motion.div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { val: "100%", label: "Fair Launch" },
                                { val: "0%", label: "Tax / Fees" },
                                { val: "BURN", label: "Liquidity" },
                                { val: "SAFE", label: "Contract" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                                    viewport={{ once: true }}
                                    className="bg-azure-blue/40 border border-white/5 p-6 hover:border-azure-accent/50 transition-colors group"
                                >
                                    <h3 className="text-3xl font-display font-bold text-white group-hover:text-azure-accent transition-colors">{stat.val}</h3>
                                    <p className="text-xs font-mono text-azure-gray uppercase tracking-widest mt-1">[{stat.label}]</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
