import {LOGO_URL} from "../utils/constants.js";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {useOnlineStatus} from "../utils/useOnlineStatus.js";
const Header =()=>{
 
    const [btnName,setbtnName]=useState("Login");
    useEffect(()=>{
        console.log("useEffect Called in Header");
    },[]);
    return (
        <div className="flex justify-between bg-[#FF474D] shadow-lg px-10" >
            <div className="logo-container"> 
                <img className="w-40" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-10 m-10 ">
                     <li className="px-8">  <Link to="/"> Home</Link></li>
                    <li className="px-8">
                       <Link to="/About"> About Us</Link>
                    </li>
                    <li className="px-8">
                        <Link to="/Contact"> Contact</Link>
                    </li>
                    <li className="px-8">
                       < Link to="/Grocery"> Grocery</Link>  
                    </li> 
                    <li className="px-8">Cart</li>
                    <button className="px-8"  onClick={()=>{
                        btnName=="Login"?setbtnName("Logout"):setbtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>

        </div>

    )
}

export default Header;
