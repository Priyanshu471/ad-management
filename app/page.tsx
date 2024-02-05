"use client";
import { SelectRole } from "@/components/selectRole";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState<"login" | "register">("login");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-violet-200">
      <h1 className="text-4xl mb-8">Advertisement Management System</h1>
      <div className="flex items-center justify-center rounded-lg shadow-lg bg-white w-full px-24 py-12 h-[600px] gap-x-4 relative">
        <div className="p-4 border-r-4 border-b-gray-500 w-1/2 h-full flex items-center justify-center">
          <Image
            src="/user-auth-icon.jpg"
            alt="user authentication icon"
            width={400}
            height={400}
            className="h-72 rounded-lg"
          />
        </div>
        <div className="p-4 w-1/2">
          <Button
            variant={"ghost"}
            className={cn(
              "font-medium text-3xl mb-10 border-[#7a4fd3] rounded-none",
              tab === "login" ? "border-b-4" : "opacity-30"
            )}
            onClick={() => setTab("login")}
          >
            Log in
          </Button>
          <Button
            variant={"ghost"}
            className={cn(
              "font-medium text-3xl mb-10 border-[#7a4fd3] rounded-none",
              tab === "register" ? "border-b-4" : "opacity-30"
            )}
            onClick={() => setTab("register")}
          >
            Register
          </Button>
          <div className="flex flex-col items-center gap-y-4 min-h-[270px]">
            <div className="flex flex-col gap-y-4 items-center w-2/3">
              {tab === "register" && (
                <Input
                  type="text"
                  placeholder="Name"
                  className="border-[#7a4fd3] text-lg placeholder:text-foreground/20"
                />
              )}
              <Input
                type="email"
                placeholder="johndeo@xyz.com"
                className="border-[#7a4fd3] text-lg placeholder:text-foreground/20 "
              />
              <Input
                type="password"
                placeholder="XXXXXXXX"
                className="border-[#7a4fd3] text-lg placeholder:text-foreground/20 placeholder:text-sm  "
              />
              {tab === "register" && <SelectRole />}
            </div>
            <Button variant={"primary"} className="text-lg w-2/3 ">
              {tab === "login" ? "Log in" : "Register"}
            </Button>
            {tab === "login" && (
              <Button
                variant={"link"}
                className="text-sm font-normal text-muted-foreground"
              >
                Forget your password?
              </Button>
            )}
            <p className="text-center mt-12 text-muted-foreground absolute bottom-4">
              Terms of use. Privacy policy
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
