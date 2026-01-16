

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h4 className="text-2xl font-bold tracking-widest text-white mb-2">AZURE KATANA</h4>
                    <p className="text-azure-muted text-sm">The blade creates the path.</p>
                </div>

                <div className="flex space-x-6">
                    <a href="#" className="text-azure-muted hover:text-azure-accent transition-colors">TWITTER / X</a>
                    <a href="#" className="text-azure-muted hover:text-azure-accent transition-colors">TELEGRAM</a>
                    <a href="#" className="text-azure-muted hover:text-azure-accent transition-colors">DEXSCREENER</a>
                </div>
            </div>
            <div className="mt-8 text-center">
                <p className="text-xs text-white/20">© 2026 AZURE KATANA. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
