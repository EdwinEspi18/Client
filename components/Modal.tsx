import { Dialog } from "@headlessui/react";
import { useStore } from "@/store/store";
import { shallow } from "zustand/shallow";
import { FC, PropsWithChildren } from "react";

export const Modal: FC<PropsWithChildren> = ({ children }) => {
  const state = useStore(
    (state) => ({
      isOpen: state.isOpen,
      closeModal: state.closeModal,
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
          <Dialog.Panel className=' w-3/6 h-3/4 transform rounded-2xl bg-white p-6 text-left  shadow-xl transition-all max-sm:w-full'>
            <div className='h-full w-3/4 mx-auto my-auto max-sm:w-full'>
              {children}
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};
