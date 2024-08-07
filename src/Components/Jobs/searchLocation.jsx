// src/Components/JobMap.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import marker icon images
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import markerRetina from 'leaflet/dist/images/marker-icon-2x.png';

// Custom icon for markers
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerRetina,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const JobMap = () => {
  const jobLocations = [
    {
      title: 'Software Engineer',
      type: 'Full-time',
      salary: '$80,000',
      datePosted: '2024-07-15',
      location: 'Cagayan de Oro',
      lat: 8.4542,
      lng: 124.6319
    },
    {
      title: 'Web Developer',
      type: 'Part-time',
      salary: '$40,000',
      datePosted: '2024-07-20',
      location: 'Makati',
      lat: 14.5547,
      lng: 121.0244
    },
    {
      title: 'Data Scientist',
      type: 'Full-time',
      salary: '$100,000',
      datePosted: '2024-07-25',
      location: 'Cebu City',
      lat: 10.3157,
      lng: 123.8854
    },
    // Add more job locations as needed
  ];

  return (
    <div className="map-box">
      <MapContainer center={[12.8797, 121.7740]} zoom={6} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {jobLocations.map((job, index) => (
          <Marker key={index} position={[job.lat, job.lng]} icon={customIcon}>
            <Tooltip>
              <div>
                <strong>{job.title}</strong><br />
                Type: {job.type}<br />
                Salary: {job.salary}<br />
                Date Posted: {job.datePosted}
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default JobMap;
