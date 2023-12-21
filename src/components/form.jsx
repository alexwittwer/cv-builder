import { useState } from "react";
import Bio from "./bio";

export default function Form({ handleLocation, handleName }) {
  return (
    <section id="form" className="form">
      <Bio handleLocation={handleLocation} handleName={handleName} />
      <section></section>
    </section>
  );
}
