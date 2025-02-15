// Hooks
import { ComponentProps, useState } from "react";

// Utils
import { cn } from "@/utils/cn.ts";

interface IProps extends ComponentProps<"div"> {
  onChange: () => void;
  billProps?: ComponentProps<"div">;
  status?: boolean;
}

const Switch = ({ onChange, status, ...props }: IProps) => {
  const [isOn, setIsOn] = useState(status ?? false);

  const toggleSwitch = () => {
    const newState = !isOn;
    setIsOn(newState);
    onChange?.();
  };

  return (
    <div
      {...props}
      className={cn([
        "w-14 h-7 flex items-center p-1 cursor-pointer rounded-full transition-colors duration-300 bg-gray-300",
        isOn && "bg-green-500",
        props?.className,
      ])}
      onClick={toggleSwitch}
    >
      <div
        {...props?.billProps}
        className={cn([
          "w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 translate-x-0",
          isOn && "translate-x-6",
          props?.billProps?.className,
        ])}
      />
    </div>
  );
};

export default Switch;
