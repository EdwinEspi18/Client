import { DatePickerCalendar, useDateInput } from "react-nice-dates";
import { format } from "date-fns";
import es from "date-fns/locale/es";
import { shallow } from "zustand/shallow";

import { useStore } from "@/store/store";


export const DatePickerInput = () => {
  const state = useStore(
    (state) => ({
      date: state.date,
      modifiers: state.modifiers,
      handleChangeDate: state.handleChangeDate,
      isOpenHours: state.isOpenHours
    }),
    shallow
  );
  const store = useStore((state) => state.store);

  const inputProps = useDateInput({
    date: state.date,
    format: 'yyyy-MM-dd',
    locale: es,
    onDateChange: state.handleChangeDate
  })
return (
<div>
      <input className='input' {...inputProps} />
      <DatePickerCalendar date={state.date} onDateChange={state.handleChangeDate} locale={es} modifiers={state.modifiers} />
    </div>
)
}