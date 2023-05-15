import { useRef, createRef, useEffect } from 'react';
import Nav from '@/components/Nav'
import Home from '@/components/Home'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const Development = () => {

    const targetRefs = useRef(Array(4).fill(null).map(() => createRef()));

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
        <div id="development">
            <Nav />
            <Home targetRefs={targetRefs}/>
            <About targetRefs={targetRefs}/>
            <Projects targetRefs={targetRefs}/>
            <Contact targetRefs={targetRefs}/>
            <Footer targetRefs={targetRefs}/>
        </div>
    )
}

export default Development