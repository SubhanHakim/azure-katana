

const TokenSection = () => {
    return (
        <section id="token" className="py-24 bg-azure-blue relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute right-0 top-0 w-96 h-96 bg-azure-accent rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-8 md:px-16 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">TOKENOMICS</h2>
                    <div className="h-1 w-24 bg-azure-accent mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-azure-dark border border-white/5 p-8 relative group hover:-translate-y-2 transition-transform duration-300">
                        <div className="absolute top-0 left-0 w-full h-1 bg-azure-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        <h3 className="text-2xl mb-4 text-white">SUPPLY</h3>
                        <p className="text-4xl font-bold text-azure-accent mb-2">1B</p>
                        <p className="text-azure-muted text-sm">Total Fixed Supply</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-azure-dark border border-white/5 p-8 relative group hover:-translate-y-2 transition-transform duration-300">
                        <div className="absolute top-0 left-0 w-full h-1 bg-azure-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        <h3 className="text-2xl mb-4 text-white">TAX</h3>
                        <p className="text-4xl font-bold text-azure-accent mb-2">0/0</p>
                        <p className="text-azure-muted text-sm">Buy / Sell Tax</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-azure-dark border border-white/5 p-8 relative group hover:-translate-y-2 transition-transform duration-300">
                        <div className="absolute top-0 left-0 w-full h-1 bg-azure-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        <h3 className="text-2xl mb-4 text-white">LIQUIDITY</h3>
                        <p className="text-4xl font-bold text-azure-accent mb-2">BURNED</p>
                        <p className="text-azure-muted text-sm">Forever Secure</p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-block bg-black/30 border border-white/10 px-8 py-4 rounded-sm">
                        <span className="text-azure-muted mr-4 font-mono text-sm md:text-base">CA: 0x000000000000000000000000000000000000dead</span>
                        <button className="text-azure-accent font-bold hover:text-white transition-colors">COPY</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TokenSection;
