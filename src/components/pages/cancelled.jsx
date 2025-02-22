import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import mobileLogo from '../../assets/logo/mobile-logo-2.svg'

const Success = () => {
  const navigate = useNavigate() // React Router navigation

  useEffect(() => {
    const timer = setTimeout(() => {
      // navigate('/signup') // Redirect to the signup page after 3 seconds
    }, 3000)

    return () => clearTimeout(timer) // Cleanup timer on unmount
  }, [navigate])
  return (
    <div className='min-h-[90vh]'>
      <div className='flex justify-center items-center mb-10 md:hidden top-0 bottom-0'>
        <img src={mobileLogo} alt='mobileLogo' className='w-24 h-24' />
      </div>
      <div className='flex flex-col items-center justify-center min-h-[90vh] text-center'>
        <div className='p-6 md:mx-0 mx-6'>
          <h1 className='text-3xl font-bold text-[#b36b00]'>Failed!</h1>
          <div className='my-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='rgba(238,102,27,1)' className='w-16 h-16  mx-auto'
            >
              <path d='M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z'></path>
            </svg>
          </div>
          <p className='text-lg text-gray-700'>
           Something Went Wrong <br />
           Your payment was failed due to some reasons. Please Try Again. <Link to='/' className='text-blue-600'>Go Back</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Success
