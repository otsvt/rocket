import { FC } from "react";
import { UserTypes } from "../../types/enums";
import { IMessage } from "../../types/interfaces";
import { ChatHeader } from "./ChatHeader";
import { ChatBody } from "./ChatBody";
import { ChatFooter } from "./ChatFooter";

interface IChat {
  type: UserTypes;
  messages: IMessage[];
  sendMessage: (type: UserTypes, text: string) => void;
}

export const Chat: FC<IChat> = ({ type, messages, sendMessage }) => {
  return (
    <div className="bg-white">
      <ChatHeader type={type} />
      <ChatBody mainRole={type} messages={messages} />
      <ChatFooter type={type} sendMessage={sendMessage} />
    </div>
  );
};
