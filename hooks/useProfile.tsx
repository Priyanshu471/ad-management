import { create } from "zustand";
interface ProfileState {
  open: boolean;
  setOpen: (open: boolean) => void;
}
export const useProfile = create<ProfileState>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));
