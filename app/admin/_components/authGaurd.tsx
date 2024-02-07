import { LOGIN_ROUTE } from "@/lib/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthGuard() {
  const pathname = usePathname();

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
