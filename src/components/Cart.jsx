import { useNavigate } from "react-router-dom";

const Cart = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-[#FFF8E1] text-[#4E342E] flex flex-col items-center justify-center p-6 min-h-[80vh]">
      <h1 className="text-5xl font-extrabold mb-4 text-center">Your Cart</h1>
      <p className="text-xl text-center mb-6">Oops! Your cart is currently empty.</p>
      <div className="bg-[#4E342E] text-white p-6 rounded-lg shadow-md max-w-lg text-center">
        <p className="text-lg mb-4">Looks like you haven’t added anything to your cart yet.</p>
        <button
          className="bg-[#FFF8E1] text-[#4E342E] font-semibold py-2 px-6 rounded-lg transition duration-300"
          onClick={() => navigate('/')} // Adjust the route as needed
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
