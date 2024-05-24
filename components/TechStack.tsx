import React from 'react'
import { InfiniteMovingCardsDemo } from './InfiniteCardDemo'


const TechStack = () => {
  return (
    <section className="justify-center items-center">

    <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute  z-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
    </div>

    <h1 className="heading pt-20 relative">
        My 
        <span className="text-purple"> Powers </span>
    </h1>

        <InfiniteMovingCardsDemo useTestimonials={true} />

    <h1 className="heading relative">
        Tools I  
        <span className="text-purple"> Utilize </span>
        &
        <span className="text-purple"> Methods </span>
    </h1>

        <InfiniteMovingCardsDemo useTestimonials={false} />
    
    </section>
  )
}

export default TechStack