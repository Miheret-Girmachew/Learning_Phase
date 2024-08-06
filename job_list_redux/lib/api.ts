// lib/api.ts
import { JobPost, JobPostingsProps } from '../types';

// Function to fetch a single job by its ID
export const fetchJobById = async (id: string): Promise<JobPost[]> => {
    const response = await fetch(`https://akil-backend.onrender.com/opportunities/${id}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const result: JobPostingsProps = await response.json();
    return result.data // Ensure this is the correct way to find the job
};

// Function to fetch all jobs
export const fetchJobs = async (): Promise<JobPost[]> => {
    const response = await fetch('https://akil-backend.onrender.com/opportunities/search');
    if (!response.ok) throw new Error('Network response was not ok');
    const result: JobPostingsProps = await response.json();
    return result.data; // Extracting the `data` property which is an array of JobPost
  
};
