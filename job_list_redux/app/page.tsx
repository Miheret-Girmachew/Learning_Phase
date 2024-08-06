"use client"; 

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { fetchJobs } from '../lib/api'; 
import JobCard from '../components/JobCard'; 
import { JobPost } from '../types'; 

const Page = () => {
  const [jobs, setJobs] = useState<JobPost[]>([]);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const fetchedJobs = await fetchJobs(); 
        setJobs(fetchedJobs); 
      } catch (error) {
        console.error('Failed to load jobs:', error); 
      }
    };

    loadJobs(); 
  }, []); 

  return (
    <div className="w-[80%] pl-24 py-8 font-Epilogue">
      <div className="flex justify-between">
        <div className="pl-6">
          <h1 className="text-neutral-100 text-2xl font-black font-poppins">
            Opportunities
          </h1>
          <h2 className="font-normal font-epilogue text-base text-custom-gray">
            Showing {jobs.length} results
          </h2>
        </div>

        <div className="flex items-center gap-2 pr-8">
          <p className="text-[#7C8493] cursor-pointer">
            Sort by:{" "}
            <span className="text-[#25324B] font-semibold">
              Most relevant{" "}
            </span>
          </p>
          <img className="w-4 h-4 cursor-pointer" src="/dropdown.png" alt="" />
          <p className="text-[#7C8493]"> | </p>
        </div>
      </div>

      <div>
        {jobs.length > 0 ? (
          jobs.map(job => (
            <Link 
              key={job.id} 
              href={`/jobs/${encodeURIComponent(job.id)}`} 
              passHref
            >
              <div className="flex border-solid p-6 mb-7 gap-2">
                <JobCard job={job} /> 
              </div>
            </Link>
          ))
        ) : (
          <p>No jobs available</p> 
        )}
      </div>
    </div>
  );
};

export default Page;
