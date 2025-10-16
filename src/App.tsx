import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import FadeInOnScroll from './components/FadeInOnScroll';
import About from './components/About';
import Courses from './components/Courses';
import Features from './components/Features';
import Video from './components/Video';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import WhatsAppButton from './components/WhatsAppButton';
import CourseDetails from './components/CourseDetails';

// Layout component with header and footer
function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50" dir="rtl">
      <Header scrolled={scrolled} />
      {children}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

// Home page component with all sections
function Home() {
  return (
    <>
      <FadeInOnScroll><Hero /></FadeInOnScroll>
      <FadeInOnScroll delay={0.1}><About /></FadeInOnScroll>
      <FadeInOnScroll delay={0.2}><Features /></FadeInOnScroll>
      <FadeInOnScroll delay={0.3}><Courses /></FadeInOnScroll>
      <FadeInOnScroll delay={0.4}><Video /></FadeInOnScroll>
      <FadeInOnScroll delay={0.5}><Contact /></FadeInOnScroll>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/course/:courseId" element={<Layout><CourseDetails /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
