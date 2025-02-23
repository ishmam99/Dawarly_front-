import React, { useEffect, useState } from "react";
import mobileLogo from "../../assets/logo/mobile-logo-2.svg";
import { useNavigate } from "react-router-dom";
import axios from '../../api/axios'
import useAuthContext from '../../context/AuthContext'
const SubscriptionPlan = () => {
   const { user, getUser } = useAuthContext()
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loading, setLoading] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(1);
  const [paymentMethods, setPaymentMethods] = useState([])
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  const handleCheckout = () => {
    setLoading(true)
    try {
      if (!selectedPlan) {
        alert("Please select a plan.");
        return;
      }
      if (!selectedMethod) {
        alert("Please select a payment method.");
        return;
      }
     
  
      initiatePayment({
        payment_method_id: selectedMethod, // Example: 1 for KNET
        amount: selectedPlan,
        name: user.name,
        email: user.email,
        phone: user.phone,
      })
    }
    catch (error) {
      console.error('Payment initiation failed', error)
      setError('An error occurred during payment initiation.')
       setLoading(false)
    }
  };
  const fetchPaymentMethods = async () => {
    const response = await axios.get('getPaymentMethods')
    
   setPaymentMethods(response.data.Data.PaymentMethods)
  }
  const initiatePayment = async (paymentData) => {
    try {
      const response = await axios.post('/payment/initiate', paymentData)
      const { Data } = response.data

      if (Data && Data.PaymentURL) {
        window.location.href = Data.PaymentURL // Redirect to payment page
      }
      setError(response.data.ValidationErrors[0].Error)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error('Payment initiation failed', error)
    }
  }
  useEffect(() => {
    fetchPaymentMethods()
    getUser()
  }, [])  
  return (
    <div className='h-screen'>
      <div className='flex justify-center items-center mb-10 md:hidden top-0 bottom-0'>
        <img src={mobileLogo} alt='mobileLogo' className='w-24 h-24' />
      </div>
      <div className='flex justify-center items-center pb-16'>
        <div className='w-[428px] p-6'>
          {/* Header */}
          <div className='mb-8'></div>
          {/* Subscription Plans Section */}
          <div className='mb-12'>
            <h1 className="text-black text-lg font-medium font-['Poppins']">
              خطة الاشتراك
            </h1>
            <p className="text-black text-sm font-normal font-['Poppins'] mt-2">
              أهلا وسهلا بك من هنا يمكنك اختيار خطة الدفع المناسبة لك
            </p>
          </div>
          {/* Plans */}
          <div className="space-y-6 font-['Poppins']">
            {/* Plan 1 */}
            <div className={`relative cursor-pointer border-[#0083b3]`}>
              <div className='bg-[#0083b3] rounded-t-md text-white p-4 text-base font-medium'>
                Choose Your Plan
              </div>
              <div className='absolute right-4 top-4 bg-[#ffb700] text-white px-2 py-1 rounded-full text-[10px] font-semibold'>
                Save 75%
              </div>
              <div
                className={`p-4 border rounded-b-md ${
                  selectedPlan === 10
                    ? 'border-[#0083b3] border-3 bg-blue-100'
                    : 'border-[#0083b3]'
                }`}
                onClick={() => handlePlanClick(10)}
              >
                <div className='text-black text-lg font-semibold'>KD 10.00</div>
                <p className='text-black text-[10px] font-normal'>
                  1 year. Billed yearly
                </p>
              </div>
            </div>

            {/* Plan 2 */}
            <div
              className={`relative border rounded-lg overflow-hidden cursor-pointer ${
                selectedPlan === 6
                  ? 'border-[#0083b3] border-3 bg-blue-100'
                  : 'border-[#0083b3]'
              }`}
              onClick={() => handlePlanClick(6)}
            >
              <div className='p-4'>
                <div className='text-black text-lg font-semibold'>KD 6.00</div>
                <p className='text-black text-[10px] font-normal'>
                  6 months. Billed yearly
                </p>
              </div>
            </div>
          </div>
          <div className='flex py-10 w-full'>
            {paymentMethods.map((method, index) => (
              <div
                key={`payment-method-${method.id}-${index}`}
                className='flex w-full gap-2 items-center'
              >
                <input
                  type='radio'
                  name='paymentMethod'
                  value={method.PaymentMethodId}
                  checked={selectedMethod == method.PaymentMethodId}
                  onChange={(e) => setSelectedMethod(method.PaymentMethodId)}
                />

                <img
                  src={method.ImageUrl}
                  alt={method.name}
                  className='w-10 h-10'
                />
                {/* <label className='ml-2'>{method.PaymentMethodEn}</label> */}
              </div>
            ))}
          </div>{' '}
          {/* Checkout Button */}
          {error && <p className='text-red-500'>{error}</p>}
          <div className='mt-6 mb-6'>
            <button
              disabled={!selectedPlan || loading}
              className={`w-full py-3 flex items-center justify-center ${
                selectedPlan || !loading
                  ? 'bg-[#0083b3] text-white'
                  : 'bg-gray-300 text-gray-500'
              } text-base font-semibold rounded-[40px] tracking-wider`}
              onClick={handleCheckout} // Corrected function invocation
            >
              {selectedPlan ? 'Proceed to Checkout' : 'Select a Plan'}
              {loading ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='animate-spin w-5 h-5'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z'></path>
                </svg>
              ) : (
                ''
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SubscriptionPlan;
