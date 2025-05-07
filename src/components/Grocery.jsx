const Grocery = () => {
  return (
    <div className="bg-[#FFF8E1] text-[#4E342E] flex flex-col items-center justify-center p-6 min-h-[80vh]">
      <h1 className="text-5xl font-extrabold mb-4 text-center">Welcome to Our Grocery Store!</h1>
      <p className="text-xl max-w-3xl text-center mb-6">
        Discover a wide range of grocery items at great prices. From fresh produce to daily essentials, we have everything you need!
      </p>
      <div className="bg-[#4E342E] text-white p-4 rounded-lg shadow-md mt-8 max-w-lg">
        <h3 className="text-2xl font-semibold">Fresh & Organic</h3>
        <p className="mt-2 text-lg">
          Our grocery store focuses on fresh and organic products, bringing you the best quality at the most affordable prices.
        </p>
      </div>
    </div>
  );
};

export default Grocery;
