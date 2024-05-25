"use client";

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TypeAnimation } from "react-type-animation";
import CoolerButton from './ui/CoolerButton';
import DownloadCSMobile from './ui/DownloadCSMobile';

const downloadCV = () => {
    const cvUrl = "/pdf/Divya.P-Resume.pdf";
  
    const anchor = document.createElement("a");
    anchor.href = cvUrl;
    anchor.target = "_blank";
    anchor.download = "Divya.P-Resume.pdf"; 
  
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

const Hero = () => {
  return (
    <section className="pb-20 pt-36">
        <div>
            <Spotlight className="-top-40 -left-10  md:-left-32 md:-top-20 h-screen" fill="white"/>
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>

        <div className="flex flex-col justify-center items-center relative lg:place-items-center pt-28">
            <h1 className="text-blue-100 max-w-2xl md:text-6xl text-3xl font-extrabold">
            <span className="text-4xl md:text-6xl">
                Hello, I&apos;m{" "} A
            </span>{" "}
            </h1>
            <h1 className="text-purple max-w-2xl mb-4 md:text-6xl text-3xl font-extrabold pb-11">
                <TypeAnimation
                    sequence={[
                    "Software Developer",
                    1000,
                    "Tech Enthusiast",
                    1000,
                    "Problem-Solver",
                    1000,
                    "Team-Player",
                    1000,        
                    "Student",
                    1000,      
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </h1>
        </div>

        <div className="flex justify-center items-center relative my-10">
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
              <h2 className="uppercase tracking-widest textl-lg lg:text-xl text-center text-blue-100">
                Hello, welcome to my portfolio! I&apos;m a full-time student at the University of Lethbridge studying
                Computer Science and Business Management with a minor in Mathematics.
              </h2>  
            </div>
        </div>

        <div className="flex justify-center items-center relative">
          <div className="hidden lg:block">
            <CoolerButton 
              title="Download CV"
              handleClick={downloadCV}
            />
          </div>

          <div className="block lg:hidden">
            <DownloadCSMobile
              title="Download CV"
              handleClick={downloadCV}
            />
          </div>
        </div>
        
    </section>
  )
}

export default Hero