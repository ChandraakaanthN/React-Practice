import {CDN_URL} from "../utils/constants.js";
const stylecard={
    backgroundColor:"#DBD8D8"
}

const RestuarantCard = ({ resData }) => {
    const { info } = resData;
    return (
        <div className="m-2.5 p-2 pb-4 w-[250px] h-[420px] " style={stylecard}>
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

export default RestuarantCard;