"use client"

import { NAV_LINKS } from "@/constants"
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link"
import MenuOverlay from "./MenuOverlay";


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 768) {
            setNavbarOpen(false);
          }
        };
    
        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
            <div className="text-2xl md:text-5xl text-white font-semibold">
                Divya Pateliya
            </div>  

            <div className="mobile-menu block md:hidden">
                {!navbarOpen ? (
                    <button
                    onClick={() => setNavbarOpen(true)}
                    className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                    >
                    <Bars3Icon className="h-5 w-5" />
                    </button>
                ) : (
                    <button
                    onClick={() => setNavbarOpen(false)}
                    className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                    >
                    <XMarkIcon className="h-5 w-5" />
                    </button>
                )}
            </div>
            
            <ul className="hidden h-full gap-12 md:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key}
                    className="text-[20px] font-[400] text-gray-400 flexCenter cursor-pointer pb1.5 transition-all
                              hover:font-bold  hover:text-gray-50">
                        {link.label}
                    </Link>
                ))}
            </ul> 
        </div>
        {navbarOpen ? <MenuOverlay /> : null}
    </nav>
  )
}

export default Navbar