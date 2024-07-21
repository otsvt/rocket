import { FC } from "react";
import { useScrollToMessage } from "../../hooks/use-sroll-to-message";
import { IMessage } from "../../types/interfaces";
import { UserTypes } from "../../types/enums";
import userAvatar from "../../images/avatar/avatar-1.png";
import adminAvatar from "../../images/avatar/avatar-2.png";
import clsx from "clsx";

export const ChatBody: FC<{ mainRole: UserTypes; messages: IMessage[] }> = ({ mainRole, messages }) => {
  const messageEndRef = useScrollToMessage(messages);

  return (
    <div
      className={clsx(
        "py-2 px-6 h-[500px]",
        "flex flex-col gap-2",
        "overflow-y-auto overflow-x-hidden",
        "custom-scrollbar"
      )}
    >
      {messages.map((message, i) => {
        return (
          <div
            key={i}
            className={clsx("p-3", "flex gap-5", message.author === mainRole && "ml-auto bg-primary rounded")}
          >
            <div className="shrink-0 rounded-full overflow-hidden">
              <img
                className="w-11 h-11"
                src={message.author === UserTypes.Admin ? adminAvatar : userAvatar}
                alt="avatar"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p style={{ wordBreak: "break-word" }}>{message.message}</p>
              <span className="text-xs text-black/50">{message.time}</span>
            </div>
          </div>
        );
      })}
      <div ref={messageEndRef} />
    </div>
  );
};
