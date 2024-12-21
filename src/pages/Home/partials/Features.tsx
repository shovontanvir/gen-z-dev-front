import Layout from "../../../components/Layout";
import { features } from "../../../utils/featureLists";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <Layout className="custom-container" id="features">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-brand font-medium">
        Features of genZdevs
      </h1>
      <p className="mt-5 text-justify tracking-wider">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
        consectetur beatae expedita, vitae eum minima amet quis quaerat error
        sunt aspernatur dolores sapiente? Optio consequuntur, maiores tempore
        laboriosam perspiciatis illo?
      </p>
      <div className="flex justify-center items-center flex-wrap mt-10">
        {features.map((feature) => (
          <FeatureCard key={feature.id} img={feature.img} text={feature.text} />
        ))}
      </div>
    </Layout>
  );
};

export default Features;
