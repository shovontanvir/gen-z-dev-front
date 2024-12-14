import { Home } from "../../../types/Home";

const AchievementItem = ({
  achievement,
}: {
  achievement: Home.Achievements;
}) => {
  return (
    <div
      key={achievement.id}
      className="basis-full sm:basis-1/2 md:basis-1/4 lg:basis-1/5 text-center my-5"
    >
      <h1
        className={`${achievement.titleColor} text-5xl font-semibold tracking-wider mb-3`}
      >
        {achievement.count}
        <sup>+</sup>
      </h1>
      <p className="text-sm tracking-widest">{achievement.subTitle}</p>
    </div>
  );
};

export default AchievementItem;
