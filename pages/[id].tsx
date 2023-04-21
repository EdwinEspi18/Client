import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
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
import { shallow } from "zustand/shallow";
import { useStore } from "@/store/store";

const IdPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { color: colorState, setColorPrimary } = useStore(
    (state) => ({
      color: state.color,
      setColorPrimary: state.setColorPrimary,
    }),
    shallow
  );
  const { owner_id } = props;

  const {
    data: { data },
    isLoading,
  } = trpc.getStore.useQuery(owner_id);

  const store: Stores = data[0];

  const color = `#${store.color_hex}`;
  setColorPrimary(color);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='h-screen w-full relative'>
      <h1 className='pt-3 text-center text-3xl font-bold'>
        {store.store_name}
      </h1>
      <div className='grid grid-cols-2 grid-rows-1 w-full h-full'>
        <TableServices color={colorState} items={store.items} />

        <div className='w-full'>
          {store.images && (
            <div className='w-8/12 h-[460px] flex flex-col items-center justify-center rounded-lg mx-auto '>
              <SliderImages color={colorState} images={store.images} />
            </div>
          )}
          {store.latitude && (
            <UbicationCard
              color={colorState}
              latitude={store.latitude}
              longitude={store.longitude}
              address={store.address}
            />
          )}
          <SchedulesCard schedules={store.schedules} color={colorState} />
          <StaffMember color={colorState} />
          <div className='mt-3 w-8/12 h-auto mx-auto rounded-lg'>
            <h2 className='font-bold text-2xl'>
              Reseñas de clientes (
              {store.reviews === null ? "0" : store.reviews.length})
            </h2>
          </div>
          {store.reviews &&
            store.reviews.map((review) => (
              <ReviewsCard key={review.comment} reviews={review} />
            ))}
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
