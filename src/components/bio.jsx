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
          name="firstName"
          id="firstName"
          onChange={(e) => handleBio(e)}
          className="bg-slate-700"
        />
      </label>
      <label htmlFor="lastName">
        Last Name:{" "}
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={(e) => handleBio(e)}
          className="bg-slate-700"
        />
      </label>
      <label htmlFor="location">
        City:{" "}
        <input
          type="text"
          name="location"
          id="location"
          onChange={(e) => handleBio(e)}
          className="bg-slate-700"
        />
      </label>
      <label htmlFor="country">
        Country:{" "}
        <input
          type="text"
          name="country"
          id="country"
          onChange={(e) => handleBio(e)}
          className="bg-slate-700"
        />
      </label>

      <label htmlFor="email">
        Email:{" "}
        <input
          type="text"
          name="email"
          id="email"
          onChange={(e) => handleBio(e)}
          className="bg-slate-700"
        />
      </label>
    </form>
  );
}
