"use client";
import Button from "@components/Button";
import { PlusIcon } from "lucide-react";
import SearchBox from "@/components/SearchBox";
import Breadcrumb from "@components/Breadcrumb";
import students from "@data/students.js";
import StudentTable from "./StudentTable";
import "@/styles/globals.css"

export default function StudentLayout() {
  return (
    <div className="main lg:pl-6">
      <div className="flex justify-end">
        <Breadcrumb />
      </div>
      <div className="flex-col lg:flex justify-between my-8">
        <div className="mb-4">
          <h1 className="font-bold text-3xl">SCH19538</h1>
        </div>

        <div>
          <SearchBox />
        </div>
      </div>

      <div className="card block">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-xl font-bold">Students</h1>
          <div className="flex gap-4">
            <Button variant="blue" className="px-4 rounded-full w-full flex-shrink">
              Download pdf
            </Button>
            <Button variant="blue" className="rounded-full font-bold text-white">
              <PlusIcon className="text-white stroke-white"/>
            </Button>
          </div>
        </div>

        <div className="">
          <div className="overflow-y-hidden bg-white rounded-lg shadow-lg">
            <div className="student--table bg-slate-100">
              <div>
                <h2 className="font-bold">ID</h2>
              </div>

              <div>
                <h2 className="font-bold">Name</h2>
              </div>

              <div>
                <h2 className="font-bold">Class</h2>
              </div>
              <div>
                <h2 className="font-bold">Department</h2>
              </div>
              <div>
                <h2 className="font-bold">Mobile Number</h2>
              </div>
              <div>
                <h2 className="font-bold">Gender</h2>
              </div>

              <div>
                <h2 className="font-bold">Actions</h2>
              </div>
            </div>
            
            <StudentTable students={students}/>
          </div>
        </div>
      </div>
    </div>
  );
}