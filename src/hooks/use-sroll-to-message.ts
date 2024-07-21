import { MutableRefObject, useEffect, useRef } from "react";
import { IMessage } from "../types/interfaces";

export const useScrollToMessage = (messages: IMessage[]): MutableRefObject<HTMLDivElement | null> => {
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToMessage = () => {
    messageEndRef.current?.scrollIntoView();
  };

  useEffect(() => scrollToMessage(), [messages]);

  return messageEndRef;
};
