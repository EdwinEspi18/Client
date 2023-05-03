import { useStore } from "@/store/store";
import { Store_ratings } from "@/types/database";
import { format } from "date-fns";

interface Props {
  reviews: Store_ratings;
}
export const ReviewsCard = ({ reviews }: Props) => {
  const color = useStore(state => state.store.color_hex)
  return (
    <div className='w-3/6 h-auto shadow-lg rounded-lg  mt-3 p-4 max-sm:w-full max-sm:mx-auto'>
      <div className='w-full flex justify-between items-center'>
        <span className='font-bold' style={{ color: `#${color}` }}>{reviews.profiles?.name || 'Usuario'}</span>
        <span className='font-bold' style={{ color: `#${color}` }}>{format(new Date(reviews.created_at),'dd MMM yyyy hh:mm a')}</span>
      </div>
      <p className='mt-5 overflow-auto' >{reviews.comment}</p> 
      {/* <p className='mt-5'>lorem ipsum</p> */}
      <div className='flex justify-end'>
        <p className='font-bold' style={{ color: `#${color}` }}>Puntuacion: {reviews.rating}</p>
      </div>
    </div>
  );
};
