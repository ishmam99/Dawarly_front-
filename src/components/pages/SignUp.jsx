import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload } from "lucide-react";
import avator from "../../assets/avator/unsplash_SE4Xc1WvIkU.png";
import { useEffect } from "react";
import useAuthContext from '../../context/AuthContext'
import axios from '../../api/axios'
const Signup = () => {
  const { user, login, register, logout, getUser } = useAuthContext()
  const [isLoading , setIsLoading] = useState(false)
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);
  const [about, setAbout] = useState(null);
  const [password, setPassword] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [provinces , setProvinces] = useState([])
  const [province , setProvince] = useState([])
  const [categories , setCategories] = useState([])
  const [category, setCategory] = useState({ sub_categories: [] })
  const [subCategory , setSubCategory] = useState({})
  const [subCategories, setSubCategories] = useState([])
  const [selectedProvinces, setSelectedProvinces] = useState([])
  const [errors, setErrors] = useState({ })
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result); // Set the uploaded image URL
      };
      reader.readAsDataURL(file);
    }
  };
  const [isChecked, setIsChecked] = useState({
    governorate: false,
    terms: false,
  });

  const navigate = useNavigate();

  const toggleCheckbox = (key) => {
    setIsChecked((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleRegistration = async () => {
    setIsLoading(true)
    try {
      let form = {
        name,
        email,
        password,
        phone,
        address,
        provinces: selectedProvinces.map(sub => sub.id),
        category_id: category.id,
        sub_categories: subCategories.map(sub => sub.id),
        image: imageSrc,
        about,
        governorate: isChecked.governorate,
      };
      // form.append("name", name);
      // form.append("email", email);
      // form.append("password", password);
      // form.append("phone", phone);
      // form.append("address", address);
      // form.append("province_id", province);
      // form.append("category_id", category.id);
      // form.append("sub_category_id", subCategory);
      // form.append("image", imageSrc);
      // form.append("about", about);
      // form.append("governorate", isChecked.governorate);
      console.log(form)
      const response = await axios.post("/register", form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      if (response.status === 201) {
         localStorage.setItem('user', JSON.stringify(response.data.user))
         localStorage.setItem('token', response.data.token)
        navigate("/registration-success");
      }
    } catch (error) {
      setErrors(error.response.data.errors)
      console.error("Registration failed:", error);
      setTimeout(() => {
       setErrors({}) 
      },10000)
    }
     setIsLoading(false)
  };  const getProvinces = async () => {
    const { data } = await axios.get("/provinces");
    setProvinces(data);
  };
  const getCategories = async () => {
    const { data } = await axios.get("/categories");
    setCategories(data);
  };
  useEffect(() => {
  getProvinces()
  getCategories()
  },[])
  return (
    <div className='max-w-7xl lg:mx-auto md:mx-6 mx-4 py-16 '>
      <div className='md:mb-0 mb-24'>
        <h2 className="text-[#0f1728] text-3xl text-center font-normal font-['Poppins'] leading-[38px] mb-6">
          Create an account
        </h2>
        <div className='max-w-md mx-auto space-y-6'>
          {/* Full Name */}
          <div>
            <label
              htmlFor='fullName'
              className="block text-[#344053] mb-1 text-sm font-medium font-['Poppins'] leading-tight"
            >
              Name or Trade Name*
            </label>
            <span className='text-red-500 text-xs'>{errors.name}</span>
            <input
              id='fullName'
              onChange={(e) => setName(e.target.value)}
              type='text'
              placeholder='Enter your full name'
              className="w-full px-4 py-2 bg-white border border-[#cfd4dc] rounded-lg text-[#667084] text-base font-normal font-['Poppins'] leading-normal shadow-sm"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor='phone'
              className="block text-[#344053] mb-1 text-sm font-medium font-['Poppins'] leading-tight"
            >
              Phone*
            </label>
            <span className='text-red-500 text-xs'>{errors.phone}</span>
            <input
              onChange={(e) => setPhone(e.target.value)}
              id='phone'
              type='text'
              placeholder='Enter your phone'
              className="w-full px-4 py-2 border rounded-lg text-[#667084] text-base font-normal font-['Poppins'] leading-normal shadow-sm"
            />
          </div>
          {/* Password */}
          <div>
            <label
              htmlFor='password'
              className="block text-[#344053] mb-1 text-sm font-medium font-['Poppins'] leading-tight"
            >
              Password*
            </label>
            <span className='text-red-500 text-xs'>{errors.password}</span>
            <input
              onChange={(e) => setPassword(e.target.value)}
              id='password'
              type='password'
              placeholder='Enter your password'
              className="w-full px-4 py-2 border rounded-lg text-[#667084] text-base font-normal font-['Poppins'] leading-normal shadow-sm"
            />
          </div>

          <div className='flex items-center space-x-4'>
            {/* Avatar or Uploaded Image */}
            <div>
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt='Uploaded'
                  className='w-12 h-12 rounded-full object-cover'
                />
              ) : (
                <img
                  src={avator} // Default avatar placeholder
                  alt='Avatar'
                  className='w-12 h-12 rounded-full'
                />
              )}
            </div>

            {/* File Input */}
            <label className='flex items-center space-x-2 cursor-pointer'>
              <Upload className='w-5 h-5 text-blue-500' />
              <span className='text-sm font-medium text-black'>
                Upload Advertising image
              </span>
              <span className='text-red-500 text-xs'>{errors.image}</span>
              <input
                type='file'
                className='hidden'
                accept='image/*'
                onChange={handleImageUpload}
              />
            </label>
          </div>
          {/* Address */}
          <div>
            <label
              htmlFor='Address'
              className="block text-[#344053] mb-1 text-sm font-medium font-['Poppins'] leading-tight"
            >
              Address*
            </label>
            <span className='text-red-500 text-xs'>{errors.address}</span>
            <textarea
              name=''
              className="w-full px-4 py-2 border rounded-lg text-[#667084] text-base font-normal font-['Poppins'] leading-normal shadow-sm"
              onChange={(e) => setAddress(e.target.value)}
              id=''
              cols='10'
              rows='4'
            ></textarea>
            {/* <textarea
           
              id='Address'
             
              placeholder='Enter your address'
              className="w-full px-4 py-2 border rounded-lg text-[#667084] text-base font-normal font-['Poppins'] leading-normal shadow-sm"
            /> </textarea> */}
          </div>
          <div>
            <label
              htmlFor='about'
              className="block text-[#344053] mb-1 text-sm font-medium font-['Poppins'] leading-tight"
            >
              About*
            </label>
            <span className='text-red-500 text-xs'>{errors.about}</span>
            <textarea
              name=''
              className="w-full px-4 py-2 border rounded-lg text-[#667084] text-base font-normal font-['Poppins'] leading-normal shadow-sm"
              onChange={(e) => setAbout(e.target.value)}
              id=''
              cols='10'
              rows='4'
            ></textarea>
            {/* <textarea
           
              id='Address'
             
              placeholder='Enter your address'
              className="w-full px-4 py-2 border rounded-lg text-[#667084] text-base font-normal font-['Poppins'] leading-normal shadow-sm"
            /> </textarea> */}
          </div>
          {/* Provinces */}

          <div>
            <label
              htmlFor='provinces'
              className="block text-[#344053] mb-1 text-sm font-medium font-['Poppins'] leading-tight"
            >
              Select Provinces*
            </label>
            <span className='text-red-500 text-xs'>{errors.provinces}</span>
            <div className='flex justify-between gap-4'>
              <select
                onChange={(e) => setProvince(JSON.parse(e.target.value))}
                id='provinces'
                className="w-full px-4 py-2 bg-white border border-[#cfd4dc] rounded-lg text-[#667084] text-base font-normal font-['Poppins'] leading-normal shadow-sm"
              >
                <option value=''>Select Province</option>
                {provinces?.map((province) => (
                  <option key={province.id} value={JSON.stringify(province)}>
                    {province.name}
                  </option>
                ))}
              </select>
              <button
                onClick={() => {
                  if (
                    !selectedProvinces.some((cat) => cat.id === province.id)
                  ) {
                    setSelectedProvinces([
                      ...selectedProvinces,
                      province,
                    ])
                  }
                }}
                className="w-1/2 px-4 py-2 bg-[#0083b3] text-white rounded-xl text-base font-semibold font-['Poppins'] leading-normal"
              >
                Add
              </button>{' '}
            </div>
          </div>
          <div>
            <h1>Provinces</h1>
            <div className='flex flex-wrap gap-2'>
              {selectedProvinces.map((province, index) => (
                <div
                  key={index}
                  className='flex items-center bg-gray-100 px-3 py-1 rounded-full'
                >
                  <span className='text-sm text-gray-700'>{province.name}</span>
                  <button
                    onClick={() =>
                      setSelectedProvinces(
                        selectedProvinces.filter((_, i) => i !== index)
                      )
                    }
                    className='ml-2 text-gray-500 hover:text-red-500'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>{' '}
          </div>
          {/* Section */}
          <div>
            <label
              htmlFor='section'
              className="block text-[#344053] mb-1 text-sm font-medium font-['Poppins'] leading-tight"
            >
              Choose the section*
            </label>
            <span className='text-red-500 text-xs'>{errors.category_id}</span>
            <select
              id='section'
              onChange={(e) => setCategory(JSON.parse(e.target.value))}
              className="w-full px-4 py-2 bg-white border border-[#0e0f10] rounded-lg text-[#667084] text-base font-normal font-['Poppins'] leading-normal shadow-sm"
            >
              <option value=''>Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={JSON.stringify(category)}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Categories */}
          <div>
            <label
              htmlFor='categories'
              className="block text-[#344053] mb-1 text-sm font-medium font-['Poppins'] leading-tight"
            >
              Select Categories*
            </label>
            <span className='text-red-500 text-xs'>{errors.categories}</span>
            <div className='flex justify-between gap-4'>
              <select
                onChange={(e) => setSubCategory(JSON.parse(e.target.value))}
                id='categories'
                className="w-full px-4 py-2 bg-white border border-[#cfd4dc] rounded-lg text-[#667084] text-base font-normal font-['Poppins'] leading-normal shadow-sm"
              >
                <option value=''>Select Category</option>
                {category.sub_categories?.map((category) => (
                  <option key={category.id} value={JSON.stringify(category)}>
                    {category.name}
                  </option>
                ))}
              </select>
              <button
                onClick={() => {
                  if (!subCategories.some((cat) => cat.id === subCategory.id)) {
                    setSubCategories([...subCategories, subCategory])
                  }
                }}
                className="w-1/2 px-4 py-2 bg-[#0083b3] text-white rounded-xl text-base font-semibold font-['Poppins'] leading-normal"
              >
                Add
              </button>{' '}
            </div>
          </div>
          <div>
            <h1>Categories</h1>
            <div className='flex flex-wrap gap-2'>
              {subCategories.map((category, index) => (
                <div
                  key={index}
                  className='flex items-center bg-gray-100 px-3 py-1 rounded-full'
                >
                  <span className='text-sm text-gray-700'>{category.name}</span>
                  <button
                    onClick={() =>
                      setSubCategories(
                        subCategories.filter((_, i) => i !== index)
                      )
                    }
                    className='ml-2 text-gray-500 hover:text-red-500'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>{' '}
          </div>
          {/* Agreement */}
          <div className='flex items-center space-x-2'>
            <div
              className={`w-5 h-5 flex items-center justify-center rounded-full border-2 cursor-pointer ${
                isChecked.governorate
                  ? 'border-green-500 bg-green-500'
                  : 'border-gray-400 bg-gray-200'
              }`}
              onClick={() => toggleCheckbox('governorate')}
            >
              <svg
                className={`w-3 h-3 ${
                  isChecked.governorate ? 'text-white' : 'text-gray-500'
                }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'
                ></path>
              </svg>
            </div>
            <label className="text-[#475466] text-sm font-medium font-['Poppins'] leading-tight">
              Governorate
            </label>
          </div>
          <div className='flex items-center space-x-2'>
            <div
              className={`w-5 h-5 flex items-center justify-center rounded-full border-2 cursor-pointer ${
                isChecked.terms
                  ? 'border-green-500 bg-green-500'
                  : 'border-gray-400 bg-gray-200'
              }`}
              onClick={() => toggleCheckbox('terms')}
            >
              <svg
                className={`w-3 h-3 ${
                  isChecked.terms ? 'text-white' : 'text-gray-500'
                }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'
                ></path>
              </svg>
            </div>
            <label className="text-[#475466] text-sm font-medium font-['Poppins'] leading-tight">
              Agree to{' '}
              <a
                href='#'
                className="underline text-[#475466] font-medium font-['Poppins']"
              >
                terms & Conditions
              </a>
            </label>
          </div>

          {/* Submit Button */}

          <button
            onClick={handleRegistration}
            className="w-full px-4 py-2 bg-[#0083b3] text-white rounded-full text-base font-semibold font-['Poppins'] flex items-start justify-center gap-3 leading-normal"
            disabled={isLoading}
          >
            {isLoading ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-7 h-7 animate-spin'
              >
                <path d='M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z'></path>
              </svg>
            ) : (
              ''
            )}
            Registration
          </button>
        </div>
      </div>
    </div>
  )
};

export default Signup;
