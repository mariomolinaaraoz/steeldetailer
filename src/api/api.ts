import { useEffect, useState } from 'react';
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

export const useSupabaseData = (currentDataId: string | undefined) => {
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      if (currentDataId) {        
        const data = await fetchTodos(currentDataId);
        setTodos(data);
      }
    };

    getTodos();
  }, [currentDataId]);
  return todos;
};

/******************************************************************************************************* */

export const fetchPhotos = async () => {
  try {
    const { data } = await supabase
      .from("image_upload")
      .select("*")
      .order("id", { ascending: false })
      .eq("status","TRUE");

    return data || [];
  } catch (error) {
    console.error("Error fetching data from Supabase:");
    return [];
  }
};

export const useSupabaseGallery = () => {
  const [photos, setPhotos] = useState<any[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
        const data = await fetchPhotos();
        setPhotos(data);
    };

    getPhotos();
  }, []);
  return photos;
};

/******************************************************************************************************* */

export const fetchTables = async (text:string) => {
  try {
    const { data } = await supabase
      .from(text)
      .select("*")
      .order("id", { ascending: true })      

    return data || [];
  } catch (error) {
    console.error("Error fetching data from Supabase:");
    return [];
  }
};

export async function UuseSupabaseTables(text:string) {    
  return await supabase.from(text).select("*").order("id", { ascending: true }) ;
}