// Types
import type { ComponentProps, PropsWithChildren } from "react";

// Utils
import { cn } from "@/utils/cn";

type TVariants = "active" | "inactive";

interface IChipProps extends PropsWithChildren, ComponentProps<"div"> {
  variant: TVariants;
}

const chipVariantsStyles: Record<TVariants, string> = {
  active: "bg-green-200 text-green-500",
  inactive: "bg-red-200 text-red-500",
};

const Chip = ({ variant, children, ...props }: IChipProps) => {
  return (
    <div
      {...props}
      className={cn([
        "rounded-lg py-1 font-semibold text-sm",
        chipVariantsStyles[variant],
        props?.className,
      ])}
    >
      {children}
    </div>
  );
};

export default Chip;
