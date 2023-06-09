import { useState } from "react";

import { DatePicker } from "react-nice-dates";
import { format } from "date-fns";
import es from "date-fns/locale/es";
import { shallow } from "zustand/shallow";

import { useStore } from "@/store/store";

import 'react-nice-dates/build/style.css'


export const DatePickerInput = () => {
  const [focus, setFocus] = useState(false)

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

return (
  <>
  <DatePicker date={state.date} onDateChange={state.handleChangeDate} locale={es} modifiers={state.modifiers} minimumDate={new Date()}>
      {({ inputProps, focused }) => (
        <input
        className={'input w-full border border-gray-200 p-3' + (focused ? ' -focused' : '')}
        {...inputProps}
        value={ format(state.date, 'EEEE dd LLL yyyy', { locale: es }) }
        />
        )}
    </DatePicker>
        </> 
)
}