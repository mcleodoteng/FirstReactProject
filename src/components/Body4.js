import React from 'react'
import Quotation from '../images/bg-quotes.png'
import Profile1 from '../images/profile-1.jpg'
import Profile2 from '../images/profile-2.jpg'
import Profile3 from '../images/profile-3.jpg'

export const Body4 = () => {
  return (
    <div className='lg:flex flex-row'>
        <img src={Quotation} alt='quotation' className='mt-28 ml-7 h-8' />
        <div className='bg-[#202A3C] text-sm font-thin w-[85%] mx-auto px-5 py-8 rounded-md lg:mt-32 lg:w-[29%] lg:relative right-4'>
            <p>Fylo has improved our team productivity by an order of magnitude. Since making
                the switch our team has become a well-oiled collaboration machine.</p>
            <div className='flex flex-row'>
                <img src={Profile1} alt='Profile1' className='rounded-full h-9 mt-6'/>
                <div className='flex flex-col mt-6 ml-3'>
                    <p className='font-bold'>Satish Patel</p>
                    <p className='text-xs'>Founder & CEO, Huddle</p>
                </div>
                
            </div>    

        </div>
        <div className='bg-[#202A3C] text-sm font-thin w-[85%] mx-auto px-5 py-8 rounded-md mt-6 lg:mt-32 lg:w-[29%]'>
            <p>Fylo has improved our team productivity by an order of magnitude. Since making
                the switch our team has become a well-oiled collaboration machine.</p>
            <div className='flex flex-row'>
                <img src={Profile2} alt='Profile1' className='rounded-full h-9 mt-6'/>
                <div className='flex flex-col mt-6 ml-3'>
                    <p className='font-bold'>Bruce Mckenzie</p>
                    <p className='text-xs'>Founder & CEO, Huddle</p>
                </div>
                
            </div>    

        </div>

        <div className='bg-[#202A3C] text-sm font-thin w-[85%] mx-auto px-5 py-8 rounded-md mt-6 lg:mt-32 lg:w-[29%]'>
            <p>Fylo has improved our team productivity by an order of magnitude. Since making
                the switch our team has become a well-oiled collaboration machine.</p>
            <div className='flex flex-row'>
                <img src={Profile3} alt='Profile1' className='rounded-full h-9 mt-6'/>
                <div className='flex flex-col mt-6 ml-3'>
                    <p className='font-bold'>Iva Boyd</p>
                    <p className='text-xs'>Founder & CEO, Huddle</p>
                </div>
                
            </div>    

        </div>

    </div>
  )
}
