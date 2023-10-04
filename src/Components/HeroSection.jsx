import React from 'react'
import {blackgradient} from '../Style'

const HeroSection = () => {
  return (
    <div className={`w-full min-h-[88.5vh] relative top-[75px] ${blackgradient} overflow-y-auto`}>
         <div className='absolute text-white inset-40 flex'>
            <ul className='flex-col'>
                <li className='w-6 h-6 violet-gradient rounded-full'></li>
                <li className='w-1 h-[40vh] violet-gradient mx-auto'></li>
            </ul>
            <ul>
                <li className='text-7xl font-extrabold'>Hi,I m <span className='text-[#804dee]'>Abhay</span></li>
                <br />
                <li className='text-3xl font-medium'>I develop 3d visuals,user interfaces and web applications</li>
            </ul>
         </div>
    </div>
  )
}

export default HeroSection
