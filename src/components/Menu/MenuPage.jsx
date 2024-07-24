import React, { useRef, useEffect } from 'react';
import MenuLeft from './MenuLeft';
import MenuRight from './MenuRight';
import { gsap } from 'gsap';

const MenuPage = (props) => {
  const menuref = useRef(null);

  useEffect(() => {
    if (props.menuopen) {
      gsap.to(menuref.current, {
        top: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    } else {
      gsap.to(menuref.current, {
        top: '100%',
        duration: 0.5,
        ease: 'power2.in',
      });
    }
  }, [props.menuopen]);

  return (
    <div ref={menuref} className='fixed top-full h-screen flex w-full bg-black z-50'>
      <MenuLeft />
      <MenuRight menuopen={props.menuopen} setmenu={props.setmenu} />
    </div>
  );
}

export default MenuPage;
