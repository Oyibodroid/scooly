"use client";

import Breadcrumb from "@components/Breadcrumb";
import Button from "@components/Button";
import DateInput from "@components/DateInput";
import { Filter, MoveRight } from "lucide-react";
// import { useState } from "react";

export default function FinancePage() {
  return (
    <div className="finance-container">
      <div className="finance-header">
        <h1 className="heading">Financial Statistics</h1>
        <Breadcrumb />
      </div>

      <div className="finance-filters">
        <div className="filter-group">
          <div className="select-wrapper">
            <select name="filterClass" id="filterClass" className="filter-select">
              <option value="" disabled defaultValue="">
                Select Class
              </option>
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
            <p className="filter-label">Class</p>
          </div>
          <Button variant="blue" className="filter-button">
            <Filter size={20} className="stroke-white" />
          </Button>
        </div>

        <div className="date-filter-group">
          <DateInput
            name="startDate"
            id="startDate"
            placeholder="Start Date"
            className="date-input"
          />
          <MoveRight className="date-separator" />
          <DateInput
            name="endDate"
            id="endDate"
            placeholder="End Date"
            className="date-input"
          />
          <Button variant="blue" className="filter-button">
            <Filter size={20} className="stroke-white" />
          </Button>
        </div>
      </div>

      <div className="finance-cards">
        <div className="finance-card">
          <img
            src="/gif/Revenue.gif"
            alt="Total Revenue"
            className="card-image"
          />
          <div className="card-content">
            <h3 className="card-title">Total Revenue</h3>
            <p className="card-amount">#300,000</p>
          </div>
        </div>

        <div className="finance-card">
          <img
            src="/gif/Accountant.gif"
            alt="Cancelled Invoice"
            className="card-image"
          />
          <div className="card-content">
            <h3 className="card-title">Cancelled Invoice</h3>
            <p className="card-amount">#300,000</p>
          </div>
        </div>

        <div className="finance-card">
          <img src="/gif/Invoice.gif" alt="Pending Invoice" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Pending Invoice</h3>
            <p className="card-amount">#300,000</p>
          </div>
        </div>

        <div className="finance-card">
          <img src="/gif/Invoice.gif" alt="Total Invoice" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Total Invoice</h3>
            <p className="card-amount">#300,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
