import { useState, useRef, createRef, useEffect } from 'react';
import Nav from '@/components/Nav'
import Home from '@/components/Home';
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer';

const App = () => {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  const targetRefs = useRef(Array(3).fill(null).map(() => createRef()));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("animate", entry.isIntersecting);
      });
    }, { threshold: 0.5 });
  
    targetRefs.current.forEach((target) => {
      observer.observe(target);
    });
  
    return () => {
      observer.disconnect();
    };
  }, [targetRefs]);
  
  return (
    <div>
      <Nav handleViewSidebar={handleViewSidebar} isOpen={sidebarOpen}/>
      <div className='main' onClick={() => setSideBarOpen(false)}>
          <Home />
          <About targetRefs={targetRefs}/>
          <Projects targetRefs={targetRefs}/>
          <Contact targetRefs={targetRefs}/>
          <Footer />
      </div>
    </div>
  )
}

export default App
  