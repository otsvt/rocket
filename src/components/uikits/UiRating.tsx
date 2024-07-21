import { FC } from "react";
import { IconStar } from "../icons/IconStar";
import clsx from "clsx";

export const UiRating: FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <IconStar key={index} className={clsx("w-3 h-3", index + 1 <= rating ? "text-star" : "text-starOff")} />
      ))}
    </div>
  );
};
