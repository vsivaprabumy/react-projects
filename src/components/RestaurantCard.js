import { CDN_URL } from "../utils/contsant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData;

  return (
    <div className="card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="card-img"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="card-container">
        <div className="card-title">{name}</div>
        <div className="card-subtitle">{cuisines.join(", ")}</div>
        <div className="card-subtitle">{avgRating} stars</div>
        <div className="card-price">₹{costForTwo / 100} FOR TWO</div>
        <div className="card-footer">{deliveryTime} minutes</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
