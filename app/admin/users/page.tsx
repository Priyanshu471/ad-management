"use client";
import { useEffect, useState } from "react";
import AdvertisersTable from "../_components/advertisersTable";
import CreatorsTable from "../_components/creatorsTable";

const Users = () => {
  const FetchUsers = async () => {
    const res = await fetch("/api/users");
    const data = await res.json();
    console.log("data", data);
  };
  useEffect(() => {
    FetchUsers();
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-medium">All users</h1>
      {/* <AdvertisersTable tableData={advertisers} /> */}
      <CreatorsTable />
    </div>
  );
};
export default Users;
