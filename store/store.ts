import { Stores } from "@/types/database";
import { create } from "zustand";

interface BearStore {
  dayClose: number;
  store: Stores | null;
  owner_id: string;
  color: string;
  date: Date;
  isOpen: boolean;
  modifiers: {
    disabled: (date: Date) => boolean;
  };
  handleChangeDate: (date: Date) => void;
  setColorPrimary: (color: string) => void;
  closeModal: () => void;
  openModal: () => void;
  setModifier: (day: number) => void;
  setStore: (store: Stores) => void;
  setOwner: (id: string) => void;
}

export const useStore = create<BearStore>((set, get) => ({
  store: null,
  date: new Date(),
  isOpen: false,
  color: "",
  dayClose: 0,
  owner_id: "",
  modifiers: {
    disabled: (date: Date) => date.getDay() === get().dayClose,
  },
  setColorPrimary: (color: string) => set({ color }),
  handleChangeDate: (date: Date) => set({ date }),
  closeModal: () => set({ isOpen: false }),
  openModal: () => set({ isOpen: true }),
  setModifier: (day: number) => set({ dayClose: day }),
  setStore: (store: Stores) => set({ store }),
  setOwner: (id: string) => set({ owner_id: id }),
}));
