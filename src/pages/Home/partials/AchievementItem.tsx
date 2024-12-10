import { Home } from "../../../types/Home";

const AchievementItem = ({
  achievement,
}: {
  achievement: Home.Achievements;
}) => {
  return (
    <div key={achievement.id} className="text-center">
      <h1 className={`${achievement.titleColor} text-4xl mb-3`}>
        {achievement.count} <sup>+</sup>
      </h1>
      <p className="text-sm">{achievement.subTitle}</p>
    </div>
  );
};

export default AchievementItem;
