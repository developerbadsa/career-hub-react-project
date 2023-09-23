import React, { useEffect, useState } from 'react';
import Job from './Job';

const Jobs = () => {

const [jobs, setJobs] = useState([])


useEffect(()=>{
      fetch('../../../../../../public/jobs.json')
      .then(res=>res.json())
      .then(data=>setJobs(data))
},[])

console.log(jobs)
      return (
            <div className='grid grid-cols-2 gap-8'>
                  {
                        jobs.map(job=><Job key={job.id} job={job}></Job>)
                  }
            </div>
      );
};

export default Jobs;