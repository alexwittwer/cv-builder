export default function Education({ handleEducation }) {
  return (
    <>
      <p>Education</p>
      <form
        action=""
        id="education"
        className="education flex flex-col gap-2 justify-between p-2 border-2 shadow-md"
      >
        <FormWrapper>
          <label htmlFor="university" className="">
            University:{" "}
          </label>
          <input
            type="text"
            name="university"
            id="university"
            onChange={(e) => handleEducation(e)}
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
            onChange={(e) => handleEducation(e)}
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
            onChange={(e) => handleEducation(e)}
          />
        </FormWrapper>
        <FormWrapper>
          <label htmlFor="major" className="">
            Major:{" "}
          </label>
          <input
            type="text"
            name="major"
            id="major"
            onChange={(e) => handleEducation(e)}
          />
        </FormWrapper>
        <FormWrapper>
          <label htmlFor="degree" className="">
            Degree:{" "}
          </label>
          <input
            type="text"
            name="degree"
            id="degree"
            onChange={(e) => handleEducation(e)}
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
