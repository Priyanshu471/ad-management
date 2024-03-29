"use client";
import useUser from "@/hooks/useUser";
import { LOGIN_ROUTE } from "@/lib/routes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function AuthGuard() {
  const pathname = usePathname();
  const router = useRouter();
  const { isLoggedIn } = useUser();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push(LOGIN_ROUTE);
      toast.error("Redirecting...");
    }
  }, [isLoggedIn]);

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-whiter">
      <pre>You are trying to access: {pathname.slice(1)}</pre>
      <p className="block">
        This is a protected route please{" "}
        <Link href={`${LOGIN_ROUTE}`} className="underline text-violet-700">
          Log In
        </Link>{" "}
        to continue.
      </p>
    </div>
  );
}
