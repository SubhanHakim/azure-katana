import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import LoreSection from './components/LoreSection'
import GallerySection from './components/GallerySection'
import CommunitySection from './components/CommunitySection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-azure-dark min-h-screen text-azure-text font-body selection:bg-azure-accent selection:text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <LoreSection />
      <GallerySection />
      <CommunitySection />
      <Footer />
    </div>
  )
}

export default App
