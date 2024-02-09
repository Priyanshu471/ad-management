"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SelectRole } from "./selectRole";
import useUser from "@/hooks/useUser";
import { ADMIN_ROUTE, ADVERTISER_ROUTE, CREATOR_ROUTE } from "@/lib/routes";
import Spinner from "./spinner";

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
      role === "admin" && router.push(ADMIN_ROUTE);
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
    if (!name || !email || !password || !role)
      return setError("All fields are required");
    await register(name, email, password, role);
  };
  if (isLoading)
    return (
      <div className="h-screen grid place-items-center">
        <Spinner />
      </div>
    );
  return (
    <div className="grid place-items-center h-screen">
      <div className="text-primary absolute top-10 flex flex-col items-center justify-center gap-y-10">
        <h1 className=" text-3xl">Welcome to Advertisment Management System</h1>
        <h3 className="text-xl">Create an account</h3>
      </div>
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
            <div className="bg-red text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
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
