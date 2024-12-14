import { Home } from "../../../types/Home";

const AchievementItem = ({
  achievement,
}: {
  achievement: Home.Achievements;
}) => {
  return (
    <div key={achievement.id} className="text-center">
      <h1 className={`${achievement.titleColor} text-5xl tracking-wider mb-3`}>
        {achievement.count}
        <sup>+</sup>
      </h1>
      <p className="text-sm tracking-widest">{achievement.subTitle}</p>
    </div>
  );
};

export default AchievementItem;
