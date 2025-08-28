import RestuarantCard,{withPromotedLabel} from "./RestuarantCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import {useOnlineStatus} from "../utils/useOnlineStatus.js";
const Body=()=>{

    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [searchText,setsearchText]=useState("");
    const [filteredRestuarant,setfilteredRestuarant]=useState([]);
    console.log("Body Rendered",listOfRestaurants);
    const PromotedCard=withPromotedLabel(RestuarantCard);
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
        <div className="body  ">


            <div className="filter"> 

                <div className="search m-4 p-4 flex items-center">
                    <input type="text" className="search-box border border-solid border-black" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}>
                    </input>
             <button className="px-4 py-2 bg-red-100 m-4 rounded-lg"
              onClick={() => {
    const filteredres = listOfRestaurants.filter((res) => 
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setfilteredRestuarant(filteredres);
}}>
    Search
</button>
  <button className="filter-btn px-4 py-2  bg-gray-100 rounded-lg" onClick={()=>{
                const filteredList=listOfRestaurants.filter(
                     (res) => parseFloat (res.info.avgRating) > 4.5);
            
                       setfilteredRestuarant(filteredList);

               }} >Top Rated Restaurant
                </button> 
                </div>
                
           </div>


            <div className="res-container flex flex-wrap pl-7 p-2 bg-gray-50 hover:bg-gray-100">
                  {filteredRestuarant.map((restaurant) =>  
                    (
                 <Link className="custom-link"
                 key={restaurant.info.id} 
                 to={"/restaurants/"+restaurant.info.id}>
                    {restaurant.info.isOpen ? <PromotedCard resData={restaurant} /> :
                     <RestuarantCard  resData={restaurant} />}
                 </Link>  
                    ))
                   }
            </div>

        </div>
    )
}
export default Body;