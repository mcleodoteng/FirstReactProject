import React from 'react'

export const Body5 = () => {
  return (
    <div className='lg:w-[70%] lg:mx-auto relative top-44'>
        <div className='bg-[#202A3C] w-[90%] mx-auto px-7 py-8 rounded-md shadow-lg text-center'>
          <h2 className='text-2xl text-center'>Get early access today</h2>
          <p className='text-center mt-5 text-sm font-thin lg:w-[55%] lg:mx-auto'>It only takes a minute to sign up and our free starter tier is extremely generous.
          If you have any questions, our support team would be happy to help you.</p>
          
        <div className='lg:flex flex-row lg:gap-6 lg:ml-10'>
          <input className='h-11 w-full rounded-full px-5 py-2 text-xs mt-6 lg:w-[70%]'
          type='email' name='email' placeholder='email@example.com'/>
            <button type='button' class="w-[100%] mt-6 lg:w-[25%] text-white bg-gradient-to-br from-green-400 to-blue-600 to-dark-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-3 text-center mr-2 mb-2">Get Started</button>
          </div>
        </div>

    </div>
  )
}
