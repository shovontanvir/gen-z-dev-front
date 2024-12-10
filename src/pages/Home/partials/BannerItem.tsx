const BannerItem = ({ image }: { image: string }) => {
  return (
    <div className="relative w-full h-full flex items-center px-28">
      <img src={image} alt="home banner" className="absolute inset-0" />
      <div className="relative text-white z-50 w-[50vw] h-[50vh] flex items-center">
        <div className="text-center">
          <h1 className="text-xl mb-8">Begin your Journey with</h1>
          <h1 className="text-7xl">
            gen <span className="font-eduVic">Z</span> devs
          </h1>
          <a href="#about">
            <button className="text-xl mt-10 border border-white px-10 py-2 rounded-xl bg-brand hover:tracking-widest hover:bg-white hover:text-brand transition-all duration-500">
              Learn More
            </button>
          </a>
        </div>
      </div>
      <div className="bg-black bg-opacity-70 absolute inset-0"></div>
    </div>
  );
};

export default BannerItem;
