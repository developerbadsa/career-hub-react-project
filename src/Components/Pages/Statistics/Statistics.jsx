import Header from "../../Sections/Header/Header";
import FeaturedJob from "./Sections/FeaturedJob/FeaturedJob";
import JobCatagories from "./Sections/JobCatagory/JobCatagories";

const Statistics = () => {
  return (
    <>
      <div className="bg-slate-100">
        <Header></Header>
      </div>
      <div className="container mx-auto">
        <JobCatagories></JobCatagories>
        <FeaturedJob></FeaturedJob>
      </div>
    </>
  );
};

export default Statistics;
