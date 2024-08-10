import React, { useState } from 'react';

const PostJob = () => {
    const [description, setDescription] = useState('');

    const handleDescriptionChange = (e) => {
        if (e.target.value.length <= 1000) {
            setDescription(e.target.value);
        }
    };

    return (
        <div className="flex justify-center p-5">
            <form className="w-full max-w-5xl bg-gray-100 p-8 rounded-lg shadow-md">
                <div className="flex justify-between mb-5">
                    <div className="flex flex-col gap-5 w-1/2">
                        <div className="flex flex-col">
                            <label className="text-sm font-bold mb-1">Job Title</label>
                            <input type="text" name="jobTitle" required className="p-2 border border-gray-300 rounded-md text-base w-full" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-bold mb-1">Salary</label>
                            <input type="text" name="salary" required className="p-2 border border-gray-300 rounded-md text-base w-full" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-bold mb-1">Salary Type</label>
                            <input type="text" name="salaryType" required className="p-2 border border-gray-300 rounded-md text-base w-full" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 w-1/2">
                        <div className="flex flex-col">
                            <label className="text-sm font-bold mb-1">Company Name</label>
                            <input type="text" name="companyName" required className="p-2 border border-gray-300 rounded-md text-base w-full" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-bold mb-1">Job Location</label>
                            <input type="text" name="jobLocation" required className="p-2 border border-gray-300 rounded-md text-base w-full" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-bold mb-1">Job Posting Date</label>
                            <input type="date" name="postingDate" required className="p-2 border border-gray-300 rounded-md text-base w-full" />
                        </div>
                    </div>
                </div>
                <div className="mb-5 flex flex-col">
                    <label className="text-sm font-bold mb-1">Required Skills</label>
                    <input type="text" name="requiredSkills" required className="p-2 border border-gray-300 rounded-md text-base w-full" />
                </div>
                <div className="flex gap-5 mb-5">
                    <div className="flex flex-col w-1/2">
                        <label className="text-sm font-bold mb-1">Company Logo</label>
                        <input type="file" name="companyLogo" accept="image/*" required className="p-2 border border-gray-300 rounded-md text-base" />
                    </div>
                    <div className="flex flex-col w-1/2">
                        <label className="text-sm font-bold mb-1">Employment Type</label>
                        <select name="employmentType" required className="p-2 border border-gray-300 rounded-md text-base w-full">
                            <option value="full-time">Full Time</option>
                            <option value="part-time">Part Time</option>
                        </select>
                    </div>
                </div>
                <div className="mb-5 flex flex-col">
                    <label className="text-sm font-bold mb-1">Job Description</label>
                    <textarea 
                        name="jobDescription" 
                        value={description}
                        onChange={handleDescriptionChange}
                        rows="5" 
                        required 
                        className="p-2 border border-gray-300 rounded-md text-base w-full resize-none" 
                    />
                    <small className="text-gray-600">{1000 - description.length} characters remaining</small>
                </div>
                <div className="mb-5 flex flex-col">
                    <label className="text-sm font-bold mb-1">Posted by</label>
                    <input type="email" name="postedBy" required className="p-2 border border-gray-300 rounded-md text-base w-full" />
                </div>
                <button type="submit" className="w-full bg-[#272525] text-white py-3 rounded-md text-base cursor-pointer transition-colors duration-300 hover:bg-[#404545]">
                    Create Job
                </button>
            </form>
        </div>
    );
};

export default PostJob;
