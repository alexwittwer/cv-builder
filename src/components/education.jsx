/* eslint-disable react/prop-types */
import { useState } from "react";
import caret from "../assets/caret.png";
import upcaret from "../assets/upcaret.png";

export default function Education({
  propkey,
  handleEducation,
  removeEducation,
  added,
  info,
}) {
  const [active, setActive] = useState(false);

  function updateActive() {
    return active ? setActive(false) : setActive(true);
  }

  return (
    <>
      <h1
        onClick={updateActive}
        className={`flex justify-between education-header cursor-pointer min-w-96 ${
          added ? "" : "rounded-t-md"
        }`}
      >
        <p>Education</p>
        <img src={active ? upcaret : caret} width={"30px"} />
      </h1>
      {active ? (
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
              value={added ? info.university : info.education.university}
              onChange={(e) => handleEducation(e, propkey)}
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
              value={added ? info.start : info.education.start}
              onChange={(e) => handleEducation(e, propkey)}
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
              value={added ? info.end : info.education.end}
              onChange={(e) => handleEducation(e, propkey)}
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
              value={added ? info.major : info.education.major}
              onChange={(e) => handleEducation(e, propkey)}
            />
          </FormWrapper>
          <FormWrapper>
            <label htmlFor="degree" className="">
              Degree conferred:{" "}
            </label>
            <select
              type="text"
              name="degree"
              id="degree"
              value={added ? info.degree : info.education.degree}
              onChange={(e) => handleEducation(e, propkey)}
              className="text-slate-900"
            >
              <option value="">None</option>
              <option value="B.A.">B.A.</option>
              <option value="B.S.">B.S.</option>
              <option value="M.A.">M.A..</option>
              <option value="M.S.">M.S.</option>
              <option value="Ph.D">PhD</option>
            </select>
          </FormWrapper>
          {added ? (
            <div className="flex my-1 gap-5 justify-end items-center">
              <button
                type="button"
                onClick={() => removeEducation(propkey)}
                className="delete bg-slate-100 p-1 px-3 text-md text-slate-900 rounded-md"
              >
                Delete
              </button>
            </div>
          ) : (
            ""
          )}
        </form>
      ) : (
        ""
      )}
    </>
  );
}

function FormWrapper({ children }) {
  return <div className="flex gap-5 justify-between">{children}</div>;
}
