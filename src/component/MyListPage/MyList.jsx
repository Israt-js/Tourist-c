import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = ({list, toure, setToure}) => {
    const { _id, image, countryName, description } = list
   const handleDelete = _id => {
    console.log(_id)
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        fetch(`http://localhost:5000/touristsSpots/${_id}`, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deleteCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your add country has been deleted.",
            icon: "success"
          });
          const remaining = toure.filter(up => up._id !== _id)
          setToure(remaining);
            }
        })
        }
      });
   }
  return (
    <div>
      <h2>My Tourist Spots</h2>
      <div className="card w-96 bg-base-100 shadow-xl mb-6">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl bg-cover h-[350px] w-[400px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{countryName}</h2>
    <p>{description}</p>
    <div className="card-actions">
        <Link to={`/update/${_id}`}><button className="bg-slate-700 p-2 m-4 text-white rounded-md border-none">Update</button></Link>
    <button className="bg-slate-700 p-2 m-4 text-white rounded-md border-none" onClick={() => handleDelete(list._id)}>Delete</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default MyList;
