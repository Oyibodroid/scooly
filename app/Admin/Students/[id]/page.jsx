// app/Admin/Students/[id]/page.jsx
import students from "@/data/students.js";
import { Phone } from "lucide-react";

export async function generateStaticParams() {
  return students.map((student) => ({
    id: student.id.toString(),
  }));
}

export default function StudentDetail({ params }) {
  const student = students.find((s) => s.id.toString() === params.id);

  if (!student) {
    return <div className="p-6 text-red-500">Student not found</div>;
  }

  return (
    <div className=" p-4">
      <h1 className="text-2xl font-bold mb-4">Student Details</h1>

      <div className="w-2/3 grid grid-cols-2 gap-4">
        <div className="bg-white flex flex-col items-center p-4 rounded-lg shadow-lg">
          <img
            className="rounded-full object-cover w-40 h-40"
            src={
              student.gender === "Male"
                ? "/images/male-avatar.svg"
                : "/images/female-avatar.svg"
            }
            alt=""
          />
          <p className="text-xl font-bold">{student.username}</p>
          <p className="text-indigo-600 text-md flex">{student.phone}</p>
          <p className="text-indigo-600 text-[10px] flex">{student.email}</p>
        </div>

        <div className="bg-white flex-col rounded-lg p-4">
          <p className="heading">General Info</p>

        </div>
      </div>
    </div>
  );
}
