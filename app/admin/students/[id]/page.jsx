

import StudentDetailClient from '@components/StudentDetailClient';
import students from "@/data/students.js";

export async function generateStaticParams() {
  return students.map((student) => ({
    id: student.id.toString(),
  }));
}

export default function StudentDetail({ params }) {
  const student = students.find((s) => s.studentId.toString() === params.id);
  
  if (!student) {
    return <div className="student-error">Student not found</div>;
  }

  return <StudentDetailClient student={student} />;
}