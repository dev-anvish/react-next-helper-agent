declare function useCopyToClipboard(): {
    copiedText: string | null;
    copy: (text: string) => Promise<boolean>;
};

declare const useCopyToClipboard$1_useCopyToClipboard: typeof useCopyToClipboard;
declare namespace useCopyToClipboard$1 {
  export { useCopyToClipboard$1_useCopyToClipboard as useCopyToClipboard };
}

export { useCopyToClipboard as a, useCopyToClipboard$1 as u };
