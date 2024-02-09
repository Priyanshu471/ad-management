"use client";
import useUser from "@/hooks/useUser";
import { ReactNode, useState } from "react";
import AuthGuard from "./_components/authGaurd";
import Sidebar from "@/components/Sidebar";
import useActive from "@/hooks/useActive";
import { useRouter } from "next/navigation";
import { adminMenu } from "@/lib/menu";
import Link from "next/link";
import Header from "@/components/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isLoggedIn, role } = useUser();
  const { active, setActive } = useActive();
  const router = useRouter();
  if (!isLoggedIn) return <AuthGuard />;
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
          {adminMenu.map((menu) => (
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
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden mb-4">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="h-full">
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 h-full">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
