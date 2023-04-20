import { UserCircleIcon } from "@heroicons/react/24/solid";

export const StaffMember = () => {
  return (
    <div className='mt-8 w-8/12 h-auto bg-gray-200 mx-auto rounded-lg'>
      <h2 className='font-bold pt-3 pl-5'>Miembros</h2>
      <div className='flex flex-col justify-between p-3 w-4/6'>
        <div className='flex justify-between items-center'>
          <UserCircleIcon width={70} />
          <span>Edwin Espinal</span>
        </div>
        <div className='flex justify-between items-center'>
          <UserCircleIcon width={70} />
          <span>Edwin Espinal</span>
        </div>
        <div className='flex justify-between items-center'>
          <UserCircleIcon width={70} />
          <span>Edwin Espinal</span>
        </div>
      </div>
    </div>
  );
};
