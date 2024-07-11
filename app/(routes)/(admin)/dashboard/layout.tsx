import React from "react";
import { AdminNavRouts } from "./_components/admin-nav";

interface DashBoardLayoutPropes {
  children: React.ReactNode;
}

const DashBoardLayout = ({ children }: DashBoardLayoutPropes) => {
  return (
    <div className="w-full flex flex-col">
      <AdminNavRouts />
      {children}
    </div>
  );
};

export default DashBoardLayout;
