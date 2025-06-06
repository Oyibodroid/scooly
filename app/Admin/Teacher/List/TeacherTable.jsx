import Button from "@components/Button";
import { Edit, Eye } from "lucide-react";

function TeacherRow(teacher) {
  return (
    <div className="teacher--table">
      <div>
        <input type="checkbox" name="mark" id="" />
      </div>
      <div>
        <p>{teacher.id}</p>
      </div>
      <div>
        <p>{teacher.username} hello</p>
      </div>
      <div>
        <p>{teacher.salary}</p>
      </div>
      <div>
        <p>{teacher.class}</p>
      </div>
      <div>
        <p>{teacher.department}</p>
      </div>
      <div>
        <Button>
          <Eye />
        </Button>
        <Button>
          <Edit />
        </Button>
      </div>
    </div>
  );
}

export default function TeacherTable({ teachers }) {
  return (
    <div>
      {console.log(teachers)}
      {teachers.map((teacher) => (
        <TeacherRow key={teacher.id} teacher={teacher} />
      ))}
    </div>
  );
}
