import React from "react";

const Header = () => {
  const gradientBg = "bg-gradient-to-r from-[#7E90FE] to-[#9873FF]";
  const gradientText =
    "text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]";

  return (
    <section className="grid grid-cols-2 py-16">
      <div>
        <h1 className="text-7xl leading-[100px] font-bold">
          One Step <br /> Closer To Your <br />{" "}
          <span className={gradientText}>Dream Job</span>
        </h1>
        <p className="text-lg font-medium leading-7">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className={`btn btn-md text-white my-5 ${gradientBg}`}>
          Get Started
        </button>
      </div>
      <div>
    
      </div>
    </section>
  );
};

export default Header;
