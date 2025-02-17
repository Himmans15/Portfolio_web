import React,{useState} from 'react';
import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

    const handleShowMore=(e)=>{
      e.preventDefault();
      setShowAll((prevState)=>!prevState);
    }
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.slice(0,showAll ? projects.length : 3).map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
      <div className={styles.morebtn}>
        <a href='#' className={styles.btn} onClick={handleShowMore}>
          {showAll ? 'Show Less' : 'Show All'}
        </a>
      </div>
      
    </section>
  );
};

export default Projects;
