// @ts-nocheck
import { format } from "date-fns";
import { useStore } from "@/store/store";
import { Store_schedules } from "@/types/database";
import { days } from "@/utils/utils";
import es from "date-fns/locale/es";

export const SchedulesCard = () => {
  const schedules = useStore((state) => state.store?.schedules);
  const color = useStore((state) => state.store?.color_hex);
  const setModifier = useStore((state) => state.setModifier);

  return (
    <div className='mt-8 w-3/6 h-auto shadow-lg rounded-lg  max-sm:w-full max-sm:mx-auto max-lg:w-11/12 max-xl:w-4/6'>
      <h2 className={`font-bold pt-2 pl-5`} style={{ color: `#${color}` }}>
        Horas de trabajos
      </h2>
      <div className='w-full pl-5 pb-2 flex flex-col justify-around items-start h-56'>
        {schedules &&
          schedules.map((schedule: Store_schedules, index) => {
            schedule.is_closed ? setModifier(schedule.day) : 0
            return (
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
)
})}
      </div>
    </div>
  );
};
