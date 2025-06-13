// StudentTable.jsx

import Button from "@/components/Button";
import Image from "@node_modules/next/image";
import { Eye, EyeOff, Edit } from "lucide-react";

function StudentRow({ student }) {
  const avatar =
    student.gender === "Male"
      ? "/images/male-avatar.svg"
      : "/images/female-avatar.svg";

  return (
    <div className="student--table">
      <div>
        <p>{student.id}</p>
      </div>
      <div className="flex gap-3 items-center">
        <Image
          className="w-10 h-10 rounded-full"
          width={30}
          height={30}
          alt="avatar"
          src={avatar}
        />
        <p>{student.username}</p>
      </div>
      <div>
        <p>{student.year}</p>
      </div>
      <div>
        <p>{student.department}</p>
      </div>
      <div>
        <p>{student.phone}</p>
      </div>
      <div>
        <p>{student.gender}</p>
      </div>
      <div>
        <Button size={`sm`} className="rounded-full hover:bg-indigo-600">
          <a href={`/Admin/Students/${student.id}`}>
            <Eye className=" hover:stroke-white" />
          </a>
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
