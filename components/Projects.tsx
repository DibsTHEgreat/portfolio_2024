import { projectsData } from '@/constants'
import React, { useRef } from 'react'
import Project from "./ProjectTabs";

const Projects = () => {
  return (
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div style={{ position: 'relative' }}>
    {projectsData.map((project, index) => (
      <React.Fragment key={index}>
        <Project {...project} />
      </React.Fragment>
    ))}
  </div>
</div>
  )
}

export default Projects
