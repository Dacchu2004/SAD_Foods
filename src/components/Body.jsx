import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [lor, setlor] = useState([]);
  const [filteredRes, setfilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isTopRated, setIsTopRated] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = lor;

    if (searchText.trim() !== "") {
      filtered = filtered.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (isTopRated) {
      filtered = filtered.filter((res) => res.info.avgRating > 4.5);
    }

    setfilteredRes(filtered);
  }, [lor, searchText, isTopRated]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setlor(restaurants);
    setfilteredRes(restaurants);
  };

  const clearFilters = () => {
    setSearchText("");
    setIsTopRated(false);
  };

  const isOnline = useOnlineStatus();

  if (isOnline === false) {
    return (
      <h1 className="text-center text-red-600 font-semibold text-xl">
        Looks like you are offline. Please check your internet connection.
      </h1>
    );
  }

  return lor.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-full">
      <div className="flex items-center m-[5px]">
        <div className="mr-4">
          <input
            type="text"
            placeholder="Search Restaurants"
            className="px-4 py-2 border border-gray-400 rounded-md"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <button
          className="m-[10px] cursor-pointer bg-yellow-100 px-3 py-1 rounded"
          onClick={() => setIsTopRated(!isTopRated)}
        >
          {isTopRated ? "Show All Ratings" : "Top Rated Restaurants"}
        </button>

        <button
          className="m-[10px] cursor-pointer bg-yellow-100 px-3 py-1 rounded"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>

      <div className="w-full mx-auto flex flex-wrap justify-center items-center">
        {filteredRes.map((restaurants) => (
          <Link
            key={restaurants.info.id}
            to={"/restaurants/" + restaurants.info.id}
          >
            <ResCard resData={restaurants} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
