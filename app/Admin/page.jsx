"use client";

import Breadcrumb from "@components/Breadcrumb";
import { ArrowUp, MessageCirclePlus, MessageSquareText, SendHorizonal, Speaker } from "lucide-react";
import StudentTable from "./Students/List/StudentTable";
import students from "@data/students";
import Button from "@components/Button";

const Home = () => {
  return (
    <div className="main">
      <div className="lg:p-8">
        <div className="flex justify-between items-center">
          <p className="heading">Welcome Admin!</p>
            <Breadcrumb />
        </div>

        <div>

        <div className="grid grid-cols-1 xl:grid-cols-4 min-[864px]:grid-cols-2 gap-4 py-4">
          <div className="card">
            <div>
              Students
              <p className="dash-text">304</p>
            </div>
            <img
              className="h-full"
              src="./images/person-smiling-graduation-cap.png"
              alt=""
            />
          </div>

          <div className="card">
            <div>
              Teachers
              <p className="dash-text">25</p>
            </div>
            <img className="h-full" src="./images/Teacher.jpg" alt="" />
          </div>

          <div className="card">
            <div>
              Subjects
              <p className="dash-text">30</p>
            </div>
            <img className="h-full" src="./images/Subjects.jpg" alt="" />
          </div>

          <div className="card">
            <div>
              Revenue
              <p className=" text-green-600 text-4xl font-bold">
                <ArrowUp /> 23%
              </p>
            </div>
            <img className="h-full" src="./images/revenue.jpg" alt="" />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 h-70 gap-4">
          <div className="card-long block overflow-x-hidden">
            <p className="heading">Recently joined</p>
            <StudentTable students={students} />
          </div>

          <div className="card-long block">
            <p className="heading flex gap-2 mb-4">
               <MessageSquareText />Make An Announcement
            </p>

            <div>
              <textarea
                className="block"
                name="Announcement"
                id="Announcement"
              />
            </div>

            <Button
              variant="blue"
              className="my-3 flex gap-3 font-bold rounded-sm justify-end sm px-6"
              // size={}
            >
              <SendHorizonal className="stroke-white" />
            </Button>
          </div>
        </div>          
        </div>

      </div>
    </div>
  );
};

export default Home;
