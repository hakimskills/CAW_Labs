import { useState } from 'react';
import './App.css';
import Skill from './components/Skill';

import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Socail from './components/Socail';

function App() {
  const [activePage,setActivePage]=useState('about');
  const handelNavClick=(page)=>{
    setActivePage(page);

  }
  const renderPage=()=>{
    switch (activePage){
      case 'about':
        return <AboutMe></AboutMe>;
        case 'projects':
        return <Projects/>;
        case 'skill':
          return <Skill onNavClick={handelNavClick} />;
        case 'contact':
        return <Contact></Contact>;
        default:
          return <AboutMe></AboutMe>;
         
    }
  }

  return (
 <div>
 
 <div className={`bg ${activePage === 'about' ? 'bg' : ''}${activePage === 'projects' ? 'bg1' : ''}${activePage === 'contact' ? 'bg2' : ''}`}>
      <NavBar onNavClick={handelNavClick}></NavBar>
      {renderPage()}
      <Socail></Socail>
      <i className="fa-brands fa-facebook"></i>
   
    </div>
    </div>
   
  );
}

export default App;