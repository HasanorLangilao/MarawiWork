import React, { useState } from 'react';
import Img from '../../../assets/marawiwork.jpg';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Employeesignup = ({ handleClose }) => {
  const navigate = useNavigate();

  const [selectedMunicipality, setSelectedMunicipality] = useState('');
  const [selectedBarangay, setSelectedBarangay] = useState('');

  const handleCloseClick = () => {
    if (handleClose) {
      handleClose(); // Call the function to hide or close the form
    }
    navigate('/'); // Navigate to the Home page
  };

  const municipalities = [
    'Marawi City', 'Balindong', 'Bayang', 'Bumbaran', 'Butig', 'Ganassi', 
    'Kapai', 'Lumbaca-Unayan', 'Lumba-Bayabao', 'Lumbatan', 'Madalum', 
    'Madamba', 'Malabang', 'Marantao', 'Masiu', 'Mulondo', 'Pagayawan',
    'Piagapo', 'Poona-Bayabao', 'Pualas', 'Saguiaran', 'Tamparan', 
    'Taraka', 'Tubaran', 'Wao'
  ];

  const barangays = {
    'Marawi City': [
      'Bagumbayan', 'Banggolo', 'Bubong', 'Bubong-A', 'Bubong-B', 'Dado', 
      'Datu Saber', 'East Tapayan', 'Fatima', 'Gacap', 'Gadar', 'Gadin', 
      'Gadung', 'Maruhom', 'Matampay', 'Mugaya', 'Poblacion', 'Ragay', 
      'Ragayan', 'Ranao', 'Ranao II', 'Sama', 'Sapang', 'Sari-Sari', 
      'Sumpong', 'Tagbag', 'Tagpangi', 'Tugaya', 'Watu', 'West Tapayan'
    ],
    'Balindong': [
      'Bacungan', 'Balindong', 'Bato-Bato', 'Binidayan', 'Bualan', 'Cadayonan', 
      'Cagatuan', 'Dagohoy', 'Dapayan', 'Diama', 'Dulao', 'Lumbac', 
      'Malamig', 'Pindolonan', 'Sasiman', 'Sempul', 'Sungco'
    ],
    'Bayang': [
      'Bago', 'Bagoaingud', 'Bagumbayan', 'Diga', 'Gacap', 'Kauswagan', 
      'Lumbac', 'Madaya', 'Mendocino', 'Pagalongan', 'Poblacion', 
      'Tagpangi', 'Tuca'
    ],
    'Bumbaran': [
      'Bumbaran', 'Digos', 'Dilausan', 'Gindulungan', 'Kasilaan', 'Pindolonan',
      'Poblacion', 'Tapan', 'Tugaya'
    ],
    'Butig': [
      'Bago', 'Bagoaingud', 'Bagumbayan', 'Bato-Bato', 'Diampaca', 'Madaya', 
      'Maddaya', 'Maruhom', 'Pindolonan', 'Poblacion', 'Punud', 'Tamporong'
    ],
    'Ganassi': [
      'Bago', 'Bagoaingud', 'Bunao', 'Gacap', 'Lumbac', 'Madaya', 
      'Pagalongan', 'Pindolonan', 'Poblacion', 'Sari-Sari'
    ],
    'Kapai': [
      'Baguio', 'Bagoaingud', 'Bago-Mangga', 'Bangon', 'Dapayan', 'Gadung', 
      'Lumbac', 'Malaruhat', 'Palanas', 'Pindolonan', 'Poblacion', 
      'Saguit', 'Sampao'
    ],
    'Lumbaca-Unayan': [
      'Balindong', 'Baya', 'Diampaca', 'Ganassi', 'Lumbac', 'Madalum', 
      'Pagalongan', 'Pindolonan', 'Poblacion', 'Sampao', 'Tagpangi'
    ],
    'Lumba-Bayabao': [
      'Bago', 'Bagoaingud', 'Bago-Mangga', 'Bayabao', 'Bubong', 'Bubong-A', 
      'Digos', 'Gindulungan', 'Madaya', 'Pindolonan', 'Sampao', 'Tagpangi'
    ],
    'Lumbatan': [
      'Bago', 'Bagoaingud', 'Bagumbayan', 'Balindong', 'Bubong', 'Digos', 
      'Ganassi', 'Lumbac', 'Maruhom', 'Pindolonan', 'Poblacion', 
      'Sampao', 'Tagpangi', 'Tuca'
    ],
    'Madalum': [
      'Bago', 'Bagoaingud', 'Bagumbayan', 'Balindong', 'Bato-Bato', 
      'Diampaca', 'Digos', 'Lumbac', 'Madalum', 'Pindolonan', 
      'Poblacion', 'Tagpangi', 'Tuca'
    ],
    'Madamba': [
      'Bago', 'Bagoaingud', 'Bagumbayan', 'Diampaca', 'Gacap', 'Kasilaan', 
      'Lumbac', 'Madaya', 'Pindolonan', 'Poblacion', 'Sari-Sari', 
      'Tagpangi', 'Tuca'
    ],
    'Malabang': [
      'Bagumbayan', 'Bato-Bato', 'Diampaca', 'Gacap', 'Kasilaan', 
      'Lumbac', 'Madaya', 'Pindolonan', 'Poblacion', 'Sampao', 
      'Sari-Sari', 'Tagpangi', 'Tuca'
    ],
    'Marantao': [
      'Bagumbayan', 'Balindong', 'Diampaca', 'Ganassi', 'Lumbac', 
      'Madaya', 'Pindolonan', 'Poblacion', 'Sampao', 'Tagpangi', 'Tuca'
    ],
    'Masiu': [
      'Bagumbayan', 'Balindong', 'Bato-Bato', 'Diampaca', 'Ganassi', 
      'Lumbac', 'Madalum', 'Madaya', 'Pindolonan', 'Poblacion', 
      'Sampao', 'Tagpangi', 'Tuca'
    ],
    'Mulondo': [
      'Bagumbayan', 'Balindong', 'Diampaca', 'Ganassi', 'Kasilaan', 
      'Lumbac', 'Madalum', 'Madaya', 'Pindolonan', 'Poblacion', 
      'Sampao', 'Tagpangi', 'Tuca'
    ],
    'Pagayawan': [
      'Bagumbayan', 'Balindong', 'Diampaca', 'Ganassi', 'Kasilaan', 
      'Lumbac', 'Madaya', 'Pindolonan', 'Poblacion', 'Sampao', 
      'Tagpangi', 'Tuca'
    ],
    'Piagapo': [
      'Bagumbayan', 'Bato-Bato', 'Diampaca', 'Gacap', 'Kasilaan', 
      'Lumbac', 'Madaya', 'Pindolonan', 'Poblacion', 'Sampao', 
      'Tagpangi', 'Tuca'
    ],
    'Poona-Bayabao': [
      'Bagumbayan', 'Balindong', 'Diampaca', 'Ganassi', 'Kasilaan', 
      'Lumbac', 'Madaya', 'Pindolonan', 'Poblacion', 'Sampao', 
      'Tagpangi', 'Tuca'
    ],
    'Pualas': [
      'Bagumbayan', 'Bato-Bato', 'Diampaca', 'Gacap', 'Kasilaan', 
      'Lumbac', 'Madaya', 'Pindolonan', 'Poblacion', 'Sampao', 
      'Tagpangi', 'Tuca'
    ],
    'Saguiaran': [
      'Bagumbayan', 'Bato-Bato', 'Diampaca', 'Gacap', 'Kasilaan', 
      'Lumbac', 'Madaya', 'Pindolonan', 'Poblacion', 'Sampao', 
      'Tagpangi', 'Tuca'
    ],
    'Tamparan': [
      'Bagumbayan', 'Bato-Bato', 'Diampaca', 'Ganassi', 'Kasilaan', 
      'Lumbac', 'Madaya', 'Pindolonan', 'Poblacion', 'Sampao', 
      'Tagpangi', 'Tuca'
    ],
    'Taraka': [
      'Bagumbayan', 'Balindong', 'Diampaca', 'Ganassi', 'Kasilaan', 
      'Lumbac', 'Madaya', 'Pindolonan', 'Poblacion', 'Sampao', 
      'Tagpangi', 'Tuca'
    ],
    'Tubaran': [
      'Bagumbayan', 'Bato-Bato', 'Diampaca', 'Gacap', 'Kasilaan', 
      'Lumbac', 'Madaya', 'Pindolonan', 'Poblacion', 'Sampao', 
      'Tagpangi', 'Tuca'
    ],
    'Wao': [
      'Bagumbayan', 'Bato-Bato', 'Diampaca', 'Gacap', 'Kasilaan', 
      'Lumbac', 'Madaya', 'Pindolonan', 'Poblacion', 'Sampao', 
      'Tagpangi', 'Tuca'
    ]
  };

  const handleMunicipalityChange = (e) => {
    setSelectedMunicipality(e.target.value);
    setSelectedBarangay(''); // Reset barangay when municipality changes
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg h-full max-h-[90vh] overflow-auto relative">
        <button
          onClick={handleCloseClick}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 z-50"
        >
          <FaTimes size={16} />
        </button>
        <div className="flex justify-center mb-4">
          <img src={Img} alt="Company Logo" className="h-20 w-20 rounded-full object-cover" />
        </div>
        <h2 className="text-lg font-bold mb-4 text-center">Create account as an Employer</h2>
        <div className="flex justify-center mb-4 text-md">
          <a href="/Employeesignup" className="text-green-600 hover:underline">Employee</a>
          <span className="mx-2">|</span>
          <a href="/Employersignup" className="text-green-600 hover:underline">Employer</a>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-left">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="First name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-left">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Last name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="middleName" className="block text-left">Middle Name</label>
              <input
                type="text"
                id="middleName"
                placeholder="Middle name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-left">Gender</label>
              <select
                id="gender"
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label htmlFor="birthdate" className="block text-left">Birthdate</label>
              <input
                type="date"
                id="birthdate"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="contactNumber" className="block text-left">Contact Number</label>
              <input
                type="text"
                id="contactNumber"
                placeholder="Contact number"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="emailAddress" className="block text-left">Email Address</label>
              <input
                type="email"
                id="emailAddress"
                placeholder="Email address"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="username" className="block text-left">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-left">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-left">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="municipality" className="block text-left">Municipality</label>
              <select
                id="municipality"
                value={selectedMunicipality}
                onChange={handleMunicipalityChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select municipality</option>
                {municipalities.map((municipality) => (
                  <option key={municipality} value={municipality}>{municipality}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="barangay" className="block text-left">Barangay</label>
              <select
                id="barangay"
                value={selectedBarangay}
                onChange={(e) => setSelectedBarangay(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                disabled={!selectedMunicipality}
              >
                <option value="">Select barangay</option>
                {selectedMunicipality && barangays[selectedMunicipality]?.map((barangay) => (
                  <option key={barangay} value={barangay}>{barangay}</option>
                ))}
              </select>
            </div>
            <div className="col-span-2">
            <label htmlFor="province" className="block text-left">Province</label>
            <input
              type="text"
              id="province"
              value="Lanao Del Sur"
              disabled
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          </div>
          <button
            type="submit"
            className="mt-6 py-2.5 w-full bg-gray-800 text-white rounded-md hover:bg-gray-900"
          >
            CREATE ACCOUNT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Employeesignup;
