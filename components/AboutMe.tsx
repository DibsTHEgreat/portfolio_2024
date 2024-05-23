import React from 'react' 
import { BentoGridThirdDemo } from './BentoGridDemo'

const AboutMe = () => {
  return (
    <section className="pt-20">

        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute  z-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>

      <h1 className="heading pt-20 pb-20 relative">
        About
        <span className="text-purple"> Me </span>
      </h1>
      <BentoGridThirdDemo />

    </section>
  ) 
}

export default AboutMe