/* eslint-disable react/prop-types */
import { useState } from "react";
import caret from "../assets/caret.png";
import upcaret from "../assets/upcaret.png";

export default function Bio({ handleBio, info }) {
  const [active, setActive] = useState(true);

  function updateActive() {
    return active ? setActive(false) : setActive(true);
  }

  return (
    <div>
      <h1
        onClick={updateActive}
        className="flex justify-between bio-header cursor-pointer rounded-t-md min-w-96"
      >
        <p>Personal Info</p>
        <img src={active ? upcaret : caret} width={"30px"} />
      </h1>
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
              value={info.firstName}
              onChange={(e) => handleBio(e)}
            />
          </FormWrapper>
          <FormWrapper>
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={info.lastName}
              onChange={(e) => handleBio(e)}
            />
          </FormWrapper>
          <FormWrapper>
            <label htmlFor="location">City: </label>
            <input
              type="text"
              name="location"
              id="location"
              value={info.location}
              onChange={(e) => handleBio(e)}
            />
          </FormWrapper>
          <FormWrapper>
            <label htmlFor="country">Country: </label>
            <input
              type="text"
              name="country"
              id="country"
              value={info.country}
              onChange={(e) => handleBio(e)}
            />
          </FormWrapper>
          <FormWrapper>
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              id="email"
              value={info.email}
              onChange={(e) => handleBio(e)}
            />
          </FormWrapper>
          <FormWrapper>
            <label htmlFor="phone">Phone: </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={info.phone}
              onChange={(e) => handleBio(e)}
            />
          </FormWrapper>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

function FormWrapper({ children }) {
  return <div className="flex gap-5 justify-between">{children}</div>;
}
