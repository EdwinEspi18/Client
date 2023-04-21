import { create } from "zustand";

interface BearStore {
  color: string;
  setColorPrimary: (color: string) => void;
}

export const useStore = create<BearStore>((set) => ({
  color: "",
  setColorPrimary: (color: string) => set({ color }),
}));
