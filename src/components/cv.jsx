export default function Cv({ bio, education, work }) {
  return (
    <section className="flex flex-col gap-5 shadow-2xl p-5 border-2 cv bg-slate-50">
      <div className="bio flex flex-col items-end justify-end">
        <div className="flex ">
          <p className="text-xl">
            {bio.firstName} {bio.lastName}
          </p>
        </div>
        <p className="text-sm">
          {bio.location}, {bio.country}
        </p>
        <p className="text-sm">{bio.email}</p>
        <p className="text-sm">{bio.phone}</p>
      </div>
      <p className="border-b-4 border-zinc-700"></p>
      <div className="education flex justify-between items-start">
        <div>
          <p className="text-lg">{education.university}</p>
          <p className="text-sm">
            {education.degree}, {education.major}
          </p>
        </div>
        <div className="flex flex-col justify-end items-end">
          <p>
            {education.start} — {education.end}
          </p>
        </div>
      </div>
      <p className="border-b-4 border-zinc-700"></p>
      <div className="work">
        <p className="text-lg">{work.work}</p>
        <p>{work.title}</p>
        <p>
          {work.start} — {work.end}
        </p>
        <p>{work.desc}</p>
      </div>
    </section>
  );
}
