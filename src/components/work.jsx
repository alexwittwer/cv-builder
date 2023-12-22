export default function Work({ handleWork }) {
  /*
    work: "Amazon",
    title: "Software Architect",
    start: "2012",
    end: "Present",
    desc: "Directed company wide implementation of accessibility features to tap into a previously uncaptured market segment ",
    */

  return (
    <form
      action=""
      id="work"
      className="work flex flex-col justify-between items-center bg-teal-700 text-teal-50"
    >
      <label htmlFor="work" className="">
        Company:{" "}
        <input
          type="text"
          name="work"
          id="work"
          onChange={(e) => handleWork(e)}
          className="bg-slate-700"
        />
      </label>
      <label htmlFor="title" className="">
        Job Title:{" "}
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => handleWork(e)}
          className="bg-slate-700"
        />
      </label>
      <label htmlFor="start" className="">
        Start Date:{" "}
        <input
          type="text"
          name="start"
          id="start"
          onChange={(e) => handleWork(e)}
          className="bg-slate-700"
        />
      </label>
      <label htmlFor="end" className="">
        End Date:{" "}
        <input
          type="text"
          name="end"
          id="end"
          onChange={(e) => handleWork(e)}
          className="bg-slate-700"
        />
      </label>
      <label htmlFor="desc" className="">
        Description:{" "}
        <input
          type="text"
          name="desc"
          id="desc"
          onChange={(e) => handleWork(e)}
          className="bg-slate-700"
        />
      </label>
    </form>
  );
}
