import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const LoadC = () => {
  const lineref = useRef(null);
  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(lineref.current, {
      width: '100%',
      duration: 1.3,
      delay: 0.7,
      ease: "expo.out"
    })
    .to(lineref.current, {
      opacity: 0,
      duration: 0.5
    });
  }, [tl]);

  return (
    <div
      ref={lineref}
      className='w-0 h-full bg-white'
    >
    </div>
  );
}

export default LoadC;
