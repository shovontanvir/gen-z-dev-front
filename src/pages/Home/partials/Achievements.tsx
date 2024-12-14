import Layout from "../../../components/Layout";
import { achievementLists } from "../../../utils/achievement";
import AchievementItem from "./AchievementItem";

const Achievements = () => {
  return (
    <Layout
      className="flex flex-wrap justify-between items-center pt-0"
      id="achievements"
    >
      {achievementLists.map((achievement) => (
        <AchievementItem achievement={achievement} />
      ))}
    </Layout>
  );
};

export default Achievements;
