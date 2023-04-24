import { useStore } from "@/store/store";
import { Store_schedules } from "@/types/database";
import { days } from "@/utils/utils";
import { shallow } from "zustand/shallow";

export const SchedulesCard = () => {
  const schedules = useStore((state) => state.store?.schedules);
  const color = useStore((state) => state.store?.color_hex);

  return (
    <div
      className={`mt-48 w-3/6 h-auto shadow-lg rounded-lg  max-sm:w-full max-sm:mx-auto `}
    >
      <h2 className={`font-bold pt-2 pl-5`} style={{ color: `#${color}` }}>
        Horas de trabajo
      </h2>
      <div className='w-full pl-5 pb-2 flex flex-col justify-around items-start h-56'>
        {schedules &&
          schedules.map((schedule: Store_schedules, index) => (
            <div
              key={index}
              className='w-5/6 flex justify-between items-center'
            >
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
