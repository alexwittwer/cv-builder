/* eslint-disable react/prop-types */

function CVBio({ info }) {
  return (
    <div className="bio flex flex-col items-end justify-end">
      <div className="flex ">
        <p className="text-xl">
          {info.firstName} {info.lastName}
        </p>
      </div>
      <p className="text-sm">
        {info.location}
        {info.location ? "," : ""} {info.country}
      </p>
      <p className="text-sm">{info.email}</p>
      <p className="text-sm">{info.phone}</p>
    </div>
  );
}

function CVEducation({ info }) {
  return (
    <div className="flex flex-col">
      <div className="education flex justify-between items-start">
        <div>
          <p className="text-lg">{info.education.university}</p>
          <p className="text-sm">
            {info.education.degree}
            {info.education.degree !== "" ? "," : ""} {info.education.major}
          </p>
        </div>
        <div className="flex flex-col justify-end items-end">
          <p>
            {info.education.start}
            {info.education.start !== "" ? "—" : ""} {info.education.end}
          </p>
        </div>
      </div>
      {info.education.additionalEducation.map((edu) => {
        return (
          <div
            key={edu.id}
            className="education flex justify-between items-start"
          >
            <div>
              <p className="text-lg">{edu.university}</p>
              <p className="text-sm">
                {edu.degree}
                {edu.degree !== "" ? "," : ""} {edu.major}
              </p>
            </div>
            <div className="flex flex-col justify-end items-end">
              <p>
                {edu.start} {edu.start !== "" ? "—" : ""} {edu.end}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CVExperience({ info }) {
  return (
    <div className="work">
      <p className="text-lg">{info.experience.work}</p>
      <p>{info.experience.title}</p>
      <p>
        {info.experience.start} {info.experience.start !== "" ? "—" : ""}{" "}
        {info.experience.end}
      </p>
      <p>{info.experience.desc}</p>
      {info.experience.additionalExperience.map((experience) => {
        return (
          <div key={experience.id}>
            <p className="text-lg">{experience.work}</p>
            <p>{experience.title}</p>
            <p>
              {experience.start} {experience.start !== "" ? "—" : ""}{" "}
              {experience.end}
            </p>
            <p>{experience.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export default function Cv({ info = { info } }) {
  return (
    <section className="flex flex-col gap-5 shadow-2xl p-5 border-2 cv bg-slate-50">
      <CVBio info={info} />
      <p className="border-b-4 border-zinc-700"></p>
      <CVEducation info={info} />
      <p className="border-b-4 border-zinc-700"></p>
      <CVExperience info={info} />
    </section>
  );
}
