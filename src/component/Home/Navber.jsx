import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navber = () => {
    const { user, logOut } = useContext(AuthContext) || {};
    const handleLogOut = () => {
        logOut()
        .then(() => console.log('SUCCESSFULLY LOGOUT'))
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/userprofile'}>User profile</Link></li>
                        <li><Link to={'/updateprofile'}>Update Profile</Link></li>
                        <li><Link to={'/register'}>Register</Link></li>
                    </ul>
                </div>
                <img className="h-28 w-32" src="https://i.ibb.co/cNYZwZL/438083803-449378790921016-1153236121929537865-n-removebg-preview.png" alt="o"/>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/touristsSpot'}>All Tourists Spot</Link></li>
                    <li><Link to={'/addTouristsSpot'}>Add Tourists Spot</Link></li>
                    <li><Link to={'/myList'}> My List</Link></li>
                    <li><Link to={'/register'}>Register</Link></li>
                </ul>
            </div>
            <div className="navbar-end" data-aos="flip-left">
                <ul className="flex">
                    {
                        user ? 
                        <>
                            <li><img src={user.photoURL} alt="User" title={user.displayName} className="rounded-full online h-8 w-8 mt-2 mr-2" /></li>
                            <li className="btn bg-slate-700 text-white m-1"><a onClick={handleLogOut} href="#">LogOut</a></li>
                        </>
                        :
                        <li><Link className="btn bg-slate-700 text-white m-1" to={'/login'}>Login</Link></li>  
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navber;
