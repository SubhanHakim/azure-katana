import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'About', href: '#about', id: '01' },
        { name: 'Lore', href: '#lore', id: '02' },
        { name: 'Gallery', href: '#gallery', id: '03' },
        { name: 'Vision', href: '#vision', id: '04' },
    ];

    const menuVariants: import("framer-motion").Variants = {
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            x: "0%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const linkVariants: import("framer-motion").Variants = {
        closed: { x: 50, opacity: 0 },
        open: { x: 0, opacity: 1 }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled || isOpen ? 'bg-azure-dark/95 backdrop-blur-md py-4 border-b border-white/5' : 'py-6 bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-8 md:px-16 flex justify-between items-center relative">

                    {/* Logo */}
                    <div className="text-2xl font-display font-bold text-azure-text tracking-widest relative z-50">
                        AZURE <span className="text-azure-accent">KATANA</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-12 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="group relative text-sm font-semibold tracking-wider text-azure-muted hover:text-white transition-colors uppercase"
                            >
                                <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-azure-accent transition-all duration-300 group-hover:w-3"></span>
                                {link.name}
                            </a>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 border border-azure-accent text-azure-accent font-display font-bold hover:bg-azure-accent hover:text-white transition-colors duration-300 tracking-wider clip-path-slant"
                            onClick={() => window.open('https://x.com/i/communities/2012058032772170029', '_blank')}
                        >
                            JOIN
                        </motion.button>
                    </div>

                    {/* Mobile Hamburger / Menu Toggle */}
                    <button
                        className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-end space-y-1.5 focus:outline-none group"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 8, width: 32, backgroundColor: "#dc2626" } : { rotate: 0, y: 0, width: 32, backgroundColor: "#ffffff" }}
                            className="h-0.5"
                        ></motion.span>
                        <motion.span
                            animate={isOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: 24 }}
                            className="h-0.5 bg-white group-hover:w-8 transition-all"
                        ></motion.span>
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -8, width: 32, backgroundColor: "#dc2626" } : { rotate: 0, y: 0, width: 16, backgroundColor: "#ffffff" }}
                            className="h-0.5 group-hover:w-8 transition-all"
                        ></motion.span>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 z-40 bg-azure-dark"
                    >
                        {/* Background Decorations */}
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-azure-blue/20 skew-x-[-12deg] transform origin-top translate-x-12"></div>
                        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-azure-accent/10 to-transparent"></div>

                        <div className="container mx-auto px-8 h-full flex flex-col justify-center">
                            <div className="flex flex-col space-y-8">
                                {navLinks.map((link) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        variants={linkVariants}
                                        onClick={() => setIsOpen(false)}
                                        className="group flex items-baseline space-x-4 text-5xl font-display font-bold text-transparent text-outline hover:text-white transition-all duration-300"
                                    >
                                        <span className="text-sm font-mono text-azure-accent opacity-50 group-hover:opacity-100">
                                            {link.id}
                                        </span>
                                        <span className="relative">
                                            {link.name}
                                            {/* Strike through effect on hover */}
                                            <span className="absolute left-0 top-1/2 w-0 h-1 bg-azure-accent transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                    </motion.a>
                                ))}
                            </div>

                            <motion.div
                                variants={linkVariants}
                                className="mt-16"
                            >
                                <button className="w-full py-4 border border-azure-accent text-azure-accent font-display font-bold text-xl tracking-widest hover:bg-azure-accent hover:text-white transition-all uppercase">
                                    Join Protocol
                                </button>
                            </motion.div>

                            <div className="absolute bottom-12 left-8 right-8 flex justify-between text-azure-muted text-xs tracking-widest uppercase">
                                <span>Protocol V.1.0</span>
                                <span>Silence is Sharp</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
