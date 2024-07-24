import React from 'react'
import Logo from './Logo'
import Menu from './Menu'


const Navbar = (props) => {
  return (
    <div className='
    flex w-full item-center justify-between
    px-10 py-4 
    '>
    <Logo />
    <Menu  menuopen={props.menuopen} setmenu={props.setmenu} />
    </div>
  )
}

export default Navbar
  