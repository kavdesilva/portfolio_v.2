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
  
  return (
    <div>
      <Nav handleViewSidebar={handleViewSidebar} isOpen={sidebarOpen}/>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
  