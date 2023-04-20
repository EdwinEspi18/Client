export const UbicationCard = ({ color }: { color: string }) => {
  return (
    <div className={`w-8/12 h-40 bg-[${color}]/50 mx-auto rounded-lg`}>
      <h2 className='font-bold pt-3 pl-5'>Ubicacion</h2>
      <p className='pl-5'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
        assumenda laudantium.
      </p>
      <div className='w-full flex justify-around mt-6'>
        <button className='bg-sky-300 rounded-lg w-40 h-10'>
          Obtener direccion
        </button>
        <button className='bg-sky-300 rounded-lg w-40 h-10'>Ver en mapa</button>
      </div>
    </div>
  );
};
