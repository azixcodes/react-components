import React from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const SalesCard = ({ title, amount, percentage, isRed }) => {
  return (
    <div className="w-64 sm:h-28 h-auto shadow-md rounded-md flex flex-col py-2 px-4 overflow-hidden gap-6">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <label className="text-gray-400 font-semibold capitalize text-lg">
          {title}
        </label>
        <div
          className={`flex justify-center py-2 px-5 items-center h-3  ${
            isRed ? "bg-red-200 text-red-600" : "bg-[#E5FAE3] text-[#35BF29]"
          } w-7 rounded-sm  text-xs`}
        >
          <span className="">
            {isRed ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
          </span>
          {percentage}%
        </div>
      </div>
      <div>
        <h4 className="text-3xl font-bold text-center sm:text-start">
          {amount}
          <span className="text-xs text-gray-400 font-medium">USD</span>
        </h4>
        {/* <span className="h-5 w-5 bg-red-500"> */}

        {/* sfnwakejf
      </span> */}
      </div>
    </div>
  );
};

export default SalesCard;
