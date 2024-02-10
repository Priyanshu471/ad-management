import { create } from "zustand";

export type Campaign = {
  title: string;
  description: string;
  duration: string;
  budget: string;
  status: "Active" | "End" | "Live" | "Deleted";
};
type campaignId = {
  id: string;
  title: string;
};
type ModalState = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
  campaign: Campaign;
  campaigns: Campaign[];
  setCampaigns: (campaign: Campaign[]) => void;
  editCampaign: (campaign: Campaign) => void;
};

const useCampaign = create<ModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
  campaign: {
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
