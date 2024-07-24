import React, { useRef, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import CenterText from '../Center/CenterText';
import { gsap } from 'gsap';
import Black from './Black';
import { useGSAP } from '@gsap/react';

const Home = (props) => {
  const pageref = useRef(null);

  useGSAP(() => {
    gsap.from(pageref.current, {
      opacity: 0,
      duration: 0.8,
      delay: 1.8,
      y: 50,
      scale: 1.05
    });
  }, []);

  return (
    <div>
      <Black />
      <div 
        ref={pageref}
        className='h-screen   opacity-1  w-full bg-cover bg-center bg-[url(https://i.pinimg.com/originals/7a/f5/4d/7af54d892627dfebc543b4e702002069.jpg)]'
      >
        <Navbar menuopen={props.menuopen} setmenu={props.setmenu} />
        <CenterText />
      </div>
    </div>
  );
};

export default Home;
