import { useState } from "react";

const initialFullNameState = {
  firstName: "",
  lastName: "",
  email: "",
  comments: "This is a textarea",
  isFriendy: true,
  status: "",
  favColor: "",
};

const Forms = () => {
  const [formData, setFirstname] = useState(initialFullNameState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(e.target.value);

    setFirstname((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className="py-16">
      <form className="text-center flex flex-col max-w-xl mx-auto gap-8 px-8"
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleChange}
          value={formData.firstName}
          className="indent-2"
          type="text"
          placeholder="Firstname"
          name="firstName"
        />
        <input
          onChange={handleChange}
          placeholder="lastName"
          className="indent-2"
          type="text"
          name="lastName"
          value={formData.lastName}
        />
        <input
          type="text"
          placeholder="email"
          className="indent-2"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <textarea
          cols="30"
          className="indent-2"
          rows="10"
          value={formData.comments}
          onChange={handleChange}
          name="comments"
          style={{ outline: "1px solid black" }}
        />
        <div>
          <input
            type="checkbox"
            id="friendly"
            className="mr-2"
            name="isFriendy"
            checked={formData.isFriendy}
            onChange={handleChange}
          />
          <label htmlFor="friendly">Are you friendly?</label>
        </div>

        <fieldset className="text-left">
          <legend className="font-bold mb-4">Current employment status</legend>

          <input
            type="radio"
            id="unemployed"
            className="mr-2"
            name="status"
            onChange={handleChange}
            value="unemployed"
            checked={formData.status === "unemployed"}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <br />

          <input
            type="radio"
            id="part-time"
            className="mr-2"
            name="status"
            onChange={handleChange}
            value="part-time"
            checked={formData.status === "part-time"}
          />
          <label htmlFor="part-time">Part-time</label>
          <br />

          <input
            type="radio"
            id="full-time"
            className="mr-2"
            name="status"
            onChange={handleChange}
            value="full-time"
            checked={formData.status === "full-time"}
          />
          <label htmlFor="full-time">Full-time</label>
        </fieldset>
        <select
          name="favColor"
          className="px-4 py-2"
          value={formData.favColor}
          onChange={handleChange}
        >
          <option value="">-- Chosse a color --</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="black">black</option>
          <option value="blue">Blue</option>
        </select>
        <button className="py-2 text-white">Submit</button>
      </form>
    </div>
  );
};
export default Forms;
