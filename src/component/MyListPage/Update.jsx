import { useLoaderData } from "react-router-dom";

const Update = () => {
     const updatee = useLoaderData();
    const { _id, image, touristsName, countryName, locationName, description, costName, seasonName, time, VisitorsName, name, email } = updatee;

    const handleUpdate = event =>{
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const touristsName = form.touristsName.value;
        const countryName = form.countryName.value;
        const locationName = form.locationName.value;
        const description = form.description.value;
        const costName = form.costName.value;
        const seasonName = form.seasonName.value;
        const time = form.time.value;
        const VisitorsName = form.VisitorsName.value;
        const email = form.email.value;
        const name = form.name.value;
        const update = { image,touristsName, countryName, locationName, description, costName, seasonName, time, VisitorsName, name, email };
        console.log(update);

          fetch(`http://localhost:5000/touristsSpots/${_id}`, {
         method: 'PUT',
         headers: {
           'content-type': 'application/json'
         },
         body: JSON.stringify(touristsSpots)
        })
        .then(res => res.json())
        .then(touristsSpots => {
         console.log(touristsSpots);
         if(touristsSpots.insertedId){
           alert('Update successfully')
           form.reset()
         }
        })
    }
    
    return(
      <div className="">
<div className="hero min-h-screen bg-base-200 m-6">
    <h2>Update</h2>
      <form onSubmit={handleUpdate} className="card shrink-0 w-auto shadow-2xl bg-[#F4F3F0] m-4">
        <div className="flex">
          <div className="">
          <div className="form-control">
          <label  htmlFor="image" className="label m-2">
            <span className="label-text">Image URL:</span>
          </label>
          <input type="text" name="image" id="image" placeholder="Image URL" className="input input-bordered m-2" required />
        </div>
        <div className="form-control">
        <label  htmlFor="tourists_spot_name" className="label m-2">
            <span className="label-text">Tourists Spot Name:</span>
          </label>
          <input type="text" name="touristsName" id="tourists_spot_name" placeholder="Tourists Spot Name" className="input input-bordered m-2" required />
        </div>
        <div className="form-control">
        <label  htmlFor="country_Name" className="label m-2">
            <span className="label-text">Country Name:</span>
          </label>
          <input type="text" name="countryName" id="name" placeholder="Country Name" className="input input-bordered m-2" required />
        </div>
        <div className="form-control">
        <label  htmlFor="location" className="label m-2">
            <span className="label-text">Location:</span>
          </label>
          <input type="text" name="locationName" id="name" placeholder="Location" className="input input-bordered m-2" required />
        </div>
        <div className="form-control">
        <label  htmlFor="description" className="label m-2">
            <span className="label-text">Description:</span>
          </label>
          <input type="text" name="description" id="description" placeholder="Description" className="input input-bordered m-2" required />
        </div>
          </div>
          <div className="">
            <div className="form-control">
            <label  htmlFor="average_cost" className="label m-2">
            <span className="label-text">Cost:</span>
          </label>
          <input type="text" name="costName" id="average_cost" placeholder="Cost" className="input input-bordered m-2" required />
        </div>
        <div className="form-control">
        <label  htmlFor="seasonality" className="label m-2">
            <span className="label-text">Season:</span>
          </label>
          <input type="text" name="seasonName" id="seasonality" placeholder="Season" className="input input-bordered m-2" required />
        </div>
        <div className="form-control">
        <label  htmlFor="travel_time" className="label m-2">
            <span className="label-text">Time:</span>
          </label>
          <input type="date" name="time" id="time" placeholder="Time" className="input input-bordered m-2" required />
        </div>
        <div className="form-control">
        <label  htmlFor="totalVisitorsPerYear" className="label m-2">
            <span className="label-text">Visitors Per Year:</span>
          </label>
          <input type="text" name="VisitorsName" id="Visitors" placeholder="Visitors Per Year" className="input input-bordered m-2" required />
        </div>
        </div>
        </div>
        <div className="">
        <input type="submit" value="Update" className="btn w-[97%] bg-slate-700 text-white ml-2" />
        </div>
      </form>
    </div>
     </div>
    )
}
export default Update;