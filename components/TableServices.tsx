export const TableServices = () => {
  return (
    <table className='border-collapse w-3/5 mx-auto'>
      <thead>
        <tr>
          <th className='p-3 font-bold uppercase bg-gray-700 text-white border border-gray-300 hidden lg:table-cell'>
            ..
          </th>
          <th className='p-3 font-bold uppercase bg-gray-700 text-white border border-gray-300 hidden lg:table-cell'>
            Servicio
          </th>
          <th className='p-3 font-bold uppercase bg-gray-700 text-white border border-gray-300 hidden lg:table-cell'>
            Precio
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className='bg-white lg:hover:bg-gray-400 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
          <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
            <input type='checkbox' />
          </td>
          <td className='w-full lg:w-auto p-3 text-gray-800  border border-b text-center block lg:table-cell relative lg:static'>
            Servicio #1
          </td>

          <td className='w-full lg:w-auto p-3 text-gray-800  border border-b text-center block lg:table-cell relative lg:static'>
            $ 100
          </td>
        </tr>
        <tr className='bg-white lg:hover:bg-gray-400 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
          <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
            <input type='checkbox' />
          </td>
          <td className='w-full lg:w-auto p-3 text-gray-800  border border-b text-center block lg:table-cell relative lg:static'>
            Servicio #2
          </td>

          <td className='w-full lg:w-auto p-3 text-gray-800  border border-b text-center block lg:table-cell relative lg:static'>
            $ 100
          </td>
        </tr>
        <tr className='bg-white lg:hover:bg-gray-400 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
          <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
            <input type='checkbox' />
          </td>
          <td className='w-full lg:w-auto p-3 text-gray-800  border border-b text-center block lg:table-cell relative lg:static'>
            Servicio #3
          </td>

          <td className='w-full lg:w-auto p-3 text-gray-800  border border-b text-center block lg:table-cell relative lg:static'>
            $ 100
          </td>
        </tr>
        <tr className='bg-white lg:hover:bg-gray-400 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
          <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
            <input type='checkbox' />
          </td>
          <td className='w-full lg:w-auto p-3 text-gray-800  border border-b text-center block lg:table-cell relative lg:static'>
            Servicio #4
          </td>

          <td className='w-full lg:w-auto p-3 text-gray-800  border border-b text-center block lg:table-cell relative lg:static'>
            $ 100
          </td>
        </tr>
      </tbody>
    </table>
  );
};
