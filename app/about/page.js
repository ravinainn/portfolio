import Connect from "../_components/about/connect";
import Experience from "../_components/about/Experience";
import SkillSet from "../_components/about/SkillSet";

export default function Page() {
  return (
    <div className="w-4/5 mx-auto pb-20">
      <Connect />
      <Experience />
      <SkillSet />
    </div>
  );
}
