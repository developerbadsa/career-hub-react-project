import React, { useEffect, useState } from 'react';
import Job from './Job';
import { Link } from 'react-router-dom';

const Jobs = () => {

      const gradientBg = "bg-gradient-to-r from-[#7E90FE] to-[#9873FF]";

      const [jobs, setJobs] = useState([])


      useEffect(() => {
            fetch('../../../../../../public/jobs.json')
                  .then(res => res.json())
                  .then(data => setJobs(data))
      }, [])

      console.log(jobs)
      return (
            <div >
                  <div className='grid my-12 grid-cols-2 gap-8'>
                        {
                              jobs.map(job => <Job key={job.id} job={job}></Job>)
                        }
                  </div>

                  <Link className='flex justify-center my-16'><button className={`btn text-white text-center btn-md ${gradientBg}`}>See All Jobs</button></Link>
            </div>


      );
};

export default Jobs;