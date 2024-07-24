import React from 'react'

const Menu = (props) => {
   
const menuc = () => {props.setmenu(true)}
 

  return (
    <div
    className=' font-[a4] uppercase '
    >
      <h1 onClick={menuc}>Menu</h1>
    </div>
  )
}

export default Menu
