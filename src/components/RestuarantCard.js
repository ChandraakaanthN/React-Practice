import {CDN_URL} from "../utils/constants.js";


const RestuarantCard = ({ resData }) => {
    const { info } = resData;
    return (
        <div className="m-2.5 p-2 pb-4 w-[250px] h-[420px]  rounded-lg  hover:bg-red-100 hover:border hover:border-black bg-gray-200 " >
            <img
                    className="rounded-lg w-full h-[245px]"
                alt="res-logo"
                src={CDN_URL +info.cloudinaryImageId}
            />
            <h3>{info.name}</h3>
            <h4>{info.cuisines.join(", ")}</h4>
            <h4>{info.avgRating}</h4>
            <h4>{info.costForTwo}</h4>
            <h4>Delivery in {info.sla.deliveryTime} Minutes</h4>
        </div>
    );
};
export const withPromotedLabel=(RestuarantCard)=>{
    return (props)=>{
          const { resData } = props;
    const { isOpened } = resData.info;
    console.log(props);
        return (
            <div>
                <button className="bg-black text-white absolute m-2.5 p-1 rounded-lg">opened</button>
        <RestuarantCard {...props} />
        
      </div>
        )
    }
}


export default RestuarantCard;