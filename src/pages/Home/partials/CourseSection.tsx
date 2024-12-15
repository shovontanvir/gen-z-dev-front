import Layout from "../../../components/Layout";
import { Coourse } from "../../../types/Course";
import { coursesList } from "../../../utils/courses";
import CourseCard from "./CourseCard";

const CourseSection = () => {
  return (
    <Layout id="courses" className="w-full bg-brand bg-opacity-10">
      <div className="container mx-auto flex flex-wrap justify-center items-stretch">
        {coursesList.map((course: Coourse.CourseItem) => (
          <CourseCard course={course} />
        ))}
      </div>
    </Layout>
  );
};

export default CourseSection;
