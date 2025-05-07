const Contact = () => {
  return (
    <div className="bg-[#FFF8E1] text-[#4E342E] flex flex-col items-center justify-center p-6 min-h-[80vh]">
      <h1 className="text-5xl font-extrabold mb-4 text-center">Contact Us</h1>
      <p className="text-xl max-w-3xl text-center mb-6">
        We would love to hear from you! If you have any questions, comments, or feedback, feel free to reach out to us.
      </p>
      <div className="bg-[#4E342E] text-white p-4 rounded-lg shadow-md mt-8 max-w-lg">
        <h3 className="text-2xl font-semibold">Email Us</h3>
        <p className="mt-2 text-lg">
          You can reach us at <a href="mailto:contact@ourapp.com" className="underline text-[#FFF8E1]">contact@ourapp.com</a>
        </p>
        <h3 className="text-2xl font-semibold mt-4">Call Us</h3>
        <p className="mt-2 text-lg">
          Or you can call us at <span className="text-[#FFF8E1]">+1-800-123-4567</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
