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
          <h2 className="text-3xl text-end font-bold text-gray-800 mb-4 font-['Poppins']">
            عن شركتنا
          </h2>
          <p className="text-gray-600 text-end text-base leading-relaxed font-['Poppins']">
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
      </div>
    </div>
  )
};

export default About;
