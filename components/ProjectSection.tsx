import Image from 'next/image'
import React from 'react'
import { StickyScrollRevealDemo } from './ProjectScroller'

const ProjectSection = () => {
  return (
    <section>
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute  z-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>

        <h1 className="heading pt-20 pb-10 relative">
            See What I&apos;m
            <span className="text-purple"> Working On </span>
        </h1>
    
        <StickyScrollRevealDemo />

    </section>
  )
}

export default ProjectSection