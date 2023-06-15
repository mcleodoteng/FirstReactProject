import React from 'react'
import logo from '../images/logo.svg';
import location from '../images/icon-location.svg'
import Phone from '../images/icon-phone.svg'
import Email from '../images/icon-email.svg'
import {FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa"

export const Footer = () => {
  return (
    <div className='bg-gradient-to-br from-green-400 to-blue-600 pt-52 px-8 pb-14 text-sm font-thin'>
        <img src={logo} alt= 'Logo' className='h-6 mb-8'/>
        <div className='flex flex-col gap-5 lg:flex-row'>
            <div className='flex gap-5'>
                <img src={location} alt='location' className='h-4 w-4'/>
                <p className='lg:w-[100%] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div className='flex flex-col gap-5 lg:w-[45%]'>
                <div className='flex gap-5'>
                    <img src={Phone} alt='location' className='h-4 w-4'/>
                    <p>+1-543-123-4567</p>
                </div>
                <div className='flex gap-5'>
                    <img src={Email} alt='location' className='h-4 w-4'/>
                    <p>example@fylo.com</p>
                </div>
            </div>

            <div className='flex flex-col gap-5 mt-5 lg:w-[50%] lg:relative lg:bottom-5 lg:left-5'>
                <p>About Us</p>
                <p>Job</p>
                <p>Press</p>
                <p>Blog</p>
            </div>
            <div className='flex flex-col gap-5 mt-5 lg:w-[20%] lg:relative lg:bottom-5 lg:right-16'>
                <p>Contact Us</p>
                <p>Terms</p>
                <p>Privacy</p>
            </div>
            <div className='flex gap-3 justify-center mt-6  lg:relative lg:bottom-7 lg:right-9'>
                <FaFacebook className='border border-white rounded-full h-8 w-8 p-1'/>
                <FaTwitter className='border border-white rounded-full h-8 w-8 p-1'/>
                <FaInstagram className='border border-white rounded-full h-8 w-8 p-1'/>
            </div>
            
        </div>
    </div>
  )
}
