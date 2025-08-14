import RestuarantCard from "./RestuarantCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";

const Body=()=>{

    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    useEffect(()=>{
        console.log("useEffect Called");
        fetchData();
    },[])
    const fetchData= async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    }

if(listOfRestaurants.length===0) return <Shimmer/>;


    return(
        <div className="body">


            <div className="filter"> <button className="filter-btn" onClick={()=>{
                const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4.3);
                setListOfRestaurants(filteredList);

            }} >Top Rated Restaurant</button> 
           </div>


            <div className="res-container">
                  {listOfRestaurants.map((restaurant) =>  
                    (
                    <RestuarantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                   }
            </div>

        </div>
    )
}
export default Body;