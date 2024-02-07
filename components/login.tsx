"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useUser from "@/hooks/useUser";
import {
  ADMIN_ROUTE,
  ADVERTISER_ROUTE,
  CREATOR_ROUTE,
  REGISTER_ROUTE,
} from "@/lib/routes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const { isLoggedIn, error, setError, login, role } = useUser();
  useEffect(() => {
    if (isLoggedIn) {
      if (role === "admin") router.push(ADMIN_ROUTE);
      if (role === "advertiser") router.push(ADVERTISER_ROUTE);
      if (role === "creator") router.push(CREATOR_ROUTE);
    }
  }, [isLoggedIn, role]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!email || !password) return setError("All fields are required");
    await login(email, password);
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-xl p-5 rounded-lg border-t-4 border-primary min-w-[30%] bg-white/80">
        <h1 className="text-3xl font-medium my-4">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
          <Button variant={"primary"} className="">
            Login
          </Button>
          <span role="button" className="underline text-sm mt-1 text-center">
            Forget password?
          </span>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <Link className="text-sm mt-3 text-right" href={`${REGISTER_ROUTE}`}>
            Don&apos;t have an account?{" "}
            <span className="underline text-primary/80">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Login;
