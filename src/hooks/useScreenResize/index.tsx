// Hooks
import { useSyncExternalStore } from "react";

// External Stores
import { screenResizeStore } from "./screenResizeStore";

// Types
import { EScreenTypes } from "./types.ts";

const useScreenResize = () => {
  const screenType = useSyncExternalStore<EScreenTypes>(
    screenResizeStore.subscribe,
    screenResizeStore.getSnapshot,
  );
  return { screenType };
};

export default useScreenResize;
