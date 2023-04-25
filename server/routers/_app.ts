import { z } from "zod";
import { procedure, router } from "../trpc";
import { supabase } from "@/supabase/client";

const valid = z.object({
  appointment_from: z.string(),
  appointment_to: z.string(),
  customer_name: z.optional(z.string()),
  customer_phone_number: z.string(),
  item_details: z.array(
    z.object({
      item_id: z.string(),
      duration_in_minutes: z.number(),
      quantity: z.number(),
      price: z.number(),
    })
  ),
  note: z.optional(z.string()),
  store_id: z.string(),
});

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input.text}`,
      };
    }),
  getStore: procedure.input(z.string()).query(async ({ input: owner_id }) => {
    let { data, error } = await supabase.rpc("fetch_store_info_by_owner_id", {
      owner_id,
    });

    return { data, error };
  }),
  setCita: procedure.input(valid).mutation(async ({ input }) => {
    let { data, error } = await supabase.rpc("request_appointment", {
      appointment_from: input.appointment_from,
      appointment_to: input.appointment_to,
      customer_name: input.customer_name,
      customer_phone_number: input.customer_phone_number,
      item_details: input.item_details,
      note: input.note,
      store_id: input.store_id,
    });
    return { data, error };
  }),
  getSchedulesAvaible: procedure
    .input(
      z.object({
        duration_in_minutes: z.number(),
        profile_id: z.string(),
        start_date: z.string(),
      })
    )
    .query(
      async ({ input: { duration_in_minutes, profile_id, start_date } }) => {
        let { data, error } = await supabase.rpc("fetch_available_schedules", {
          duration_in_minutes,
          profile_id,
          start_date,
        });

        return { data, error };
      }
    ),
});
// export type definition of API
export type AppRouter = typeof appRouter;
