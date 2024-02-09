import Link from "next/link";
import DropdownUser from "./DropdownUser";
import Image from "next/image";
import { Menu, Search } from "lucide-react";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-[1000] flex w-full bg-white shadow-md drop-shadow-2 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <Menu />
          </button>

          <Link className="block flex-shrink-0 lg:hidden" href="#">
            <Image
              width={32}
              height={32}
              src={"/logo.png"}
              alt="Logo"
              className="w-10 h-10 rounded-full bg-indigo-900"
            />
          </Link>
        </div>

        <div className="hidden sm:block">
          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2">
              <Search />
            </button>

            <input
              type="text"
              placeholder="Type to search..."
              className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
