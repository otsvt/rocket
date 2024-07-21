import { FC, PropsWithChildren } from "react";
import { Hero } from "./hero/Hero";
import { Slider } from "./slider/Slider";
import { Chats } from "./chat/Chats";
import clsx from "clsx";

export const App: FC = () => {
  return (
    <Wrapper>
      <Hero />
      <Slider />
      <Chats />
    </Wrapper>
  );
};

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main
      className={clsx(
        "py-28 px-5",
        "*:max-w-[880px] *:mx-auto *:w-full",
        "font-roboto",
        "bg-primary",
        "flex flex-col gap-5"
      )}
    >
      {children}
    </main>
  );
};
