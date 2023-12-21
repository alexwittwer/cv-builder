export default function Bio({ handleBio }) {
  return (
    <form
      action=""
      className="flex flex-col justify-between items-center bg-teal-700 text-teal-50"
    >
      <label htmlFor="name" className="">
        First Name:{" "}
        <input
          type="text"
          name="name"
          id="firstName"
          onChange={(e) => handleBio("firstName", e)}
          className="bg-slate-700"
        />
      </label>
      <label htmlFor="location">
        Last Name:{" "}
        <input
          type="text"
          name="location"
          id="lastName"
          onChange={(e) => handleBio("lastName", e)}
          className="bg-slate-700"
        />
      </label>
    </form>
  );
}
