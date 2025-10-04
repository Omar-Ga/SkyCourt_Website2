import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import BrandMarquee from './components/BrandMarquee';
import RotatingHeadline from './components/RotatingHeadline';
import Stories from './components/Stories';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <SmoothScroll>
      <div className="animated-gradient min-h-screen">
        <div className="grain-overlay" />
        <CustomCursor />
        <Header />
        <main>
          <Hero />
          <Features />
          <BrandMarquee />
          <RotatingHeadline />
          <Stories />
          <Location />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
