import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Black = () => {
  const blackref = useRef(null);

  useGSAP(() => {
    gsap.to(blackref.current, { 
      delay: 1.9,
      duration: 0.8, 
      y: "-100%",
    });
  }, []);

  return (
    <div
      className='h-screen w-full bg-[#111] z-10 fixed'
      ref={blackref}
    ></div>
  );
};

export default Black;
