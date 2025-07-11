"use client";
import { projects } from "../../app/data";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "./Card";

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className=''>
      <h2 className='h2'>Projects</h2>
      <div className='bg-white opacity-65 w-full h-[1px] my-4'></div>
      <div className='grid grid-cols-6'>
        <p className='uppercase text-sm col-span-4'>
          Design deserves more than pixels — it deserves presence. I
          turn creative visions into powerful web experiences that
          look as good as they feel. Let&apos;s make your next project
          unforgettable.
        </p>
      </div>
      <div ref={container} className='mt-[50vh] relative'>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
}
