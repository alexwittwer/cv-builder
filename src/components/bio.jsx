import { useState } from "react";

export default function Bio({ handleLocation, handleName }) {
  return (
    <form action="">
      <label htmlFor="name">
        Name:
        <input type="text" name="name" id="name" onChange={handleName} />
      </label>
      <label htmlFor="location">
        Location:
        <input
          type="text"
          name="location"
          id="location"
          onChange={handleLocation}
        />
      </label>
    </form>
  );
}
