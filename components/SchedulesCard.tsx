import { Store_schedules } from "@/types/database";
import { days } from "@/utils/utils";

interface Props {
  schedules: Store_schedules[];
  color?: string;
}

export const SchedulesCard = ({ schedules, color }: Props) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className=' mt-8 w-3/6 h-auto shadow-lg rounded-lg  max-sm:w-5/6 max-sm:mx-auto '
    >
      <h2 className='font-bold pt-2 pl-5 '>Horas de trabajo</h2>
      <div className='w-full pl-5 pb-2 flex flex-col justify-around items-start h-56'>
        {schedules.map((schedule: Store_schedules, index) => (
          <div key={index} className='w-5/6 flex justify-between items-center'>
            <span>{days[schedule.day]}</span>
            <span>
              {schedule.is_closed
                ? "Close"
                : `${schedule.time_from} - ${schedule.time_to}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
