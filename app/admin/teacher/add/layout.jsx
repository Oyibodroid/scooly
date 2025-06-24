import Breadcrumb from "@components/Breadcrumb";
import "@styles/globals.css";
import AddTeacherPage from "./page";

export default function AddStudent() {
  return (
    <div className="main lg:p-8">
      <div className="flex-norm">
        <p className="heading text-2xl">Add Teachers</p>
        <Breadcrumb />
      </div>
      <div className="bg-white mt-8 py-8 px-4 rounded-lg">
        <p className="heading">Basic Details</p>
        <AddTeacherPage />
      </div>
    </div>
  );
}
