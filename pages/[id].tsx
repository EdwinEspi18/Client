import { NextPage, GetServerSideProps, GetServerSidePropsContext } from "next";
import { UserCircleIcon, StarIcon } from "@heroicons/react/24/solid";

import { TableServices } from "@/components/TableServices";

import { SliderImages } from "@/components/SilderImage";

import { supabase } from "@/supabase/client";

interface Iprops {
  name: string;
}

const IdPage: NextPage<Iprops> = (props) => {
  return (
    <div className='h-screen w-full'>
      <h1 className='text-center text-3xl font-bold'>{props.name}</h1>
      <div className='grid grid-cols-2 grid-rows-1 w-full h-full'>
        <div className='w-full flex justify-center'>
          <div className='w-full mt-10'>
            <TableServices />
          </div>
        </div>
        <div className='w-full'>
          <div className='w-8/12 h-96 flex flex-col items-center justify-center rounded-lg mx-auto mt-10n'>
            <SliderImages />
            <div className='w-full h-12 bg-white rounded-bl-lg rounded-br-lg flex justify-between items-center'>
              <button className='bg-blue-600 w-12 h-12 text-2xl'>«</button>
              <div className='w-4/12 flex justify-evenly'>
                <div className='w-10 h-10 bg-black'></div>
                <div className='w-10 h-10 bg-black'></div>
                <div className='w-10 h-10 bg-black'></div>
              </div>
              <button className='bg-blue-600 w-12 h-12 text-2xl '>»</button>
            </div>
          </div>
          <div className='mt-8 w-8/12 h-40 bg-gray-200 mx-auto rounded-lg'>
            <h2 className='font-bold pt-3 pl-5'>Ubicacion</h2>
            <p className='pl-5'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              assumenda laudantium.
            </p>
            <div className='w-full flex justify-around mt-6'>
              <button className='bg-sky-300 rounded-lg w-40 h-10'>
                Obtener direccion
              </button>
              <button className='bg-sky-300 rounded-lg w-40 h-10'>
                Ver en mapa
              </button>
            </div>
          </div>
          <div className='mt-8 w-8/12 h-64 bg-gray-200 mx-auto rounded-lg'>
            <h2 className='font-bold pt-2 pl-5'>Horas de trabajo</h2>
            <div className='w-full pl-5 flex flex-col justify-around items-start h-56'>
              <div className='w-5/6 flex justify-between items-center'>
                <span>Lunes</span>
                <span>10:00 - 19:30</span>
              </div>
              <div className='w-5/6 flex justify-between items-center'>
                <span>Martes</span>
                <span>10:00 - 19:30</span>
              </div>
              <div className='w-5/6 flex justify-between items-center'>
                <span>Miercoles</span>
                <span>10:00 - 19:30</span>
              </div>
              <div className='w-5/6 flex justify-between items-center'>
                <span>Jueves</span>
                <span>10:00 - 19:30</span>
              </div>
              <div className='w-5/6 flex justify-between items-center'>
                <span>Viernes</span>
                <span>10:00 - 19:30</span>
              </div>
              <div className='w-5/6 flex justify-between items-center'>
                <span>Sabado</span>
                <span>10:00 - 19:30</span>
              </div>
              <div className='w-5/6 flex justify-between items-center '>
                <span>Domingo</span>
                <span>Cerrado</span>
              </div>
            </div>
          </div>
          <div className='mt-8 w-8/12 h-auto bg-gray-200 mx-auto rounded-lg'>
            <h2 className='font-bold pt-3 pl-5'>Miembros</h2>
            <div className='flex flex-col justify-between p-3 w-4/6'>
              <div className='flex justify-between items-center'>
                <UserCircleIcon width={70} />
                <span>Edwin Espinal</span>
              </div>
              <div className='flex justify-between items-center'>
                <UserCircleIcon width={70} />
                <span>Edwin Espinal</span>
              </div>
              <div className='flex justify-between items-center'>
                <UserCircleIcon width={70} />
                <span>Edwin Espinal</span>
              </div>
            </div>
          </div>
          <div className='mt-3 w-8/12 h-auto mx-auto rounded-lg'>
            <h2 className='font-bold text-2xl'>Reseñas de clientes ( # )</h2>
          </div>
          <div className='flex flex-col justify-around w-8/12 h-20 mx-auto rounded-lg bg-gray-200 mt-3 p-6'>
            <div className='flex justify-between items-center'>
              <span>Usuario</span>
              <span>12-04-2023</span>
            </div>
            <div className='flex gap-2 mt-3'>
              <StarIcon width={20} />
              <StarIcon width={20} />
              <StarIcon width={20} />
              <StarIcon width={20} />
            </div>
          </div>
          <div className='flex flex-col justify-around w-8/12 h-20 mx-auto rounded-lg bg-gray-200 mt-3 p-6'>
            <div className='flex justify-between items-center'>
              <span>Usuario</span>
              <span>12-04-2023</span>
            </div>
            <div className='flex gap-2 mt-3 '>
              <StarIcon width={20} />
              <StarIcon width={20} />
              <StarIcon width={20} />
              <StarIcon width={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdPage;

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const owner_id = ctx.params?.id as string;
  /* 
  try {
    const { data, error } = await supabase.rpc("fetch_store_info_by_owner_id", {
      owner_id,
    });
    if (data === null) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
    return {
      props: {
        data,
        error,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } */

  return {
    props: {
      name: "Server",
    },
  };
};
