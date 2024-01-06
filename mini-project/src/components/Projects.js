
import './Projects.css'
import Elerning from '../images/elearning.PNG'
import riotWeb from '../images/riot.jpeg'
import career from '../images/carrer.jpeg'
const Projects = () => {
  
    // Placeholder data for projects
    const projects = [
      {
        id : 1,
        title: 'E-learning Plateforme',
        description: 'Our E-learning platform offers flexible, interactive courses across diverse subjects. Learn at your pace, connect with experts, and earn recognized certificates for your achievements. Elevate your skills and knowledge with our accessible and user-friendly online education platform',
        technologies: ['VueJs', 'NodeJs', 'Css'],
        image: Elerning,
        // Add other project details as needed
      },
      {
        id : 2,
        title: 'Riot Web',
        description: 'A react project for bulding  interface for riot website .',
        technologies: ['React', 'Redux', 'CSS'],
        image : riotWeb
      },
      {
        id : 3,
        title: 'Career bridge',
        description: 'a website for managing a requests from  university students to enterprises  ',
        technologies: ['laravel', 'bootstrap', 'CSS'],
        image : career
      }
      // Add more projects as needed
    ];
  
    return (
      <div className='projects'>
        {projects.map((project, index) => (
          <div className='project' key={index}>
            <img src={project.image} alt={project.title} />
            <div className='project-details'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>Technologies: {project.technologies.join(', ')}</p>
              {/* Add other project details as needed */}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Projects;