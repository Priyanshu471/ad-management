import { create } from "zustand";

export type Campaign = {
  id?: string;
  title: string;
  description: string;
  duration: string;
  budget: string;
  status: "Active" | "End" | "Live" | "Deleted";
};

type ModalState = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
  campaign: Campaign;
  campaigns: any[];
  setCampaigns: (campaigns: any[]) => void;
  editCampaign: (campaign: Campaign) => void;
};

const useCampaign = create<ModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
  campaign: {
    id: "",
    title: "",
    description: "",
    duration: "",
    budget: "",
    status: "Active",
  },
  campaigns: [],
  setCampaigns: (campaigns) => set({ campaigns }),
  editCampaign: (campaign) => set({ campaign }),
}));

export default useCampaign;
