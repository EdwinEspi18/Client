import { useStore } from "@/store/store";
import { trpc } from "@/utils/trpc";
import { Dialog } from "@headlessui/react";
import { format } from "date-fns";
import { shallow } from "zustand/shallow";

export const ModalCheckout = () => {
  const reservation = trpc.setCita.useMutation();

  const state = useStore(
    (state) => ({
      isOpen: state.isOpenCheckout,
      closeModal: state.closeModalCheckout,
      color: state.color,
      request: state.requestReservartion,
    }),
    shallow
  );
  const items = useStore((state) => state.store?.items);
  console.log(state.request);

  const handleClick = () => {
    reservation.mutate(state.request, {
      onSuccess(data, variables, context) {
        console.log(" TRPC REsult: ", data, variables);
      },
      onError(error, variables, context) {
        console.log(error, variables);
      },
    });

    state.closeModal();
  };

  return (
    <Dialog
      open={state.isOpen}
      onClose={state.closeModal}
      className='relative z-10 max-sm:w-full'
    >
      <div className='fixed inset-0 bg-black bg-opacity-25  max-sm:w-full'>
        <div className='flex h-full items-center justify-center p-4 text-center '>
          <Dialog.Panel className='w-3/6 h-3/5 transform rounded-2xl bg-white p-6 text-left  shadow-xl transition-all max-sm:w-full'>
            <Dialog.Title className='text-center text-2xl font-bold'>
              Detalles de reservacion
            </Dialog.Title>
            <div className=' h-3/5 w-full mx-auto flex flex-col justify-center items-center'>
              <p>
                Fecha:{" "}
                {state.request.appointment_from
                  ? format(
                      new Date(state.request.appointment_from),
                      "dd-LL-yyyy HH:mm"
                    )
                  : ""}
              </p>
              <table className='table-auto shadow-lg border-collapse mt-5 w-3/4'>
                <thead>
                  <tr>
                    <th
                      style={{ backgroundColor: state.color }}
                      className='bg-blue-100 border text-left px-8 py-4'
                    >
                      Servicio
                    </th>
                    <th
                      style={{ backgroundColor: state.color }}
                      className='bg-blue-100 border text-left px-8 py-4'
                    >
                      Precio
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {state.request.item_details?.map((item, i) => (
                    <tr key={i}>
                      <td className='w-full p-3 text-gray-800 text-start border border-b '>
                        {items?.find((x) => x.id === item.item_id)?.name}
                      </td>
                      <td className='w-full p-3 text-gray-800 text-start border border-b '>
                        {`${item.price} DOP`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                className='absolute bottom-0 bg-sky-400 rounded-lg p-2 w-full'
                onClick={handleClick}
              >
                Hacer reservacion
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};
