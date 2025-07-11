"use client";
import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import "./Card.css";

const Card = ({
  i,
  title,
  description,
  image,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div ref={container} className='cardContainer'>
      <motion.div
        style={{
          top: `calc(-5vh + ${i * 65}px)`,
        }}
        className={`card bg-[#0f0928] border-t-1 border-white/65`}
      >
        <h2 className='h2 my-4'>{title}</h2>
        <div className='body'>
          <div className='imageContainer'>
            <motion.div
              className='inner'
              style={{ scale: imageScale }}
            >
              <Image fill src={`/${image}`} alt='image' />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
