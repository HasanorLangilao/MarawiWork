import React, { useState } from 'react';

const ManageJobs = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Frontend Developer', company: 'Tech Solutions', location: 'New York', salary: '$80,000 - $100,000', postedDate: '2024-08-01' },
    { id: 2, title: 'Backend Developer', company: 'Innovate Inc.', location: 'San Francisco', salary: '$90,000 - $110,000', postedDate: '2024-07-15' },
    { id: 3, title: 'UI/UX Designer', company: 'Design Co.', location: 'Los Angeles', salary: '$70,000 - $85,000', postedDate: '2024-08-10' },
    { id: 4, title: 'Project Manager', company: 'ManageIt', location: 'Chicago', salary: '$95,000 - $120,000', postedDate: '2024-08-05' },
  ]);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleDelete = (jobId) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      setJobs(jobs.filter(job => job.id !== jobId));
    }
  };

  const handleViewDetails = (job) => {
    setSelectedJob(job);
  };

  return (
    <div className="container mx-auto p-4 w-full max-w-[100rem]">
      <h1 className="text-3xl font-bold mb-6 text-center">Manage Jobs</h1>
      <div className="overflow-x-auto">
        {jobs.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="py-2 px-4 text-left text-sm md:text-base">Job Title</th>
                <th className="py-2 px-4 text-left text-sm md:text-base">Company</th>
                <th className="py-2 px-4 text-left text-sm md:text-base">Location</th>
                <th className="py-2 px-4 text-left text-sm md:text-base">Salary</th>
                <th className="py-2 px-4 text-left text-sm md:text-base">Posted Date</th>
                <th className="py-2 px-4 text-center text-sm md:text-base">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map(job => (
                <tr key={job.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4 text-sm md:text-base">{job.title}</td>
                  <td className="py-2 px-4 text-sm md:text-base">{job.company}</td>
                  <td className="py-2 px-4 text-sm md:text-base">{job.location}</td>
                  <td className="py-2 px-4 text-sm md:text-base">{job.salary}</td>
                  <td className="py-2 px-4 text-sm md:text-base">{job.postedDate}</td>
                  <td className="py-2 px-4 text-center flex justify-center space-x-2 text-sm md:text-base">
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded text-xs sm:text-sm"
                      onClick={() => handleViewDetails(job)}
                    >
                      View
                    </button>
                    <button
                      className="bg-yellow-500 text-white px-2 py-1 rounded text-xs sm:text-sm"
                      // Implement update functionality
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {selectedJob && (
        <div className="modal fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg sm:max-w-md">
            <h2 className="text-lg font-bold mb-4">Job Details</h2>
            <p><strong>Job Title:</strong> {selectedJob.title}</p>
            <p><strong>Company:</strong> {selectedJob.company}</p>
            <p><strong>Location:</strong> {selectedJob.location}</p>
            <p><strong>Salary:</strong> {selectedJob.salary}</p>
            <p><strong>Posted Date:</strong> {selectedJob.postedDate}</p>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
              onClick={() => setSelectedJob(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageJobs;
