import useRestuarantMenu from "../utils/useRestuarantMenu";
import Shimmer from "./Shimmer";
import { useParams} from "react-router-dom";

const RestuartantMenu = () => {
  const { resId } = useParams();

  const resInfo=useRestuarantMenu(resId);
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  // Safely get itemCards
  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards || [];

  return resInfo == null ? (
    <Shimmer />
  ) : (
    <div className="Restaurant-menu">
      <h1>{name}</h1>
      <h3>{cuisines?.join(" , ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>MENU</h2>
      <ul>
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
      </ul>
    </div>
  );
};

export default RestuartantMenu;
