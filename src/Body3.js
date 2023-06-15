import React from 'react'
import illustration2 from './images/illustration-stay-productive.png'
import arrow from './images/icon-arrow.svg'

export const Body3 = () => {
  return (
    <div className='lg:flex flex-row' >
        <img src={illustration2} alt='Illustration2' className='w-[70%] mx-auto mt-28 lg:w-[35%] lg:ml-20'/>
        <div className='lg:w-[35%] w-[90%] mx-auto lg:mt-40 lg:ml-10'>
            <h2 className='text-xl mt-20 lg:mt-2 mx-auto font-semibold ml-2'>Stay productive, wherever you are</h2>
            <p className='mt-6 mx-auto font-medium text-sm'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
            <p className='mt-3 mx-auto font-medium text-sm'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
            <br></br>
            <div className='flex col2 underline underline-offset-8 gap-2'>
              <p className='text-emerald-200 font-thin'>See how Fylo works </p>
              <img src={arrow} alt='arrow' className='h-6 '/>
            </div>
            

            
        </div>
    

    </div>

  )
}
