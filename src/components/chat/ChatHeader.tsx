import { FC } from "react";
import { UserTypes } from "../../types/enums";
import { UiRating } from "../uikits/UiRating";
import { IconFlag } from "../icons/IconFlag";
import userAvatar from "../../images/avatar/avatar-1.png";
import adminAvatar from "../../images/avatar/avatar-2.png";

export const ChatHeader: FC<{ type: UserTypes }> = ({ type }) => {
  return (
    <header className="sticky p-6 flex justify-between items-center gap-4 border-b border-b-black/10">
      <div className="flex items-center gap-4">
        <div className="rounded-full overflow-hidden">
          <img className="w-11 h-11" src={type === UserTypes.Admin ? userAvatar : adminAvatar} alt="avatar" />
        </div>
        <div className="grid gap-1">
          <h3 className="font-bold text-lg">{type === UserTypes.Admin ? "Наталья Полянская" : "Администратор"}</h3>
          <div className="flex items-center gap-1 text-red-500">
            <IconFlag className="w-2 h-3" />
            <span className="text-sm">{type === UserTypes.Admin ? "Гид по Баварии, фотограф" : "TravelAsk"}</span>
          </div>
        </div>
      </div>
      {type === UserTypes.Admin && <UiRating rating={4} />}
    </header>
  );
};
