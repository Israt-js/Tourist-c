import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
  
    return(
        <div className="">
           <p className="text-center">Oops! 404 page not found</p>
           <p className="text-center">
        <i>{error.statusText || error.message}</i>
        
      </p>
      <button className="btn bg-slate-700 text-white ml-[48%]"><Link to={'/'}>Go Home</Link></button>
        </div>
    )
}
export default ErrorPage

