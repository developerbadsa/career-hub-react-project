import React, { useEffect, useState } from "react";
import JobCatagory from "./JobCatagory";
import SectionTitle from "../SectionTitle/SectionTitle";

const JobCatagories = () => {
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    fetch("./../../../../public/categories.json")
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  }, []);
  return (
    <div>

{/* <div>
            <h2 className="text-5xl font-extrabold text-center mt-24">Job Category List</h2>
            <p className=" text-center my-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div> */}
      <SectionTitle title={'Job Category List'} description={'Explore thousands of job opportunities with all the information you need. Its your future'} ></SectionTitle>
      <div className="grid grid-cols-4 container mx-auto gap-12 my-16">
        {catagories.map((catagory) => (
          <JobCatagory key={catagory.id} catagory={catagory}></JobCatagory>
        ))}
      </div>
    </div>
  );
};

export default JobCatagories;
