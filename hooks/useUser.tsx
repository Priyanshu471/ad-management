import { create } from "zustand";

type UserContext = {
  userId: string;
  name: string;
  email: string;
  role: string;
  user: any;
  isLoggedIn: boolean;
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
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
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};
const useUser = create<UserContext>((set) => ({
  userId: "",
  name: "",
  email: "",
  role: "",
  user: {},
  isLoggedIn: false,
  isLoading: false,
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
        set({ isLoading: false });
      }
      if (res.status === 500) {
        set({ error: "Internal server error, try again" });
        set({ isLoading: false });
      }
      if (res.status === 200) {
        const user = await res.json().then((res) => res.user);

        set({
          userId: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          isLoggedIn: true,
          user: user,
        });
      }
    } catch (error) {
      set({ error: "Internal server error, try again" });
      set({ isLoading: false });
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
        set({ isLoading: false });
      }
      if (res.status === 500) {
        set({ error: "Internal server error, try again" });
        set({ isLoading: false });
      }
      if (res.status === 200) {
        const user = await res.json().then((res) => res.newUser);

        set({
          userId: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          isLoggedIn: true,
          user: user,
        });
        // set({ isLoading: false });
      }
    } catch (error) {
      set({ error: "Internal server error, try again" });
      set({ isLoading: false });
      console.log(error);
    }
  },
  setUser: async (name: string, email: string, role: string) =>
    set({ name, email, role, isLoggedIn: true }),
  setLoading: (isLoading: boolean) => set({ isLoading }),
  logout: () => {
    set({ name: "", email: "", role: "", isLoggedIn: false });
  },
  setError: (error: string) => set({ error }),
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
}));

export default useUser;
