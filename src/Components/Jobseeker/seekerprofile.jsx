import React, { useState, useRef } from 'react';
import { FaCamera, FaEnvelope, FaPhone, FaCalendarAlt, FaTrash, FaKey } from 'react-icons/fa'; // Import icons
import './jobseeker.css'; // Import CSS file for styling

const SeekerProfile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [contactNumber, setContactNumber] = useState("123-456-7890");
  const [dateJoined] = useState("January 1, 2023");
  const [skills, setSkills] = useState(["JavaScript", "React", "Node.js"]);
  const [isEditing, setIsEditing] = useState(false);
  const [newSkills, setNewSkills] = useState(skills.join(", ")); // State for editable skills

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
    <div className="profile-wrapper">
      <div className="profile-box">
        <div className="profile-container">
          <div className="profile-left">
            <h2>My Profile</h2>
            <div className="profile-pic-container">
              <img 
                src={profilePic || "https://via.placeholder.com/150"} 
                alt="Profile" 
                className="profile-pic" 
              />
              <FaCamera className="camera-icon" onClick={triggerFileInput} />
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload} 
                className="file-input"
                ref={fileInputRef}
              />
            </div>
            {!isEditing ? (
              <button className="edit-profile-btn" onClick={handleEditClick}>Edit Profile</button>
            ) : (
              <>
                <button className="save-profile-btn" onClick={handleSave}>Save</button>
                <button className="cancel-profile-btn" onClick={handleCancel}>Cancel</button>
              </>
            )}
          </div>
          <div className="profile-right">
            <div className="profile-content">
              {!isEditing ? (
                <>
                  <h3>{fullName}</h3>
                  <p><FaEnvelope /> {email}</p>
                  <p><FaPhone /> {contactNumber}</p>
                  <p><FaCalendarAlt /> Date Joined: {dateJoined}</p>
                  <p>Skills: {skills.join(", ")}</p>
                </>
              ) : (
                <div className="edit-form">
                  <label>
                    Full Name:
                    <input 
                      type="text" 
                      value={fullName} 
                      onChange={(e) => setFullName(e.target.value)} 
                    />
                  </label>
                  <label>
                    Email:
                    <input 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                  </label>
                  <label>
                    Contact Number:
                    <input 
                      type="text" 
                      value={contactNumber} 
                      onChange={(e) => setContactNumber(e.target.value)} 
                    />
                  </label>
                  <label>
                    Skills:
                    <input 
                      type="text" 
                      value={newSkills} 
                      onChange={handleSkillsChange} 
                    />
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="profile-actions">
          <button className="delete-account-btn" onClick={handleDeleteAccount}>Delete Account</button>
          <button className="change-password-btn" onClick={handleChangePassword}>Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default SeekerProfile;
