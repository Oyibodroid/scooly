// import students from "@data/students";
import StudentProfileLayout from "./layout";

export default function StudentProfile({ students }) {
  
  return (
    <div className="main">
      {students.id}
      {students.username}
    </div>
  );
}
