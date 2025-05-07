import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const isOnline = useOnlineStatus();

  return (
    <div className="bg-[#4E342E] text-[#FFF8E1] flex items-center justify-evenly border border-black">
      <div className="logo-container ml-[20px]">
        <img
          className="w-[80px] h-[80px] m-[5px]"
          src="/Logo.png"
          alt="logo"
        />
      </div>
      <div className="text-[#FFF8E1] w-full">
        <ul className="text-inherit p-0 flex list-none justify-evenly items-center">
          <li className="p-[10px] m-[10px]">
            <Link
              to="/"
              className="no-underline text-inherit text-[20px] font-medium"
            >
              Home
            </Link>
          </li>
          <li className="p-[10px] m-[10px]">
            <Link
              to="/about"
              className="no-underline text-inherit text-[20px] font-medium"
            >
              About Us
            </Link>
          </li>
          <li className="p-[10px] m-[10px]">
            <Link
              to="/contact"
              className="no-underline text-inherit text-[20px] font-medium"
            >
              Contact Us
            </Link>
          </li>
          <li className="p-[10px] m-[10px]">
            <Link
              to="/grocery"
              className="no-underline text-inherit text-[20px] font-medium"
            >
              Grocery
            </Link>
          </li>
          <li className="p-[10px] m-[10px]">
            <Link
              to="/cart"
              className="no-underline text-inherit text-[20px] font-medium"
            >
              Cart
            </Link>
          </li>
          <li className="p-[10px] m-[10px] text-[20px] font-medium">
            Online Status: {isOnline ? "🟢" : "🔴"}
          </li>
          <li className="p-[10px] m-[10px]">
            <button
              className="bg-[#FFF8E1] text-[#4E342E] px-[20px] py-[10px] rounded-lg cursor-pointer text-[20px] font-medium"
              onClick={() =>
                btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
