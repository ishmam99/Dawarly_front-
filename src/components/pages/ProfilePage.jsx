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
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const ProfilePage = () => {
   const { user, login, logout ,getUser} = useAuthContext()
   const navigate = useNavigate();
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
  const checkUser = async () => {
    if (!user) {
      navigate('/login')
    }
  }
  useEffect(() => {
    checkUser()
    getUser()
   },[])
  return (
    <div className=' bg-white md:mt-16 max-w-7xl mx-auto'>
      <div className='flex justify-center items-center mt-2 mb-10 md:hidden top-0 bottom-0'>
        <img src={mobileLogo} alt='mobileLogo' className='w-24 h-24' />
      </div>
      {/* Section 1 */}
      <div className=' bg-white flex flex-col lg:flex-row justify-center items-center lg:gap-8 gap-4 md:mx-4 '>
        {/* Left Profile Card */}
        <div className=' py-8 bg-white rounded-lg border border-[#dbdbdb] flex flex-col justify-center items-center space-y-6'>
          <div className=''>
            <div className='w-[120px] h-[120px] bg-[#d9d9d9]'>
              {' '}
              <img
                src={user?.technician.image}
                alt='mobileLogo'
                className='w-full h-full'
              />
            </div>
          </div>
          <div className='w-full h-auto px-6 flex flex-col justify-center items-center gap-6'>
            <div className="w-full flex flex-col justify-center items-center gap-2 font-['Poppins']">
              <div className='flex flex-col items-center gap-1'>
                <div className='text-center text-black text-base font-medium '>
                  {user?.name}
                </div>

                <div className='text-center text-[#3e3e59] text-sm font-normal leading-snug'>
                  {user?.technician?.category?.name}
                </div>
              </div>
              <div className='w-[257px] text-center text-black text-xs font-normal  leading-tight'>
                {user?.technician?.address}
              </div>
            </div>
          </div>
        </div>

        <div className='md:hidden block'>
          <div className='w-[310px] p-2 bg-white rounded-lg border text-sm border-[#dbdbdb] flex flex-col justify-center items-center space-y-6'>
            <p>{user?.technician?.address}</p>

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
            {user?.name}
            {user?.technician.status == 'pending' ? (
              <span className='text-sm font-semibold px-2 text-red-500'>
                (Not Verified)
              </span>
            ) : (
              <span className='text-sm font-semibold px-2 text-green-500'>
                (Verified)
              </span>
            )}
          </div>
          {new Date(user?.technician?.valid_till) > new Date() ? (
            <div className='text-md text-white px-3 py-1 rounded-lg bg-blue-400 w-52 text-center'>
              Valid till : {user?.technician?.valid_till}
            </div>
          ) : (
            <Link
              to='/subscription-plan'
              className='text-lg text-white px-3 py-1 rounded-lg bg-yellow-400 w-40'
            >
              Make Payment
            </Link>
          )}{' '}
          <div className=' mt-[20px] text-justify text-black text-sm md:text-lg font-normal  md:leading-[30px]'>
            {user?.technician?.about}
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProfilePage;
