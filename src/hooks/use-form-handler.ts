import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { UserTypes } from "../types/enums";

type Callback = (author: UserTypes, text: string) => void;

interface IUseFormHandlerResult {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: FormEvent) => void;
}

export const useFormHandler = (author: UserTypes, sendMessage: Callback): IUseFormHandlerResult => {
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    sendMessage(author, message);
    setMessage("");
  };

  return { message, setMessage, handleSubmit };
};
