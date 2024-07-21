import { MutableRefObject, useEffect, useRef } from "react";
import { IMessage } from "../types/interfaces";

export const useScrollToMessage = (messages: IMessage[]): MutableRefObject<HTMLDivElement | null> => {
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const prevMessagesCount = useRef<number>(messages.length);

  useEffect(() => {
    if (messages.length > prevMessagesCount.current) {
      messageEndRef.current?.scrollIntoView();
    }

    prevMessagesCount.current = messages.length;
  }, [messages]);

  return messageEndRef;
};
