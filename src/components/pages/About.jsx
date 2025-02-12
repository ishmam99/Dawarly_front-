import React from "react";
import about from "../../assets/about/about.png";
import mobileLogo from "../../assets/logo/mobile-logo-2.svg";

const About = () => {
  return (
    <div className="max-w-7xl min-h-[70vh] mx-auto">
      <div className="flex justify-center items-center mb-10 md:hidden top-0 bottom-0">
        <img src={mobileLogo} alt="mobileLogo" className="w-24 h-24" />
      </div>
      <div className="grid lg:grid-cols-2 my-24 space-y-6">
        {/* Left Side - Image */}
        <div className=" flex justify-center">
          <img
            src={about} // Replace with your image URL
            alt="About Us"
            className=""
          />
        </div>

        {/* Right Side - Title & Paragraph */}
        <div className="flex flex-col justify-center mt-6 md:mt-0 md:pl-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font-['Poppins']">
            About Our Company
          </h2>
          <p className="text-gray-600 text-base leading-relaxed font-['Poppins']">
            We are dedicated to providing top-notch services and innovative
            solutions. Our team works tirelessly to ensure customer satisfaction
            and deliver high-quality products that exceed expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
