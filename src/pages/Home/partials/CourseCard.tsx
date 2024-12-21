import { Coourse } from "../../../types/Course";

const CourseCard = ({ course }: { course: Coourse.CourseItem }) => {
  return (
    <div className="basis-full sm:basis-1/2 lg:basis-1/3 sm:px-4 lg:px-8 my-5 cursor-pointer">
      <div className="overflow-clip bg-white group">
        <img src={course.image} alt={course.courseName} />
        <div className="p-5 group-hover:bg-brand group-hover:bg-opacity-80 transition-all duration-300">
          <h1 className="text-xl text-brand font-semibold tracking-wider mb-3 leading-8 group-hover:text-white">
            {course.courseName}
          </h1>
          <p className="text-sm text-justify  tracking-wider group-hover:text-white">
            {course.courseDescription}
          </p>
          <div className="w-full flex justify-end">
            <button className="text-sm mt-8 text-blue-600 underline group-hover:text-white">
              Go to course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
