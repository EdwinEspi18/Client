// @ts-nocheck
import { ChangeEvent, useState } from "react";

import { useStore } from "@/store/store";
import { shallow } from "zustand/shallow";

const ButtonBook = ({ openModal }: any) => {
  const color = useStore((state) => state.color);
  return (
    <button
      onClick={openModal}
      style={{ backgroundColor: color }}
      className='fixed bottom-5 right-5  w-32 h-12 rounded-xl opacity-100'
    >
      Reservar
    </button>
  );
};

export const TableServices = () => {
  const state = useStore(
    (state) => ({
      store: state.store,
      date: state.date,
      color: state.color,
      openModal: state.openModalHours,
      setServices: state.setServices,
      services: state.services,
      setServicesUnCheck: state.setServicesUnCheck,
    }),
    shallow
  );

  const [check, setCheck] = useState(false);

  const handleChecked = (
    duration: number,
    id: string,
    price: string,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    e.target.checked ? setCheck(true) : setCheck(false);
    if (!e.target.checked) {
      const n = state.services.filter((item) => item.item_id !== id);
      state.setServicesUnCheck(n);
      return;
    }
    console.log(e.target.value);
    state.setServices({
      item_id: id,
      price: parseInt(price),
      quantity: 1,
      duration_in_minutes: duration,
    });
  };

  const color = state.color;

  return (
    <div className='h-auto'>
      <table className='table-auto shadow-lg  border-collapse bg-opacity-5'>
        <thead>
          {state.color.length != 0 && (
            <tr
              style={{
                backgroundColor: state.color,
              }}
            >
              <th className='bg-opacity-40 border text-left px-8 py-4'></th>
              <th className='bg-opacity-40 border text-left px-8 py-4'>
                Servicio
              </th>
              <th className='relative bg-opacity-40 border text-left px-8 py-4'>
                Precio
              </th>
            </tr>
          )}
        </thead>

        <tbody>
          {state.store?.items.map((item) => (
            <tr key={item.id} className=' bg-white lg:hover:bg-gray-400'>
              <td className='w-full p-3 text-gray-800 text-center border border-b '>
                <input
                  className='h-5 w-5 cursor-pointer'
                  type='checkbox'
                  value={item.id}
                  onChange={(e) =>
                    handleChecked(
                      item.duration_in_minutes!,
                      item.id,
                      item.price,
                      e
                    )
                  }
                />
              </td>
              <td className='w-full p-3 text-gray-800 border border-b text-center'>
                {item.name}
              </td>

              <td className='w-full p-3 text-gray-800  border border-b text-center '>
                {`${item.price} ${state.store.currency_code}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {state.services.length != 0 && <ButtonBook openModal={state.openModal} />}
    </div>
  );
};
