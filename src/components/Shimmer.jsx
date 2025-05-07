const Shimmer = () => {
    return (
      <div className="flex flex-wrap mt-[40px] w-full justify-center">
        {Array(20).fill(0).map((_, i) => (
          <div
            key={i}
            className="bg-[rgba(211,211,211,0.647)] m-[15px] p-[10px] w-[350px] h-[450px] rounded-[15px] shadow-[0_2px_6px_rgba(0,0,0,0.15)]"
          ></div>
        ))}
      </div>
    );
  };
  
  export default Shimmer;
  