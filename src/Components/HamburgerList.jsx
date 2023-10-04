import React from 'react'
import { navLinks } from '../Constants'
import { Link } from 'react-router-dom'
const HamburgerList = () => {
  return (

                  <ul className='text-secondary bg-primary rounded-lg font-extrabold'>
                   {navLinks.map((element)=>{
                    return (<li key={element.id} className='p-5 text-center border-b-2'>
                        <Link to={element.id}>
                        {element.title}
                        </Link> 
                    </li>)
                })}
            </ul>

  )
}

export default HamburgerList
