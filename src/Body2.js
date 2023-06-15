import React from 'react';
import icon1 from './images/icon-access-anywhere.svg';
import icon2 from './images/icon-security.svg';
import icon3 from './images/icon-collaboration.svg';
import icon4 from './images/icon-any-file.svg';


export const Body2 = () => {
  return (
    <div className='grid grid-cols-1 w-[75%] ml-14 gap-16 lg:grid-cols-2 mt-44 lg:w-[80%] lg:mx-auto'>
        <div>
            <img src={icon1} alt="Access Your Files" className='mx-auto lg:w-20'/>
            <div className='w-[68%] mx-auto text-center lg:mx-16'>
                <h3 className='font-bold mt-10'>Access your files, anywhere</h3>  
                <p className='font-thin mt-5'>The ability to use a smartphone, tablet, or computer to access your account means
                    your files follow you everywhere.</p>
            </div>
        </div>
        <div>
            <img src={icon2} alt="Security" className='mx-auto lg:mx-auto'/>
            <div className='w-[68%] mx-auto text text-center lg:mx-16'>
                <h3 className='font-bold mt-7'>Access your files, anywhere</h3>  
                <p className='font-thin mt-5'>The ability to use a smartphone, tablet, or computer to access your account means
                    your files follow you everywhere.</p>
            </div>
        </div>
        <div>
            <img src={icon3} alt="Real Time Collaboration" className='mx-auto lg:mx-auto'/>
            <div className='w-[68%] mx-auto text text-center lg:mx-16'>
                <h3 className='font-bold mt-10'>Access your files, anywhere</h3>  
                <p className='font-thin mt-5'>The ability to use a smartphone, tablet, or computer to access your account means
                    your files follow you everywhere.</p>
            </div>
        </div>
        <div>
            <img src={icon4} alt="Store Your Files" className='mx-auto lg:mx-auto'/>
            <div className='w-[68%] mx-auto text text-center lg:mx-16'>
                <h3 className='font-bold mt-12'>Access your files, anywhere</h3>  
                <p className='font-thin mt-5'>The ability to use a smartphone, tablet, or computer to access your account means
                    your files follow you everywhere.</p>
            </div>
        </div>


        


            <p></p>
    </div>
  )
}
