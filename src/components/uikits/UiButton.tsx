import { FC } from "react";
import clsx from "clsx";

export const UiButton: FC<{ text: string; className: string }> = ({ text, className }) => {
  return (
    <button
      className={clsx(
        className,
        "py-1 px-2",
        "flex justify-center items-center",
        "border-2 border-red-500",
        "rounded-sm",
        "transition-colors",
        "hover:border-red-300"
      )}
    >
      {text}
    </button>
  );
};
