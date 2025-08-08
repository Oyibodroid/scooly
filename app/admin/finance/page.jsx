"use client";

import Breadcrumb from "@components/Breadcrumb";
import Button from "@components/Button";
import DateInput from "@components/DateInput";
// import DateFilter from "@components/DateFilter";
import { Filter, MoveRight } from "lucide-react";
import { useState } from "react";

export default function financePage() {
  // const [selectedDate, setSelectedDate] = useState();
  return (
    <div className="rounded-md lg:p-4">
      <div className="flex items-center justify-between">
        <p className="heading">Financial Statistics</p>
        <Breadcrumb />
      </div>

      <div className="flex-norm bg-white rounded-lg p-4 my-4 gap-4 w-full">
        <div className="flex items-center gap-4 relative w-full">
          <select name="filterClass" id="filterClass" className="input py-2">
            {/* <option value="">--choose--</option> */}
            <option value="KG1">KG 1</option>
            <option value="KG2">KG 2</option>
            <option value="NUR1">NUR 1</option>
            <option value="NUR2">NUR 2</option>
            <option value="PRY1">PRY 1</option>
            <option value="PRY2">PRY 2</option>
            <option value="PRY3">PRY 3</option>
            <option value="PRY4">PRY 4</option>
            <option value="PRY5">PRY 5</option>
            <option value="PRY6">PRY 6</option>
            <option value="JSS1">JSS 1</option>
            <option value="JSS2">JSS 2</option>
            <option value="JSS3">JSS 3</option>
            <option value="SSS1">SSS 1</option>
            <option value="SSS2">SSS 2</option>
            <option value="SSS3">SSS 3</option>
          </select>
          <p className="label">Class</p>
          <Button variant="blue" className="rounded-md">
            <Filter size={20} className="stroke-white" />
          </Button>
        </div>

        <div className="flex gap-4 justify-between items-center w-full">
          <DateInput
            name="startDate"
            id="startDate"
            placeholder="start date"
            className="border-b focus:outline-none py-2 text-center"
        />
          <MoveRight />
          <DateInput
            name="endDate"
            id="endDate"
            placeholder="end date"
            className="border-b focus:outline-none py-2"
          />
          <Button variant="blue" className="rounded-md">
            <Filter size={20} className="stroke-white" />
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-4 items-center justify-between">
        <div className="finance-card">
          <img src="/gif/Revenue.gif" alt="finance" />
          <div className="flex-col items-center text-center">
            <p className="font-bold">Total Revenue</p>
            <p className="font-bold text-indigo-600 text-2xl">#300000</p>
          </div>
        </div>

        <div className=" finance-card">
          <img src="/gif/Accountant.gif" alt="finance" />
          <div className="flex-col items-center text-center">
            <p className="font-bold">Cancelled Invoice</p>
            <p className="font-bold text-indigo-600 text-2xl">#300000</p>
          </div>
        </div>

        <div className="finance-card">
          <img src="/gif/Invoice.gif" alt="finance" />
          <div className="flex-col items-center text-center">
            <p className="font-bold">Cancelled Invoice</p>
            <p className="font-bold text-indigo-600 text-2xl">#300000</p>
          </div>
        </div>

        <div className="finance-card">
          <img src="/gif/Invoice.gif" alt="finance" />
          <div className="flex-col items-center text-center">
            <p className="font-bold text-white">Cancelled Invoice</p>
            <p className="font-bold text-indigo-600 text-2xl">#300000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
