import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { shallow } from "zustand/shallow";

import "react-nice-dates/build/style.css";

import { trpc } from "@/utils/trpc";
import { Stores } from "@/types/database";
import { appRouter } from "@/server/routers/_app";
import { useStore } from "@/store/store";

import {
  ReviewsCard,
  SchedulesCard,
  SliderImages,
  StaffMember,
  TableServices,
  UbicationCard,
  Modal,
  Sppiner,
  HoursAvaible,
} from "@/components";

const IdPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { owner_id } = props;

  const state = useStore(
    (state) => ({
      store: state.store,
      date: state.date,
      color: state.color,
      isOpen: state.isOpen,
      setColorPrimary: state.setColorPrimary,
      openModal: state.openModal,
      closeModal: state.closeModal,
      setModifier: state.setModifier,
      setStore: state.setStore,
      setOwner: state.setOwner,
    }),
    shallow
  );

  const {
    data: { data },
    isLoading,
    isSuccess,
  } = trpc.getStore.useQuery(owner_id, {
    onSuccess(data) {
      state.setStore(store);
      state.setColorPrimary(color);
      state.setOwner(owner_id);
    },
  });

  const store: Stores = data[0];

  const color = `#${store.color_hex}`;

  //{ disabled: (date: Date) => getDay(date) === 6 }
  /* const modifiers = (day: number) => {
    return {
      disabled: (date: Date) => getDay(date) === day,
    };
  }; */

  /*   const handleChangeDate = (e: Date) => {
    const dateFormat = format(e, "dd/MM/yyyy", { locale: es });
    state.openModal();
    console.log(e);
  }; */

  if (isLoading) return <Sppiner />;
  return (
    <div className='h-screen w-full relative'>
      <h1 className='pt-3 text-center text-3xl font-bold max-sm:text-2xl max-sm:mt-5'>
        {store.store_name}
      </h1>
      <div className='w-full h-full flex justify-around gap-20 max-sm:flex-col max-sm:gap-10 max-sm:mt-14'>
        <div className='w-3/6 h-auto flex mt-8 justify-end  max-sm:w-full max-sm:justify-center'>
          <TableServices />
        </div>

        <div className='flex justify-start flex-col w-3/6 max-sm:w-full'>
          {store.images && (
            <div className='w-8/12 h-[460px] flex flex-col items-center justify-center rounded-lg'>
              <SliderImages color={state.color} images={store.images} />
            </div>
          )}
          {store.latitude && (
            <UbicationCard
              color={state.color}
              latitude={store.latitude}
              longitude={store.longitude}
              address={store.address}
            />
          )}
          <SchedulesCard schedules={store.schedules} color={state.color} />
          <StaffMember color={state.color} />
          <div className='mt-3 w-3/6 h-auto  rounded-lg'>
            <h2 className='font-bold text-2xl'>
              Reseñas de clientes (
              {store.reviews === null ? "0" : store.reviews.length})
            </h2>
          </div>
          {state.store?.reviews != null &&
            store.reviews.map((review) => (
              <ReviewsCard key={review.comment} reviews={review} />
            ))}
        </div>
      </div>
      <Modal>
        <HoursAvaible />
      </Modal>
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
