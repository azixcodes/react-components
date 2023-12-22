import React from "react";
import SalesCard from "./components/SalesCard";

const HomeLayout = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full gap-3">
      <SalesCard
        title="total sales amount"
        percentage={10}
        amount="325M"
        isRed={false}
      />
      <SalesCard
        title="Payable Overdue"
        percentage={10}
        amount="45.6k"
        isRed={true}
      />
      <SalesCard
        title="Receivable Overdue"
        percentage={10}
        amount="356.4k"
        isRed={false}
      />
    </div>
  );
};

export default HomeLayout;
