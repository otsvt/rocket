import { FC } from "react";
import { useHeroTextVisible } from "../../hooks/use-hero-text-visible";
import { FULL_HERO_TEXT, SHORT_HERO_TEXT } from "../../data/text-hero";
import { UiTitle } from "../uikits/UiTitle";
import heroImg from "../../images/hero/image-1.jpg";
import clsx from "clsx";

export const Hero: FC = () => {
  const [isTextVisible, changeTextVisible] = useHeroTextVisible();

  return (
    <section className="grid grid-cols-2 gap-7 bg-white">
      <img src={heroImg} alt="hero" />
      <div className="pr-4 flex flex-col justify-center gap-4">
        <UiTitle text="Барселона — обзор города" />
        <p className="max-w-[350px] font-thin">{isTextVisible ? FULL_HERO_TEXT : SHORT_HERO_TEXT}</p>
        <button onClick={changeTextVisible} className="relative self-start hover:*:text-black/60">
          <span className="transition-colors">{isTextVisible ? "свернуть" : "читать дальше"}</span>
          <div className={clsx("absolute bottom-0 left-0", "h-[2px] w-3/4", "bg-red-500")}></div>
        </button>
      </div>
    </section>
  );
};
