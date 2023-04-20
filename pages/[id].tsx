import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { UserCircleIcon, StarIcon } from "@heroicons/react/24/solid";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { TableServices } from "@/components/TableServices";

import { SliderImages } from "@/components/SilderImage";
import { appRouter } from "@/server/routers/_app";
import { trpc } from "@/utils/trpc";
import { Stores } from "@/types/database";
import { UseTRPCQueryResult } from "@trpc/react-query/shared";

export interface IResult {
  data: Stores[];
  error: object | null;
}

const IdPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const days = {
    1: "Lunes",
    2: "Martes",
    3: "Miercoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sabado",
    7: "Domingo",
  };
  const { owner_id } = props;

  const { data, isLoading } = trpc.getStore.useQuery(owner_id);
  const color = `#${data.data[0].color_hex}`;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='h-screen w-full'>
      <h1 className='pt-3 text-center text-3xl font-bold'>
        {data.data[0].store_name}
      </h1>
      <div className='grid grid-cols-2 grid-rows-1 w-full h-full'>
        <div className='w-full flex justify-center'>
          <div className='w-full mt-10'>
            <TableServices items={data.data[0].items} />
          </div>
        </div>
        <div className='w-full'>
          {data.data[0].images && (
            <div className='w-8/12 h-[460px] flex flex-col items-center justify-center rounded-lg mx-auto '>
              <SliderImages />
            </div>
          )}
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
              <button className='bg-sky-300 rounded-lg w-40 h-10'>
                Ver en mapa
              </button>
            </div>
          </div>
          <div className='mt-8 w-8/12 h-64 bg-gray-200 mx-auto rounded-lg'>
            <h2 className='font-bold pt-2 pl-5'>Horas de trabajo</h2>
            <div className='w-full pl-5 pb-2  flex flex-col justify-around items-start h-56'>
              {data.data[0].schedules.map((schedule, index) => (
                <div
                  key={index}
                  className='w-5/6 flex justify-between items-center'
                >
                  <span>{days[schedule.day]}</span>
                  <span>
                    {schedule.is_closed
                      ? "Close"
                      : `${schedule.time_from} - ${schedule.time_to}`}
                  </span>
                </div>
              ))}
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
            <h2 className='font-bold text-2xl'>
              Reseñas de clientes ( {data.data[0].reviews === null ? "0" : "#"})
            </h2>
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
  const owner_id = ctx.params?.id as string;

  const helpers = createServerSideHelpers({
    router: appRouter,
    ctx: {},
  });

  const exists = await helpers.getStore.fetch(owner_id);
  if (exists.error) {
    return {
      notFound: true,
    };
  }
  await helpers.getStore.prefetch(owner_id);

  return {
    props: {
      trpcState: helpers.dehydrate(),
      owner_id,
    },
  };
};

export default IdPage;
