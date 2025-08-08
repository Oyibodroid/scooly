// Example for your startDate input
import { useState } from "react";

export default function DateInput({ name, id, placeholder, ...props }) {
  const [type, setType] = useState("text");

  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className="border-b focus:outline-none py-2"
      onFocus={() => setType("date")}
      onBlur={(e) => {
        if (!e.target.value) setType("text");
      }}
      {...props}
    />
  );
}