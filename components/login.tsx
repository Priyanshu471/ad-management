"use client";
import useUser from "@/hooks/useUser";
import {
  ADMIN_ROUTE,
  ADVERTISER_ROUTE,
  CREATOR_ROUTE,
  REGISTER_ROUTE,
} from "@/lib/routes";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Spinner from "./spinner";
import Google from "./google";

const LogIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const { error, setError, login, role, isLoading, setLoading, isLoggedIn } =
    useUser();
  useEffect(() => {
    if (isLoggedIn) {
      // setLoading(true);
      toast.success("Logged in as " + role);
      if (role === "admin") router.push(ADMIN_ROUTE);
      if (role === "advertiser") router.push(ADVERTISER_ROUTE);
      if (role === "creator") router.push(CREATOR_ROUTE);
      setTimeout(() => {
        setLoading(false);
        setError("");
      }, 5000);
    }
  }, [isLoggedIn, role]);

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    if (!email || !password) {
      setLoading(false);
      return setError("All fields are required");
    }
    await login(email, password);
  };
  if (isLoading)
    return (
      <div className="h-screen grid place-items-center">
        <Spinner />
      </div>
    );
  return (
    <div className="rounded-md border border-stroke bg-white shadow-md dark:border-strokedark dark:bg-boxdark flex items-center justify-center">
      <h1 className=" text-3xl text-primary absolute top-10">
        Advertisment Management System
      </h1>
      <div className="flex flex-wrap items-center w-full">
        <div className="w-full border-stroke dark:border-strokedark">
          <div className="w-full p-4 sm:p-12 xl:p-17">
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Sign In
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="e.g. john@gmail.com"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <span className="absolute right-4 top-4">
                    <Mail size={22} className="text-muted-foreground" />
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="e.g. 123456"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary"
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <span className="absolute right-4 top-4">
                    <Lock size={22} className="text-muted-foreground" />
                  </span>
                </div>
              </div>

              <div className="mb-5">
                <input
                  type="submit"
                  value="Sign In"
                  className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                />
              </div>

              <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4">
                <Google />
                Sign in with Google
              </button>
              {error && (
                <div className="bg-red text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                  {error}
                </div>
              )}
              <div className="mt-6 text-center">
                <p>
                  Don’t have any account?{" "}
                  <Link href={REGISTER_ROUTE} className="text-primary">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
