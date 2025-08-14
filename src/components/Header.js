import {LOGO_URL} from "../utils/constants.js";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
const Header =()=>{
 
    const [btnName,setbtnName]=useState("Login");
    useEffect(()=>{
        console.log("useEffect Called in Header");
    },[]);
    return (
        <div className="header">
            <div className="logo-container"> 
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>  <Link to="/"> Home</Link></li>
                    <li>
                       <Link to="/About"> About Us</Link>
                    </li>
                    <li>
                        <Link to="/Contact"> Contact</Link>
                    </li>
            
                    
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnName=="Login"?setbtnName("Logout"):setbtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>

        </div>

    )
}

export default Header;
