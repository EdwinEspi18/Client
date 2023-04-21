import { z } from "zod";
import { procedure, router } from "../trpc";
import { supabase } from "@/supabase/client";

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
  setCita: procedure.input(z.object({})).mutation(async ({ input }) => {
    let { data, error } = await supabase.rpc("request_appointment", {
      appointment_from: "2023-04-17 05:30:00", // requerido
      appointment_to: "2023-04-17 06:00:00", // requerido
      customer_name: "", // opcional
      customer_phone_number: "8092181625", // requerido
      item_details: [
        {
          item_id: "18808335-162b-4664-917c-e208dda56961",
          duration_in_minutes: 15,
          quantity: 1,
          price: 20,
        },
      ], // requerido
      note: "", // opcional
      store_id: "0aa50a38-87be-4132-a223-44f429822b9a", // requerido
    });
    return { data, error };
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
