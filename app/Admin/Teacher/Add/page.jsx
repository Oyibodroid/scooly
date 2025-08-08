// app/Admin/Teacher/Add/page.jsx

"use client";
// import Button from "@components/Button";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import animationData from "@public/icons/VerifiedIcon.json";
import Modal from "@components/Modal";

export default function AddTeacherPage() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Phone: "",
    Password: "",
    Salary: "",
    State: "",
    Sector: "",
    Role: "",
    Department: "",
    Class: "",
    Gender: "",
  });

  const [errors, setErrors] = useState({});

  /// formData validation
  function validate() {
    const newErrors = {};
    if (!formData.FirstName.trim()) newErrors.FirstName = "field is required";
    if (!formData.LastName.trim()) newErrors.LastName = "field is required";
    if (formData.Password.length < 8)
      newErrors.Password = "password must be at least 8 characters";
    if (formData.Phone.includes("e") || formData.Phone == "") {
      newErrors.Phone = "invalid phone number";
    }
    if (
      formData.Role === ("ClassTeacher" || "AssistantTeacher") &&
      (formData.Class === "")
    ) {
      newErrors.Class = "teacher must have a class";
    }

    if(formData.Role === "SubjectTeacher" )

    if (formData.Sector == "") newErrors.Sector = "must be in a sector";
    if (formData.State === "") newErrors.State = "field is required";
    if (formData.Gender === "") newErrors.Gender = "choose your gender";
    if ((formData.Class === ("SSS 1" || "SSS 2" || "SSS 3")) && formData.Department == "")
      newErrors.Department = "choose your department";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (validate()) {
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

        setModal(true);
        setTimeout(() => {
          setModal(false);
        }, 1500);

        // Reset form data to initial empty values
        setFormData({
          FirstName: "",
          LastName: "",
          Phone: "",
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
      }
    }
  }

  const [modal, setModal] = useState();

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
  }

  /////Select department for SSS students only////////
  function DepartmentTrue() {
    return (
      <div className=" w-full">
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
        {errors.Department && (
          <p className="errorMsg text-red-500">{errors.Department}</p>
        )}
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
          {errors.FirstName && (
            <p className="errorMsg text-red-500">{errors.FirstName}</p>
          )}
        </div>

        <div className="relative -z-100 w-full">
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
          {errors.LastName && (
            <p className="errorMsg text-red-500">{errors.LastName}</p>
          )}
        </div>

        <div className="relative -z-100 w-full">
          <input
            className="input py-3"
            type="number"
            name="Phone"
            value={formData.Phone}
            onChange={handleChange}
          />

          <p className="label">
            Phone <span className="text-red-500">*</span>
          </p>
          {errors.Phone && (
            <p className="errorMsg text-red-500">{errors.Phone}</p>
          )}
        </div>

        <div className="relative -z-100 w-full">
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
          {errors.Password && (
            <p className="errorMsg text-red-500">{errors.Password}</p>
          )}
        </div>
      </div>

      <div className="flex-col gap-6 mt-6 w-full lg:flex-row flex-norm">
        <div className="relative -z-100 w-full">
          <input
            className="input py-3"
            type="number"
            name="Salary"
            onChange={handleChange}
            value={formData.Salary}
          />

          <p className="label">
            Salary
          </p>
        </div>
        <div className="relative -z-100 w-full">
          <input
            className="input py-3"
            type="text"
            name="State"
            onChange={handleChange}
            value={formData.State}
          />

          <p className="label">
            State of Origin 
          </p>
        </div>

        <div className="relative -z-100 w-full">
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
          {errors.Sector && (
            <p className="errorMsg text-red-500">{errors.Sector}</p>
          )}
        </div>
      </div>

      <div className="flex-col gap-6 mt-6 w-full lg:flex-row flex-norm">
        <div className="relative -z-100 w-full">
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
          {errors.Gender && (
            <p className="errorMsg text-red-500">{errors.Gender}</p>
          )}
        </div>

        <div className="relative -z-100 w-full">
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
            <option value="HeadTeacher">Head Teacher</option>
            <option value="ClassTeacher">Class Teacher</option>
            <option value="AssistantTeacher">Assistant Class Teacher</option>
            <option value="SubjectTeacher">Subject Teacher</option>
          </select>
        </div>

        <div className="relative -z-100 w-full">
          <p className="label">
            Class <span className="text-red-500">*</span>
          </p>
          <select
            className="input py-3"
            name="Class"
            onChange={handleChange}
            value={formData.Class}
          >
            <option value="">--NIL--</option>
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
          {errors.Class && (
            <p className="errorMsg text-red-500">{errors.Class}</p>
          )}
        </div>

        {["SSS 1", "SSS 2", "SSS 3"].includes(formData.Class) && (
          <DepartmentTrue />
        )}
      </div>

      {modal && (
        <div className="bg-white/10 backdrop-blur-sm h-full w-[100vw] fixed p-0 m-0 inset-0"></div>
      )}
      {modal && (
        <Modal
          message="Teacher Successfully Added"
          animationData={animationData}
        />
      )}
      <button
        type="submit"
        className="submit"
      >
        Submit
      </button>
    </form>
  );
}
