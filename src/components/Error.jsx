import { useRouteError, useNavigate } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-[#FFF8E1] flex items-center justify-center">
      <div className="bg-white text-[#4E342E] p-8 rounded-2xl shadow-2xl max-w-md text-center">
        <h1 className="text-6xl font-black text-[#D32F2F] mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold mb-2">Something went wrong</h2>
        <p className="text-lg mb-4">{err.status} — {err.statusText}</p>
        {err.data && <p className="text-md italic text-gray-600 mb-6">{err.data}</p>}
        <button
          onClick={() => navigate("/")}
          className="bg-[#D32F2F] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#B71C1C] transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Error;
