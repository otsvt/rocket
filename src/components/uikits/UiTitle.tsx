import clsx from "clsx";
import { FC } from "react";

export const UiTitle: FC<{ text: string; className?: string }> = ({ text, className }) => {
  return <h2 className={clsx(className, "text-3xl font-bold")}>{text}</h2>;
};
