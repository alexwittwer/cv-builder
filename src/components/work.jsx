/* eslint-disable react/prop-types */
import { useState } from "react";
import caret from "../assets/caret.png";
import upcaret from "../assets/upcaret.png";

export default function Work({
  propkey,
  handleExperience,
  removeExperience,
  info,
  added,
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
        <p>Experience</p>
        <img src={active ? upcaret : caret} width={"30px"} />
      </h1>
      {active ? (
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
              value={added ? info.work : info.experience.work}
              onChange={(e) => handleExperience(e, propkey)}
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
              value={added ? info.title : info.experience.title}
              onChange={(e) => handleExperience(e, propkey)}
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
              value={added ? info.start : info.experience.start}
              onChange={(e) => handleExperience(e, propkey)}
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
              value={added ? info.end : info.experience.end}
              onChange={(e) => handleExperience(e, propkey)}
            />
          </FormWrapper>
          <FormWrapper>
            <label htmlFor="desc" className="">
              Description:{" "}
            </label>
            <textarea
              type="text"
              name="desc"
              id="desc"
              value={added ? info.desc : info.experience.desc}
              onChange={(e) => handleExperience(e, propkey)}
            />
          </FormWrapper>
          {added ? (
            <div className="flex my-1 gap-5 justify-end items-center">
              <button
                type="button"
                onClick={() => removeExperience(propkey)}
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
