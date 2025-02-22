import React from "react";
import logo from "../../assets/logo/logo.svg";
import location from "../../assets/pictures/location.svg";
import call from "../../assets/pictures/call.svg";
import mail from "../../assets/pictures/mail.svg";
import whatsapp from "../../assets/pictures/whatsapp.svg";
import instagram from "../../assets/pictures/instragram.svg";
import facebook from "../../assets/logo/apple.svg";
import twieter from "../../assets/logo/play.svg";
import youtube from "../../assets/pictures/youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-6 font-['Poppins'] hidden lg:block">
      <div className='max-w-7xl mx-auto grid md:grid-cols-4 gap-6 space-y-6'>
        {/* Left Section */}
        <div className=' '>
          <div className='flex lg:justify-start items-center mb-4 '>
            <img src={logo} alt='Dawarly Logo' />
          </div>
          <p className='text-gray-600 text-sm max-w-sm'>
            شركة النوافذ للدعاية والتسويق الإكتروني . مقرها الكويت وتقوم على
            تقديم جميع خدمات الدعاية والإعلان كخدمات التصميم والطباعة وإنشاء
            المواقع الإكترونية . ومتخصصون في مجال التسويق والدعاية الاعلان .
            يسرنا أن نضع بين ايديكم تطبيقنا الأول ( دورلي ) والذي يتضمن العديد
            من أرقام هواتف العمالة الفنية و الحرفية و الخدمات التي نحتاجها
            دائمًا . قد لا يكون هذا العمل كاملاً والكمال لله وحده فإن وجدتم بعض
            الأخطاء أو القصور فلا تترددوا بمراسلتنا وتنبيهنا بذلك ونأمل منكم
            التعاون معنا حتى نحوز على رضاكم التام وشكرًا جزيلا لكم للتواصل
            والاستفسار يرجى مراسلتنا على الواتساب 0096555320323 أو استخدام
            أيقونة اتصل بنا .
          </p>
        </div>

        {/* Center Section */}
        <div className='col-span-2 flex md:justify-center'>
          <div className=''>
            <h4 className='text-gray-800 font-semibold mb-4'>
              Contacts and Location
            </h4>
            <p className='text-gray-600 text-sm flex justify-start items-center mb-4'>
              <img src={location} alt='Address Icon' className='mr-3 w-5 h-5' />
              Jahra - Saadalbdullah block 3
            </p>
            <p className='text-gray-600 text-sm flex justify-start items-center mb-4'>
              <img src={call} alt='Phone Icon' className='mr-3 w-5 h-5' />
              0096556320323
            </p>
            {/* <p className='text-gray-600 text-sm flex justify-center lg:justify-start items-center mb-4'>
              <img src={mail} alt='Email Icon' className='mr-3 w-5 h-5' />
              username@domain.com
            </p> */}
          </div>
        </div>

        {/* Right Section */}
        <div className='flex md:justify-center'>
          <div>
            <h4 className='text-gray-800 font-semibold mb-4'>Social Links</h4>
            <div className='flex justify-center lg:justify-start space-x-4'>
              <a
                href='whatsapp://send?text=0096556320323'
                className='w-10 h-10 bg-[#D9D9D9] rounded-full flex items-center justify-center'
              >
                <img src={whatsapp} alt='WhatsApp' className='w-6 h-6' />
              </a>
              {/* <a
                href='#'
                className='w-10 h-10 bg-[#D9D9D9] rounded-full flex items-center justify-center'
              >
                <img src={instagram} alt='Instagram' className='w-6 h-6' />
              </a>
              <a
                href='#'
                className='w-10 h-10 bg-[#D9D9D9] rounded-full flex items-center justify-center'
              >
                <img src={facebook} alt='Facebook' className='w-6 h-6' />
              </a> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 max-w-7xl mx-auto border-t border-gray-200 py-4 font-['Poppins']">
        <div className='md:flex justify-between'>
          {/* Left Side Text */}
          <div className="text-[#222222] md:text-lg text-center font-semibold leading-normal font-['Poppins']">
            &copy; 2025 Dawarly. All Rights are Reserved
          </div>

          {/* Right Side Social Icons */}
          <div className='flex justify-center space-x-4'>
            <a
              href='#'
              className='w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:border-gray-500'
            >
              <img src={facebook} alt='Facebook' className='w-5 h-5' />
            </a>
            <a
              href='#'
              className='w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:border-gray-500'
            >
              <img src={twieter} alt='Twitter' className='w-5 h-5' />
            </a>
            {/* <a
              href='#'
              className='w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:border-gray-500'
            >
              <img src={youtube} alt='YouTube' className='w-5 h-5' />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
