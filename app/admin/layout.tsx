"use client";
import useUser from "@/hooks/useUser";
import { ReactNode } from "react";
import AuthGuard from "./_components/authGaurd";

const Layout = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn } = useUser();
  if (!isLoggedIn) return <AuthGuard />;
  return children;
};

export default Layout;
