// StudentTable.jsx

import { useState } from "react";
import Button from "@/components/Button";
import { Eye, EyeOff, Edit } from "lucide-react";

function StudentRow({ student }) {
  const [hide, setHide] = useState(false);

  function toggleHide() {
    setHide((prev) => !prev);
  }

  return (
    <div className="student--table">
      <div>
        <p>{hide ? "------" : student.id}</p>
      </div>
      <div>
        <p>{hide ? "----------------------" : student.username}</p>
      </div>
      <div>
        <p>{hide ? "-------" : student.year}</p>
      </div>
      <div>
        <p>{hide ? "---------" : student.department}</p>
      </div>
      <div>
        <p>{hide ? "----------------" : student.phone}</p>
      </div>
      <div>
        <p>{hide ? "-------" : student.gender}</p>
      </div>
      <div>
        <Button
          size={`sm`}
          onClick={toggleHide}
          className="rounded-full hover:bg-indigo-600"
        >
          {!hide ? (
            <Eye className=" hover:stroke-white" />
          ) : (
            <EyeOff className="hover:stroke-white" />
          )}
        </Button>
        <Button>
          <Edit />
        </Button>
      </div>
    </div>
  );
}

export default function StudentTable({ students }) {
  return (
    <>
      {students.map((student) => (
        <StudentRow key={student.id} student={student} />
      ))}
    </>
  );
}
