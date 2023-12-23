export default function Work({ handleWork }) {
  return (
    <>
      <p>Experience</p>
      <form
        action=""
        id="experience"
        className="experience flex flex-col gap-2 justify-between p-2 border-2 shadow-md"
      >
        <FormWrapper>
          <label htmlFor="work" className="">
            Company:{" "}
          </label>
          <input
            type="text"
            name="work"
            id="work"
            onChange={(e) => handleWork(e)}
          />
        </FormWrapper>
        <FormWrapper>
          <label htmlFor="title" className="">
            Job Title:{" "}
          </label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => handleWork(e)}
          />
        </FormWrapper>
        <FormWrapper>
          <label htmlFor="start" className="">
            Start Date:{" "}
          </label>
          <input
            type="text"
            name="start"
            id="start"
            onChange={(e) => handleWork(e)}
          />
        </FormWrapper>
        <FormWrapper>
          <label htmlFor="end" className="">
            End Date:{" "}
          </label>
          <input
            type="text"
            name="end"
            id="end"
            onChange={(e) => handleWork(e)}
          />
        </FormWrapper>
        <FormWrapper>
          <label htmlFor="desc" className="">
            Description:{" "}
          </label>
          <input
            type="text"
            name="desc"
            id="desc"
            onChange={(e) => handleWork(e)}
          />
        </FormWrapper>
        <div className="flex mt-2 gap-5 justify-end items-center">
          <button
            type="button"
            onClick
            className="delete bg-slate-100 p-1 px-3 text-md text-slate-900 rounded-md"
          >
            Delete
          </button>
        </div>
      </form>
    </>
  );
}

function FormWrapper({ children }) {
  return <div className="flex gap-5 justify-between">{children}</div>;
}
