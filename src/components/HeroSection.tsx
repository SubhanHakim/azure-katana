import { useEffect, useRef } from 'react';
import heroImg from '../assets/azure_katana_char.jpg';
import gsap from 'gsap';

const HeroSection = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const imgWrapperRef = useRef(null);
    const bgTextRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // 1. Initial States
        gsap.set((textRef.current as any)?.children || [], { autoAlpha: 0, y: 100, skewY: 10 });
        gsap.set(imgWrapperRef.current, { autoAlpha: 0, scale: 1.2, x: 100 });
        gsap.set(bgTextRef.current, { autoAlpha: 0, scale: 0.8 });

        // 2. Entrance Animation
        tl.to(bgTextRef.current, {
            duration: 1.5,
            autoAlpha: 0.1, // faint background
            scale: 1,
            ease: "power4.out"
        })
            .to(imgWrapperRef.current, {
                duration: 1.2,
                autoAlpha: 1,
                scale: 1,
                x: 0,
                ease: "circ.out",
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" // Full reveal
            }, "-=1")
            .to((textRef.current as any)?.children || [], {
                duration: 1,
                autoAlpha: 1,
                y: 0,
                skewY: 0,
                stagger: 0.15,
                ease: "power3.out"
            }, "-=0.8");

        // 3. Constant "Breathing" Motion
        gsap.to(bgTextRef.current, {
            y: 20,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Interactive Parallax
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth - 0.5) * 20;
            const yPos = (clientY / window.innerHeight - 0.5) * 20;

            gsap.to(imgWrapperRef.current, {
                x: -xPos,
                y: -yPos,
                duration: 1,
                ease: "power2.out"
            });
            gsap.to(bgTextRef.current, {
                x: xPos * 2,
                y: yPos * 2,
                duration: 1.5,
                ease: "power2.out"
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);

    }, []);

    return (
        <section ref={heroRef} className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden bg-[#020617]">
            {/* 1. Dynamic Background Gradient */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_50%,rgba(15,23,42,0.8)_0%,rgba(2,6,23,1)_100%)]"></div>

            {/* 2. Giant Background Text (Visual anchor) */}
            <div
                ref={bgTextRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap z-0 pointer-events-none select-none"
            >
                <h1 className="text-[15vw] md:text-[18vw] font-display font-black text-white/5 tracking-tighter leading-none uppercase mix-blend-overlay">
                    KATANA
                </h1>
            </div>

            {/* 3. Decorative "Cyber" Grid Lines */}
            <div className="absolute inset-0 z-0 opacity-20"
                style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
            </div>

            <div className="container mx-auto px-8 md:px-16 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">

                {/* Left: Aggressive Typography */}
                <div ref={textRef} className="space-y-8 order-2 md:order-1 relative z-20">
                    <div className="flex items-center space-x-4">
                        <div className="h-1 w-16 bg-gradient-to-r from-azure-accent to-transparent"></div>
                        <span className="text-azure-accent font-display tracking-[0.3em] text-sm font-bold uppercase drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                            System: Online
                        </span>
                    </div>

                    <div className="relative">
                        <h1 className="text-5xl sm:text-7xl md:text-9xl font-black leading-[0.9] tracking-tighter text-white mix-blend-lighten">
                            SILENCE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-azure-gray to-azure-accent">IS SHARP</span>
                        </h1>
                        {/* Decorative Japanese Text */}
                        <span className="absolute -right-10 top-0 text-6xl text-stroke-thin text-transparent font-black opacity-30 hidden lg:block writing-vertical-rl">
                            静寂
                        </span>
                    </div>

                    <p className="max-w-lg text-azure-gray text-xl leading-relaxed border-l-4 border-azure-accent pl-6 py-2 bg-gradient-to-r from-azure-accent/5 to-transparent">
                        We don't need noise to be heard.
                        Precision cuts deeper than hype.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                        <button className="group relative px-8 py-3 md:px-10 md:py-4 bg-azure-accent text-white font-display font-bold text-base md:text-lg tracking-widest overflow-hidden skew-x-[-10deg] hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(220,38,38,0.4)] w-full sm:w-auto">
                            <span className="relative z-10 skew-x-[10deg] inline-block">INITIATE</span>
                            <div className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out"></div>
                        </button>

                        <button className="px-8 py-3 md:px-10 md:py-4 border-2 border-white/10 text-white font-display font-bold text-base md:text-lg tracking-widest skew-x-[-10deg] hover:border-azure-accent hover:text-azure-accent transition-colors backdrop-blur-sm w-full sm:w-auto">
                            <span className="skew-x-[10deg] inline-block">MANIFESTO</span>
                        </button>
                    </div>
                </div>

                {/* Right: Dramatic Character Container */}
                <div className="relative order-1 md:order-2 h-[50vh] md:h-[80vh] flex justify-center items-center">

                    {/* Glowing Backlight */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-azure-accent/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

                    {/* The Image Wrapper with a 'Slash' Clip */}
                    <div
                        ref={imgWrapperRef}
                        className="relative w-full h-full flex justify-center items-center drop-shadow-2xl"
                    >
                        <div className="relative w-full h-full md:scale-125 origin-center">
                            <img
                                src={heroImg}
                                alt="Azure Katana"
                                className="w-full h-full object-cover object-top mask-image-gradient"
                                style={{
                                    filter: "contrast(1.1) saturate(1.1)",
                                }}
                            />

                            {/* Overlay Gradient to blend bottom */}
                            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#020617] to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
