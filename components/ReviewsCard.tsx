import { Store_ratings } from "@/types/database";

interface Props {
  reviews: Store_ratings;
}
export const ReviewsCard = ({ reviews }: Props) => {
  return (
    <div className='flex flex-col justify-around w-8/12 h-20 mx-auto rounded-lg bg-gray-200 mt-3 p-6'>
      <div className='flex justify-between items-center'>
        <span>{reviews.profiles?.name}</span>
        <span>{reviews.created_at}</span>
      </div>
      <p>{reviews.comment}</p>
      <div className='flex gap-2 mt-3'>
        <p>{reviews.rating}</p>
      </div>
    </div>
  );
};
