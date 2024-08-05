// // app/jobs/page.tsx
// import { useEffect, useState } from 'react';
// import { fetchJobs } from '../../lib/api';
// import JobCard from '../../components/JobCard';
// import { Job } from '../../types';

// const JobsPage = () => {
//   const [jobs, setJobs] = useState<Job[]>([]); // Specify the type here

//   useEffect(() => {
//     const loadJobs = async () => {
//       const data = await fetchJobs();
//       setJobs(data);
//     };
//     loadJobs();
//   }, []);

//   return (
//     <div>
//       <h1>Job Listings</h1>
//       <div>
//         {jobs.map((job) => (
//           <JobCard key={job._id} job={job} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobsPage;
