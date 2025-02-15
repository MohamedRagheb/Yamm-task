import type { ComponentProps, PropsWithChildren } from "react";
import { cn } from "@/utils/cn.ts";

type TPaperProps = PropsWithChildren<ComponentProps<"div">>;

const Paper = ({ className, children, ...props }: TPaperProps) => {
  return (
    <div
      {...props}
      className={cn([
        "shadow rounded-2xl p-8 bg-white h-full overflow-auto",
        className,
      ])}
      {...props}
    >
      {children}
    </div>
  );
};

export default Paper;

interface IPaperTitleProps extends ComponentProps<"h1"> {
  title: string;
}
export const PaperTitle = ({ title, ...props }: IPaperTitleProps) => {
  return (
    <h3
      {...props}
      className={cn(["font-bold text-4xl text-gray-700", props?.className])}
    >
      {title}
    </h3>
  );
};
