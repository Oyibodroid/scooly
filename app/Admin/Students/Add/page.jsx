"use client";

import { useState } from "react";

function handleSubmit(e) {
  e.preventDefault();
}
export default function AddStudentPage() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Gender: "",
    Phone: {},
    Email: "",
    Address: "",
    State: "",
    Section: "",
  });

  function handleChange(e) {
    const { name, value, checked, type } = e.target;

    setFormData((prevformData) => {
      return {
        ...prevformData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function ClassTrue() {
    return (
      <div className="relative full">
        <select name="Class" id="Class" className="input py-3">
          <option value="">--Choose--</option>
          {formData.Section === "KG" && (
            <>
              <option value="KG 1">KG 1</option>
              <option value="KG 2">KG 2</option>
            </>
          )}
        </select>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="flex-col lg:flex-row w-full flex-norm gap-6 mt-5">
        <div className="relative w-full">
          <input
            className="input py-3"
            name="FirstName"
            onChange={handleChange}
            value={formData.FirstName}
            type="text"
          />
          <p className="label">
            First Name <span className="text-red-500">*</span>
          </p>
        </div>

        <div className="relative w-full">
          <input
            className="input py-3"
            name="LastName"
            onChange={handleChange}
            value={formData.LastName}
            type="text"
          />
          <p className="label">
            Last Name <span className="text-red-500">*</span>
          </p>
        </div>

        <div className="relative w-full">
          <select
            className="input py-3"
            name="Gender"
            onChange={handleChange}
            value={formData.Gender}
            id="Gender"
          >
            <option value="">--Choose--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <p className="label">
            Gender <span className="text-red-500">*</span>
          </p>
        </div>

        <div className="relative w-full">
          <input
            type="number"
            name="Phone"
            onChange={handleChange}
            value={formData.Phone}
            className="input py-3"
          />
          <p className="label">
            Phone <span className="text-red-500">*</span>
          </p>
        </div>
      </div>

      <div className="flex-col lg:flex-row w-full flex-norm gap-6">
        <div className="relative w-full">
          <input
            type="text"
            name="Email"
            className="input py-3"
            onChange={handleChange}
            value={formData.Email}
          />
          <p className="label">
            Email <span className="text-red-500">*</span>
          </p>
        </div>

        <div className="relative w-full">
          <input
            type="text"
            value={formData.Address}
            className="input py-3"
            onChange={handleChange}
          />
          <p className="label">Residential Address</p>
        </div>

        <div className="relative w-full">
          <input
            type="text"
            className="input py-3"
            value={formData.State}
            onChange={handleChange}
          />
          <p className="label">State of Origin <span className="text-red-500">*</span></p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full flex-norm gap-6">
        <div className="relative w-full">
          <select
            name="Section"
            className="input py-3"
            value={formData.Section}
            onChange={handleChange}
            id="Section"
          >
            <option value="">--Choose Section--</option>
            <option value="KG">KG</option>
            <option value="NUR">Nursery</option>
            <option value="PRY">Primary</option>
            <option value="JSS">Junior Secondary School</option>
            <option value="SSS">Senior Secondary School</option>
          </select>
          <p className="label">Section <span className="text-red-500">*</span></p>
        </div>

        {![""].includes(formData.Section) && (
          <div className="relative w-full">
            <p className="label">Class <span className="text-red-500">*</span></p>
            <select
              name="Class"
              id="Class"
              className="input py-3"
              value={formData.Class}
              onChange={handleChange}
            >
              <option value="">--Choose--</option>
              {["KG"].includes(formData.Section) && (
                <>
                  <option value="KG 1">KG 1</option>
                  <option value="KG 2">KG 2</option>
                </>
              )}
              {["NUR"].includes(formData.Section) && (
                <>
                  <option value="NUR 1">NUR 1</option>
                  <option value="NUR 2"> NUR 2</option>
                </>
              )}
              {["PRY"].includes(formData.Section) && (
                <>
                  <option value="PRY 1">PRY 1</option>
                  <option value="PRY 2">PRY 2</option>
                  <option value="PRY 3">PRY 3</option>
                  <option value="PRY 4">PRY 4</option>
                  <option value="PRY 5">PRY 5</option>
                  <option value="PRY 6">PRY 6</option>
                </>
              )}
              {["JSS"].includes(formData.Section) && (
                <>
                  <option value="JSS 1">JSS 1</option>
                  <option value="JSS 2">JSS 2</option>
                  <option value="JSS 3">JSS 3</option>
                </>
              )}
              {["SSS"].includes(formData.Section) && (
                <>
                  <option value="SSS 1">SSS 1</option>
                  <option value="SSS 2">SSS 2</option>
                  <option value="SSS 3">SSS 3</option>
                </>
              )}
            </select>
          </div>
        )}

        {["SSS"].includes(formData.Section) && (
          <div className="relative w-full">
            <p className="label">Department <span className="text-red-500">*</span></p>
            <select name="Department" className="input py-3" id="Department">
              <option value="Science">Science</option>
              <option value="Arts">Arts</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>
        )}
      </div>

      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
}
