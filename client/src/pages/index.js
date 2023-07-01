import { useState, useRef, createRef, useEffect } from 'react';
import Nav from '@/components/Nav'
import Home from '@/components/Home'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ComingSoon from '@/components/ComingSoon'

const App = () => {
  
  // 6/20/23 - querySelector DOES work in the root when calling on classes in the component--the following code makes the 'document' available on client side. this can also be addressed using a useState/useEffect hook. ref: https://stackoverflow.com/questions/69386843/nextjs-referrenceerror-document-is-not-defined
  const cards = typeof document !== 'undefined' && document.querySelectorAll('.project-card')
  console.log(cards[1])

  const [sidebarOpen, setSideBarOpen] = useState(false);

  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  const [projectsArray, setProjectsArray] = useState(null)

  useEffect(() => {
    fetch('/api/projects')
        .then(res => res.json())
        .then(data => setProjectsArray(data))
        .catch(error => console.error(error))
  }, [])

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
          <Projects targetRefs={targetRefs} projectsArray={projectsArray}/>
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
  