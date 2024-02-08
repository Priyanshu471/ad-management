import { create } from "zustand";

type OpenState = {
  open: boolean;
  setOpen: (value: boolean) => void;
};
const useOpen = create<OpenState>((set) => ({
  open: false,
  setOpen: (value) => set({ open: value }),
}));
export default useOpen;
