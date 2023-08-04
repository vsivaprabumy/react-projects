import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
//import { resList } from "../utils/mockData.js";
const Body = () => {
  let data = [
    {
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      id: "334475",
      name: "KFC",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: "3.8",
      costForTwo: 40000,
      deliveryTime: 36,
    },
    {
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      id: "334476",
      name: "KFC 1",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: "4.8",
      costForTwo: 40000,
      deliveryTime: 36,
    },
    {
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      id: "334477",
      name: "KFC 2",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: "4.8",
      costForTwo: 40000,
      deliveryTime: 36,
    },
  ];
  const [resData, setResData] = useState(data);

  const topRateFilter = () => {
    let data = resData.filter((item) => item.avgRating > 4);
    console.log("data ==> ", data);
    setResData(data);
  };
  return (
    <div className="body">
      <div className="menu-filter-container">
        <button className="filter-btn btn" onClick={topRateFilter}>
          Top Rate Filter
        </button>
      </div>
      <div className="res-container">
        {resData?.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
