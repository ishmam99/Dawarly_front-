import { useLocation, useNavigate ,Link } from "react-router-dom";
import img1 from "../../assets/home-product-svg/sub-categories/Group.svg";
import img2 from "../../assets/home-product-svg/sub-categories/electrical.svg";
import img3 from "../../assets/home-product-svg/sub-categories/air-conditioner.svg";
import img4 from "../../assets/home-product-svg/sub-categories/air-conditioner 2.svg";
import img5 from "../../assets/home-product-svg/sub-categories/elevator.svg";
import img6 from "../../assets/home-product-svg/sub-categories/exchange.svg";
import mobileLogo from "../../assets/logo/mobile-logo-2.svg";
import { useEffect, useState } from "react";
import axios from '../../api/axios'
const Category = () => {
  
const location = useLocation()
const navigate = useNavigate()
const [category, setCategory] = useState({ sub_categories: [] })
const electricians = Array(8).fill({
  name: 'Jhon Doe',
  description: 'Lorem Ipsum is simply dummy text.',
})
const getCategory = async () => {
  const { data } = await axios.get(location.pathname)
  setCategory(data) 
}
useEffect(() => {
  getCategory()
}, [])
  // const subCategories = [
  //   {
  //     title: "General electricity",
  //     route: "/generalElectricity",
  //     icon: img1, // Replace with actual path
  //   },
  //   {
  //     title: "Electrical appliances repair",
  //     route: "/generalElectricity",
  //     icon: img2, // Replace with actual path
  //   },
  //   {
  //     title: "Central air conditioning maintenance",
  //     route: "/generalElectricity",
  //     icon: img3, // Replace with actual path
  //   },
  //   {
  //     title: "Unit air conditioning maintenance",
  //     route: "/generalElectricity",
  //     icon: img4,
  //   },
  //   {
  //     title: "Elevator maintenance",
  //     route: "/generalElectricity",
  //     icon: img5, // Replace with actual path
  //   },
  //   {
  //     title: "Buying and selling used appliances",
  //     route: "/generalElectricity",
  //     icon: img6, // Replace with actual path
  //   },
  // ];

  return (
    <div className='min-h-[90vh] flex flex-col items-center w-full lg:my-16 bg-white '>
      <div className='flex justify-center items-center mb-6 mt-2 lg:hidden top-0 bottom-0'>
        <img src={mobileLogo} alt='mobileLogo' className='w-24 h-24' />
      </div>
      {/* Header Section */}
      <div className='text-center mb-10'>
        <div className="text-[#0083b3] md:block hidden text-2xl font-normal font-['Poppins'] uppercase leading-5 tracking-[4.76px]">
          Sub Categories
        </div>
        <div className="lg:mt-4 text-[#2c2e33] lg:text-4xl md:text-2xl text-xl md:px-0 px-4 font-semibold font-['Poppins'] md:leading-[50px]">
          {category.name}
        </div>
      </div>

      {/* Subcategories Section */}
      <div className='grid grid-cols-2 lg:grid-cols-4 lg:gap-[20px] md:gap-4 gap-2 md:mt-10 max-w-7xl lg:mx-auto md:mx-6 px-2 lg:px-4'>
        {category.sub_categories.map((categoryData, index) => (
          <Link
            to={`/subcategory/${categoryData.slug}?categoryName=${category?.name}`}
            key={index}
            className=' py-6 rounded-xl border-1 lg:px-6 md:px-4 px-2 w-full flex md:flex-col gap-2 items-center md:justify-center transition-all cursor-pointer border-[#0083b3] hover:bg-[#0083b3] group'
          >
            <div className='lg:mb-6 rounded-full flex lg:items-center lg:justify-center justify-start'>
              <img
                src={categoryData.image}
                alt={categoryData.name}
                className='lg:w-16 lg:h-16 md:w-14 md:h-14 w-12 h-10 lg:object-contain group-hover:filter group-hover:invert'
              />
            </div>
            <div className="md:text-base text-sm font-semibold lg:text-center font-['Poppins'] text-[#3a4e39] group-hover:text-white">
              {categoryData.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
};

export default Category;
