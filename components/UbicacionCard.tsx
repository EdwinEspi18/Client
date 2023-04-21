interface Props {
  color: string;
  latitude: string;
  longitude: string;
  address?: string;
}

export const UbicationCard = ({
  color,
  latitude,
  longitude,
  address,
}: Props) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className='w-8/12 h-40 mx-auto rounded-lg mt-3'
    >
      <h2 className='font-bold pt-3 pl-5'>Ubicacion</h2>
      <p className='pl-5'>{address}</p>
      <div className='w-full flex justify-around mt-6'>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${latitude}, ${longitude}`}
          className='bg-gray-300 rounded-lg w-40 h-10 flex items-center justify-center'
          target='_blank'
        >
          <span className=''>Obtener direccion</span>
        </a>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
          className='bg-gray-300 rounded-lg w-40 h-10  flex items-center justify-center'
          target='_blank'
        >
          <span>Ver en mapa</span>
        </a>
      </div>
    </div>
  );
};
