import React, { useState, useRef } from 'react';
import { FaCamera, FaEnvelope, FaPhone, FaCalendarAlt, FaTrash, FaKey } from 'react-icons/fa';
import './../../index.css';

const empprofile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [companyName, setCompanyName] = useState("Tech Corp");
  const [email, setEmail] = useState("techcorp@example.com");
  const [contactNumber, setContactNumber] = useState("123-456-7890");
  const [dateJoined] = useState("January 1, 2023");
  const [companyDescription, setCompanyDescription] = useState("A leading tech company specializing in innovative solutions.");
  const [isEditing, setIsEditing] = useState(false);
  const [newCompanyDescription, setNewCompanyDescription] = useState(companyDescription);

  const fileInputRef = useRef(null);

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

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setCompanyDescription(newCompanyDescription);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewCompanyDescription(companyDescription);
  };

  const handleCompanyDescriptionChange = (e) => {
    setNewCompanyDescription(e.target.value);
  };

  const handleDeleteAccount = () => {
    alert('Account deleted');
  };

  const handleChangePassword = () => {
    alert('Change password');
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-5 mb-0">
      <div className="mt-[-190px] w-full max-w-screen-lg p-7 bg-white rounded-lg shadow-md flex flex-col items-center">
        <div className="flex flex-col md:flex-row w-full mb-10">
          <div className="mt-[100px] flex flex-col items-center w-full">
            <h2 className="mt-0 mb-5 text-3xl">My Profile</h2>
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
              <button className="py-2 px-5 bg-customGray text-white rounded-md cursor-pointer mt-2 hover:bg-gray-600" onClick={handleEditClick}>Edit Profile</button>
            ) : (
              <>
                <button className="py-2 px-5 bg-gray-600 text-white rounded-md cursor-pointer mt-2 hover:bg-gray-700" onClick={handleSave}>Save</button>
                <button className="py-2 px-5 bg-gray-600 text-white rounded-md cursor-pointer mt-2 hover:bg-gray-700" onClick={handleCancel}>Cancel</button>
              </>
            )}
          </div>
          <div className="mt-32 pl-5 w-full">
            <div className="flex flex-col items-start w-full">
              {!isEditing ? (
                <>
                  <h3 className="text-2xl mb-2">{companyName}</h3>
                  <p className="text-xl mb-2 flex items-center"><FaEnvelope className="mr-2 text-lg" /> {email}</p>
                  <p className="text-xl mb-2 flex items-center"><FaPhone className="mr-2 text-lg" /> {contactNumber}</p>
                  <p className="text-xl mb-2 flex items-center"><FaCalendarAlt className="mr-2 text-lg" /> Date Joined: {dateJoined}</p>
                  <p className="text-xl mb-2">Company Description: {companyDescription}</p>
                </>
              ) : (
                <div className="flex flex-col">
                  <label className="mb-2 font-bold">
                    Company Name:
                    <input 
                      type="text" 
                      value={companyName} 
                      onChange={(e) => setCompanyName(e.target.value)} 
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
                    Company Description:
                    <input 
                      type="text" 
                      value={newCompanyDescription} 
                      onChange={handleCompanyDescriptionChange} 
                      className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                    />
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-col items-center w-full">
          <button className="py-2 px-5 bg-gray-600 text-white rounded-md cursor-pointer mb-2 hover:bg-gray-700" onClick={handleDeleteAccount}>Delete Account</button>
          <button className="py-2 px-5 bg-blue-600 text-white rounded-md cursor-pointer mb-2 hover:bg-blue-700" onClick={handleChangePassword}>Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default empprofile;
