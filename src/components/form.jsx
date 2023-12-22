import Bio from "./bio";
import Education from "./education";
import Work from "./work";

export default function Form({ handleBio, handleWork, handleEducation }) {
  return (
    <section id="form" className="form flex flex-col gap-5">
      <Bio handleBio={handleBio} />
      <Education handleEducation={handleEducation} />
      <Work handleWork={handleWork} />
    </section>
  );
}
