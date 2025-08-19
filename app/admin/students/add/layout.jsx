import Breadcrumb from "@components/Breadcrumb";
import AddStudentPage from "./page";

export default function AddStudent() {
  return (
    <div className="main lg:p-8">
      <div className="flex-norm">
        <p className="heading text-2xl">Add Students</p>
        <Breadcrumb />
      </div>
      <div className="student-add-heading">
        <p className="heading">Basic Details</p>
        <AddStudentPage />
      </div>
    </div>
  );
}
