/* eslint-disable react/prop-types */
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
      className="form flex flex-col gap-2 p-8 h-screen text-slate-100 "
    >
      <>
        <Bio handleBio={handleBio} info={state} />
      </>
      <div className="flex flex-col">
        <Education
          handleEducation={handleEducation}
          removeEducation={removeEducation}
          info={state}
          isActive={false}
        />
        {additionalEducation.map((education) => {
          return (
            <div key={education.id}>
              <Education
                key={education.id}
                propkey={education.id}
                handleEducation={handleAdditionalEducation}
                removeEducation={removeEducation}
                info={education}
                added={true}
                isActive={true}
              />
            </div>
          );
        })}
        <button
          type="button"
          onClick={addEducation}
          className="add bg-slate-100 py-0 px-3 text-2xl text-slate-900"
        >
          +
        </button>
      </div>
      <div className="flex flex-col">
        <Work
          handleExperience={handleExperience}
          removeExperience={removeExperience}
          info={state}
          isActive={false}
        />
        {additionalExperience.map((work) => {
          return (
            <div key={work.id}>
              <Work
                key={work.id}
                propkey={work.id}
                handleExperience={handleAdditionalExperience}
                removeExperience={removeExperience}
                info={work}
                added={true}
                isActive={true}
              />
            </div>
          );
        })}
        <button
          type="button"
          onClick={addExperience}
          className="add bg-slate-100 py-0 px-3 text-2xl text-slate-900"
        >
          +
        </button>
      </div>
    </section>
  );
}
