export default function Cv({ bio, education, work }) {
  return (
    <section className="grid gap-5">
      <div className="bio">
        <p>{bio.firstName}</p>
        <p>{bio.lastName}</p>
        <p>
          {bio.location}, {bio.country}
        </p>
        <p>{bio.email}</p>
      </div>
      <div className="education">
        <p>{education.university}</p>
        <p>{education.start}</p>
        <p>{education.end}</p>
        <p>{education.major}</p>
        <p>{education.degree}</p>
      </div>
      <div className="work">
        <p>{work.work}</p>
        <p>{work.title}</p>
        <p>{work.start}</p>
        <p>{work.end}</p>
        <p>{work.desc}</p>
      </div>
    </section>
  );
}
