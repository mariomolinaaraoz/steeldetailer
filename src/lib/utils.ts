import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//TIPOS///////////////////////////////////////////////////////////////////////////
export type Data = {
  id: number;
  imageSrc: string;
  plano: string;
  elemento: string;
  href: string;
};
//TIPOS//////////////////////////////////////////////////////////////////////////