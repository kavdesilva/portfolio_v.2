import { useState } from 'react';
import Nav from '../components/Nav'

const Home = () => {
    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
      setSideBarOpen(!sidebarOpen);
    };
    return (
      <div>
        <Nav onClick={handleViewSidebar} isOpen={sidebarOpen}/>
        <div className="home">
          <h1>Hi, I'm Kristina.</h1>
        </div>
      </div>
    )
  }
  
  export default Home
  