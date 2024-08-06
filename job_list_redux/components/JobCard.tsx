import { JobPost } from '../types';

interface JobCardProps {
  job: JobPost;
}

const parseDate = (date: string | Date | undefined): string => {
  if (!date) return 'N/A';

  const parsedDate = typeof date === 'string' ? new Date(date) : date;

  return !isNaN(parsedDate.getTime()) ? parsedDate.toDateString() : 'Invalid Date';
};

const JobCard = ({ job }: JobCardProps) => {
  const formattedDatePosted = parseDate(job.datePosted);
  
  const location = job.location?.length ? job.location.join(', ') : 'Location not specified';
  const description = job.description || 'Description not available';
  
  return (
    <div className="border border-solid border-custom-border rounded-3xl p-6 flex gap-4 w-3/5 ">
      {job.logoUrl ? (
        <img src={job.logoUrl} alt={`${job.orgName} logo`} className="h-12 w-12" />
      ) : (
        <div className="h-12 w-12 flex items-center justify-center border border-gray rounded-full text-gray-500">
          No Logo
        </div>
      )}
      
      <div>
        <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
        <div className="flex items-center text-gray-500 mb-4">
          <span>{job.orgName}</span>
          <span className="mx-2">•</span>
          <span>{location}</span>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        
        <div className="flex gap-3 mt-2">
          <button className="bg-green-100 w-auto rounded-full text-green-400 border border-green-400 h-8 px-4">
            In person
          </button>
          <button className="w-auto rounded-full text-orange-400 border border-orange-400 h-8 px-4">
            Education
          </button>
          <button className="w-auto rounded-full text-Slate-Blue border border-Slate-Blue h-8 px-4">
            IT
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
