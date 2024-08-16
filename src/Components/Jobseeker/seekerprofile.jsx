import React, { useState, useRef } from 'react';
import { FaCamera, FaEnvelope, FaPhone, FaCalendarAlt, FaTrash, FaKey } from 'react-icons/fa'; // Import icons
import './../../index.css'; // Import CSS file for styling

const SeekerProfile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [contactNumber, setContactNumber] = useState("123-456-7890");
  const [dateJoined] = useState("January 1, 2023");
  const [skills, setSkills] = useState(["JavaScript", "React", "Node.js"]);
  const [isEditing, setIsEditing] = useState(false);
  const [newSkills, setNewSkills] = useState(skills.join(", ")); // State for editable skills
  const [resume, setResume] = useState(null); // State for resume

  const fileInputRef = useRef(null);
  const resumeInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file.name); // Storing file name or process file as needed
    }
  };

  const triggerResumeInput = () => {
    resumeInputRef.current.click();
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedSkills = newSkills.split(',').map(skill => skill.trim()).filter(skill => skill.length > 0);
    setSkills(updatedSkills);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewSkills(skills.join(", "));
  };

  const handleSkillsChange = (e) => {
    setNewSkills(e.target.value);
  };

  const handleDeleteAccount = () => {
    // Add your delete account logic here
    alert('Account deleted');
  };

  const handleChangePassword = () => {
    // Add your change password logic here
    alert('Change password');
  };

  return (
    // Profile Wrapper
    <div className="flex flex-col justify-center items-center min-h-screen p-5 mb-0">
      {/* Profile Box */}
      <div className="mt-[-190px] w-full max-w-screen-lg p-7 bg-white rounded-lg shadow-md flex flex-col items-center">
        {/* Profile Container */}
        <div className="flex flex-col md:flex-row w-full mb-10">
          {/* Profile Left */}
          <div className="mt-[100px] flex flex-col items-center w-full">
            <h2 className="mt-0 mb-5 text-3xl">My Profile</h2>
            {/* Profile Picture Container */}
            <div className="relative flex flex-col items-center">
              <img 
                src={profilePic || "https://via.placeholder.com/150"} 
                alt="Profile" 
                className="w-48 h-48 rounded-full object-cover mb-2" 
              />
              <FaCamera className="text-2xl text-customGray cursor-pointer absolute bottom-2 right-2 transition-colors hover:text-gray-600" onClick={triggerFileInput} />
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload} 
                className="hidden" 
                ref={fileInputRef}
              />
            </div>
            {!isEditing ? (
              <>
                <button className="py-2 px-5 bg-customGray text-white rounded-md cursor-pointer mt-2 hover:bg-gray-600" onClick={handleEditClick}>Edit Profile</button>
                <button className="py-2 px-5 bg-blue-600 text-white rounded-md cursor-pointer mt-2 hover:bg-blue-700" onClick={triggerResumeInput}>Upload Resume</button>
                <input 
                  type="file" 
                  accept=".pdf,.doc,.docx" 
                  onChange={handleResumeUpload} 
                  className="hidden" 
                  ref={resumeInputRef}
                />
                {resume && <p className="mt-2 text-green-600">Resume: {resume}</p>}
              </>
            ) : (
              <>
                <button className="py-2 px-5 bg-gray-600 text-white rounded-md cursor-pointer mt-2 hover:bg-gray-700" onClick={handleSave}>Save</button>
                <button className="py-2 px-5 bg-gray-600 text-white rounded-md cursor-pointer mt-2 hover:bg-gray-700" onClick={handleCancel}>Cancel</button>
              </>
            )}
          </div>
          {/* Profile Right */}
          <div className="mt-32 pl-5 w-full">
            <div className="flex flex-col items-start w-full">
              {!isEditing ? (
                <>
                  <h3 className="text-2xl mb-2">{fullName}</h3>
                  <p className="text-xl mb-2 flex items-center"><FaEnvelope className="mr-2 text-lg" /> {email}</p>
                  <p className="text-xl mb-2 flex items-center"><FaPhone className="mr-2 text-lg" /> {contactNumber}</p>
                  <p className="text-xl mb-2 flex items-center"><FaCalendarAlt className="mr-2 text-lg" /> Date Joined: {dateJoined}</p>
                  <p className="text-xl mb-2">Skills: {skills.join(", ")}</p>
                </>
              ) : (
                <div className="flex flex-col">
                  <label className="mb-2 font-bold">
                    Full Name:
                    <input 
                      type="text" 
                      value={fullName} 
                      onChange={(e) => setFullName(e.target.value)} 
                      className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                    />
                  </label>
                  <label className="mb-2 font-bold">
                    Email:
                    <input 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                    />
                  </label>
                  <label className="mb-2 font-bold">
                    Contact Number:
                    <input 
                      type="text" 
                      value={contactNumber} 
                      onChange={(e) => setContactNumber(e.target.value)} 
                      className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                    />
                  </label>
                  <label className="mb-2 font-bold">
                    Skills:
                    <input 
                      type="text" 
                      value={newSkills} 
                      onChange={handleSkillsChange} 
                      className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                    />
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Profile Actions */}
        <div className="mt-5 flex flex-col items-center w-full">
          <button className="py-2 px-5 bg-gray-600 text-white rounded-md cursor-pointer mb-2 hover:bg-gray-700" onClick={handleDeleteAccount}>Delete Account</button>
          <button className="py-2 px-5 bg-blue-600 text-white rounded-md cursor-pointer mb-2 hover:bg-blue-700" onClick={handleChangePassword}>Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default SeekerProfile;
