import { create } from "zustand";
interface FetchState {
  data: any;
  creatorsData: any;
  advertisersData: any;
  usersData: any;
  loading: boolean;
  error: any;
  fetchData: (url: string) => void;
  fetchUsers: (url: string) => void;
}
const useFetchCamp = create<FetchState>((set) => ({
  data: [],
  creatorsData: [],
  advertisersData: [],
  usersData: [],
  loading: false,
  error: null,
  fetchData: async (url) => {
    set({ loading: true });
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json().then((data) => data.campaigns);
      set({ data, loading: false });
    } catch (error) {
      set({ error, loading: false });
    }
  },
  fetchUsers: async (url) => {
    set({ loading: true });
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error("Error fetching data");
      else {
        const usersData = await res.json().then((data) => data.users);
        const advertisersData = usersData.filter(
          (user: any) => user.role === "advertiser"
        );
        const creatorsData = usersData.filter(
          (user: any) => user.role === "creator"
        );

        set({ creatorsData, advertisersData });
        setTimeout(() => {
          set({ loading: false });
        }, 1000);
      }
    } catch (error) {
      set({ error, loading: false });
    }
  },
}));
export default useFetchCamp;
