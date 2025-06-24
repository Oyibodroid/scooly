import Breadcrumb from "@components/Breadcrumb";
import Button from "@components/Button";
import { PlusIcon } from "lucide-react";
import SearchBox from "@/components/SearchBox";
import TeacherTable from "./TeacherTable";
import teachers from "@/data/teachers";
import "@/styles/globals.css"

const TeachersLayout = () => {
  return (
    <div className="main">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Teachers</h1>
        <Breadcrumb />
      </div>

      <div className="search my-4">
        <SearchBox placeholder={"Search Teachers"} />
      </div>

      <div className="card block">
        <div className="flex align-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Teachers</h1>
          </div>

          <div className="flex gap-4">
            <Button variant="blue">Download PDF</Button>
            <Button className=" rounded-full"  variant="blue">
              <a href="./Add"><PlusIcon className="stroke-white" /></a>
            </Button>
          </div>
        </div>

        <div className=" my-4">
          <div className="overflow-y-hidden bg-white rounded-lg shadow-lg">
            <div className="teacher--table bg-slate-100">
              <div>
                <input type="checkbox" name="mark" id="" />
              </div>
              <div>
                <h2 className="font-bold">TeacherId</h2>
              </div>
              <div>
                <h2 className="font-bold">Name</h2>
              </div>
              <div>
                <h2 className="font-bold">Salary</h2>
              </div>
              <div>
                <h2 className="font-bold">Class</h2>
              </div>
              <div>
                <h2 className="font-bold">Department</h2>
              </div>
              <div>
                <h2 className="font-bold">Action</h2>
              </div>
            </div>
            <TeacherTable teachers={teachers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersLayout;
