"use client";
import { projects } from "../../app/data_2";
import { useScroll } from "framer-motion";
import { useRef } from "react";

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
      {/* <div ref={container} className=''>
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
      </div> */}
    </div>
  );
}
