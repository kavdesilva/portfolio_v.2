import { useState, useRef, createRef, useEffect } from 'react';
import Nav from '@/components/Nav'
import Home from '@/components/Home'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ComingSoon from '@/components/ComingSoon'

const App = () => {
  const [sidebarOpen, setSideBarOpen] = useState(false);

  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  const targetRefs = useRef(Array(5).fill(null).map(() => createRef()));

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

  const [devMode, setDevMode] = useState(true)
  
  return (
    <div>
      <Nav handleViewSidebar={handleViewSidebar} 
           isOpen={sidebarOpen}
           devMode={devMode}
        />
      <div className='main' onClick={() => setSideBarOpen(false)}>
        <div className={!devMode ? "dev-mode" : ""}>
          <Home targetRefs={targetRefs}/>
          <About targetRefs={targetRefs}/>
          <Projects targetRefs={targetRefs}/>
          <Contact targetRefs={targetRefs}/>
        </div>
        <div className={devMode ? "dev-mode" : ""}>
          <ComingSoon targetRefs={targetRefs}/>
        </div>
      </div>
      <Footer devMode={devMode}/>
    </div>
  )
}

export default App
  