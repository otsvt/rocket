import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { IReview } from "../../types/interfaces";
import { REVIEWS } from "../../data/reviews";
import { ItemSlider } from "./ItemSlider";
import { UiTitle } from "../uikits/UiTitle";
import { UiButton } from "../uikits/UiButton";
import "swiper/css";
import "swiper/css/pagination";

export const Slider: FC = () => {
  return (
    <section className="py-9 px-8 bg-white">
      <UiTitle text="Отзывы о Барселоне" className="mb-4" />
      <Swiper
        className="relative pb-14"
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={2.6}
        pagination
        grabCursor
      >
        {REVIEWS.map((review: IReview) => (
          <SwiperSlide key={review.id}>
            <ItemSlider review={review} />
          </SwiperSlide>
        ))}
        <UiButton text="Все отзывы" className="absolute bottom-0 left-0 z-10" />
      </Swiper>
    </section>
  );
};
