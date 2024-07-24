import React from 'react';
import Menuclose from './Menuclose';

const MenuRight = (props) => {
  return (
    <div className='w-[30%] h-full relative py-[2vw] px-[3.5vw]   text-white'>
      <Menuclose  menuopen={props.menuopen} setmenu={props.setmenu}/>
    
    </div>
  );
}

export default MenuRight;
