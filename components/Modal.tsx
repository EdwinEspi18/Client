import { Dialog } from "@headlessui/react";
import { HoursAvaible } from "./HoursAvaible";

export const Modal = (props: any) => {
  return (
    <Dialog
      open={props.isOpen}
      onClose={props.closeModal}
      className='relative z-10'
    >
      <div className='fixed inset-0 overflow-y-auto bg-black bg-opacity-25 '>
        <div className='flex h-full items-center justify-center p-4 text-center '>
          <Dialog.Panel className=' w-3/6 h-3/4 transform rounded-2xl bg-white p-6 text-left  shadow-xl transition-all'>
            <div className='h-full w-3/4 mx-auto my-auto'>
              <HoursAvaible {...props} />
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};
