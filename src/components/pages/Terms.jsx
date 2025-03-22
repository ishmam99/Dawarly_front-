import React from 'react'
import mobileLogo from '../../assets/logo/mobile-logo-2.svg'
import arrow from '../../assets/pictures/left-arrow.svg'
import { useNavigate } from 'react-router-dom'
const Term = () => {
    const navigate = useNavigate()
  return (
    <div className='max-w-7xl min-h-[70vh] mx-auto'>
      <div className='flex justify-end items-center p-4 mb-10 md:hidden top-0 bottom-0'>
        <div className='bg-[#0083B3] p-2 rounded-full'>
          <img
            src={arrow}
            alt='arrow'
            className=' w-5 h-5 relative overflow-hidden cursor-pointer'
            onClick={() => navigate(-1)}
          />
        </div>
      </div>
      <div className='grid lg:grid-cols-2 my-24 space-y-6'>
        {/* Left Side - Image */}
        <div className='flex justify-center'>
          <img
            src={mobileLogo}
            alt='Terms & Conditions'
            className='w-20 sm:w-48 h-full'
          />
        </div>

        {/* Right Side - Title & Paragraph */}
        <div className='flex px-5 flex-col justify-center mt-6 md:mt-0 md:pl-12 text-center md:text-left'>
          <h2 className="text-3xl text-end font-bold text-gray-800 mb-4 font-['Poppins']">
            الشروط والأحكام
          </h2>
          <p className="text-gray-600 text-end text-base leading-relaxed font-['Poppins']">
            مرحبًا بكم في تطبيق دورلي. باستخدامك لهذا التطبيق، فإنك توافق على
            الالتزام بالشروط والأحكام التالية. لا يجوز استخدام التطبيق لأي أغراض
            غير قانونية أو غير مصرح بها. نحن لا نتحمل مسؤولية أي استخدام غير
            قانوني من قبل المستخدمين.
            <br />
            <br />
            نحتفظ بالحق في تعديل هذه الشروط في أي وقت، ويكون من مسؤولية المستخدم
            مراجعتها دوريًا. استمرارك في استخدام التطبيق يعني قبولك لأي تغييرات
            تطرأ على هذه الشروط.
            <br />
            <br />
            إذا كان لديك أي استفسارات حول الشروط والأحكام، لا تتردد في مراسلتنا
            عبر الواتساب 0096555320323 أو عبر أيقونة "اتصل بنا" داخل التطبيق.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Term
