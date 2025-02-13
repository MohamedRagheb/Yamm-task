// Hooks
import { useEffect, useState } from "react";
import useScreenResize from "@/hooks/useScreenResize";

// Enums
import { EScreenTypes } from "@/hooks/useScreenResize/types.ts";
import { observer } from "@/utils/observer.ts";

const useSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { screenType } = useScreenResize();

  const isMedium =
    screenType === EScreenTypes.MD || screenType === EScreenTypes.SM;

  useEffect(() => {
    // setIsOpen(screenType < 0);

    if (isMedium) {
      setIsOpen(false);
    }
  }, [screenType]);

  useEffect(() => {
    observer.subscribe("openSidebar", () => {
      setIsOpen((prev) => !prev);
    });

    return () => {
      observer.unsubscribe("openSidebar");
    };
  }, []);

  return { isOpen, setIsOpen, isMedium };
};

export default useSideBar;
