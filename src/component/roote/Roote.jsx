import { Outlet } from "react-router-dom";
import Navber from "../Home/Navber";
import Footer from "../footer/Footer";

const Roote = () => {
    return(
        <div className="">
            
       <Navber></Navber>
       <Outlet></Outlet>
       <Footer></Footer>

        </div>
    )
}

export default Roote;