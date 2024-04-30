import { Tooltip } from "react-tooltip";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TourSpot = () => {
  const [touristSpots, setTouristSpots] = useState([]);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    // Fetch tourist spots data from the server
    const fetchTouristSpots = async () => {
      try {
        const response = await fetch('http://localhost:5000/touristsSpots');
        const data = await response.json();
        setTouristSpots(data);
      } catch (error) {
        console.error('Error fetching tourist spots:', error);
      }
    };

    fetchTouristSpots();
  }, []);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    console.log(setSortBy)
  };

  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-6">All Tourists Spots</h2>
      <div className="flex justify-end mb-4">
      <Tooltip id="my-tooltip"></Tooltip>
        <label htmlFor="sortBy">Sort by Average Cost:</label>
        <select id="sortBy" value={sortBy} onChange={handleSortChange}>
          <option value="">Select</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {touristSpots.map((spot) => (
          <div key={spot._id} className="border p-4 rounded-md">
            <img src={spot.image} alt={spot.tourists_spot_name} className="w-full h-40 object-cover mb-4 rounded-md" />
            <h3 className="text-lg font-bold mb-2">{spot.tourists_spot_name}</h3>
            <p>Average Cost: ${spot.average_cost}</p>
            <p>Total Visitors Per Year: {spot.totalVisitorsPerYear}</p>
            <p>Travel Time: {spot.travel_time} hours</p>
            <p>Seasonality: {spot.seasonality}</p>
            <Link to={`/viewDetails/${spot._id}`} className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-md">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourSpot;