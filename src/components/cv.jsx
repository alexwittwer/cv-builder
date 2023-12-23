export default function Cv({ info = { info } }) {
  return (
    <section className="flex flex-col gap-5 shadow-2xl p-5 border-2 cv bg-slate-50">
      <div className="bio flex flex-col items-end justify-end">
        <div className="flex ">
          <p className="text-xl">
            {info.firstName} {info.lastName}
          </p>
        </div>
        <p className="text-sm">
          {info.location}, {info.country}
        </p>
        <p className="text-sm">{info.email}</p>
        <p className="text-sm">{info.phone}</p>
      </div>
      <p className="border-b-4 border-zinc-700"></p>
      <div className="education flex justify-between items-start">
        <div>
          <p className="text-lg">{info.education.university}</p>
          <p className="text-sm">
            {info.education.degree}, {info.education.major}
          </p>
        </div>
        <div className="flex flex-col justify-end items-end">
          <p>
            {info.education.start} — {info.education.end}
          </p>
        </div>
      </div>
      <p className="border-b-4 border-zinc-700"></p>
      <div className="work">
        <p className="text-lg">{info.experience.work}</p>
        <p>{info.experience.title}</p>
        <p>
          {info.experience.start} — {info.experience.end}
        </p>
        <p>{info.experience.desc}</p>
      </div>
    </section>
  );
}
