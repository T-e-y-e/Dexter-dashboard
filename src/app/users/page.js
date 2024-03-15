import { UsersTable } from "@/components/tables/usersTable";
import { Topbar } from "@/components/topbar";
import React from "react";

const page = () => {
  return (
    <div>
          <Topbar pageTitle={"Users"} />
          <UsersTable />
    </div>
  );
};

export default page;
