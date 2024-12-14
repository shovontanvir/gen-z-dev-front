const BannerItem = ({ image }: { image: string }) => {
  return (
    <div className="relative w-full h-full flex items-end px-10 md:px-28">
      <img
        src={image}
        alt="home banner"
        className="absolute inset-0 w-full h-full"
      />
      <div className="relative text-white z-50 w-[50vw] h-[30vh] md:h-[50vh] flex items-center">
        <div>
          <h1 className="text-xl md:text-6xl tracking-wider font-kalam">
            Begin Your <br /> Journey with
          </h1>
          <p className="text-2xl md:text-6xl font-semibold italic tracking-widest">
            GEN<span className="text-3xl md:text-8xl">Z</span>DEVS
          </p>
          <a href="#about">
            <button className="text-xs md:text-sm mt-5 px-8 md:px-10 py-2 rounded-xl bg-white hover:tracking-widest text-brand hover:text-brand transition-all duration-500">
              Learn More
            </button>
          </a>
        </div>
      </div>
      <div className="bg-black bg-opacity-30 absolute inset-0"></div>
    </div>
  );
};

export default BannerItem;
