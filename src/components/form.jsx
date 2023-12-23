import Bio from "./bio";
import Education from "./education";
import Work from "./work";

export default function Form({ handleBio, handleWork, handleEducation }) {
  return (
    <section id="form" className="form flex flex-col gap-3 p-10 text-slate-100">
      <section>
        <Bio handleBio={handleBio} />
      </section>
      <section className="flex flex-col">
        <Education handleEducation={handleEducation} />
        <button
          type="button"
          onClick
          className="add bg-slate-100 py-0 px-3 text-2xl text-slate-900"
        >
          +
        </button>
      </section>
      <section className="flex flex-col">
        <Work handleWork={handleWork} />
        <button
          type="button"
          onClick
          className="add bg-slate-100 py-0 px-3 text-2xl text-slate-900"
        >
          +
        </button>
      </section>
    </section>
  );
}
