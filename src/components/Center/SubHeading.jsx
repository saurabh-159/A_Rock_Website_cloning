import React from 'react'
import 'remixicon/fonts/remixicon.css'



const SubHeading = () => {
  return (
    <div className='flex justify-between items-center' >
      <div
      className='flex'
      >
      <i className="ri-play-circle-fill p-3"></i>
        <h3       className='uppercase'>play <br />the film</h3></div>
      <div
      className='flex gap-24 font-[a4]'
      ><h3
      className='uppercase'
      >Creator <br />cruator</h3>
      <h3       className='uppercase'>New York <br />Los Angeles</h3>
      </div>
    </div>
  )
}

export default SubHeading
