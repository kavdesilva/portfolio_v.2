import { useState } from 'react';
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

  const dividers = document.querySelectorAll('.divider');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      } else {
        entry.target.classList.remove('animate');
      }
    });
  });

  dividers.forEach(divider => {
    observer.observe(divider);
  });
  
  return (
    <div>
      <Nav handleViewSidebar={handleViewSidebar} isOpen={sidebarOpen}/>
      <div className='main' onClick={() => setSideBarOpen(false)}>
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
      </div>
    </div>
  )
}

export default App
  