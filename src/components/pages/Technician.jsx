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
import arrow from '../../assets/pictures/left-arrow.svg'
import useAuthContext from '../../context/AuthContext'
import axios from '../../api/axios'
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'
const ProfilePage = () => {
    const [searchParams] = useSearchParams()
  const categoryName = searchParams.get('categoryName')
  const subcategoryName = searchParams.get('subcategoryName')
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
      <div className='absolute justify-end items-center   p-4  md:hidden top-0 right-0 bottom-0'>
        <div className='flex justify-end items-center  p-4  md:hidden top-0 bottom-0'>
          <div className='bg-[#0083B3] p-2 rounded-full'>
            <img
              src={arrow}
              alt='arrow'
              className=' w-5 h-5 relative overflow-hidden cursor-pointer'
              onClick={() => navigate(-1)}
            />
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center my-4 md:hidden top-0 bottom-0'>
        <img src={mobileLogo} alt='mobileLogo' className='w-24 h-24' />
      </div>{' '}
      {/* Section 1 */}
      <div>
        <div className='flex justify-end text-[12px] font-semibold items-center px-3'>
          <p>
            {subcategoryName} / {categoryName}
          </p>
        </div>
      </div>
      <div className='text-center text-black text-xl py-4 font-bold '>
        {user?.name}
      </div>
      <div className=' bg-white px-3  flex flex-col lg:flex-row justify-center items-center lg:gap-8 gap-2 md:mx-4 '>
        {/* Left Profile Card */}
        <div className='px-3 sm:px-6 py-2 sm:py-4 bg-white rounded-lg border border-[#dbdbdb] flex flex-col justify-center items-center space-y-6'>
          <div className=''>
            <div className='w-auto h-full px-4 '>
              {' '}
              <img
                src={user?.image}
                alt='mobileLogo'
                className='w-full h-full rounded-lg p-1'
              />
            </div>
          </div>
          <div className='text-center text-[#3e3e59] text-[16px] hidden sm:block font-normal leading-snug'>
            {user?.about}
          </div>
        </div>
        <div className='w-full px-6 py-8 bg-white rounded-lg border border-[#dbdbdb] sm:hidden flex flex-col justify-center items-center space-y-3'>
          <div className="w-full flex flex-col justify-center items-center gap-2 font-['Poppins']">
            <div className='flex flex-col items-center gap-1'>
              <div className='text-center text-[#3e3e59] text-[18px] font-normal leading-snug'>
                {user?.about}
              </div>
            </div>
            <div className='w-[257px] text-center text-black text-xs font-normal  leading-tight'>
              {/* {user?.address} */}
            </div>
          </div>
        </div>

        <div className='md:hidden w-full block'>
          <div className='w-full p-2 bg-white rounded-lg border text-sm border-[#dbdbdb] flex flex-col justify-center items-center space-y-6'>
            {/* <p>{user?.address}</p> */}

            <div className='flex gap-8 mb-2'>
              <div className='p-1  hover:bg-green-600 shadow-sm rounded-full flex justify-center items-center'>
                {/* <img
                  src={whatsapp}
                  alt='WhatsApp'
                  className='w-7 h-7'
                  onClick={() => window.open(`https://wa.me/${user?.phone}`)}
                  style={{ cursor: 'pointer' }}
                />{' '} */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-10 h-10 text-green-600'
                  onClick={() => window.open(`https://wa.me/${user?.phone}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <path d='M7.25361 18.4944L7.97834 18.917C9.18909 19.623 10.5651 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 13.4363 4.37821 14.8128 5.08466 16.0238L5.50704 16.7478L4.85355 19.1494L7.25361 18.4944ZM2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22ZM8.39232 7.30833C8.5262 7.29892 8.66053 7.29748 8.79459 7.30402C8.84875 7.30758 8.90265 7.31384 8.95659 7.32007C9.11585 7.33846 9.29098 7.43545 9.34986 7.56894C9.64818 8.24536 9.93764 8.92565 10.2182 9.60963C10.2801 9.76062 10.2428 9.95633 10.125 10.1457C10.0652 10.2428 9.97128 10.379 9.86248 10.5183C9.74939 10.663 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.40738 11.0473 9.44455 11.1944C9.45903 11.25 9.50521 11.331 9.54708 11.3991C9.57027 11.4368 9.5918 11.4705 9.60577 11.4938C9.86169 11.9211 10.2057 12.3543 10.6259 12.7616C10.7463 12.8783 10.8631 12.9974 10.9887 13.108C11.457 13.5209 11.9868 13.8583 12.559 14.1082L12.5641 14.1105C12.6486 14.1469 12.692 14.1668 12.8157 14.2193C12.8781 14.2457 12.9419 14.2685 13.0074 14.2858C13.0311 14.292 13.0554 14.2955 13.0798 14.2972C13.2415 14.3069 13.335 14.2032 13.3749 14.1555C14.0984 13.279 14.1646 13.2218 14.1696 13.2222V13.2238C14.2647 13.1236 14.4142 13.0888 14.5476 13.097C14.6085 13.1007 14.6691 13.1124 14.7245 13.1377C15.2563 13.3803 16.1258 13.7587 16.1258 13.7587L16.7073 14.0201C16.8047 14.0671 16.8936 14.1778 16.8979 14.2854C16.9005 14.3523 16.9077 14.4603 16.8838 14.6579C16.8525 14.9166 16.7738 15.2281 16.6956 15.3913C16.6406 15.5058 16.5694 15.6074 16.4866 15.6934C16.3743 15.81 16.2909 15.8808 16.1559 15.9814C16.0737 16.0426 16.0311 16.0714 16.0311 16.0714C15.8922 16.159 15.8139 16.2028 15.6484 16.2909C15.391 16.428 15.1066 16.5068 14.8153 16.5218C14.6296 16.5313 14.4444 16.5447 14.2589 16.5347C14.2507 16.5342 13.6907 16.4482 13.6907 16.4482C12.2688 16.0742 10.9538 15.3736 9.85034 14.402C9.62473 14.2034 9.4155 13.9885 9.20194 13.7759C8.31288 12.8908 7.63982 11.9364 7.23169 11.0336C7.03043 10.5884 6.90299 10.1116 6.90098 9.62098C6.89729 9.01405 7.09599 8.4232 7.46569 7.94186C7.53857 7.84697 7.60774 7.74855 7.72709 7.63586C7.85348 7.51651 7.93392 7.45244 8.02057 7.40811C8.13607 7.34902 8.26293 7.31742 8.39232 7.30833Z'></path>
                </svg>
              </div>
              <div className='w-12 h-12 bg-white hover:bg-blue-500 shadow-sm rounded-full flex justify-center items-center'>
                <img
                  src={call}
                  alt='call'
                  className='w-6 h-6'
                  onClick={() => window.open(`tel:00${user?.phone}`)}
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
                onClick={() => window.open(`tel:00${user?.phone}`)}
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
                      onClick={() => window.open(`tel:00${user?.phone}`)}
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
