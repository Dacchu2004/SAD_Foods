// About Page
const About = () => {
  return (
    <div className="bg-[#FFF8E1] text-[#4E342E] flex flex-col items-center justify-center p-6 min-h-[80vh]">
      <h1 className="text-5xl font-extrabold mb-4 text-center">About Us</h1>
      <h2 className="text-xl max-w-3xl text-center mb-6">
        Welcome to our application! We aim to provide the best service to make your experience amazing. Our team is dedicated to bringing you the best products and services.
      </h2>
      <p className="text-lg text-center mb-6 max-w-2xl">
        We work hard every day to ensure that you get the best deals, convenience, and support. Whether you're shopping for groceries or exploring new restaurants, we're here to help.
      </p>
      <div className="bg-[#4E342E] text-white p-4 rounded-lg shadow-md mt-8">
        <h3 className="text-2xl font-semibold">Our Mission</h3>
        <p className="mt-2 text-lg">
          Our mission is to offer a user-friendly platform where users can explore and purchase groceries, order food, and find all their needs in one place.
        </p>
      </div>
    </div>
  );
};

export default About;
