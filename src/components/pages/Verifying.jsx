import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import mobileLogo from "../../assets/logo/mobile-logo.svg";

const Verifying = () => {
  const [progress, setProgress] = useState(20); // Start at 20%
  const navigate = useNavigate(); // React Router navigation

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5; // Increase progress gradually
      });
    }, 200); // Update progress every 500ms

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        navigate("/success"); // Redirect to the signup page
      }, 500); // Small delay for smoother transition
    }
  }, [progress, navigate]);

  return (
    <div className="min-h-[90vh] flex justify-center items-center">
      <div className="">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-6 lg:mb-10 -mt-6">
          <div className="flex justify-center items-center overflow-hidden">
            <img
              src={mobileLogo}
              alt="Logo"
              className="object-contain w-28 h-28"
            />
          </div>
        </div>

        {/* Progress Section */}
        <div className="flex flex-col items-center ">
          {/* Progress Bar */}
          <div className="w-full bg-[#def1ff] rounded-full h-3 lg:h-[10px] relative mb-6 lg:mb-8">
            <div
              className="bg-[#3996d9] h-full rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Text */}
          <h2 className="text-black text-lg lg:text-2xl font-medium leading-normal font-['Poppins'] text-center">
            Dawarly User Verifying
          </h2>
          <p className="text-black text-sm lg:text-base font-normal font-['Poppins'] text-center mt-2">
            Please wait while verifying your number
          </p>
        </div>
      </div>
    </div>
  );
};

export default Verifying;
