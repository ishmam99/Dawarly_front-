import React from "react";
import call from "../../assets/pictures/call.svg";
import mail from "../../assets/pictures/mail.svg";
import whatsapp from "../../assets/pictures/whatsapp.svg";
import instagram from "../../assets/pictures/instragram.svg";
import facebook from "../../assets/pictures/facebok.svg";
import twieter from "../../assets/pictures/twitter.svg";
import youtube from "../../assets/pictures/youtube.svg";
import mobileLogo from "../../assets/logo/mobile-logo-2.svg";
import { useState } from 'react'
import useAuthContext from '../../context/AuthContext'
const ProfilePage = () => {
   const { user, login, logout } = useAuthContext()
  const electricians = [
    {
      name: "Jhon Doe",
      description: "Lorem Ipsum is simply dummy text.",
    },
    {
      name: "Jhon Doe",
      description: "Lorem Ipsum is simply dummy text.",
    },
    {
      name: "Jhon Doe",
      description: "Lorem Ipsum is simply dummy text.",
    },
    {
      name: "Jhon Doe",
      description: "Lorem Ipsum is simply dummy text.",
    },
  ];

  return (
    <div className=' bg-white md:mt-16 max-w-7xl mx-auto'>
      <div className='flex justify-center items-center mt-2 mb-10 md:hidden top-0 bottom-0'>
        <img
          src={user.technician.image}
          alt='mobileLogo'
          className='w-24 h-24'
        />
      </div>
      {/* Section 1 */}
      <div className=' bg-white flex flex-col lg:flex-row justify-center items-center lg:gap-8 gap-4 md:mx-4 '>
        {/* Left Profile Card */}
        <div className=' py-8 bg-white rounded-lg border border-[#dbdbdb] flex flex-col justify-center items-center space-y-6'>
          <div className=''>
            <div className='w-[120px] h-[120px] bg-[#d9d9d9]'></div>
          </div>
          <div className='w-full h-auto px-6 flex flex-col justify-center items-center gap-6'>
            <div className="w-full flex flex-col justify-center items-center gap-2 font-['Poppins']">
              <div className='flex flex-col items-center gap-1'>
                <div className='text-center text-black text-base font-medium '>
                  {user.name}
                </div>
                <div className='text-center text-[#3e3e59] text-sm font-normal leading-snug'>
                  {user.technician?.category?.name}
                </div>
              </div>
              <div className='w-[257px] text-center text-black text-xs font-normal  leading-tight'>
                {user.technician?.address}
              </div>
            </div>
          </div>
        </div>

        <div className='md:hidden block'>
          <div className='w-[310px] p-2 bg-white rounded-lg border text-sm border-[#dbdbdb] flex flex-col justify-center items-center space-y-6'>
            <p>{user.technician?.address}</p>

            <div className='flex gap-3 mb-2'>
              <div className='p-1 bg-white shadow-sm rounded-full flex justify-center items-center'>
                <img src={whatsapp} alt='WhatsApp' className='w-7 h-7' />
              </div>
              <div className='w-9 h-9 bg-white shadow-sm rounded-full flex justify-center items-center'>
                <img src={call} alt='call' className='w-4 h-4' />
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="w-full mt-10 px-4 md:px-0 font-['Poppins']">
          <div className='text-[#282828] md:text-[28px] text-2xl font-bold '>
            {user.name}
          </div>
          <div className=' mt-[20px] text-justify text-black text-sm md:text-lg font-normal  md:leading-[30px]'>
            {user.technician?.about}
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className=" flex flex-col py-10 bg-white lg:mx-0 mx-4 font-['Poppins'] my-10">
        {/* Heading */}
        <div className='w-full mx-auto'>
          <h2 className='text-[#282828] text-[28px] font-medium mb-8'>
            Related Electricians
          </h2>
        </div>

        {/* Grid Layout */}
        <div className='grid grid-cols-2 lg:grid-cols-4 md:gap-8 gap-2 '>
          {electricians.map((electrician, index) => (
            <div
              key={index}
              className='w-full py-4 bg-white rounded-lg border border-gray-300 flex flex-col items-center shadow-sm'
            >
              <div className='lg:w-[120px] lg:h-[120px] md:w-[80px] md:h-[80px] w-[60px] h-[60px] bg-[#d9d9d9] rounded-full'></div>
              <h3 className='text-black lg:text-lg md:text-base text-sm font-medium  mt-4'>
                {electrician.name}
              </h3>
              <p className='text-black text-xs font-normal  leading-tight text-center lg:px-4 px-1 mt-2'>
                {electrician.description}
              </p>
              <div className='flex lg:gap-4 gap-2 mt-4'>
                <div className='p-1 bg-white shadow-sm rounded-full flex justify-center items-center'>
                  <img src={whatsapp} alt='WhatsApp' className='w-7 h-7' />
                </div>
                <div className='w-9 h-9 bg-white shadow-sm rounded-full flex justify-center items-center'>
                  <img src={call} alt='call' className='w-4 h-4' />
                </div>
                {/* <div className="w-9 h-9 bg-[#e8f9ff] rounded-full flex justify-center items-center">
                  <img src={instagram} alt="Instagram" className="w-5 h-5" />
                </div>
                <div className="w-9 h-9 bg-[#e8f9ff] rounded-full flex justify-center items-center">
                  <img src={facebook} alt="Facebook" className="w-5 h-5" />
                </div>
                <div className="w-9 h-9 bg-[#e8f9ff] rounded-full flex justify-center items-center">
                  <img src={twieter} alt="Twitter" className="w-5 h-5" />
                </div> */}
              </div>
              <button className="mt-6 px-8 py-2 bg-[#0083b3] text-white text-sm font-medium font-['Poppins'] rounded-[100px] tracking-tight">
                More Info
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default ProfilePage;
