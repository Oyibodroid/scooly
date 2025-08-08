// StudentTable.jsx

import Button from "@/components/Button";
import Image from "@node_modules/next/image";
import Link from "next/link"
import { Eye, Trash2Icon } from "lucide-react";

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
      <div className="flex items-center gap-3">
        <div className="relative">
          <Link href={`/admin/students/${student.id}`}>
            <Eye size={18}/>
          </Link>
          <span             className={`
              absolute top-[-70%] left-[-90%] lg:top-0 lg:left-full rounded-md px-2 py-1 font-bold
              ml-6 bg-indigo-100 text-indigo-800 text-sm 
              invisible opacity-20 -translate-x-3 transition-all
              hover:visible hover:opacity-100 hover:translate-x-0
            `}>view analytics</span>          
        </div>

        <div>
          <Trash2Icon stroke="red" size={18} className="text-sm"/>
        </div>
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
