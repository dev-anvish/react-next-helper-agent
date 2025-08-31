import { useMemo } from "react";
// Converts an array of objects into an object keyed by the given property.

export function useNormalizer<
  T extends Record<string, any>,
  K extends keyof T
>(items: T[], key: K): Record<string, T> {
  return useMemo(() => {
    return items.reduce((acc, item) => {
      const k = String(item[key]); 
      if (!(k in acc)) {
        acc[k] = item; 
      }
      return acc;
    }, {} as Record<string, T>);
  }, [items, key]);
}
