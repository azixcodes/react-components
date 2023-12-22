import React from "react";
import { empStrengthData, empStrengthHeadings } from "./tableData";

const StrengthTable = ({ title }) => {
  return (
    <div className="w-full max-w-[500px] rounded-md border shadow-md px-2 py-2 flex flex-col gap-6">
      <div className="h-7 flex justify-between items-center header">
        <h4 className="text-gray-500">{title}</h4>
        <select className="w-24 bg-gray-200 outline-none h-7 px-2 rounded-md text-gray-400 text-xs capitalize">
          <option style={{ backgroundColor: "red !important" }}>Project</option>
        </select>
        <div className="h-7 flex relative w-auto items-center  bg-gray-200 rounded-md text-xs px-1">
          <p className="text-gray-400 capitalize">Department</p>
        </div>
      </div>
      <table className="text-gray-400 text-sm">
        <thead className="border-dotted border-b-2 font-semibold">
          <tr>
            {empStrengthHeadings.map((heading) => (
              <td key={heading} className="px-2">
                {heading}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {empStrengthData.map((data) => (
            <tr key={data.sr} className="border-dotted border-b-2  ">
              <td className="px-3 py-2">{data.sr}</td>
              <td className="px-3 py-2">{data.dept}</td>
              <td className="px-3 py-2">{data.project}</td>
              <td className="px-3 py-2">{data.employees}</td>
              <td className="px-3  py-2">{data.required}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StrengthTable;
