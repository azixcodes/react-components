import React from "react";

import Reports from "./components/reports/Reports";
import { salaryData, attendanceData } from "./components/reports/tableData";
import StrengthTable from "./components/reports/StrengthTable";
const HomeLayout = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full gap-3 flex-wrap p-5">
      <Reports title="Salary Report" data={salaryData} />
      <Reports title="Attendance Report" data={attendanceData} />
      <StrengthTable title="Employee Strength" />
    </div>
  );
};

export default HomeLayout;
