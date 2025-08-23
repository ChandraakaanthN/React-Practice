import RestuarantCard from "./RestuarantCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import {useOnlineStatus} from "../utils/useOnlineStatus.js";

const Body=()=>{

    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [searchText,setsearchText]=useState("");
    const [filteredRestuarant,setfilteredRestuarant]=useState([]);
    console.log("Body Rendered");
    useEffect(()=>{
        console.log("useEffect Called");
        fetchData();
    },[])
    const fetchData= async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        setfilteredRestuarant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    }
  
    const onlineStatus = useOnlineStatus();
    if(onlineStatus===false) return <h1>🔴 Offline, Please check your Internet Connection</h1>


    return listOfRestaurants.length===0? <Shimmer/> :(
        <div className="body">


            <div className="filter"> 

                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}>
                    </input>
             <button onClick={() => {
    const filteredres = listOfRestaurants.filter((res) => 
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setfilteredRestuarant(filteredres);
}}>
    Search
</button>
                </div>
                
                
                <button className="filter-btn" onClick={()=>{
                const filteredList=listOfRestaurants.filter(
                     (res) => parseFloat(res.info.avgRating) > 4.5);
            
                       setfilteredRestuarant(filteredList);

               }} >Top Rated Restaurant
                </button> 
           </div>


            <div className="res-container">
                  {filteredRestuarant.map((restaurant) =>  
                    (
                 <Link className="custom-link"
                 key={restaurant.info.id} 
                 to={"/restaurants/"+restaurant.info.id}>
                     <RestuarantCard  resData={restaurant} />
                 </Link>  
                    ))
                   }
            </div>

        </div>
    )
}
export default Body;