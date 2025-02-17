import React from "react";
import about from "../../assets/about/about.png";
import mobileLogo from "../../assets/logo/mobile-logo-2.svg";

const About = () => {
  return (
    <div className='max-w-7xl min-h-[70vh] mx-auto'>
      {/* <div className='flex justify-center items-center mb-10 md:hidden top-0 bottom-0'>
        <img src={mobileLogo} alt='mobileLogo' className='w-24 h-24' />
      </div> */}
      <div className='grid lg:grid-cols-2 my-24 space-y-6'>
        {/* Left Side - Image */}
        <div className=' flex justify-center'>
          <img
            src={mobileLogo} // Replace with your image URL
            alt='About Us'
            className='w-48 h-full'
          />
        </div>

        {/* Right Side - Title & Paragraph */}
        <div className='flex flex-col justify-center mt-6 md:mt-0 md:pl-12 text-center md:text-left'>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font-['Poppins']">
            About Our Company
          </h2>
          <p className="text-gray-600 text-base leading-relaxed font-['Poppins']">
            شركة النوافذ للدعاية والتسويق الإلكتروني . مقرها الكويت وتقوم على
            تقديم جميع خدمات الدعاية والإعلان كخدمات التصميم والطباعة وإنشاء
            المواقع الإلكترونية . ومتخصصون فى مجال التسويق والدعاية والإعلان.
            للاستفسار والتواصل واتساب 00965320323
          </p>
        </div>
      </div>
    </div>
  )
};

export default About;
