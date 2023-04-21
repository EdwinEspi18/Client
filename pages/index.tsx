//const owner_id = "843ed68e-12fe-4634-afcd-6ec089f213fc";
import { useState } from "react";
import es from "date-fns/locale/es";
import { DatePickerCalendar } from "react-nice-dates";

import "react-nice-dates/build/style.css";
import { format, getDay, parse } from "date-fns";
import { Modal } from "@/components/Modal";
export default function Home() {
  const [date, setDate] = useState();

  const modifiers = {
    disabled: (date) => getDay(date) === 0,
  };

  const handleChangeDate = (e) => {
    const dateFormat = format(e, "dd/MM/yyyy", { locale: es });
    setDate(e);
  };

  return (
    <div className='w-full h-screen bg-white text-white'>
      Home
      <div className=''>
        <p className='text-black'>
          Selected date:{" "}
          {date ? format(date, "dd MMMM yyyy", { locale: es }) : "none"}.
        </p>
        <DatePickerCalendar
          date={date}
          onDateChange={handleChangeDate}
          locale={es}
          modifiers={modifiers}
        />
      </div>
      <div className='bg-black'>
        <Modal />
      </div>
    </div>
  );
}
