// @ts-nocheck
import { addMinutes, format } from "date-fns";
import es from "date-fns/locale/es";
import { shallow } from "zustand/shallow";

import { trpc } from "@/utils/trpc";
import { ModalCustomer, Sppiner } from "@/components";
import { useStore } from "@/store/store";

export const HoursAvaible = () => {
  const state = useStore(
    (state) => ({
      date: state.date,
      store: state.store?.profile_id,
      setApoimentsFrom: state.setAppointment_from,
      setApoimentsTo: state.setAppointment_to,
      modifiers: state.modifiers,
      handleChangeDate: state.handleChangeDate,
      owner_id: state.owner_id,
      closeModalHours: state.closeModalHours,
      openModalCustomer: state.openModalCustomer,
      services: state.services,
    }),
    shallow
  );
  const store = useStore((state) => state.store);

  const { data, isSuccess, isLoading } = trpc.getSchedulesAvaible.useQuery({
    profile_id: state.owner_id,
    duration_in_minutes: store?.schedule_cell_minutes_interval!,
    start_date: state.date.toDateString(),
  });

  console.log(store);
  const handleClick = (e: any) => {
    const date = new Date(e);
    let minutess: number = 0;
    const minutes = state.services.map((service) => {
      minutess += service.duration_in_minutes;
    });
    const toDate = addMinutes(date, minutess);
    const from = format(date, "yyyy-LL-dd HH:mm:ss");
    const to = format(toDate, "yyyy-LL-dd HH:mm:ss");

    console.log(from, to);
    state.setApoimentsFrom(from);
    state.setApoimentsTo(to);
    state.closeModalHours();
    state.openModalCustomer();
  };

  return (
    <>
      {isLoading && <Sppiner />}
      {isSuccess && (
        <ul className='w-full h-5/6 flex flex-col items-center justify-between gap-2 overflow-y-auto mt-8 p-2  max-sm:w-full'>
          {data.data.map((item: any) => (
            <li
              key={item.datetime}
              className={
                "w-full rounded-lg text-white text-center cursor-pointer" +
                (item.available
                  ? " bg-green-500 hover:bg-green-600"
                  : " bg-red-500 pointer-events-none")
              }
              onClick={() => handleClick(item.datetime)}
            >
              {format(new Date(item.datetime), "h", {
                locale: es,
              })}
              :
              {format(new Date(item.datetime), "mm", {
                locale: es,
              })}
              {new Date(item.datetime).getHours() >= 12 ? " PM" : " AM"}
            </li>
          ))}
          {data.data.length === 0 && (
            <li className='w-full rounded-lg text-white text-center cursor-pointer bg-red-700 pointer-events-none'>
              No hay horario disponible, Selecciona otra fecha
            </li>
          )}
        </ul>
      )}
    </>
  );
};
/*
{data.data.length === 0 && (
            <li className='w-full rounded-lg text-white text-center cursor-pointer bg-red-700'>
              No hay horario disponible, Selecciona otra fecha
            </li>
          )} */