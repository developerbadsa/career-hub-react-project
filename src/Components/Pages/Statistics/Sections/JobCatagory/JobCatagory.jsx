import React from "react";

const JobCatagory = ({ catagory }) => {
  const { logo, category_name, availability } = catagory;

  return (
    <div className="bg-slate-100 p-12 rounded">
      <div className="p-4 text-left bg-slate-200 inline-block rouded my-2">
        <img src={logo} alt="" />
      </div>
      <h3 className="text-xl font-bold my-3">{category_name}</h3>
      <p className="text-slate-400">{availability}</p>
    </div>
  );
};

export default JobCatagory;
