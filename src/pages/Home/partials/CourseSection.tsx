import Layout from "../../../components/Layout";
import { Coourse } from "../../../types/Course";
import { coursesList } from "../../../utils/courses";
import CourseCard from "./CourseCard";

const CourseSection = () => {
  return (
    <Layout id="courses" className="w-full bg-brand bg-opacity-10">
      <div className="custom-container flex flex-wrap justify-center items-stretch">
        <div className="basis-full px-7 mb-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-brand font-medium">
            genZdevs Courses
          </h1>
        </div>
        {coursesList.map((course: Coourse.CourseItem) => (
          <CourseCard course={course} />
        ))}
      </div>
    </Layout>
  );
};

export default CourseSection;
