import { useNavigate } from "react-router-dom";
import arrow from "../../assets/pictures/left-arrow.svg";
import { useState } from "react";
import useAuthContext from '../../context/AuthContext';
const Verification = () => {
  const navigate = useNavigate(); // Hook for navigation
 const [formData, setFormData] = useState({
   phone: '',
   password: '',
 })
  const [loading, setLoading] = useState(false)

  const [errors, setErrors] = useState({})
   const handleChange = (e) => {
     const { name, value } = e.target
     setFormData((prev) => ({
       ...prev,
       [name]: value,
     }))
  }
    const { user, login, logout } = useAuthContext()
    const validateForm = () => {
      let newErrors = {}
      if (!formData.phone) newErrors.phone = 'Phone is required'
     
      if (!formData.password) newErrors.password = 'Password is required'
      return newErrors
    }

  const handleSubmit = async (e) => {
     
      e.preventDefault()
      setLoading(true)
    const newErrors = validateForm()
    console.log(newErrors)
      if (Object.keys(newErrors).length === 0) {
        try {
          const response = await login(formData.phone, formData.password)
          console.log(response)
           if (response.status === 200) {
             navigate('/profile')
           } else if (response.status === 404) {
             navigate('/signup')
           } else if (response.status === 401) {
             setErrors({
               phone: 'Invalid phone or password',
             })
           } else {
             setErrors({
               phone: 'Something went wrong',
             })
           }
        } catch (error) {
          console.error('Login failed:', error)
          // Handle login failure here
        }
      } else {
        setErrors(newErrors)
      }
      setLoading(false)
    }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-start w-full max-w-md mx-auto md:min-h-[90vh] min-h-[50vh] p-6 font-['Poppins'] ">
      {/* Back Button */}
      <div className='flex items-center gap-4 mb-6'>
        <div className='bg-[#0083B3] p-2 rounded-full'>
          <img
            src={arrow}
            alt='arrow'
            className=' w-5 h-5 relative overflow-hidden cursor-pointer'
            onClick={() => navigate(-1)}
          />
        </div>
        <h1 className='text-xl  font-semibold text-[#2c2e33]'>Login</h1>
      </div>

      {/* Instructions */}
      <p className='text-sm text-[#8a8a8a] mb-8'>
        Enter your mobile number to login.
      </p>

      {/* Input Section */}
      <div className='flex flex-col w-full'>
        <label className='block text-[#2c2e33] font-semibold text-base mb-4'>
          Enter your mobile number
        </label>
        <div className='flex flex-col mb-8 w-full'>
          {/* <label className='text-sm text-[#2c2e33] mb-2'>Mobile No</label> */}
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type='text'
            placeholder='Enter your mobile number'
            className='w-full h-[50px] px-4 rounded-[30px] border border-[#0083b3] text-sm text-[#2c2e33] focus:outline-none focus:ring focus:ring-[#0083b3]'
          />
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <label className='block text-[#2c2e33] font-semibold text-base mb-4'>
          Enter your password
        </label>
        <div className='flex flex-col mb-8 w-full'>
          {/* <label className='text-sm text-[#2c2e33] mb-2'>Password</label> */}
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type='password'
            placeholder='Enter your password'
            className='w-full h-[50px] px-4 rounded-[30px] border border-[#0083b3] text-sm text-[#2c2e33] focus:outline-none focus:ring focus:ring-[#0083b3]'
          />
        </div>
      </div>

      {/* Button */}
      <button
        // Navigate to the Verification OTP page 
        type="submit" disabled={loading}
        className='w-full h-[50px] cursor-pointer bg-[#0083b3] text-white rounded-[30px] text-base font-medium uppercase'
      >
        {loading ? 'Loading...' : 'Login'}
        
      </button>
    </form>
  )
};

export default Verification;
