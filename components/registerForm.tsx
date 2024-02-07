"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SelectRole } from "./selectRole";
import useUser from "@/hooks/useUser";
import { ADMIN_ROUTE, ADVERTISER_ROUTE, CREATOR_ROUTE } from "@/lib/routes";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const { error, setError, register, isLoggedIn } = useUser();
  const router = useRouter();
  useEffect(() => {
    role === "advertiser" && router.push(ADVERTISER_ROUTE);
    role === "admin" && router.push(ADMIN_ROUTE);
    role === "creator" && router.push(CREATOR_ROUTE);
  }, [isLoggedIn]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!name || !email || !password || !role)
      return setError("All fields are required");
    await register(name, email, password, role);
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-primary min-w-[30%] bg-white/80">
        <h1 className="text-3xl font-medium my-4">Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <SelectRole setRole={setRole} />
          <Button variant={"primary"} className="" type="submit">
            Register
          </Button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/"}>
            Already have an account?{" "}
            <span className="underline text-primary/80">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Register;
