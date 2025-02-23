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
  const [address, setAddress] = useState('address');
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

  const handleRegistration = async (e) => {
    e.preventDefault();
    
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
      if (imageSrc === null) {
        setErrors({ image: 'Image is required' })	
         setIsLoading(false)
        return false
      }
      const response = await axios.post("/register", form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response)
      if (response.status === 201) {
         localStorage.setItem('user', JSON.stringify(response.data.user))
         localStorage.setItem('token', response.data.token)
        navigate("/registration-success");
      }
    } catch (error) {
      setErrors(error.response.data?.errors)
      console.error("Registration failed:", error);
      setTimeout(() => {
       setErrors({}) 
      },10000)
    }
     setIsLoading(false)
  };  const getProvinces = async () => {    const { data } = await axios.get("/provinces");
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
        <form
          onSubmit={handleRegistration}
          className='max-w-md mx-auto space-y-6'
        >
          {/* Full Name */}
          <div>
            <label
              htmlFor='fullName'
              className="block text-right text-[#344053] mb-1 text-sm font-medium font-['Poppins'] leading-tight"
            >
              الاسم أو الاسم التجاري
            </label>
            <span className='text-red-500 text-xs'>{errors?.name}</span>
            <input
              id='fullName'
              required
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
              className="block text-[#344053] mb-1 text-right text-sm font-medium font-['Poppins'] leading-tight"
            >
              الهاتف*
            </label>
            <span className='text-red-500 text-xs'>{errors?.phone}</span>
            <div className='relative'>
              <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600'>
                +965
              </span>
              <input
                required
                minLength='8'
                onChange={(e) => {
                  let value = e.target.value.replace(/[^0-9]/g, '')
                  if (!value.startsWith('965')) {
                    value = '965' + value
                  }
                  setPhone(value)
                }}
                id='phone'
                type='text'
                placeholder='Enter your phone'
                className="w-full pl-14 px-4 py-2 border rounded-lg text-[#667084] text-base font-normal font-['Poppins'] leading-normal shadow-sm"
              />
            </div>
          </div>
          {/* Password */}
          <div>
            <label
              htmlFor='password'
              className="block text-[#344053] text-right mb-1 text-sm font-medium font-['Poppins'] leading-tight"
            >
              الرقم السري*
            </label>
            <span className='text-red-500 text-xs'>{errors?.password}</span>
            <input
              required
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
                  className='w-20 h-20 rounded-xl object-cover'
                />
              ) : (
                // <img
                //   src={avator} // Default avatar placeholder
                //   alt='Avatar'
                //   className='w-12 h-12 rounded-full'
                // />
                <img
                  width='100'
                  height='100'
                  src='https://img.icons8.com/cotton/100/image-file-add--v2.png'
                  alt='image-file-add--v2'
                />
              )}
            </div>
            {/* File Input */}
            <label className='flex items-center space-x-2 cursor-pointer'>
              <Upload className='w-5 h-5 text-blue-500' />
              <span className='text-sm text-right font-medium text-black'>
                الصورة الاعلانية أو الشخصية
              </span>
              {!imageSrc && (
                <span className='text-red-500 text-xs'>*Required</span>
              )}
              <span className='text-red-500 text-xs'>{errors?.image}</span>
              <input
                type='file'
                name='image'
                className='hidden'
                accept='image/*'
                onChange={(e) => {
                  const file = e.target.files[0]
                  if (file && file.size > 5 * 1024 * 1024) {
                    alert('File size must be less than 5MB')
                    e.target.value = ''
                    return
                  }
                  handleImageUpload(e)
                }}
              />
            </label>{' '}
          </div>
          {/* Address */}
          {/* <div>
            <label
              htmlFor='Address'
              className="block text-[#344053] mb-1 text-sm font-medium font-['Poppins'] leading-tight"
            >
              Address*
            </label>
            <span className='text-red-500 text-xs'>{errors?.address}</span>
            <textarea
              name=''
              required
              className="w-full px-4 py-2 border rounded-lg text-[#667084] text-base font-normal font-['Poppins'] leading-normal shadow-sm"
              onChange={(e) => setAddress(e.target.value)}
              id=''
              cols='10'
              rows='4'
            ></textarea>
          
          </div> */}
          <div>
            <label
              htmlFor='about'
              className="block text-right text-[#344053] mb-1 text-sm font-medium font-['Poppins'] leading-tight"
            >
              اضف اعلانك هنا*
            </label>
            <span className='text-red-500 text-xs'>{errors?.about}</span>
            <textarea
              required
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
              className="block text-right text-[#344053] mb-1 text-sm font-medium font-['Poppins'] leading-tight"
            >
              المحافظات*
            </label>
            <span className='text-red-500 text-xs'>{errors?.provinces}</span>
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
                type='button'
                onClick={() => {
                  if (
                    !selectedProvinces.some((cat) => cat.id === province.id)
                  ) {
                    setSelectedProvinces([...selectedProvinces, province])
                  }
                }}
                className="w-1/2 px-4 py-2 bg-[#0083b3] text-white rounded-xl text-base font-semibold font-['Poppins'] leading-normal"
              >
                اضف
              </button>{' '}
            </div>
          </div>
          <div>
            <h1 className='text-right'>المقاطعات</h1>
            <div className='flex flex-wrap gap-2'>
              {selectedProvinces.map((province, index) => (
                <div
                  key={index}
                  className='flex items-center bg-gray-100 px-3 py-1 rounded-full'
                >
                  <span className='text-sm text-gray-700'>{province.name}</span>
                  <button
                    type='button'
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
              className="block text-right text-[#344053] mb-1 text-sm font-medium font-['Poppins'] leading-tight"
            >
              اختر القسم*
            </label>
            <span className='text-red-500 text-xs'>{errors?.category_id}</span>
            <select
              id='section'
              required
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
              className="block text-right text-[#344053] mb-1 text-sm font-medium font-['Poppins'] leading-tight"
            >
              اختر الفئة*
            </label>
            <span className='text-red-500 text-xs'>{errors?.categories}</span>
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
                type='button'
                onClick={() => {
                  if (!subCategories.some((cat) => cat.id === subCategory.id)) {
                    setSubCategories([...subCategories, subCategory])
                  }
                }}
                className="w-1/2 px-4 py-2 bg-[#0083b3] text-white rounded-xl text-base font-semibold font-['Poppins'] leading-normal"
              >
                اضف
              </button>{' '}
            </div>
          </div>
          <div>
            {subCategories.length > 0 ? (
              <h1 className='text-right'>فئات</h1>
            ) : (
              ''
            )}
            <div className='flex flex-wrap gap-2'>
              {subCategories.map((category, index) => (
                <div
                  key={index}
                  className='flex items-center bg-gray-100 px-3 py-1 rounded-full'
                >
                  <span className='text-sm text-gray-700'>{category.name}</span>
                  <button
                    type='button'
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
          <div className='flex justify-end items-center space-x-2'>
            <label
              htmlFor='governorate'
              className="text-[#475466] text-sm font-medium font-['Poppins'] leading-tight"
            >
              سياسة الاستخدام
            </label>{' '}
            <input
              type='checkbox'
              required
              id='governorate'
              className={`w-5 h-5 rounded-full cursor-pointer ${
                isChecked.governorate
                  ? 'border-green-500 bg-green-500'
                  : 'border-gray-400 bg-gray-200'
              }`}
              checked={isChecked.governorate}
              onChange={() => toggleCheckbox('governorate')}
            />
          </div>
          <div className='flex items-center justify-end space-x-2'>
            <label
              htmlFor='terms'
              className="text-[#475466] text-sm font-medium font-['Poppins'] leading-tight"
            >
              Agree to{' '}
              <a
                href='#'
                className="underline text-[#475466] font-medium font-['Poppins']"
              >
                الشروط والاحكام
              </a>
            </label>{' '}
            <input
              type='checkbox'
              required
              id='terms'
              className={`w-5 h-5 rounded-full cursor-pointer ${
                isChecked.terms
                  ? 'border-green-500 bg-green-500'
                  : 'border-gray-400 bg-gray-200'
              }`}
              checked={isChecked.terms}
              onChange={() => toggleCheckbox('terms')}
            />
          </div>
          {/* Submit Button */}
          {errors?.image ? (
            <p className='text-red-500'>Please Select a Profile Image</p>
          ) : (
            ''
          )}
          <button
            type='submit'
            className="w-full px-4 cursor-pointer py-2 bg-[#0083b3] text-white rounded-full text-base font-semibold font-['Poppins'] flex items-start justify-center gap-3 leading-normal"
            disabled={isLoading}
            title={!imageSrc ? 'Profile image is required' : ''}
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
            سجل
          </button>{' '}
        </form>
      </div>
    </div>
  )
};

export default Signup;
