/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Bio({ handleBio }) {
  const [active, setActive] = useState(false);

  function updateActive() {
    return active ? setActive(false) : setActive(true);
  }

  return (
    <>
      <p onClick={updateActive}>Personal Info</p>
      {active ? (
        <form
          action=""
          className="bio flex flex-col gap-2 justify-between p-2 border-2 shadow-md"
        >
          <FormWrapper>
            <label htmlFor="name" className="">
              First Name:{" "}
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={(e) => handleBio(e)}
            />
          </FormWrapper>
          <FormWrapper>
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={(e) => handleBio(e)}
            />
          </FormWrapper>
          <FormWrapper>
            <label htmlFor="location">City: </label>
            <input
              type="text"
              name="location"
              id="location"
              onChange={(e) => handleBio(e)}
            />
          </FormWrapper>
          <FormWrapper>
            <label htmlFor="country">Country: </label>
            <input
              type="text"
              name="country"
              id="country"
              onChange={(e) => handleBio(e)}
            />
          </FormWrapper>
          <FormWrapper>
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => handleBio(e)}
            />
          </FormWrapper>
          <FormWrapper>
            <label htmlFor="phone">Phone: </label>
            <input
              type="text"
              name="phone"
              id="phone"
              onChange={(e) => handleBio(e)}
            />
          </FormWrapper>
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
