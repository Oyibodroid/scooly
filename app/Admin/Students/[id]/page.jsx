// app/Admin/Students/[id]/page.jsx
import students from "@/data/students.js";

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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Details</h1>
      <div className="space-y-2">
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Username:</strong> {student.username}</p>
        <p><strong>Year:</strong> {student.year}</p>
        <p><strong>Department:</strong> {student.department}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
        <p><strong>Gender:</strong> {student.gender}</p>
      </div>
    </div>
  );
}
