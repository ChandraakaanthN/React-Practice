import {CDN_URL} from "../utils/constants.js";
const stylecard={
    backgroundColor:"rgb(248,248,255)"
}

const RestuarantCard = ({ resData }) => {
    const { info } = resData;

    return (
        <div className="res-card" style={stylecard}>
            <img
                    className="res-logo"
                alt="res-logo"
                src={CDN_URL +info.cloudinaryImageId}
            />
            <h3>{info.name}</h3>
            <h4>{info.cuisines.join(", ")}</h4>
            <h4>{info.avgRating}</h4>
            <h4>{info.costForTwo}</h4>
        </div>
    );
};
export default RestuarantCard;