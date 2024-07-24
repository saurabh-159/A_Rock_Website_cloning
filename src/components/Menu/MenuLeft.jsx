import React from 'react';
import { Tilt } from '@jdion/tilt-react';

const MenuLeft = () => {
  return (
    <div className='w-[70%] overflow-hidden py-[2vw] px-[3.5vw] h-full relative'>
      <Tilt className='w-full h-full relative   flex items-center justify-center'>
        <img
          className='h-full scale-[0.99] absolute w-full object-cover opacity-40 object-center'
          src="https://i.pinimg.com/originals/ba/87/32/ba87327c9586ecb4c8da9061b5b68403.jpg"
          alt=""
        />
        <img
          className='h-full scale-[0.96] absolute w-full object-cover opacity-50 object-center'
          src="https://i.pinimg.com/originals/ba/87/32/ba87327c9586ecb4c8da9061b5b68403.jpg"
          alt=""
        />
        <img
          className='h-full scale-[0.93] absolute w-full object-cover opacity-20 object-center'
          src="https://i.pinimg.com/originals/ba/87/32/ba87327c9586ecb4c8da9061b5b68403.jpg"
          alt=""
        />
        <img
          className='h-full scale-[0.90] absolute w-full object-cover opacity-70 object-center'
          src="https://i.pinimg.com/originals/ba/87/32/ba87327c9586ecb4c8da9061b5b68403.jpg"
          alt=""
        />
        <img
          className='h-full scale-[0.87] absolute w-full object-cover opacity-60 object-center'
          src="https://i.pinimg.com/originals/ba/87/32/ba87327c9586ecb4c8da9061b5b68403.jpg"
          alt=""
        />
      </Tilt>
    </div>
  );
}

export default MenuLeft;
