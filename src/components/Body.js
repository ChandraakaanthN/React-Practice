import RestuarantCard from "./RestuarantCard";
import resList from "../utils/mockdata";
const Body=()=>{
    return(
        <div className="body">
            <div className="filter-btn"> <button>Top Rated Restaurant</button> </div>
            <div className="res-container">
                  {resList.map((restaurant) =>  
                    (
                    <RestuarantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                   }
            </div>
        </div>
    )
}
export default Body;