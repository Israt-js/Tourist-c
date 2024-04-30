import { Link } from "react-router-dom";

const TourCard = ({tour}) => {

  const { image, description, countryName } = tour

    return(
<div className="destination">
<div className="card w-96 bg-base-100 shadow-xl mb-6">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl bg-cover h-[350px] w-[400px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{countryName}</h2>
    <p>{description}</p>
    <div className="card-actions">
    <Link to={`/viewD/${tour._id}`} className="">
        <button className="bg-slate-700 p-2 m-4 text-white rounded-md border-none">View Details</button>
   </Link>
    </div>
  </div>
</div>
</div>
    )
}
export default TourCard;