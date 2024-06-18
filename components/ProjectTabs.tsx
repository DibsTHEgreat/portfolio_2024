"use client";

import Image from 'next/image';
import React, { useRef } from 'react'
import RandomButton from './ui/RandomButton';
import { motion, useScroll } from 'framer-motion';

type ProjectProps = {
    title: string;
    description: string;
    buttonTitle?: string;
    buttonUrl?: string;
    tags: readonly string[];
    imageUrl: string;
  };

function Project({
    title,
    description,
    buttonTitle,
    buttonUrl,
    tags,
    imageUrl,
}: ProjectProps) {

  const ref = useRef<HTMLDivElement>(null);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scrollYProgress,
                opacity: scrollYProgress,
            }}
            className="mb-3 sm:mb-8 last:mb-0"
        >
            <section 
                className="group bg-black-100 max-w-[55rem] border 
                    border-gray/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]
                    hover:bg-black-200 transition"
            >
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] sm:h-[20rem] flex flex-col h-full">
                    <h3 className='text-2xl font-semibold'>{title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-200'>{description}</p>
                    {buttonTitle !== "Null" && (
                        <RandomButton buttonTitle={buttonTitle} buttonUrl={buttonUrl} />
                    )}
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {tags.map((tag, index) => (
                            <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full" key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>    

                <Image 
                    src={imageUrl}
                    alt="project"
                    width={1000}
                    height={1000}
                    quality={95} 
                    className="absolute top-8 -right-20 w-[28.25rem] rounded-t-lg shadow-2xl
                        group-hover:scale-[1.04]
                        group-hover:-translate-x-3
                        group-hover:-translate-y-3
                        group-hover:-rotate-2
                    "
                />
            </section>
        </motion.div>
    )
}

export default Project