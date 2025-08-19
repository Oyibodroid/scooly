// StudentTable.jsx

import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { Eye, Trash2Icon } from "lucide-react";

function StudentRow({ student }) {
  const avatar =
    student.gender === "Male"
      ? "/images/male-avatar.svg"
      : "/images/female-avatar.svg";

  return (
    <div className="student--table">
      <div className="student-table-id">
        <p>{student.studentId}</p>
      </div>
      <div className="student-table-avatar">
        <Image
          className="student-avatar-img"
          width={30}
          height={30}
          alt="avatar"
          src={avatar}
        />
        <p>{student.studentName}</p>
      </div>
      <div className="student-table-year">
        <p>{student.year}</p>
      </div>
      <div className="student-table-department">
        <p>{student.department}</p>
      </div>
      <div className="student-table-phone">
        <p>{student.phone}</p>
      </div>
      <div className="student-table-gender">
        <p>{student.gender}</p>
      </div>
      <div className="student-table-actions">
        <div className="student-action-view">
          <Link href={`/admin/students/${student.studentId}`}>
            <Eye size={18}/>
          </Link>
          <span className="student-action-tooltip">view analytics</span>
        </div>
        <div className="student-action-delete">
          <Trash2Icon stroke="red" size={18} className="student-delete-icon"/>
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
