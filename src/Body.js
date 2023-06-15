import React from 'react';
import illustration from  './images/illustration-intro.png';

export const Body = () => {
  return (
    <div className='flex flex-col text-center item-center gap-6 w-[57%] mx-auto mt-8 lg:w-[60%]' >
        <img src={illustration} alt="Illustration_Image" className='lg:w-[65%] lg:mx-auto'/>
        <div className='flex flex-col gap-6 mx-auto text-center '>
            <h3 className='text-xl lg:text-2xl font-bold lg:w-[40%] lg:mx-auto'>All your files in one secure location, accessible anywhere.</h3>
            <p className='text-sm lg:text-lg font-thin lg:w-[45%] lg:mx-auto'>Fylo stores all your most important files in one secure location. Access them wherever you 
                need, share and collaborate with friends family, and co-workers.</p>
        </div>
        <div>
            <button type='button' class="w-[60%] text-white bg-gradient-to-br from-green-400 to-blue-600 to-dark-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 lg:w-[30%]">Get Started</button>
        </div>
        
        

    </div>
  )
}
