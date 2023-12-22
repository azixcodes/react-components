import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex w-full h-screen">
      <div className="h-screen w-64 bg-sky-500 flex flex-col gap-4">
        <Link href="/dashboard/settings">Settings</Link>
        <Link href="/dashboard/users">Users</Link>
      </div>
      <div className="flex flex-col flex-1">
        <div className="h-14 w-full bg-slate-500">Navbar</div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default layout;
