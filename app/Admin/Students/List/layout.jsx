"use client";
import Button from "@components/Button";
import Link from "next/link";
import { Download, PlusIcon } from "lucide-react";
import SearchBox from "@/components/SearchBox";
import Breadcrumb from "@components/Breadcrumb";
import students from "@data/students.js";
import StudentTable from "@components/StudentTable";
import "@/styles/globals.css";
import { useState } from "react";

export default function StudentLayout() {
  const [downloadOption, setDownloadOption] = useState(false);

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
          <div className="flex gap-4 relative z-10">
            <div className="">
              <Button
                variant="blue"
                className="px-4 rounded-full w-full flex-shrink"
                onClick={() => setDownloadOption((curr) => !curr)}
              >
                <Download className="stroke-white" />
              </Button>

              {downloadOption && 
              <div className={`absolute top-1/2 flex flex-col -translate-y-1/2 ${downloadOption ? "right-32" : "right-0"}`}>
                <Button variant="glass" className=" rounded-full mb-2 hover:outline-white">.csv</Button>
                <Button variant="glass"  className="rounded-full">.pdf</Button>
              </div>
              }
            </div>
            <Button
              variant="blue"
              className="rounded-full font-bold text-white"
            >
              <Link href="./add">
                <PlusIcon className="text-white stroke-white" />
              </Link>
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

            <StudentTable students={students} />
          </div>
        </div>
      </div>
    </div>
  );
}
