"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateFilter() {
  const [selectedDate, setSelectedDate] = (useState < Date) | (null > null);

  const items = [
    { id: 1, name: "Invoice 001", date: "2025-06-25" },
    { id: 2, name: "Invoice 002", date: "2025-06-26" },
    { id: 3, name: "Invoice 003", date: "2025-06-27" },
  ];

  const filteredItems = selectedDate
    ? items.filter(
        (item) =>
          new Date(item.date).toDateString() ===
          new Date(selectedDate).toDateString()
      )
    : items;

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-xl font-bold">Filter by Date</h1>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        // dateFormat="yyyy-MM-dd"
        // className="border p-2 rounded w-full"
        // placeholderText="Pick a date"
      />
      <ul className="mt-4 space-y-2">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <li key={item.id} className="border p-2 rounded shadow-sm bg-white">
              <strong>{item.name}</strong> — {item.date}
            </li>
          ))
        ) : (
          <p className="text-gray-500">No items found for selected date.</p>
        )}
      </ul>
    </div>
  );
}
