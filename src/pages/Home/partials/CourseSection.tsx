import Layout from "../../../components/Layout";
import { Coourse } from "../../../types/Course";
import { coursesList } from "../../../utils/courses";
import CourseCard from "./CourseCard";

const CourseSection = () => {
  return (
    <Layout
      id="courses"
      className="bg-brand bg-opacity-10 flex flex-wrap justify-center items-stretch"
    >
      {coursesList.map((course: Coourse.CourseItem) => (
        <CourseCard course={course} />
      ))}
    </Layout>
  );
};

export default CourseSection;
