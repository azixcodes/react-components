import React from "react";
import { emptableHeadings, empTableData, attendanceData } from "./tableData";
const Table = ({ type, data }) => {
  return (
    <table className="text-gray-400 text-sm">
      <thead className="border-dotted border-b-2 font-semibold">
        <tr>
          {emptableHeadings.map((heading) => (
            <td key={heading} className="px-2">
              {heading}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((data) => (
          <tr key={data.sr} className="border-dotted border-b-2 capitalize ">
            <td className="px-3 py-2">{data.sr}</td>
            <td className="px-3 py-2">{data.empName}</td>
            <td className="px-3 py-2">{data.empId}</td>
            <td className="px-3">
              <div
                className={`flex justify-center items-center capitalize rounded-md ${
                  data.status === "paid" ||
                  data.status === "present" ||
                  data.status === "on leave"
                    ? "bg-[#E5FAE3] text-[#35BF29] "
                    : "bg-red-200 text-red-600"
                }`}
              >
                {data.status}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
