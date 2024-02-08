"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import useUser from "@/hooks/useUser";
import AuthGuard from "./_components/authGaurd";
import { advertiserMenu } from "@/lib/menu";
import { redirect, usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import useActive from "@/hooks/useActive";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { isLoggedIn, role } = useUser();
  const { active, setActive } = useActive();
  const router = useRouter();
  if (!isLoggedIn || role !== "advertiser") return <AuthGuard />;
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
          {advertiserMenu.map((menu) => (
            <Link
              key={menu.id}
              href={menu.link}
              className={`group relative flex items-center gap-3 rounded-sm px-4 py-2 mb-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                active === menu.id && "bg-graydark dark:bg-meta-4"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActive(menu.id);
                router.push(menu.link);
              }}
            >
              <menu.icon className="w-5 h-5" />
              {menu.tab}
            </Link>
          ))}
        </Sidebar>
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main className="h-full">
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 h-full">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
