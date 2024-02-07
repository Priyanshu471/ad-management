import { ADMIN_ROUTE, ADVERTISER_ROUTE, CREATOR_ROUTE } from "@/lib/routes";
import { redirect } from "next/navigation";
import { create } from "zustand";

type UserContext = {
  name: string;
  email: string;
  role: string;
  isLoggedIn: boolean;
  error: string;
  setError: (error: string) => void;
  login: (email: string, password: string) => Promise<void>;
  register: (
    name: string,
    email: string,
    password: string,
    role: string
  ) => Promise<void>;
  setUser: (name: string, email: string, role: string) => Promise<void>;
  logout: () => void;
};
const useUser = create<UserContext>((set) => ({
  name: "",
  email: "",
  role: "",
  isLoggedIn: false,
  error: "",
  login: async (email: string, password: string) => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (res.status === 400) {
        set({ error: "Email or password is incorrect" });
      }
      if (res.status === 500) {
        set({ error: "Internal server error, try again" });
      }
      if (res.status === 200) {
        const user = await res.json().then((res) => res.user);
        console.log("new user details: ", user);
        set({
          name: user.name,
          email: user.email,
          role: user.role,
          isLoggedIn: true,
        });
      }
    } catch (error) {
      set({ error: "Internal server error, try again" });
      console.log(error);
    }
  },
  register: async (
    name: string,
    email: string,
    password: string,
    role: string
  ) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role }),
      });
      if (res.status === 400) {
        set({ error: "User already exists" });
      }
      if (res.status === 500) {
        set({ error: "Internal server error, try again" });
      }
      if (res.status === 200) {
        const user = await res.json().then((res) => res.newUser);
        console.log("user details: ", user);
        set({
          name: user.name,
          email: user.email,
          role: user.role,
          isLoggedIn: true,
        });
      }
    } catch (error) {
      set({ error: "Internal server error, try again" });
      console.log(error);
    }
  },
  setUser: async (name: string, email: string, role: string) =>
    set({ name, email, role, isLoggedIn: true }),

  logout: () => set({ name: "", email: "", role: "", isLoggedIn: false }),
  setError: (error: string) => set({ error }),
}));

export default useUser;
