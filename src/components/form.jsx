import Bio from "./bio";

export default function Form({ handleBio, handleWork, handleEducation }) {
  return (
    <section id="form" className="form flex flex-col">
      <Bio handleBio={handleBio} />
    </section>
  );
}
