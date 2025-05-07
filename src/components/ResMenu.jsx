import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResMenu from "../utils/useResMenu";

const ResMenu = () => {
  const { resId } = useParams();
  const resInfo = useResMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  return (
    <div className="p-4 m-4 bg-[#FFF8E1] min-h-screen">
      <h1 className="text-3xl font-bold mb-2">{name}</h1>
      <h3 className="text-lg mb-4">{cuisines.join(", ")} - {costForTwoMessage}</h3>
      <ul className="space-y-4">
        {itemCards.map((item) => (
          <li
            key={item.card.info.id}
            className="border p-4 rounded-lg shadow-md bg-white flex justify-between items-center"
          >
            <div>
              <h4 className="font-semibold text-lg">{item.card.info.name}</h4>
              <p className="text-gray-700">₹{item.card.info.price / 100}</p>
            </div>
            {item.card.info.imageId && (
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-[100px] h-[100px] object-cover rounded"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResMenu;
