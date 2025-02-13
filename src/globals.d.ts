// Types
import type { IconType } from "react-icons";

declare global {
  export interface ISideBarLink {
    label: string;
    icon: IconType;
    to: string;
  }
}

export {};
