// src/Components/MyApplications.js

import React, { useState, useEffect } from 'react';
import './jobseeker.css';

function applications() {
  const [applications, setApplications] = useState([
    {
      id: 1,
      jobTitle: 'Software Engineer',
      companyName: 'ABC Corporation',
      applicationDate: '2023-03-01T10:00:00.000Z',
      status: 'Applied',
    },
    {
      id: 2,
      jobTitle: 'Data Scientist',
      companyName: 'DEF Startups',
      applicationDate: '2023-03-02T11:00:00.000Z',
      status: 'Interview Scheduled',
    },
    {
      id: 3,
      jobTitle: 'Product Manager',
      companyName: 'GHI Inc.',
      applicationDate: '2023-03-03T12:00:00.000Z',
      status: 'Rejected',
    },
  ]);

  const [filteredApplications, setFilteredApplications] = useState(applications);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    const filtered = applications.filter((application) => {
      const searchTermMatch = application.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) || application.companyName.toLowerCase().includes(searchTerm.toLowerCase());
      const statusFilterMatch = statusFilter === 'all' || application.status === statusFilter;
      return searchTermMatch && statusFilterMatch;
    });
    setFilteredApplications(filtered);
  }, [searchTerm, statusFilter, applications]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleStatusFilter = (event) => {
    setStatusFilter(event.target.value);
  };

  return (
    <div className="my-applications-container">
      <h1>My Applications</h1>
      <div className="search-filter-container">
        <input type="search" value={searchTerm} onChange={handleSearch} placeholder="Search by job title or company name" />
        <select value={statusFilter} onChange={handleStatusFilter}>
          <option value="all">All</option>
          <option value="Applied">Applied</option>
          <option value="Interview Scheduled">Interview Scheduled</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
      <ul className="applications-list">
        {filteredApplications.map((application) => (
          <li key={application.id}>
            <div className="application-content">
              <h2>{application.jobTitle}</h2>
              <p>Company: {application.companyName}</p>
              <p>Application Date: {new Date(application.applicationDate).toLocaleString()}</p>
              <p>Status: {application.status}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default applications;