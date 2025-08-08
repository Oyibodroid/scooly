// app/Admin/Students/[id]/page.jsx
import students from "@/data/students.js";
import Link from "next/link"
import { ArrowBigLeft, ArrowLeft, Pen, Phone } from "lucide-react";

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
    <div className=" lg:p-4">
      <div className="flex gap-4">
        <Link
          className="flex w-fit relative items-center justify-center 
                      before:absolute before:w-full 
                      before:h-[1px] before:bottom-3 before:invisible
                      before:bg-slate-900 hover:underline"
          href="./list"
        >
          <ArrowLeft className="inline" /> back
        </Link>
        <h1 className="text-2xl font-bold mb-4">Student Details</h1>
      </div>

      <div className="lg:w-2/3 grid md:grid-cols-2 gap-4">
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
          <div className="flex justify-between items-center">
            <p className="heading">General Info</p>
            <Pen />
          </div>

          <div className="flex flex-col py-4 justify-between gap-4">
            <div className="">
              <p className="font-bold inline text-gray-400">Class:</p>{" "}
              <p className="inline">{student.year}</p>
            </div>
            <hr />
            <div>
              <p className="font-bold inline text-gray-400">Department: </p>
              <p className="inline">{student.department.toUpperCase()}</p>
            </div>
            <hr />
            <div>
              <p className="font-bold inline text-gray-400">Phone: </p>
              <p className="inline">{student.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
