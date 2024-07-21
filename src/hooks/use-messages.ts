import { useState } from "react";
import { IMessage } from "../types/interfaces";
import { UserTypes } from "../types/enums";
import { getTime } from "../utils/get-time";

export const useMessages = (): [IMessage[], (author: UserTypes, message: string) => void] => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const sendMessage = (author: UserTypes, message: string) => {
    if (message.trim() === "") return;

    setMessages((prev) => {
      return [...prev, { author, message, time: getTime() }];
    });
  };

  return [messages, sendMessage];
};
