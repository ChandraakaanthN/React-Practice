import resList from "../../utils/mockdata";
const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
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