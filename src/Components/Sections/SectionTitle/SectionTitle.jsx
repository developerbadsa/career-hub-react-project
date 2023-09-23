import React from "react";

const SectionTitle = ({title, description}) => {
  return (
    <div>
      <h2 className="text-5xl font-extrabold text-center mt-24">
        {title}
      </h2>
      <p className=" text-center my-8">
       { description}
      </p>
    </div>
  );
};

export default SectionTitle;
