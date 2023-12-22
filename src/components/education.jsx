export default function Education({ handleEducation }) {
  return (
    <form
      action=""
      id="education"
      className="education flex flex-col justify-between items-center bg-teal-700 text-teal-50"
    >
      <label htmlFor="university" className="">
        University:{" "}
        <input
          type="text"
          name="university"
          id="university"
          onChange={(e) => handleEducation(e)}
          className="bg-slate-700"
        />
      </label>
      <label htmlFor="start" className="">
        Start Date:{" "}
        <input
          type="text"
          name="start"
          id="start"
          onChange={(e) => handleEducation(e)}
          className="bg-slate-700"
        />
      </label>
      <label htmlFor="end" className="">
        End Date:{" "}
        <input
          type="text"
          name="end"
          id="end"
          onChange={(e) => handleEducation(e)}
          className="bg-slate-700"
        />
      </label>
      <label htmlFor="major" className="">
        Major:{" "}
        <input
          type="text"
          name="major"
          id="major"
          onChange={(e) => handleEducation(e)}
          className="bg-slate-700"
        />
      </label>
      <label htmlFor="degree" className="">
        Degree:{" "}
        <input
          type="text"
          name="degree"
          id="degree"
          onChange={(e) => handleEducation(e)}
          className="bg-slate-700"
        />
      </label>
    </form>
  );
}
