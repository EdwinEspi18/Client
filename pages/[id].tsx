import { useEffect } from "react";
import {
  NextPage,
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { UserCircleIcon, StarIcon } from "@heroicons/react/24/solid";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { TableServices } from "@/components/TableServices";

import { SliderImages } from "@/components/SilderImage";

import { supabase } from "@/supabase/client";
import { byId } from "@/utils/querys";
import { appRouter } from "@/server/routers/_app";

const IdPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const owner_id: string = "c73e0ff9-5d76-492d-b450-cc7135e30340";
  useEffect(() => {
    async function ee() {
      const { data, error } = await byId(owner_id);
      console.log(data, error);
    }
    ee();
  }, []);

  return (
    <div className='h-screen w-full'>
      <h1 className='text-center text-3xl font-bold'>ll</h1>
      <div className='grid grid-cols-2 grid-rows-1 w-full h-full'>
        <div className='w-full flex justify-center'>
          <div className='w-full mt-10'>
            <TableServices />
          </div>
        </div>
        <div className='w-full'>
          <div className='w-8/12 h-[460px] flex flex-col items-center justify-center rounded-lg mx-auto '>
            <SliderImages />
          </div>
          <div className='w-8/12 h-40 bg-gray-200 mx-auto rounded-lg'>
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

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const helpers = createServerSideHelpers({
    router: appRouter,
    ctx: {},
  });

  const result = await helpers.getStore.fetch();
  console.log(result);
  return {
    props: {
      trpcState: helpers.dehydrate(),
    },
  };
};

export default IdPage;
