import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { createServerSideHelpers } from "@trpc/react-query/server";

import { appRouter } from "@/server/routers/_app";
import { trpc } from "@/utils/trpc";

import {
  ReviewsCard,
  SchedulesCard,
  SliderImages,
  StaffMember,
  TableServices,
  UbicationCard,
} from "@/components";
import { Stores } from "@/types/database";

const IdPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { owner_id } = props;

  const {
    data: { data },
    isLoading,
  } = trpc.getStore.useQuery(owner_id);

  const store: Stores = data[0];

  const color = `#${store.color_hex}`;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='h-screen w-full'>
      <h1 className='pt-3 text-center text-3xl font-bold'>
        {store.store_name}
      </h1>
      <div className='grid grid-cols-2 grid-rows-1 w-full h-full'>
        <TableServices items={store.items} />
      </div>
      <div className='w-full'>
        {store.images && (
          <div className='w-8/12 h-[460px] flex flex-col items-center justify-center rounded-lg mx-auto '>
            <SliderImages images={store.images} />
          </div>
        )}
        <UbicationCard color={color} />
        <SchedulesCard schedules={store.schedules} />
        <StaffMember />
        <div className='mt-3 w-8/12 h-auto mx-auto rounded-lg'>
          <h2 className='font-bold text-2xl'>
            Reseñas de clientes ({" "}
            {store.reviews === null ? "0" : store.reviews.length})
          </h2>
        </div>
        <ReviewsCard />
        <ReviewsCard />
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
