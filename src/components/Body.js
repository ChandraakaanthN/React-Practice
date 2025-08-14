import RestuarantCard from "./RestuarantCard";
import resList from "../utils/mockdata";
import {useState} from "react";
const Body=()=>{

    const [listOfRestaurants,setListOfRestaurants]=useState(resList);
    return(
        <div className="body">


            <div className="filter"> <button className="filter-btn" onClick={()=>{
                const filteredList=resList.filter((res)=>res.info.avgRating>4.3);
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