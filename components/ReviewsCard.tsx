import { useStore } from "@/store/store";
import { Store_ratings } from "@/types/database";
import { format } from "date-fns";

interface Props {
  reviews: Store_ratings;
}
export const ReviewsCard = ({ reviews }: Props) => {
  const color = useStore((state) => state.color);
  return (
    <div
      className=' flex flex-col justify-around w-3/6 h-auto rounded-lg bg-gray-200 mt-3 p-6 max-sm:w-full max-sm:mx-auto'
      style={{ backgroundColor: color }}
    >
      <div className='flex justify-between items-center'>
        <span>{reviews.profiles?.name}</span>
        <span>
          {format(new Date(reviews.created_at), "dd-MM-yyyy hh:mm aaa")}
        </span>
      </div>
      <p className=''>{reviews.comment}</p>
      <div className='flex gap-2 mt-3'>
        <p>{reviews.rating}</p>
      </div>
    </div>
  );
};
