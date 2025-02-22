import React, { useEffect } from "react";
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
import axios from '../../api/axios'
import { Link, useLocation ,useNavigate} from "react-router-dom";
const ProfilePage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [user, setUser] = useState(null)
  const [technicians, setTechnicians] = useState([])
 
   const getSubCategory = async (slug) => {
     const { data } = await axios.get('subcategory/'+slug)
        setTechnicians(prevTechnicians => {
          const uniqueTechnicians = data.technicians.filter(newTech => 
            !prevTechnicians.some(existingTech => existingTech.id === newTech.id)
          )
          return [...prevTechnicians, ...uniqueTechnicians]
        })
  }
  const getUser = async () => {
    try {
      console.log(location)
      const response = await axios.get(location.pathname)
      setUser(response.data)
      response.data.sub_categories.map((e) =>
        getSubCategory(e.sub_category.slug)
      )
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUser()
  }, [location.pathname])
  return (
    <div className=' bg-white md:mt-16 max-w-7xl mx-auto'>
      <div className='flex justify-center items-center mt-2 mb-10 md:hidden top-0 bottom-0'>
        <img src={mobileLogo} alt='mobileLogo' className='w-24 h-24' />
        <button
          onClick={() => navigate(-1)}
          className='px-4 absolute py-2 right-0 rounded'
        >
          {' '}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='rgba(70,146,221,1)'
            className='w-7 h-7'
          >
            <path d='M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z'></path>
          </svg>
        </button>
      </div>
      {/* Section 1 */}
      <div className='text-center text-black text-base font-medium '>
        {user?.name}
      </div>
      <div className=' bg-white flex flex-col lg:flex-row justify-center items-center lg:gap-8 gap-4 md:mx-4 '>
        {/* Left Profile Card */}
        <div className=' py-8 bg-white rounded-lg border border-[#dbdbdb] flex flex-col justify-center items-center space-y-6'>
          <div className=''>
            <div className='w-auto h-[220px] px-10 bg-[#d9d9d9]'>
              {' '}
              <img
                src={user?.image}
                alt='mobileLogo'
                className='w-full h-full rounded-lg p-1'
              />
            </div>
          </div>
          <div className='w-full h-auto px-6 flex flex-col justify-center items-center gap-6'>
            <div className="w-full flex flex-col justify-center items-center gap-2 font-['Poppins']">
              <div className='flex flex-col items-center gap-1'>
                <div className='text-center text-[#3e3e59] text-sm font-normal leading-snug'>
                  {user?.about}
                </div>
              </div>
              <div className='w-[257px] text-center text-black text-xs font-normal  leading-tight'>
                {/* {user?.address} */}
              </div>
            </div>
          </div>
        </div>

        <div className='md:hidden block'>
          <div className='w-[310px] p-2 bg-white rounded-lg border text-sm border-[#dbdbdb] flex flex-col justify-center items-center space-y-6'>
            {/* <p>{user?.address}</p> */}

            <div className='flex gap-3 mb-2'>
              <div className='p-1 bg-white hover:bg-green-600 shadow-sm rounded-full flex justify-center items-center'>
                <img
                  src={whatsapp}
                  alt='WhatsApp'
                  className='w-7 h-7'
                  onClick={() => window.open(`https://wa.me/${user?.phone}`)}
                  style={{ cursor: 'pointer' }}
                />{' '}
              </div>
              <div className='w-9 h-9 bg-white hover:bg-blue-500 shadow-sm rounded-full flex justify-center items-center'>
                <img
                  src={call}
                  alt='call'
                  className='w-4 h-4'
                  onClick={() => window.open(`tel:${user?.phone}`)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="w-full hidden sm:block mt-10 px-4 md:px-0 font-['Poppins']">
          <div className='text-[#282828] md:text-[28px] text-2xl font-bold '>
            {user?.name}
          </div>
          <div className='flex gap-3 mb-2'>
            <div className='p-1 bg-white shadow-sm hover:bg-green-600 rounded-full flex justify-center items-center'>
              <img
                src={whatsapp}
                alt='WhatsApp'
                className='w-7 h-7 '
                onClick={() => window.open(`https://wa.me/${user?.phone}`)}
                style={{ cursor: 'pointer' }}
              />{' '}
            </div>
            <div className='w-9 h-9 bg-white shadow-sm hover:bg-blue-500 rounded-full flex justify-center items-center'>
              <img
                src={call}
                alt='call'
                className='w-4 h-4'
                onClick={() => window.open(`tel:${user?.phone}`)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
          <div className=' mt-[20px] text-justify text-black text-sm md:text-lg font-normal  md:leading-[30px]'>
            {user?.about}
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className=" flex flex-col py-10 bg-white lg:mx-0 mx-4 font-['Poppins'] my-10">
        {/* Heading */}
        <div className='w-full mx-auto'>
          <h2 className='text-[#282828] text-[28px] font-medium mb-8'>
            الفئات ذات الصلة
          </h2>
        </div>

        {/* Grid Layout */}
        <div className='grid grid-cols-2 lg:grid-cols-4 md:gap-8 gap-2 '>
          {technicians
            .slice(0, 4)
            .sort(() => Math.random() - 0.5)
            .map((electrician, index) => (
              <div
                key={index}
                className='w-full py-4 bg-white rounded-lg border border-gray-300 flex flex-col items-center shadow-sm'
              >
                <div className='lg:w-[120px] lg:h-[120px] md:w-[80px] md:h-[80px] w-[60px] h-[60px] bg-[#d9d9d9] rounded-full'>
                  <img
                    src={electrician.image}
                    alt=''
                    className='w-full h-full rounded-full p-1'
                  />
                </div>
                <h3 className='text-black lg:text-lg md:text-base text-sm font-medium  mt-4'>
                  {electrician.name}
                </h3>
                <p className='text-black text-xs font-normal  leading-tight text-center lg:px-4 px-1 mt-2'>
                  {electrician.description}
                </p>
                <div className='flex gap-3 mb-2'>
                  <div className='p-1 bg-white hover:bg-green-600 shadow-sm rounded-full flex justify-center items-center'>
                    <img
                      src={whatsapp}
                      alt='WhatsApp'
                      className='w-7 h-7'
                      onClick={() =>
                        window.open(`https://wa.me/${user?.phone}`)
                      }
                      style={{ cursor: 'pointer' }}
                    />{' '}
                  </div>
                  <div className='w-9 h-9 bg-white hover:bg-blue-500 shadow-sm rounded-full flex justify-center items-center'>
                    <img
                      src={call}
                      alt='call'
                      className='w-4 h-4'
                      onClick={() => window.open(`tel:${user?.phone}`)}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                </div>
                <Link
                  to={'/technicians/' + electrician.id}
                  className="mt-6 px-8 py-2 bg-[#0083b3] text-white text-sm font-medium font-['Poppins'] rounded-[100px] tracking-tight"
                >
                  More Info
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
};

export default ProfilePage;
