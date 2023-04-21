import { ChangeEvent, useState } from "react";

import { Items } from "@/types/database";

interface Props {
  items: Items[];
  color?: string;
}
const ButtonBook = () => {
  return (
    <button className='fixed  bottom-5 right-5 bg-yellow-400 w-32 h-12 rounded-xl'>
      Reservar
    </button>
  );
};

export const TableServices = ({ items, color = "#2222" }: Props) => {
  const [bb, setBb] = useState(false);
  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? setBb(true) : setBb(false);
    console.log(e.target.value);
  };
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full mt-10'>
        <table className='border-collapse w-3/5 mx-auto'>
          <thead>
            <tr>
              <th
                style={{ backgroundColor: color }}
                className={`p-3 font-bold uppercase  border border-gray-300 hidden lg:table-cell`}
              >
                {" "}
              </th>
              <th
                style={{ backgroundColor: color }}
                className={`p-3 font-bold uppercase  border border-gray-300 hidden lg:table-cell`}
              >
                Servicio
              </th>
              <th
                style={{ backgroundColor: color }}
                className={`p-3 font-bold uppercase  border border-gray-300 hidden lg:table-cell`}
              >
                Precio
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item: any) => (
              <tr
                key={item.id}
                className=' bg-white lg:hover:bg-gray-400 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'
              >
                <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                  <input
                    className='group/chec h-5 w-5 cursor-pointer'
                    type='checkbox'
                    value={item.id}
                    onChange={handleChecked}
                  />
                </td>
                <td className='w-full lg:w-auto p-3 text-gray-800  border border-b text-center block lg:table-cell relative lg:static'>
                  {item.name}
                </td>

                <td className='w-full lg:w-auto p-3 text-gray-800  border border-b text-center block lg:table-cell relative lg:static'>
                  {`${item.price} DOP`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {bb && <ButtonBook />}
    </div>
  );
};
