import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { shallow } from "zustand/shallow";
import { ToastContainer } from "react-toastify";

import "react-nice-dates/build/style.css";
import "react-toastify/dist/ReactToastify.css";

import { trpc } from "@/utils/trpc";
import { appRouter } from "@/server/routers/_app";
import { useStore } from "@/store/store";

import {
  ReviewsCard,
  SchedulesCard,
  SliderImages,
  StaffMember,
  TableServices,
  UbicationCard,
  ModalHours,
  Sppiner,
  ModalCustomer,
  ModalCheckout,
} from "@/components";

const IdPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { owner_id } = props;

  const state = useStore(
    (state) => ({
      store: state.store,
      color: state.color,
      setColorPrimary: state.setColorPrimary,
      setStore: state.setStore,
      setOwner: state.setOwner,
    }),
    shallow
  );

  const { isLoading } = trpc.getStore.useQuery(owner_id, {
    onSuccess({ data }) {
      state.setStore(data[0]);
      state.setColorPrimary(`#${data[0].color_hex}59`);
      state.setOwner(owner_id);
    },
  });

  if (isLoading) return <Sppiner />;
  return (
    <div className='h-screen w-full relative'>
      <h1 className='pt-3 text-center text-3xl font-bold max-sm:text-2xl max-sm:mt-5'>
        {state.store?.store_name}
      </h1>
      <div className='w-full h-full flex justify-around gap-20 max-sm:gap-5 max-sm:flex-col max-sm:mt-8 max-sm:h-auto'>
        <div className='w-3/6 h-auto flex mt-8 justify-end  max-sm:w-full max-sm:justify-center max-sm:mt-3 '>
          <TableServices />
        </div>

        <div className='h-20 w-3/6 mt-8  max-sm:mt-0 max-sm:w-5/6 max-sm:mx-auto'>
          {state.store?.images && (
            <div className='w-3/6 h-full flex flex-col items-center justify-center rounded-lg max-sm:mt-0 max-sm:w-full max-sm:mx-auto max-lg:w-11/12 max-xl:w-4/6'>
              <SliderImages />
            </div>
          )}
          {state.store?.latitude && <UbicationCard />}
          <SchedulesCard />
          <StaffMember />
          <div className='mt-3 w-3/6 h-auto rounded-lg max-lg:w-11/12'>
            <h2 className='font-bold text-2xl max-sm:w-full'>
              Reseñas de clientes (
              {state.store?.reviews === null
                ? "0"
                : state.store?.reviews.length}
              )
            </h2>
          </div>
          {state.store?.reviews != null &&
            state.store.reviews.map((review) => (
              <ReviewsCard key={review.comment} reviews={review} />
            ))}
        </div>
      </div>
      <ModalHours />
      <ModalCustomer />
      <ModalCheckout />
      <ToastContainer />
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
