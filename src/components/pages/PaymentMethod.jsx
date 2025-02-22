// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const PaymentMethod = () => {
//   const [selectedMethod, setSelectedMethod] = useState("Knet");
//   const navigate = useNavigate();

//   const handlePayment = () => {
//     navigate("/paymentSuccess");
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-[#f3f7fa]">
//       <div className="w-[428px] flex flex-col items-start px-8 py-6">
//         {/* Header Section */}
//         <div className="flex items-center space-x-4 mb-6">
//           <img
//             src="/src/assets/Electricity, Air conditioning and Elevators/back arrow.svg"
//             alt="Back"
//           />
//           <h1 className="text-black text-lg font-medium font-['Poppins']">
//             Payment Method
//           </h1>
//         </div>

//         {/* Payment Methods */}
//         <div className="space-y-6 mb-12 w-full ">
//           {/* Knet Option */}
//           <div
//             className={`flex items-center justify-between w-full p-4 rounded-[3px] border cursor-pointer ${
//               selectedMethod === "Knet"
//                 ? "border-[#0083b3]"
//                 : "border-[#dfdfdf]"
//             }`}
//             onClick={() => setSelectedMethod("Knet")}
//           >
//             <div className="flex items-center space-x-4">
//               <div className="w-[35px] h-[29px] bg-[#d9d9d9] rounded-sm border border-[#b8b8b8]"></div>
//               <div>
//                 <h2 className="text-[#161616] text-xs font-medium  leading-[21px]">
//                   Knet
//                 </h2>
//                 <p className="text-neutral-500 text-[10px] font-normal font-['Poppins'] leading-[21px]">
//                   Accepts all local Cards
//                 </p>
//               </div>
//             </div>
//             <div className="w-4 h-4 rounded-full border border-[#0083b3] flex justify-center items-center">
//               {selectedMethod === "Knet" && (
//                 <div className="w-2.5 h-2.5 bg-[#0083b3] rounded-full"></div>
//               )}
//             </div>
//           </div>

//           {/* Apple Pay Option */}
//           <div
//             className={`flex items-center justify-between w-full p-4 rounded-[3px] border cursor-pointer ${
//               selectedMethod === "Apple Pay"
//                 ? "border-[#0083b3]"
//                 : "border-[#dfdfdf]"
//             }`}
//             onClick={() => setSelectedMethod("Apple Pay")}
//           >
//             <div className="flex items-center space-x-4">
//               <div className="w-[35px] h-[29px] bg-[#d9d9d9] rounded-sm border border-[#b8b8b8]"></div>
//               <div>
//                 <h2 className="text-[#161616] text-xs font-medium  leading-[21px]">
//                   Apple Pay
//                 </h2>
//                 <p className="text-neutral-500 text-[10px] font-normal font-['Poppins'] leading-[21px]">
//                   Accepts all Debit & Credit Cards
//                 </p>
//               </div>
//             </div>
//             <div className="w-4 h-4 rounded-full border border-[#0083b3] flex justify-center items-center">
//               {selectedMethod === "Apple Pay" && (
//                 <div className="w-2.5 h-2.5 bg-[#0083b3] rounded-full"></div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="w-full border-t border-[#c4c4c4] mb-12"></div>

//         {/* Pay Button */}
//         <button
//           onClick={handlePayment}
//           className="w-full h-14 bg-[#0083b3] rounded-[30px] text-white text-xl font-medium font-['Poppins']"
//         >
//           Pay
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaymentMethod;import React, { useEffect } from "react";
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const PaymentMethod = () => {
  const location = useLocation()
  const { plan } = location.state || {}

  useEffect(() => {
    if (!plan) return

    const sessionId = '465be64b-0197-4eac-8fb7-b8323873b3c2' // Replace with your session ID
    const countryCode = 'KWT'
    const currencyCode = 'KWD'
    const amount = plan.price.replace('KD ', '') // Extract amount from plan price

    const config = {
      sessionId: sessionId,
      countryCode: countryCode,
      currencyCode: currencyCode,
      amount: amount,
      callback: payment,
      containerId: 'unified-session',
      paymentOptions: ['GooglePay', 'ApplePay', 'STCPay', 'Card'],
      supportedNetworks: ['visa', 'masterCard', 'mada', 'amex'],
      language: 'en',
      settings: {
        stcPay: {
          mobileNumber: '0557877988', // Replace with user's mobile number
          useCustomButton: false,
          sessionStarted: stcSessionStarted,
          style: {
            frameHeight: '40px',
            frameWidth: '100%',
          },
        },
      },
    }

    // Initialize the payment
    if (window.myfatoorah) {
      window.myfatoorah.init(config)
    }

    // Payment callback function
    function payment(response) {
      if (response.isSuccess) {
        console.log('Payment Successful:', response)
      } else {
        console.log('Payment Failed:', response)
      }
    }

    // STC Pay session started
    function stcSessionStarted(data) {
      console.log('STC Session Started:', data)
    }
  }, [plan])

  if (!plan) {
    return <div>No plan selected. Please go back and select a plan.</div>
  }

  return (
    <div style={{ backgroundColor: 'white', padding: '20px' }}>
      <div style={{ width: '400px', margin: 'auto' }}>
        <div id='unified-session'></div>
      </div>
      <div style={{ width: '400px', margin: 'auto' }}>
        <div id='apple-pay'></div>
      </div>
      <div
        style={{
          width: '400px',
          margin: '0',
          position: 'absolute',
          top: '0',
          left: '0',
        }}
      >
        <div id='google-pay'></div>
      </div>
      <div
        style={{
          width: '400px',
          margin: '0',
          position: 'absolute',
          top: '0',
          left: '0',
        }}
      >
        <div id='stc-pay'></div>
      </div>
    </div>
  )
}

export default PaymentMethod