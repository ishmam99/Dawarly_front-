const Features = () => {
  return (
    <div className="max-w-7xl lg:mx-auto my-10 mx-10 lg:px-4 py-10 hidden lg:block">
      <div className="md:flex justify-between space-y-6">
        {/* Left Section */}
        <div className="space-y-6">
          <div className="text-[#0083b3] text-[18px] font-['Poppins'] lg:text-[22px] font-bold  uppercase leading-6 lg:leading-7 tracking-[3px] lg:tracking-[5.28px]">
            Categories
          </div>
          <div className="text-[#2c2e33] text-3xl lg:text-5xl font-semibold  leading-[40px] lg:leading-[50px] font-['Poppins']">
            Professional <br /> Main Services
          </div>
        </div>

        {/* Right Section */}
        <div className="md:px-2 space-y-6">
          <div className="text-black text-lg font-normal font-['Poppins']">
            Borem ipsum dolor sit amet, consectetur
            <br /> adipiscing elit. Nunc vulputate libero
          </div>
          <div className="md:flex items-center justify-end">
            <button className="text-center text-white bg-[#0083b3]  px-8 py-2 rounded-full  text-base font-medium font-['Poppins']">
              View all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
