import { useStore } from "@/store/store";
import { UserCircleIcon } from "@heroicons/react/24/solid";

interface Props {
  color: string;
}

export const StaffMember = () => {
  const store = useStore((state) => state.store);
  const color = useStore((state) => state.color);
  return (
    <div
      className='mt-8 w-3/6 h-28 rounded-lg shadow-lg max-sm:w-full max-sm:mx-auto max-lg:w-11/12 max-xl:w-4/6'
      style={{
        backgroundColor: color,
      }}
    >
      <h2 className='font-bold pt-3 pl-5'>Miembros</h2>
      <div className='flex flex-col justify-around w-full'>
        <div className='flex justify-around items-center mt-1'>
          <UserCircleIcon width={60} />
          <span> {store?.store_name} </span>
        </div>
      </div>
    </div>
  );
};
