import { create } from "zustand";
type ImageState = {
  userImgUrl?: string;
  coverImgUrl?: string;
  setUserImgUrl: (userImgUrl: string) => void;
  setCoverImgUrl: (coverImgUrl: string) => void;
};
export const useImage = create<ImageState>((set) => ({
  userImgUrl: "/user-icon.png",
  coverImgUrl: "/banner-image.png",
  setUserImgUrl: (userImgUrl) => set({ userImgUrl }),
  setCoverImgUrl: (coverImgUrl) => set({ coverImgUrl }),
}));
