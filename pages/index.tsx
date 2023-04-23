//const owner_id = "843ed68e-12fe-4634-afcd-6ec089f213fc";

import { FormCustomer, Modal } from "@/components";

export default function Home() {
  return (
    <div className='w-screen h-screen bg-white text-black'>
      <Modal>
        <FormCustomer />
      </Modal>
    </div>
  );
}
