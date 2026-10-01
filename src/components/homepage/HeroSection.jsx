const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 px-2 md:px-5 ">
      <h2 className="text-5xl font-bold text-center">
        Friends to keep close in your life
      </h2>
      <p className="text-[#64748bFF] text-center">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br /> relationships that matter most.
      </p>
      <button className="btn bg-[#244d3fFF] text-white">+ Add a Friend</button>
      {/* card-section */}
      <div className="grid md:grid-cols-4 grid-cols-2 gap-2 md:gap-6 md:mt-5">
        <div className="flex flex-col justify-center items-center gap-2 shadow-lg p-8">
          <h5 className="text-[#244d3fFF] font-semibold text-3xl">10</h5>
          <p className="text-[#64748bFF]">Total Friends</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 shadow-lg p-8">
          <h5 className="text-[#244d3fFF] font-semibold text-3xl">3</h5>
          <p className="text-[#64748bFF]">On Track</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 shadow-lg p-8">
          <h5 className="text-[#244d3fFF] font-semibold text-3xl">6</h5>
          <p className="text-[#64748bFF] text-center">Need Attention</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 shadow-lg p-8">
          <h5 className="text-[#244d3fFF] font-semibold text-3xl">12</h5>
          <p className="text-[#64748bFF] text-center">
            Interactions This Month
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
