import { useStore } from "@/store/store";
import { shallow } from "zustand/shallow";

export const UbicationCard = () => {
  const state = useStore(
    (state) => ({
      color: state.color,
      address: state.store?.address,
      latitude: state.store?.latitude,
      longitude: state.store?.longitude,
    }),
    shallow
  );
  return (
    <div
      style={{ backgroundColor: state.color }}
      className='w-3/6 h-32  rounded-lg mt-48 max-sm:w-full max-sm:mx-auto'
    >
      <h2 className='font-bold pt-3 pl-5'>Ubicacion</h2>
      <p className='pl-5'>{state.address}</p>
      <div className='w-full flex justify-around mt-4'>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${state.latitude}, ${state.longitude}`}
          className='bg-gray-300 rounded-lg w-32 h-10 text-sm flex items-center justify-center'
          target='_blank'
        >
          <span className=''>Obtener direccion</span>
        </a>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${state.latitude},${state.longitude}`}
          className='bg-gray-300 rounded-lg w-32 h-10 text-sm flex items-center justify-center'
          target='_blank'
        >
          <span>Ver en mapa</span>
        </a>
      </div>
    </div>
  );
};
