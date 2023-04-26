import { useRef } from 'react'
import { Dialog } from "@headlessui/react";
import { useStore } from "@/store/store";
import { shallow } from "zustand/shallow";
import { HoursAvaible } from "./HoursAvaible";

export const ModalHours = () => {
  const state = useStore(
    (state) => ({
      isOpen: state.isOpenHours,
      closeModal: state.closeModalHours,
    }),
    shallow
  );

  let refDiv = useRef(null)
  return (
    <Dialog
    initialFocus={refDiv}
      open={state.isOpen}
      onClose={state.closeModal}
      className='relative z-10 max-sm:w-full'
    >
      <div ref={ refDiv } className='fixed inset-0  bg-black bg-opacity-25  max-sm:w-full'>
        <div className='flex h-full items-center justify-center p-4 text-center '>
          <Dialog.Panel className=' w-3/6 h-3/4 transform rounded-2xl bg-white p-6 text-left  shadow-xl transition-all max-sm:w-full'>
            <div className='h-full w-3/4 mx-auto my-auto max-sm:w-full'>
              <HoursAvaible />
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};
