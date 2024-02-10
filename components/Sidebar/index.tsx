"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
  children: React.ReactNode;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen, children }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-[1000] flex h-screen w-72 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-6">
        <Link
          href="#"
          className="flex justify-center items-center  font-medium text-bodydark1 underline underline-offset-2 gap-x-2"
        >
          <Image
            width={176}
            height={32}
            src={"/logo.png"}
            alt="Logo"
            priority
            className="w-16 h-16 rounded-full bg-indigo-900"
          />
          <span>Ad Management</span>
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        ></button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-whiten/80">
              MENU
            </h3>
            <div className="border-b-2 border-b-body -mt-2 mb-2" />
            <ul className="mb-6 flex flex-col gap-1.5">{children}</ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
