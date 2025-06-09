// app/Admin/Teacher/Add/page.jsx

"use client";
import Button from "@components/Button";
import Lottie from "lottie-react";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import animationData from "@public/icons/VerifiedIcon.json";

export default function AddStudentPage() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Password: "",
    Salary: "",
    State: "",
    Sector: "",
    Role: "",
    Department: "",
    Class: "",
    Gender: "",
  });

  function validate() {}

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("/api/add-teacher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(" Form submitted successfully:", data);
      // alert("Form submitted successfully!");

      setModal(true)
      setTimeout(() => {
        setModal(false)
      }, 1500);

      // Reset form data to initial empty values
      setFormData({
        FirstName: "",
        LastName: "",
        Password: "",
        Salary: "",
        State: "",
        Sector: "",
        Role: "",
        Department: "",
        Class: "",
        Gender: "",
      });
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert("Error submitting form!");
    }
  }

  const [modal, setModal] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData((prevformData) => {
      return {
        ...prevformData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const [isShown, setIsShown] = useState(false);
  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
    console.log("hello");
  }

  /////Select department for SSS students only////////
  function DepartmentTrue() {
    return (
      <div className="relative w-full">
        <p className="label">
          Department <span className="text-red-500">*</span>
        </p>
        <select
          className="input py-3"
          name="Department"
          onChange={handleChange}
          value={formData.Department}
        >
          <option value="">--Choose--</option>
          <option value="Science">Science</option>
          <option value="Art">Art</option>
          <option value="Commercial">Commercial</option>
        </select>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-6 mt-8 w-full lg:flex-row lg:flex-norm">
        <div className="relative w-full">
          <input
            className="input py-3"
            type="text"
            name="FirstName"
            onChange={handleChange}
            value={formData.FirstName}
          />

          <p className="label">
            First Name <span className="text-red-500">*</span>
          </p>
        </div>
        <div className="relative w-full">
          <input
            className="input py-3"
            type="text"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
          />

          <p className="label">
            Last Name <span className="text-red-500">*</span>
          </p>
        </div>
        <div className="relative w-full">
          <input
            className="input py-3"
            type={isShown ? "text" : "password"}
            name="Password"
            onChange={handleChange}
            value={formData.Password}
          />

          <p className="label">
            Password <span className="text-red-500">*</span>
          </p>
          <button
            type="button"
            onClick={toggleShown}
            className="absolute right-4 cursor-pointer top-1/4"
          >
            {isShown ? <Eye /> : <EyeClosed />}
          </button>
        </div>
      </div>

      <div className="flex-col gap-6 mt-6 w-full lg:flex-row flex-norm">
        <div className="relative w-full">
          <input
            className="input py-3"
            type="number"
            name="Salary"
            onChange={handleChange}
            value={formData.Salary}
          />

          <p className="label">
            Salary <span className="text-red-500">*</span>
          </p>
        </div>
        <div className="relative w-full">
          <input
            className="input py-3"
            type="text"
            name="State"
            onChange={handleChange}
            value={formData.State}
          />

          <p className="label">
            State of Origin <span className="text-red-500">*</span>
          </p>
        </div>

        <div className="relative w-full">
          <p className="label">
            Sector <span className="text-red-500">*</span>
          </p>
          <select
            className="input py-3"
            name="Sector"
            onChange={handleChange}
            value={formData.Sector}
          >
            <option value="">--Choose--</option>
            <option value="Kindergarten">Kindergarten</option>
            <option value="Nursery">Nursery</option>
            <option value="Primary">Primary</option>
            <option value="Junior Secondary">Junior Secondary</option>
            <option value="Senior Secondary">Senior Secondary</option>
          </select>
        </div>
      </div>

      <div className="flex-col gap-6 mt-6 w-full lg:flex-row flex-norm">
        <div className="relative w-full">
          <p className="label">
            Gender <span className="text-red-500">*</span>
          </p>
          <select
            className="input py-3"
            name="Gender"
            onChange={handleChange}
            value={formData.Gender}
          >
            <option value="">--Choose--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="relative w-full">
          <p className="label">
            Role <span className="text-red-500">*</span>
          </p>
          <select
            className="input py-3"
            name="Role"
            onChange={handleChange}
            value={formData.Role}
          >
            <option value="">--Choose--</option>
            <option value="Principal">Principal</option>
            <option value="Head Teacher">Head Teacher</option>
            <option value="Class Teacher">Class Teacher</option>
            <option value="Assistant Class Teacher">
              Assistant Class Teacher
            </option>
          </select>
        </div>

        <div className="relative w-full">
          <p className="label">
            Class <span className="text-red-500">*</span>
          </p>
          <select
            className="input py-3"
            name="Class"
            onChange={handleChange}
            value={formData.Class}
          >
            <option value="">--Choose--</option>
            <option value="KG 1">KG 1</option>
            <option value="KG 2">KG 2</option>
            <option value="NUR 1">NUR 1</option>
            <option value="NUR 2">NUR 2</option>
            <option value="PRY 1">PRY 1</option>
            <option value="PRY 2">PRY 2</option>
            <option value="PRY 3">PRY 3</option>
            <option value="PRY 4">PRY 4</option>
            <option value="PRY 5">PRY 5</option>
            <option value="JSS 1">JSS 1</option>
            <option value="JSS 2">JSS 2</option>
            <option value="JSS 3">JSS 3</option>
            <option value="SSS 1">SSS 1</option>
            <option value="SSS 2">SSS 2</option>
            <option value="SSS 3">SSS 3</option>
          </select>
        </div>

        {["SSS 1", "SSS 2", "SSS 3"].includes(formData.Class) && (
          <DepartmentTrue />
        )}
      </div>

      <button className="bg-indigo-600 text-white hover:bg-indigo-500 w-fit py-2 px-6 font-medium transition-all whitespace-nowrap rounded-3xl">
        Submit
      </button>

      {
        modal && 
        <div className="bg-white/10 backdrop-blur-sm h-full w-[100vw] fixed p-0 m-0 inset-0"></div>
      }
      {modal && (
        <div className="fixed top-[50%] right-[50%] translate-x-1/2 -translate-y-1/2 overflow-hidden">
          <div className=" ">
            <div className="flex flex-col items-center m-0 p-0 h-full w-full">
              <Lottie
              className="rounded-full bg-indigo-900/10 backdrop-blur-sm"
                animationData={animationData}
                loop={true}
                autoplay={true}
                style={{ height: 150, width: 150 }}
              />

              <p className="font-bold text-center">Teacher Successfully Added</p>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
