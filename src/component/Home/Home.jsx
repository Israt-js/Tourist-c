import { useLoaderData } from "react-router-dom";
import TourCard from "../TourCard";
const Home = () => {
  const tours = useLoaderData();
  if (!tours) {
    return <div>Loading...</div>;
  }

    return(
      <div className="">
        <div className="carousel w-full h-[680px] mt-3 mb-3">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/zVcghmc/one-2.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/KFxXvb9/two-2.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/fv0cMFW/three-2.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
<div className="destination">
    <h1 className="text-4xl font-extrabold text-center m-3 b-5">Destination </h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mb-5">
    {tours.map((tour) => (
          <TourCard key={tour._id} tour={tour} />
    ))}
    </div>
</div>
<div className="">
<div class="ex-tex">
        <h2 className="text-center text-4xl font-bold">Beautiful Travel</h2>
        <p className="text-center text-1xl font-semibold">Enjoy your Travel in a Beautiful Day. Our Travel is Memorial. <br /> Our Mind Frasher travel.</p>
      </div>
      <div className="card w-[95%] bg-base-200 m-8 glass">
     <figure><img src="https://i.ibb.co/5GMytZR/tahsin-islam-gc8-IPK97-h-E-unsplash.jpg" className="h-96 w-[700px] mt-9 rounded-md" alt="Sone" border="0"></img></figure>
    <div className="card-body">
    <h2 className="card-title text-3xl">Bangladesh</h2>
    <p>These campaigns can be initiated by leads interested in buying or selling homes but are not yet prepared to meet with you. They are also great for leads that have submitted a form on your site but aren’t quite ready to talk with someone just yet. Here are some sample templates you can use when setting up a real estate lead nurturing campaign.</p>
    </div>
    </div>
    <div className="card w-[95%] bg-base-200 m-8 glass">
     <figure><img src="https://i.ibb.co/KrBtNmj/sara-dubler-Koei-7y-Yt-Io-unsplash.jpg" className="h-96 w-[700px] mt-9 rounded-md" alt="Stwo" border="0"></img></figure>
    <div className="card-body">
    <h2 className="card-title text-3xl">Thailand</h2>
    <p>This remarkable 77 acre Covenant estate comprised of 7 parcels will transcend your expectations with multiple residences, two state-of-the-art barns, riding arenas, several pastures, tree-lined trails, 15 acre bass-filled lake, tennis court, and the ultimate in privacy, security, and seclusion.</p>
    </div>
    </div>
    <div className="card w-[95%] bg-base-200 m-8 glass">
     <figure><img src="https://i.ibb.co/Tv9DSYM/chuttersnap-QYJZEpuf-RMk-unsplash.jpg" className="h-96 w-[700px] mt-9 rounded-md" alt="Sthree" border="0"></img></figure>
    <div className="card-body">
    <h2 className="card-title text-3xl">Malaysia</h2>
    <p>Take a look at the sleek Montserrat font, the dramatic visuals, the gray and white color scheme, the chef’s kitchen with the integrated refrigerator, and the double oven. The elements are high-end and the overall effect here is a luxury home. The target customer is clearly not a budget buyer.</p>
    </div>
    </div>
    <div className="card w-[95%] bg-base-200 m-8 glass">
     <figure><img src="https://i.ibb.co/g6FhWZZ/husniati-salma-u-AFGUY20-W-U-unsplash.jpg" className="h-96 w-[700px] mt-9 rounded-md" alt="Sthree" border="0"></img></figure>
    <div className="card-body">
    <h2 className="card-title text-3xl">Indonesia</h2>
    <p>Where rice terraces cascade like green waterfalls. Temples cling to cliffs, their incense rising to meet the heavens. The elements are high-end and the overall effect here is a luxury home .</p>
    </div>
    </div>
    <div className="card w-[95%] bg-base-200 m-8 glass">
     <figure><img src="https://i.ibb.co/kM0bGLz/degaharu-tekouha-nos-Ld-Nj-HY0-unsplash.jpg" className="h-96 w-[700px] mt-9 rounded-md" alt="Sthree" border="0"></img></figure>
    <div className="card-body">
    <h2 className="card-title text-3xl">Vietnam</h2>
    <p>A mythical seascape, where limestone karsts rise like ancient dragons. the chef’s kitchen with the integrated refrigerator, and the double oven. The elements are high-end and the overall effect here is a luxury home. Interested in buying or selling homes but are not yet prepared to meet with you. They are also great for leads that have submitted a form on your site but aren’t quite ready to talk with someone just yet.</p>
    </div>
    </div>
</div>
</div>
    )
}
export default Home;