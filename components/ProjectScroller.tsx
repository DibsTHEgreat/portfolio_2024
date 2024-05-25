"use client";
import React from "react";
import { StickyScroll } from "./ui/ScrollText";
import Image from "next/image";

const content = [
  {
    title: "My Internship",
    description:
      "As an intern at Arcurve, I actively contribute to a Full-Stack Development project, utilizing Blazor and .NET Core technologies to develop an efficient internal application tailored to streamline crucial business processes. Engaging within Agile methodologies, I adeptly handle both front-end and back-end responsibilities, ensuring a seamless integration of user interfaces and robust backend functionalities.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/arcurve.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Client-Based Project",
    description:
      "As the team lead overseeing six members, I spearhead the development of a Full-Stack SPA website. Utilizing Agile methodologies, we use Next.js 13, TypeScript, React, and more to create a dynamic client-focused platform. Additionally, I manage client interactions and ensure clear communication to deliver exceptional results.  My work is still in progress...",
    content: (
    <div className="h-full w-full flex items-center justify-center text-white">
        <Image
            src="/progress.svg"
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="linear board demo"
        />
    </div>
    ),
  },
  {
    title: "GitHub",
    description:
      "This GitHub repository serves as a central hub for my portfolio of coding projects. These projects showcase my skills, creativity, and dedication. You'll find personal and school projects in this section.",
    content: (
        <div className="flex items-center justify-center text-white">
            <Image
            src="/mebutclear.png"
            width={300}
            height={200}
            className="object-cover"
            alt="linear board demo"
            />
        </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
