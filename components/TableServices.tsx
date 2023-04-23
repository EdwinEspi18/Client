import { ChangeEvent, useState } from "react";

import { Items } from "@/types/database";
import { useStore } from "@/store/store";
import { shallow } from "zustand/shallow";

interface Props {
  items: Items[];
  color?: string;
  openModal: () => void;
}
const ButtonBook = ({ openModal }: any) => {
  return (
    <button
      onClick={openModal}
      className='fixed  bottom-5 right-5 bg-yellow-400 w-32 h-12 rounded-xl'
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
      openModal: state.openModal,
    }),
    shallow
  );

  const [bb, setBb] = useState(false);
  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? setBb(true) : setBb(false);
    console.log(e.target.value);
  };
  return (
    <div className='h-auto'>
      <table className='table-auto shadow-lg  border-collapse'>
        <thead>
          <tr>
            <th
              style={{ backgroundColor: state.color }}
              className='bg-blue-100 border text-left px-8 py-4'
            ></th>
            <th
              style={{ backgroundColor: state.color }}
              className='bg-blue-100 border text-left px-8 py-4'
            >
              Servicio
            </th>
            <th
              style={{ backgroundColor: state.color }}
              className='bg-blue-100 border text-left px-8 py-4'
            >
              Precio
            </th>
          </tr>
        </thead>
        <tbody>
          {state.store?.items.map((item: any) => (
            <tr key={item.id} className=' bg-white lg:hover:bg-gray-400'>
              <td className='w-full p-3 text-gray-800 text-center border border-b '>
                <input
                  className='h-5 w-5 cursor-pointer'
                  type='checkbox'
                  value={item.id}
                  onChange={handleChecked}
                />
              </td>
              <td className='w-full p-3 text-gray-800 border border-b text-center'>
                {item.name}
              </td>

              <td className='w-full p-3 text-gray-800  border border-b text-center '>
                {`${item.price} DOP`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {bb && <ButtonBook openModal={state.openModal} />}
    </div>
  );
};
