import { FC } from "react";
import { useFormHandler } from "../../hooks/use-form-handler";
import { UserTypes } from "../../types/enums";
import { IconSend } from "../icons/IconSend";
import userAvatar from "../../images/avatar/avatar-1.png";
import adminAvatar from "../../images/avatar/avatar-2.png";

interface IChatFooterProps {
  type: UserTypes;
  sendMessage: (type: UserTypes, text: string) => void;
}

export const ChatFooter: FC<IChatFooterProps> = ({ type, sendMessage }) => {
  const { message, setMessage, handleSubmit } = useFormHandler(type, sendMessage);

  return (
    <div className="p-6 flex justify-center items-center gap-5 border-t border-t-black/10">
      <div className="rounded-full overflow-hidden">
        <img className="w-11 h-11" src={type === UserTypes.Admin ? adminAvatar : userAvatar} alt="avatar" />
      </div>
      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        <input
          className="py-3 px-5 placeholder:text-black/50 outline-none border border-black/20"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Напишите сообщение..."
        />
        <button>
          <IconSend className="w-6 h-5" />
        </button>
      </form>
    </div>
  );
};
