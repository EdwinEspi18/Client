//const owner_id = "843ed68e-12fe-4634-afcd-6ec089f213fc";
import { ModalCheckout } from "@/components";
import React, { useState } from 'react'
import { es } from 'date-fns/locale'
import { DatePicker } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

export default function Home() {
  const [date, setDate] = useState()
  return (
    <div className='w-full h-full bg-white text-black'>

    <DatePicker date={date} onDateChange={setDate} locale={es}>
      {({ inputProps, focused }) => (
        <input
          className={'input' + (focused ? ' -focused' : '')}
          {...inputProps}
        />
      )}
    </DatePicker>

    </div>
  );
}
