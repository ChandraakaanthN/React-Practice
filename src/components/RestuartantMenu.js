
import {useEffect,useState} from "react"; 
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
const RestuartantMenu = () => {
    const [resInfo,setResInfo]=useState(null);
    const {resId} = useParams();
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json =await data.json();
        setResInfo(json.data);
        console.log(json);
    }
    const {name,cuisines,costForTwoMessage,} = resInfo?.cards[2]?.card?.card?.info || {};
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
     
   return (resInfo==null)? <Shimmer></Shimmer> :(
    <div className="Restaurant-menu"> 
        <h1>{name}</h1>
        <h3>{cuisines.join(" , ")}</h3>
        <h3>{costForTwoMessage}</h3>
        <h2>MENU</h2>
        <ul>
            {itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name}-Price:{item.card.info.price/100}</li>)}
        </ul>
         
    </div>
  )
}

export default RestuartantMenu;