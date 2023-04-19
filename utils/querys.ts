import { supabase } from "@/supabase/client";
interface re {
  data: any;
  error: any;
}
export async function byId<re>(owner_di: string) {
  let { data, error } = await supabase.from("items").select();
  return {
    data,
    error,
  };
}
