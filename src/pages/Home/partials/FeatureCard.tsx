/* eslint-disable @typescript-eslint/no-explicit-any */
const FeatureCard = ({ img, text }: { img: any; text: string }) => {
  return (
    <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 text-center my-10">
      <img
        src={img}
        alt="feature img"
        width={64}
        height={64}
        className="mx-auto"
      />
      <p className="mt-8 font-medium">{text}</p>
    </div>
  );
};

export default FeatureCard;
