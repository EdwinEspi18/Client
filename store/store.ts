// @ts-nocheck
import { Stores } from "@/types/database";
import { create } from "zustand";

interface Services {
  item_id: string;
  duration_in_minutes: number;
  quantity: number;
  price: number;
}
export interface ReservationStore {
  appointment_from: string;
  appointment_to: string;
  customer_name: string;
  customer_phone_number: string;
  item_details: [
    {
      item_id: string;
      duration_in_minutes: number;
      quantity: number;
      price: number;
    }
  ];
  note: string;
  store_id: string;
}

interface BearStore {
  dayClose: number;
  store: Stores | null;
  appointment_from: string;
  appointment_to: string;
  owner_id: string;
  color: string;
  date: Date;
  services: [
    {
      item_id: string;
      duration_in_minutes: number;
      quantity: number;
      price: number;
    }
  ];
  isOpenHours: boolean;
  isOpenCustomer: boolean;
  isOpenCheckout: boolean;
  requestReservartion: ReservationStore;
  modifiers: {
    disabled: (date: Date) => boolean;
  };
  handleChangeDate: (date: Date | null) => void;
  setColorPrimary: (color: string) => void;
  closeModalHours: () => void;
  openModalHours: () => void;
  closeModalCustomer: () => void;
  openModalCustomer: () => void;
  closeModalCheckout: () => void;
  openModalCheckout: () => void;
  setModifier: (day: number) => void;
  setStore: (store: Stores) => void;
  setOwner: (id: string) => void;
  setAppointment_from: (date: string) => void;
  setAppointment_to: (date: string) => void;
  setRequest: (request: ReservationStore) => void;
  setServices: (service: Services) => void;
  setServicesUnCheck: (services: Array<Services>) => void;
  setRequestClear: () => void;
}

export const useStore = create<BearStore>((set, get) => ({
  store: null,
  requestReservartion: {} as ReservationStore,
  date: new Date(),
  isOpenHours: false,
  services: [] as any,
  isOpenCustomer: false,
  isOpenCheckout: false,
  color: "",
  dayClose: 0,
  owner_id: "",
  appointment_from: "",
  appointment_to: "",
  modifiers: {
    disabled: (date: Date) => date.getDay() === get().dayClose,
  },
  setColorPrimary: (color: string) => set({ color }),
  handleChangeDate: (date: Date) => set({ date }),
  closeModalHours: () => set({ isOpenHours: false }),
  openModalHours: () => set({ isOpenHours: true }),
  closeModalCustomer: () => set({ isOpenCustomer: false }),
  openModalCustomer: () => set({ isOpenCustomer: true }),
  closeModalCheckout: () => set({ isOpenCheckout: false }),
  openModalCheckout: () => set({ isOpenCheckout: true }),
  setModifier: (day: number) => set({ dayClose: day }),
  setStore: (store: Stores) => set({ store }),
  setOwner: (id: string) => set({ owner_id: id }),
  setRequest: (request: ReservationStore) =>
    set({ requestReservartion: request }),
  setAppointment_from: (date: string) => set({ appointment_from: date }),
  setAppointment_to: (date: string) => set({ appointment_to: date }),
  setServices: (service: Services) => {
    if (
      get().services.find((item: Services) => item.item_id === service.item_id)
    ) {
      return set({ services: get().services });
    }
    set({ services: [...get().services, service] });
  },
  setServicesUnCheck: (services: Array<Services>) => set({ services }),
  setRequestClear: () =>
    set({ requestReservartion: {} as ReservationStore, services: [] as any }),
}));
