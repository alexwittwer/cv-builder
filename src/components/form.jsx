import Bio from "./bio";
import Education from "./education";
import Work from "./work";

export default function Form({
  handleBio,
  handleExperience,
  handleEducation,
  addEducation,
  addExperience,
  removeEducation,
  removeExperience,
  handleAdditionalExperience,
  handleAdditionalEducation,
  state,
}) {
  const { additionalExperience } = state.experience;
  const { additionalEducation } = state.education;

  return (
    <section
      id="form"
      className="form flex flex-col gap-3 p-10 h-screen text-slate-100 overflow-y-scroll"
    >
      <section>
        <Bio handleBio={handleBio} />
      </section>
      <section className="flex flex-col">
        <Education
          handleEducation={handleEducation}
          removeEducation={removeEducation}
        />
        {additionalEducation.map((education) => {
          return (
            <Education
              key={education.id}
              propkey={education.id}
              handleEducation={handleAdditionalEducation}
              removeEducation={removeEducation}
            />
          );
        })}
        <button
          type="button"
          onClick={addEducation}
          className="add bg-slate-100 py-0 px-3 text-2xl text-slate-900"
        >
          +
        </button>
      </section>
      <section className="flex flex-col">
        <Work
          handleExperience={handleExperience}
          removeExperience={removeExperience}
        />
        {additionalExperience.map((work) => {
          console.log(work.id);
          return (
            <Work
              key={work.id}
              propkey={work.id}
              handleExperience={handleAdditionalExperience}
              removeExperience={removeExperience}
            />
          );
        })}
        <button
          type="button"
          onClick={addExperience}
          className="add bg-slate-100 py-0 px-3 text-2xl text-slate-900"
        >
          +
        </button>
      </section>
    </section>
  );
}
