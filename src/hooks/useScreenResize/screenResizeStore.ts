// screenResizeStore.ts

import { EScreenTypes } from "./types.ts";

let screenType: EScreenTypes = getScreenType(window.innerWidth);
let listeners: (() => void)[] = [];

// Helper function to determine screen type
function getScreenType(width: number): EScreenTypes {
  if (width < 640) return EScreenTypes.SM;
  if (width < 1024) return EScreenTypes.MD;
  return EScreenTypes.LG;
}

// Handle resize and update screenType
function handleResize() {
  const newScreenType = getScreenType(window.innerWidth);
  if (newScreenType !== screenType) {
    screenType = newScreenType;
    emitChange();
  }
}

// Subscribe to window resize events
window.addEventListener("resize", handleResize);

export const screenResizeStore = {
  handleScreenType: handleResize, // Manually trigger resize logic
  subscribe(listener: () => void) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return screenType;
  },
};

// Notify all subscribers of a change
function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}
