import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const deleteIdFromArray = <T extends { _id: string }>(array: T[] | undefined, id: string): T[] => {
  return array ? array.filter((item) => item._id !== id) : [];
};