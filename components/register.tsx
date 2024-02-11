"use client";
import Google from "@/components/google";
import { SelectRole } from "@/components/selectRole";
import Spinner from "@/components/spinner";
import useUser from "@/hooks/useUser";
import { ADVERTISER_ROUTE, CREATOR_ROUTE, LOGIN_ROUTE } from "@/lib/routes";
import { Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const { error, setError, register, isLoggedIn, setLoading, isLoading } =
    useUser();
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn) {
      role === "advertiser" && router.push(ADVERTISER_ROUTE);
      role === "creator" && router.push(CREATOR_ROUTE);
    }
    setTimeout(() => {
      setLoading(false);
      setError("");
    }, 5000);
  }, [isLoggedIn]);

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    if (!name || !email || !password || !role) {
      setLoading(false);
      return setError("All fields are required");
    }
    await register(name, email, password, role);
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
              Register
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary"
                    onChange={(e) => setName(e.target.value)}
                  />

                  <span className="absolute right-4 top-4">
                    <User size={22} className="text-muted-foreground" />
                  </span>
                </div>
              </div>
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

              <div className="mb-4">
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
              <div className="mb-6">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Role
                </label>
                <div className="relative">
                  <SelectRole setRole={setRole} />
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
                  Already have an account?{" "}
                  <Link href={LOGIN_ROUTE} className="text-primary">
                    Log in
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

export default Register;
