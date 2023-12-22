import Cv from "./cv";
import Form from "./form";
import { useState } from "react";

export default function App() {
  const [bio, setBio] = useState({
    firstName: "John",
    lastName: "Smith",
    location: "Philadelphia",
    country: "USA",
    email: "jsmith@gmail.com",
  });
  const [education, setEducation] = useState({
    university: "Temple University",
    start: "2008",
    end: "2012",
    major: "Computer Science",
    degree: "Bachelors",
  });
  const [work, setWork] = useState({
    work: "Amazon",
    title: "Software Architect",
    start: "2012",
    end: "Present",
    desc: "Directed company wide implementation of accessibility features to tap into a previously uncaptured market segment ",
  });

  function handleBio(e) {
    const newBio = { ...bio };
    newBio[e.target.name] = e.target.value;
    setBio(newBio);
  }

  function handleEducation(e) {
    const newEducation = { ...education };
    newEducation[e.target.name] = e.target.value;
    setEducation(newEducation);
  }

  function handleWork(e) {
    const newWork = { ...work };
    newWork[e.target.name] = e.target.value;
    setWork(newWork);
  }

  return (
    <section className="grid grid-cols-2">
      <Form
        handleBio={handleBio}
        handleWork={handleWork}
        handleEducation={handleEducation}
      />
      <Cv bio={bio} work={work} education={education} />
    </section>
  );
}
