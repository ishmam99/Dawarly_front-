import { useNavigate } from "react-router-dom";
import arrow from "../../assets/pictures/left-arrow.svg";
import { useState } from "react";

const VerificationOTP = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Move to the next input field if the current one is filled
    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-white">
      <div className=" max-w-3xl mx-auto bg-white flex flex-col px-8 py-6 space-y-2 ">
        {/* Header Section */}
        <div className="flex items-center space-x-4">
          {/* Back Arrow */}
          <div className="bg-[#0083B3] p-2 rounded-full">
            <img
              src={arrow}
              alt="arrow"
              className=" w-5 h-5 relative overflow-hidden cursor-pointer"
              onClick={() => navigate(-1)}
            />
          </div>

          {/* Verification Text */}
          <h1 className="text-[#161616] text-xl font-bold font-['Poppins']">
            Verification
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-neutral-500 mt-2 text-sm font-normal font-['Poppins'] leading-snug">
          We send you a code to verify your <br />
          mobile number.
        </p>

        <div className="space-y-4">
          {/* Enter OTP Text */}
          <h2 className="text-[#161616] text-lg font-bold font-['Poppins']">
            Enter your OTP code here
          </h2>

          {/* OTP Input */}
          <div className="flex space-x-4">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-16 h-16 border-2 border-[#0083b3] text-center text-gray-400 text-xl font-bold rounded focus:outline-none focus:ring-2 focus:ring-[#0083b3]"
              />
            ))}
          </div>
          <div className="">
            <button
              className="px-4 py-2 w-[310px] bg-[#0083b3] rounded-full text-white text-xl font-medium font-['Poppins']"
              onClick={() => navigate("/verifying")} // Navigate to /verifying
            >
              Continue
            </button>
          </div>
        </div>

        {/* Resend Section */}
        <p className="text-neutral-500 text-sm font-normal text-center font-['Poppins']">
          I don’t receive a code
        </p>
        <button className="text-[#0083b3] text-base font-semibold font-['Poppins']">
          RESEND
        </button>
      </div>
    </div>
  );
};

export default VerificationOTP;
