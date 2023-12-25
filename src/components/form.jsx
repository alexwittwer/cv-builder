import Bio from "./bio";
import Education from "./education";
import Work from "./work";

export default function Form({
  handleBio,
  handleWork,
  handleEducation,
  addEducation,
  addExperience,
  removeEducation,
  removeExperience,
  deleteForm,
  addForm,
  state,
}) {
  const { additionalExperience } = state.experience;
  const { additionalEducation } = state.education;

  return (
    <section id="form" className="form flex flex-col gap-3 p-10 text-slate-100">
      <section>
        <Bio handleBio={handleBio} />
      </section>
      <section className="flex flex-col">
        <Education
          handleEducation={handleEducation}
          removeEducation={removeEducation}
        />
        {additionalEducation.map((education, index) => {
          return (
            <Education
              key={index}
              handleEducation={handleEducation}
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
        <Work handleWork={handleWork} removeExperience={removeExperience} />
        {additionalExperience.map((work, index) => {
          return (
            <Work
              key={index}
              handleWork={handleWork}
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
