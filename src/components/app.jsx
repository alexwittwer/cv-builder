import { useImmer } from "use-immer";
import Cv from "./cv";
import Form from "./form";
import { useState } from "react";

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
    },
    experience: {
      work: "Amazon",
      title: "Software Architect",
      start: "2012",
      end: "Present",
      desc: "Directed company wide implementation of accessibility features to tap into a previously uncaptured market segment ",
      id: crypto.randomUUID(),
    },
  });

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

  function handleWork(e) {
    updateState((draft) => {
      draft.experience[e.target.name] = e.target.value;
    });
  }

  return (
    <section className="content flex gap-8 justify-evenly items-center max-h-screen">
      <Form
        handleBio={handleBio}
        handleWork={handleWork}
        handleEducation={handleEducation}
      />
      <Cv info={state} />
    </section>
  );
}
