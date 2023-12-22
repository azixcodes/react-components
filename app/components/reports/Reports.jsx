import React from "react";
import Table from "./Table";

const SalaryReport = ({ title, data }) => {
  return (
    <div className="w-full max-w-md rounded-md border shadow-md px-2 py-2 flex flex-col gap-6">
      <div className="h-7 flex justify-between items-center header">
        <h4 className="text-gray-500">{title}</h4>
        <select className="w-24 bg-gray-200 outline-none h-7 px-2 rounded-md text-gray-400 text-xs capitalize">
          <option style={{ backgroundColor: "red !important" }}>status</option>
        </select>
        <div className="h-7 flex relative w-auto items-center  bg-gray-200 rounded-md text-xs px-1">
          <p className="text-gray-400 capitalize">last 15 days</p>
        </div>
      </div>
      <Table type={title} data={data} />
    </div>
  );
};

export default SalaryReport;
