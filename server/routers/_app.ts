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
  getStore: procedure.query(async () => {
    const { data, error } = await supabase.from("items").select();

    return { data, error };
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
