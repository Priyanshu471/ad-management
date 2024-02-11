"use client";
import { useEffect, useState } from "react";
import AdvertisersTable from "../_components/usersTable";
import useFetchCamp from "@/hooks/useFetchCamp";
import UsersTable from "../_components/usersTable";
import Spinner from "@/components/spinner";
import useUser from "@/hooks/useUser";

const headings = ["Name", "Campaigns", "Email", "Member Since", "Manage"];
const campaigns = [
  12, 23, 11, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
];
const memberSince = [
  "01-06-2022",
  "17-08-2023",
  "11-12-2021",
  "06-06-2022",
  "08-06-2022",
  "09-06-2022",
  "10-06-2022",
  "11-06-2022",
  "12-06-2022",
];
const Users = () => {
  const { fetchUsers, creatorsData, advertisersData, loading } = useFetchCamp();
  const { isLoggedIn } = useUser();
  useEffect(() => {
    fetchUsers("/api/users");
  }, [fetchUsers, isLoggedIn]);
  if (loading) {
    return (
      <div className="grid h-screen place-items-center">
        <Spinner />
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-3xl font-medium">All users</h1>
      {}
      <UsersTable
        tableFor="Advertiser"
        tableData={advertisersData}
        headings={headings}
        data={campaigns}
        memberSince={memberSince}
      />
      <UsersTable
        tableFor="Creator"
        tableData={creatorsData}
        headings={headings}
        data={campaigns}
        memberSince={memberSince}
      />
    </div>
  );
};
export default Users;
