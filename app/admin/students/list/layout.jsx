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
    <div className="students-list-container">
      <div className="students-list-header">
        <Breadcrumb />
      </div>

      <div className="students-list-subheader">
        <h1 className="students-list-title">SCH19538</h1>
        <SearchBox />
      </div>

      <div className="students-list-card">
        <div className="students-list-controls">
          <h1 className="students-list-section-title">Students</h1>
          
          <div className="students-list-actions">
            <div className="download-options-wrapper">
              <Button
                variant="blue"
                className="download-button"
                onClick={() => setDownloadOption((curr) => !curr)}
              >
                <Download className="stroke-white" />
              </Button>

              {downloadOption && (
                <div className="download-options">
                  <Button variant="glass" className="download-option">.csv</Button>
                  <Button variant="glass" className="download-option">.pdf</Button>
                </div>
              )}
            </div>
            
            <Link href="./add">
              <Button variant="blue" className="add-student-button">
                <PlusIcon className="stroke-white" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="students-table-wrapper">
          <div className="students-table-header">
            <div className="table-header-cell"><h2>ID</h2></div>
            <div className="table-header-cell"><h2>Name</h2></div>
            <div className="table-header-cell"><h2>Class</h2></div>
            <div className="table-header-cell"><h2>Department</h2></div>
            <div className="table-header-cell"><h2>Mobile Number</h2></div>
            <div className="table-header-cell"><h2>Gender</h2></div>
            <div className="table-header-cell"><h2>Actions</h2></div>
          </div>

          <StudentTable students={students} />
        </div>
      </div>
    </div>
  );
}
