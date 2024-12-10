import { Coourse } from "../../../types/Course";

const CourseCard = ({ course }: { course: Coourse.CourseItem }) => {
  return (
    <div className="basis-1/4 p-2 group cursor-pointer">
      <div className="border border-brand rounded-lg overflow-clip bg-white">
        <img
          src={course.image}
          alt={course.courseName}
          className="rounded-t-lg"
        />
        <div className="p-5 group-hover:bg-brand group-hover:bg-opacity-80 transition-all duration-500">
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
