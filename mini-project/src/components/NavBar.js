import './NavBar.css'

const NavBar=({onNavClick})=>{
  const handelNavClick =(page)=>{
    onNavClick(page);
  }
    return (
        <nav className=" navbar menu menu-1">
        <ul>
          <li><a href="#" onClick={()=>handelNavClick('about')}>About</a></li>
          <li><a href="#"onClick={()=>handelNavClick('projects')}>Projects</a></li>
          <li><a href="#"onClick={()=>handelNavClick('skill')}>Skills and Experience</a></li>
          <li><a href="#"onClick={()=>handelNavClick('contact')}>Contact</a></li>
        </ul>
      </nav>
    )
}
export default NavBar ;