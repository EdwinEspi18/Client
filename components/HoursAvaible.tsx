import { format } from "date-fns";
import es from "date-fns/locale/es";
import { DatePicker } from "react-nice-dates";

import { trpc } from "@/utils/trpc";
import { Sppiner } from "@/components";

export const HoursAvaible = ({
  date,
  handleChangeDate,
  modifiers,
  owner_id,
}: any) => {
  const { data, isSuccess, isLoading } = trpc.getSchedulesAvaible.useQuery({
    profile_id: owner_id,
    duration_in_minutes: 30,
    start_date: date.toDateString(),
  });

  const handleClick = (e: any) => {
    console.log(e);
  };

  return (
    <>
      <DatePicker
        date={date}
        onDateChange={handleChangeDate}
        locale={es}
        modifiers={modifiers}
        minimumDate={new Date()}
      >
        {({ inputProps, focused }) => (
          <input
            className={
              "input w-full border border-gray-400 p-2" +
              (focused ? " -focused" : "")
            }
            {...inputProps}
            value={
              date ? format(date, "EEEE dd MMMM yyyy", { locale: es }) : "none"
            }
            type='text'
          />
        )}
      </DatePicker>
      {isLoading && <Sppiner />}
      {isSuccess && (
        <ul className='w-full h-5/6 flex flex-col items-center justify-between gap-2 overflow-y-auto mt-8 p-2'>
          {data.data.map((item: any) => (
            <li
              key={item.datetime}
              className={
                "w-full rounded-lg text-white text-center cursor-pointer" +
                (item.available ? " bg-green-500" : " bg-red-500")
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
