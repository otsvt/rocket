import { FC } from "react";
import { useMessages } from "../../hooks/use-messages";
import { UserTypes } from "../../types/enums";
import { Chat } from "./Chat";
import { UiTitle } from "../uikits/UiTitle";

export const Chats: FC = () => {
  const [messages, sendMessage] = useMessages();

  return (
    <section className="pt-12 grid grid-cols-2 bg-primary">
      <div className="pr-6 border-r border-r-black/10">
        <UiTitle text="Чат с пользователем" className="mb-6" />
        <Chat type={UserTypes.Admin} messages={messages} sendMessage={sendMessage} />
      </div>
      <div className="pl-6 border-l border-l-black/10">
        <UiTitle text="Чат с администратором" className="mb-6" />
        <Chat type={UserTypes.User} messages={messages} sendMessage={sendMessage} />
      </div>
    </section>
  );
};
