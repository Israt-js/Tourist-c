import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {

  const data = useLoaderData() || { viewD: [] };
  const { viewD } = data;
  const { id } = useParams();
  const tourd = viewD && viewD.find(item => item._id === parseInt(id));

  return (
    <div className="">
      {tourd && (
        <div className="card w-96 bg-base-100 shadow-xl mb-6">
          <figure className="px-10 pt-10">
            <img src={tourd.image} alt="Shoes" className="rounded-xl h-[350px] w-[400px]" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{tourd.countryName}</h2>
            <p>{tourd.description}</p>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewDetails;
