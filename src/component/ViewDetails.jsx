// import { useLoaderData, useParams } from "react-router-dom";

// const ViewDetails = () => {

//   const data = useLoaderData() || { viewD: [] };
//   const { viewD } = data;
//   const { id } = useParams();
//   const tourd = viewD && viewD.find(item => item._id === parseInt(id));

//   return (
//     <div className="">
//       {tourd && (
//         <div className="card w-96 bg-base-100 shadow-xl mb-6">
//           <figure className="px-10 pt-10">
//             <img src={tourd.image} alt="Shoes" className="rounded-xl h-[350px] w-[400px]" />
//           </figure>
//           <div className="card-body items-center text-center">
//             <h2 className="card-title">{tourd.countryName}</h2>
//             <p>{tourd.description}</p>
            
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewDetails;



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
  const [touristSpot, setTouristSpot] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch tourist spot details based on id from the server
    const fetchTouristSpotDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/touristsSpots/${id}`);
        const data = await response.json();
        setTouristSpot(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching tourist spot details:', error);
      }
    };

    fetchTouristSpotDetails();
  }, [id]);

  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-6">Tourist Spot Details</h2>
      {touristSpot && (
        <div className="card w-96 bg-base-100 shadow-xl mb-6">
          <figure className="px-10 pt-10">
            <img src={touristSpot.image} alt="Shoes" className="rounded-xl h-[350px] w-[400px]" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{touristSpot.countryName}</h2>
            <p>{touristSpot.description}</p>
         
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewDetails;

