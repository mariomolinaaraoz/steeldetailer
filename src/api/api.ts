// api.ts
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

export const fetchTodos = async (text:string) => {
  try {
    const { data } = await supabase
      .from("205")
      .select("*")
      .order("id", { ascending: false })
      .ilike("sector",`%${text}%`);

    return data || [];
  } catch (error) {
    console.error("Error fetching data from Supabase:");
    return [];
  }
};
