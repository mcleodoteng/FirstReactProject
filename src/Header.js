import React from 'react';
import logo from './images/logo.svg';

export const Header = () => {
  return (
    <div className='flex justify-between items-center px-5 py-5'>
        <img src={logo} alt= 'Logo' className='h-10'/>
        <div >
            <ul className='flex gap-6 list-none text-sm'>
                <li className='hover:underline cursor-pointer'>Feature</li>
                <li className='hover:underline cursor-pointer'>Team</li>
                <li>Sign In</li>
            </ul>   
        </div>
    </div>
    
  )
}


