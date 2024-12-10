import { TypeAnimation } from "react-type-animation";

import Layout from "../../../components/Layout";
import { HomeImages } from "../../../utils/images";

const About = () => {
  return (
    <Layout className=" flex items-center" id="about">
      <div className="basis-1/2 pr-24">
        <h1 className="text-3xl">
          With <span className="text-brand">genZdevs</span> Become the Next
        </h1>
        <div className="text-brand mt-5 mb-10">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Developer",
              1000,
              "Freelancer",
              1000,
              "Tech enthusiast",
              1000,
              "Software Developer",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "3em" }}
            repeat={Infinity}
          />
        </div>
        <p className="text-sm leading-6 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          reiciendis quas delectus doloremque a nam non laudantium hic dolor
          numquam, ipsum molestias ullam mollitia sequi maiores officia minus
          libero ipsa, eligendi omnis? Adipisci enim illum, eos sequi eius
          doloribus iusto asperiores nesciunt, voluptatem, ratione ad id facere
          ea dolore reiciendis.
        </p>
        <a href="#courses">
          <button className="px-10 py-2 bg-brand text-white hover:bg-white hover:border hover:border-brand hover:text-brand transition-all duration-700 rounded-full mt-8">
            View Available Courses
          </button>
        </a>
      </div>
      <div className="basis-1/2 rounded-lg overflow-clip">
        <img src={HomeImages.ABOUT} alt="about genZdevs" />
      </div>
    </Layout>
  );
};

export default About;
