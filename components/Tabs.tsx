import { TableServices } from "./TableServices";

export const Tabs = () => {
  return (
    <div className=' flex items-center justify-center w-full h-96 bg-blue-300'>
      <ul className='grid max-w-full w-full grid-cols-3 '>
        <li className='w-32'>
          <input
            className='peer sr-only'
            type='radio'
            value='yes'
            name='services'
            id='yes'
            checked
          />
          <label
            className='flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out'
            htmlFor='yes'
          >
            Details
          </label>

          <div className='absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-96 mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1'>
            <TableServices />
          </div>
        </li>

        <li className='w-32'>
          <input
            className='peer sr-only'
            type='radio'
            value='no'
            name='services'
            id='no'
          />
          <label
            className='flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out'
            htmlFor='no'
          >
            About
          </label>

          <div className='absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-80 mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1'>
            <TableServices />
          </div>
        </li>

        <li className='w-32'>
          <input
            className='peer sr-only'
            type='radio'
            value='yesno'
            name='services'
            id='yesno'
          />
          <label
            className='flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out '
            htmlFor='yesno'
          >
            Something
          </label>

          <div className='absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-80 mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1'>
            <TableServices />
          </div>
        </li>
      </ul>
    </div>
  );
};
