import React from "react";
import { NAV_LINKS } from "@/constants"
import Link from "next/link";

const MenuOverlay = () => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {NAV_LINKS.map((link) => (
        <li key={link.key}>
            <Link href={link.href} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                {link.label}
            </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;