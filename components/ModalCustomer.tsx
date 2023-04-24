import { useStore } from "@/store/store";
import { Dialog } from "@headlessui/react";
import { shallow } from "zustand/shallow";
import { FormCustomer } from "./FormCustomer";

export const ModalCustomer = () => {
  const state = useStore(
    (state) => ({
      isOpen: state.isOpenCustomer,
      closeModal: state.closeModalCustomer,
      services: state.services,
    }),
    shallow
  );

  return (
    <Dialog
      open={state.isOpen}
      onClose={state.closeModal}
      className='relative z-10 max-sm:w-full'
    >
      <div className='fixed inset-0  bg-black bg-opacity-25  max-sm:w-full'>
        <div className='flex h-full items-center justify-center p-4 text-center '>
          <Dialog.Panel className=' w-3/6 h-3/6 transform rounded-2xl bg-white p-6 text-left  shadow-xl transition-all max-sm:w-full'>
            <div className=' h-full w-full mx-auto my-auto flex justify-center items-center'>
              <FormCustomer />
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};
