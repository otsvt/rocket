import { FC } from "react";
import { useFancybox } from "../../hooks/use-fancybox";
import { IReview } from "../../types/interfaces";
import { renderGalleryImages } from "../../utils/render-gallery-images";
import { IconLike } from "../icons/IconLike";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import clsx from "clsx";

export const ItemSlider: FC<{ review: IReview }> = ({ review }) => {
  useFancybox(review.id);

  return (
    <article className={clsx("pt-6 px-5 pb-3", "flex flex-col gap-6", "bg-primary", "shadow-xl")}>
      <header className="flex items-center gap-2">
        <div className="rounded-full overflow-hidden">
          <img src={review.avatar} alt="avatar" />
        </div>
        <span>{review.name}</span>
      </header>
      <div className="mb-6">
        <div className="mb-3">
          <div className="text-sm uppercase">
            <span className="text-orange-500 font-medium">БАРСЕЛОНА </span>
            <span>- О ГОРОДЕ:</span>
          </div>
        </div>
        <p className="mb-2 h-[168px]">{review.text}</p>
        {renderGalleryImages(review.images, review.id)}
      </div>
      <div className="flex justify-between items-center gap-2 text-xs opacity-50">
        <span>около 1 года назад</span>
        <span>{review.comments} комментариев</span>
        <div className="flex items-center gap-1">
          <IconLike className="w-4 h-4" />
          <span>{review.likes}</span>
        </div>
      </div>
    </article>
  );
};
