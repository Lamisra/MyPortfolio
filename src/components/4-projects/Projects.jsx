// 

import React from 'react';
import './projects.css';
import projectsData from './projects.json';

const Projects = () => {
  return (
    <div className='Projects-Container'>
      <section className='Projects-Header'>
        <h2 className='xl'>Projects</h2>
        <a className='button' href='#contact'>CONTACT ME</a>
      </section>

      {projectsData.map(project => (
        <article key={project.id} className='Card'>
          <div className='image'>
            <img src={`/images/${project.image}`} alt='project picture' />

            <div className='View-Details'>
              <a className='button' href={project.viewProjectLink} target="_blank">VIEW PROJECT</a>
              <a className='button' href={project.viewCodeLink} target="_blank">VIEW CODE</a>
            </div>
          </div>

          <div className='Box'>
            <h1 className='title M'>{project.title}</h1>

            <div className='Project-Tags'>
              {project.tags.map(tag => (
                <p className='p'>{tag}</p>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Projects;
