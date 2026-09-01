import React from 'react'

import { Link, Outlet } from 'react-router-dom'

export default function Gallary() {
  return (
    <>
    <div className='bg-secondary  p-5 '>

      <h2 className='text-center'> Gallary</h2>
    <ul>
        <li>
            <Link className=' text-decoration-none text-info' to={`animals`}>Animals</Link>
        </li>
        <li>
            <Link className=' text-decoration-none text-info' to={`birds`}>Birds</Link>
        </li>
        
    </ul>
    <Outlet/>
    </div>
    </>
  )
}
