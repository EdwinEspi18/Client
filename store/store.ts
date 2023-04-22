import { Stores } from "@/types/database";
import { getDay } from "date-fns";
import { create } from "zustand";

interface BearStore {
  store: Stores | null;
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
}

export const useStore = create<BearStore>((set) => ({
  store: null,
  date: new Date(),
  isOpen: false,
  color: "",
  modifiers: {
    disabled: (date: Date) => date.getDay() === 0,
  },
  setColorPrimary: (color: string) => set({ color }),
  handleChangeDate: (date: Date) => set({ date }),
  closeModal: () => set({ isOpen: false }),
  openModal: () => set({ isOpen: true }),
  setModifier: (day: number) =>
    set({ modifiers: { disabled: (date: Date) => getDay(date) === day } }),
}));
