import Cv from "./cv";
import Form from "./form";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  function handleLocation(e) {
    setLocation(e.target.value);
  }

  function handleName(e) {
    setName(e.target.value);
  }

  return (
    <section className="grid grid-cols-2">
      <Form handleLocation={handleLocation} handleName={handleName} />
      <Cv name={name} location={location} />
    </section>
  );
}
