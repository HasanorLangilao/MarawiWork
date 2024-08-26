import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landingpage/Landingpage';
import SignIn from './Components/Auth/Signin/SignIn';
import EmployeeAccount from './Components/Auth/Employee/Employeesignup';
import EmployerAccount from './Components/Auth/Employer/Employersignup';
import JobseekerHome from './Components/Jobseeker/seekhome';
import EmployerHome from './Components/Employer/emphome';
import Applications from './Components/Jobseeker/applications';
import SeekerProf from './Components/Jobseeker/seekerprofile';
import SeekerNotif from './Components/Jobseeker/seeknotifications';
import Seekjobs from './Components/Jobseeker/seekjobs';
import ViewJob from './Components/Jobs/ViewJobs'
import About from './Components/about';
import Jobmap from './Components/Jobmap';
import Applicants from './Components/Employer/applicants';
import Empnotif from './Components/Employer/empnotifications';
import Empprofile from './Components/Employer/empprofile';
import EmpJobs from './Components/Employer/empmyjobs';
import PostaJob from './Components/Employer/postajob';
import Dashboard from './Components/Admin/dashboard';
import Users from './Components/Admin/users';
import Jobs from './Components/Admin/jobs';
import Footer from './Components/Footer'; // Import the Footer component
import EmpApplications from './Components/Employer/viewapplications'; // Import the EmpApplications component

const App = () => {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      setUserType(storedUserType);
    }
  }, []);

  const handleLogout = () => {
    setUserType(null);
    localStorage.removeItem('userType');
    localStorage.removeItem('token');
  };

  const handleLogin = (type, token) => {
    setUserType(type);
    localStorage.setItem('userType', type);
    localStorage.setItem('token', token);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar userType={userType} onLogout={handleLogout} />
        <main className="flex-grow">
          <Routes>
            {/* Always redirect to landing page if user is not authenticated */}
            <Route path="/" element={<Landing />} />
            <Route path="/signin" element={<SignIn handleClose={() => {}} setUserType={handleLogin} />} />
            <Route path="/Employeesignup" element={<EmployeeAccount />} />
            <Route path="/Employersignup" element={<EmployerAccount />} />

            {userType === 'jobseeker' ? (
              <>
                <Route path="/seekhome" element={<JobseekerHome />} />
                <Route path="/seekjobs" element={<Seekjobs />} />
                <Route path="/applications" element={<Applications />} />
                <Route path="/seekerprofile" element={<SeekerProf />} />
                <Route path="/seeknotifications" element={<SeekerNotif />} />
                <Route path="/job/:jobId" element={<ViewJob />} />
                <Route path="/about" element={<About />} />
                <Route path="/Jobmap" element={<Jobmap />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/" />} />
            )}

            {userType === 'employer' ? (
              <>
                <Route path="/emphome" element={<EmployerHome />} />
                <Route path="/applicants" element={<Applicants />} />
                <Route path="/empmyjobs" element={<EmpJobs />} />
                <Route path="/viewapplications/:jobId" element={<EmpApplications />} /> {/* Route for viewing applications */}
                <Route path="/empnotifications" element={<Empnotif />} />
                <Route path="/empprofile" element={<Empprofile />} />
                <Route path="/postajob" element={<PostaJob />} />
                <Route path="/about" element={<About />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/" />} />
            )}

            {userType === 'admin' ? (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/jobs" element={<Jobs />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/" />} />
            )}

            {/* Default redirection based on userType */}
            <Route path="/home" element={
              userType ? (
                userType === 'jobseeker' ? <Navigate to="/seekhome" /> :
                userType === 'employer' ? <Navigate to="/emphome" /> :
                userType === 'admin' ? <Navigate to ="/dashboard" /> :
                <Navigate to="/dashboard" />
              ) : <Navigate to="/" />
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        {userType && <Footer />} {/* Conditionally render Footer */}
      </div>
    </Router>
  );
};

export default App;
