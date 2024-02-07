import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useUser from "@/hooks/useUser";
import { ChevronDown, Contact, LogOut, Settings, User } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { LOGIN_ROUTE } from "@/lib/routes";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);
  const { name, role, email, logout } = useUser();
  const router = useRouter();
  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            {name[0].toUpperCase() + name.slice(1)}
          </span>
          <span className="block text-xs">
            {role[0].toUpperCase() + role.slice(1)}
          </span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <Image
            width={112}
            height={112}
            src={"/user-icon.png"}
            style={{
              width: "auto",
              height: "auto",
            }}
            alt="User"
          />
        </span>

        <ChevronDown />
      </Link>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark py-2">
          <li>
            <Link
              href="/profile"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary "
            >
              <User />
              My Profile
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary "
            >
              <Contact />
              Contacts
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary "
            >
              <Settings />
              Settings
            </Link>
          </li>
        </ul>
        <button
          className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary "
          onClick={() => {
            logout();
            router.push(LOGIN_ROUTE);
          }}
        >
          <LogOut />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default DropdownUser;
