import React, { useState } from "react";
import mobileLogo from "../../assets/logo/mobile-logo-2.svg";
import { useNavigate } from "react-router-dom";

const SubscriptionPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  const handleCheckout = () => {
    navigate("/payment-method");
  };

  return (
    <div className="h-screen">
      <div className="flex justify-center items-center mb-10 md:hidden top-0 bottom-0">
        <img src={mobileLogo} alt="mobileLogo" className="w-24 h-24" />
      </div>
      <div className="flex justify-center items-center pb-16">
        <div className="w-[428px] p-6">
          {/* Header */}
          <div className="mb-8"></div>

          {/* Subscription Plans Section */}
          <div className="mb-12">
            <h1 className="text-black text-lg font-medium font-['Poppins']">
              Subscription plans
            </h1>
            <p className="text-black text-sm font-normal font-['Poppins'] mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur.
            </p>
          </div>

          {/* Plans */}
          <div className="space-y-6 font-['Poppins']">
            {/* Plan 1 */}
            <div className={`relative cursor-pointer border-[#0083b3]`}>
              <div className="bg-[#0083b3] rounded-t-md text-white p-4 text-base font-medium">
                Choose Your Plan
              </div>
              <div className="absolute right-4 top-4 bg-[#ffb700] text-white px-2 py-1 rounded-full text-[10px] font-semibold">
                Save 75%
              </div>
              <div
                className={`p-4 border rounded-b-md ${
                  selectedPlan === "1-year-plan"
                    ? "border-[#0083b3] border-2"
                    : "border-[#0083b3]"
                }`}
                onClick={() => handlePlanClick("1-year-plan")}
              >
                <div className="text-black text-lg font-semibold">KD 10.00</div>
                <p className="text-black text-[10px] font-normal">
                  1 year. Billed yearly
                </p>
              </div>
            </div>

            {/* Plan 2 */}
            <div
              className={`relative border rounded-lg overflow-hidden cursor-pointer ${
                selectedPlan === "6-month-plan"
                  ? "border-[#0083b3] border-2"
                  : "border-[#0083b3]"
              }`}
              onClick={() => handlePlanClick("6-month-plan")}
            >
              <div className="p-4">
                <div className="text-black text-lg font-semibold">KD 6.00</div>
                <p className="text-black text-[10px] font-normal">
                  6 months. Billed yearly
                </p>
              </div>
            </div>
          </div>

          {/* Checkout Button */}
          <div className="mt-6 mb-6">
            <button
              disabled={!selectedPlan}
              className={`w-full py-3 ${
                selectedPlan
                  ? "bg-[#0083b3] text-white"
                  : "bg-gray-300 text-gray-500"
              } text-base font-semibold rounded-[40px] tracking-wider`}
              onClick={handleCheckout} // Corrected function invocation
            >
              {selectedPlan ? "Proceed to Checkout" : "Select a Plan"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
