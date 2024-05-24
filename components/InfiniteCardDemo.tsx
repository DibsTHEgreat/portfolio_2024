"use client";

import { InfiniteMovingCards } from './ui/InfiniteCardScroll';


import { TESTIMONIAL, TOOLS } from "@/constants"

type InfiniteMovingCardsDemoProps = {
  useTestimonials: boolean;
};

export function InfiniteMovingCardsDemo({ useTestimonials }: InfiniteMovingCardsDemoProps) {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={useTestimonials ? TESTIMONIAL : TOOLS}
        direction="right"
        speed="slow"
      />
    </div>
  );
}