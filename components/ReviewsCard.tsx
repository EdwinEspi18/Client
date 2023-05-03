import { Store_ratings } from "@/types/database";
import { useStore } from '@/store/store'
import { format } from "date-fns";

interface Props {
  reviews: Store_ratings;
}
export const ReviewsCard = ({ reviews }: Props) => {
  const color = useStore(state=> state.color)
  return (
    <div className='w-3/6 h-20 rounded-lg bg-gray-200 mt-3' style={{ backgroundColor: color }}>
      <div className='flex justify-between items-center'>
        <span>{reviews.profiles?.name}</span>
        <span>{format(new Date(reviews.created_at),'dd MMM yyyy hh:mm a')}</span>
      </div>
      {/* <p className=''>{reviews.comment}</p> */}
      <p className=''>lorem ipsum</p>
      <div className='flex gap-2 mt-3'>
        <p>{reviews.rating}</p>
      </div>
    </div>
  );
};
