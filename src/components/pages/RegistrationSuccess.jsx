import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationSuccess = () => {
  const navigate = useNavigate(); // React Router navigation

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/subscription-plan"); // Redirect to the signup page after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [navigate]);
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center p-8 bg-white rounded-lg max-w-sm">
          <h1 className="text-2xl font-bold text-black mb-4">Success!</h1>
          <p className="text-lg font-semibold text-gray-800">
            Thanks for Registration
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet,
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
