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
      desc: "Directed company wide implementation of accessibility features to tap into a previously uncaptured market segment ",
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
        setActive={setActive}
      />
      <Cv info={state} />
    </section>
  );
}
