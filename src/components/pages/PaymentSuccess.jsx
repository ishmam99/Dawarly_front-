import React from "react";

const PaymentSuccess = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#f3f7fa]">
      <div className="flex flex-col items-center px-8 py-6 space-y-6">
        {/* Header Section */}
        <h1 className="text-black text-2xl font-semibold ]">
          Payment Success!
        </h1>

        {/* Icon Section */}
        <div className="w-[58px] h-[58px] p-[9px] rounded-full border-2 border-[#0083b3] flex justify-center items-center">
          <div className="w-10 h-10 flex justify-center items-center">
            {/* Add your checkmark icon or svg here */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#0083b3"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Thanks Message */}
        <p className="text-black text-base font-medium leading-normal text-center">
          Thanks for your Payment
        </p>

        {/* Subtext */}
        <p className="text-[#545454] text-base font-normal text-center max-w-[292px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet,
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
