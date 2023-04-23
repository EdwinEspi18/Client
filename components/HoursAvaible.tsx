import { DatePicker } from "react-nice-dates";
import { format } from "date-fns";
import es from "date-fns/locale/es";
import { shallow } from "zustand/shallow";

import { trpc } from "@/utils/trpc";
import { Sppiner } from "@/components";
import { useStore } from "@/store/store";

export const HoursAvaible = () => {
  const state = useStore(
    (state) => ({
      date: state.date,
      store: state.store?.profile_id,
      modifiers: state.modifiers,
      handleChangeDate: state.handleChangeDate,
      owner_id: state.owner_id,
    }),
    shallow
  );

  const { data, isSuccess, isLoading } = trpc.getSchedulesAvaible.useQuery({
    profile_id: state.owner_id,
    duration_in_minutes: 30,
    start_date: state.date.toDateString(),
  });

  const handleClick = (e: any) => {
    console.log(e);
  };

  return (
    <>
      <DatePicker
        date={state.date}
        onDateChange={state.handleChangeDate}
        locale={es}
        modifiers={state.modifiers}
        minimumDate={new Date()}
      >
        {({ inputProps, focused }) => (
          <input
            className={
              " w-full border border-gray-400 p-2" +
              (focused ? " -focused" : "")
            }
            {...inputProps}
            value={
              state.date
                ? format(state.date, "EEEE dd MMMM yyyy", { locale: es })
                : "none"
            }
            type='text'
          />
        )}
      </DatePicker>
      {isLoading && <Sppiner />}
      {isSuccess && (
        <ul className='w-full h-5/6 flex flex-col items-center justify-between gap-2 overflow-y-auto mt-8 p-2  max-sm:w-full'>
          {data.data.map((item: any) => (
            <li
              key={item.datetime}
              className={
                "w-full rounded-lg text-white text-center cursor-pointer" +
                (item.available
                  ? " bg-green-500"
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
        </ul>
      )}
    </>
  );
};
