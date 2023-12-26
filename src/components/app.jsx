import Cv from "./cv";
import Form from "./form";
import { useState } from "react";
import { useImmer } from "use-immer";

export default function App() {
  const [state, updateState] = useImmer({
    firstName: "John",
    lastName: "Smith",
    location: "Philadelphia",
    country: "USA",
    email: "jsmith@gmail.com",
    phone: "850-867-5309",
    education: {
      university: "Temple University",
      start: "2008",
      end: "2012",
      major: "Computer Science",
      degree: "B.S.",
      id: crypto.randomUUID(),
      additionalEducation: [],
    },
    experience: {
      work: "Amazon",
      title: "Software Architect",
      start: "2012",
      end: "Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      id: crypto.randomUUID(),
      additionalExperience: [],
    },
  });
  const [active, setActive] = useState(false);

  function handleBio(e) {
    updateState((draft) => {
      draft[e.target.name] = e.target.value;
    });
  }

  function handleEducation(e) {
    updateState((draft) => {
      draft.education[e.target.name] = e.target.value;
    });
  }

  function handleAdditionalEducation(e, key) {
    updateState((draft) => {
      const education = draft.education.additionalEducation.find(
        (edu) => edu.id === key
      );
      education[e.target.name] = e.target.value;
    });
  }

  function handleExperience(e) {
    updateState((draft) => {
      draft.experience[e.target.name] = e.target.value;
    });
  }

  function handleAdditionalExperience(e, key) {
    updateState((draft) => {
      const work = draft.experience.additionalExperience.find(
        (exp) => exp.id === key
      );
      work[e.target.name] = e.target.value;
    });
  }

  function addEducation() {
    updateState((draft) => {
      const newEducation = {
        university: "",
        start: "",
        end: "",
        major: "",
        degree: "",
        id: crypto.randomUUID(),
      };
      draft.education.additionalEducation.push(newEducation);
    });
  }

  function removeEducation(key) {
    updateState((draft) => {
      draft.education.additionalEducation =
        draft.education.additionalEducation.filter(
          (education) => education.id !== key
        );
    });
  }

  function addExperience() {
    updateState((draft) => {
      const newExperience = {
        work: "",
        title: "",
        start: "",
        end: "",
        desc: "",
        id: crypto.randomUUID(),
      };
      draft.experience.additionalExperience.push(newExperience);
    });
  }

  function removeExperience(key) {
    updateState((draft) => {
      draft.experience.additionalExperience =
        draft.experience.additionalExperience.filter(
          (experience) => experience.id !== key
        );
    });
  }

  return (
    <div className="flex justify-center items-center">
      <section className="content flex gap-8 justify-evenly items-center max-h-screen">
        <Form
          handleBio={handleBio}
          handleExperience={handleExperience}
          handleEducation={handleEducation}
          handleAdditionalEducation={handleAdditionalEducation}
          handleAdditionalExperience={handleAdditionalExperience}
          addEducation={addEducation}
          addExperience={addExperience}
          removeEducation={removeEducation}
          removeExperience={removeExperience}
          state={state}
        />
        <Cv info={state} />
        <div className="mobile text-slate-50">Not available on mobile</div>
      </section>
    </div>
  );
}
