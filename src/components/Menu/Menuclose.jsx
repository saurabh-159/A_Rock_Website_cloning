import React from 'react';

const Menuclose = (props) => {
const Navi = () => {
  props.setmenu(false)
}

  return (
    <div 
    onClick={ Navi}
    className='uppercase font-[a4]   p-2'>
      close
    </div>
  );
}

export default Menuclose;
