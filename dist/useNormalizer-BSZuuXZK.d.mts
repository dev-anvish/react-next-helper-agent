declare function useNormalizer<T extends Record<string, any>, K extends keyof T>(items: T[], key: K): Record<string, T>;

declare const useNormalizer$1_useNormalizer: typeof useNormalizer;
declare namespace useNormalizer$1 {
  export { useNormalizer$1_useNormalizer as useNormalizer };
}

export { useNormalizer as a, useNormalizer$1 as u };
