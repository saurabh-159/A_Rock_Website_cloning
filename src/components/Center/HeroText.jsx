import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const HeroText = () => {
  const textref = useRef(null);

  
  useGSAP(() => {
    let clutter = "";
    const splittext = textref.current.textContent.split("");
    splittext.forEach(function(e){
      clutter += `<span>${e}</span>`;
    });
    textref.current.innerHTML = clutter;


    gsap.from("h1 span", {
      y: 100,
      opacity: 0,
      delay: 2.5, // Adjusted delay for better animation
      stagger: 0.05, // Staggered animation for each letter
      ease: "power3.out"
    });
  })

 

  return (
    <div>
      <h1
        ref={textref}
        className='font-black whitespace-nowrap text-center font-[u8] leading-none uppercase text-[15vw]'
      >Govinda's</h1>
    </div>
  );
}

export default HeroText;
