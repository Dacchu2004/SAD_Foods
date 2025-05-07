import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
  } = resData?.info || {};

  return (
    <div className="text-center bg-white m-[15px] p-[10px] w-[350px] h-[450px] rounded-[15px] transition-[transform,box-shadow] duration-100 ease-linear transform-style-preserve-3d shadow-[0_2px_6px_rgba(0,0,0,0.15)] hover:cursor-pointer hover:translate-z-[40px] hover:scale-[1.05] hover:shadow-[0_16px_32px_rgba(0,0,0,0.35)]">
      <img
        className="w-full h-[250px] object-cover rounded-[10px]"
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant Logo"
      />
      <h2 className="my-[12px]">{name}</h2>
      <h3 className="my-[10px]">{cuisines?.join(", ")}</h3>
      <h3 className="my-[10px]">{avgRating} ⭐</h3>
      <h4 className="my-[10px]">{costForTwo}</h4>
    </div>
  );
};

export default ResCard;
