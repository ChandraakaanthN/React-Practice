import useRestuarantMenu from "../utils/useRestuarantMenu";
import RestuarantCategory from "./RestuarantCategory";
import Shimmer from "./Shimmer";
import { useParams} from "react-router-dom";
import RestuarantCategory from "./RestuarantCategory";
import { useState } from "react";
const RestuartantMenu = () => {
  const { resId } = useParams();
  const [showIndex,setShowIndex]=useState(null);
  const resInfo=useRestuarantMenu(resId);
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  // Safely get itemCards
  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards || [];


      const categories =resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
     
  return resInfo == null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p>{cuisines?.join(" , ")}-Starting at {costForTwoMessage}</p>
    {
  categories.map((category,index) => (
    <RestuarantCategory
      key={category?.card?.card?.categoryId}
      category={category?.card?.card} 
      data={category?.card?.card}
      showItems={index===showIndex?true:false}
       setShowIndex={()=>setShowIndex(index)}
     />
  ))
}




      {/* <ul>
        {itemCards.length > 0 ? (
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Price:{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </li>
          ))
        ) : (
          <p>No menu items available</p>
        )}
      </ul> */}
    </div>
  );
};

export default RestuartantMenu;
