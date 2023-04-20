import { StarIcon } from "@heroicons/react/24/solid";

import { Store_ratings } from "@/types/database";

interface Props {
  reviews?: Store_ratings[];
}
export const ReviewsCard = (props: Props) => {
  return (
    <div className='flex flex-col justify-around w-8/12 h-20 mx-auto rounded-lg bg-gray-200 mt-3 p-6'>
      <div className='flex justify-between items-center'>
        <span>Usuario</span>
        <span>12-04-2023</span>
      </div>
      <div className='flex gap-2 mt-3'>
        <StarIcon width={20} />
        <StarIcon width={20} />
        <StarIcon width={20} />
        <StarIcon width={20} />
      </div>
    </div>
  );
};
