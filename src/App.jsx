 import React, { useRef, useState } from 'react'
 
import LoadP from './components/Loading/LoadP'
import Home from './components/LandingPage/Home'
import { useGSAP } from '@gsap/react'
import MenuPage from './components/Menu/MenuPage'

 const App = () => {
const [menuopen, setmenu] = useState(false) 

 
   return (
  <> 
  <div
  
  className=' h-screen w-full bg-[#111] overflow-hidden    '
  >
    <MenuPage menuopen={menuopen} setmenu={setmenu} />
  <LoadP />
 
 <Home menuopen={menuopen} setmenu={setmenu} />
  </div>
  </>
     
   )
 }
 
 export default App
 