import { useState } from "react";

export const useHeroTextVisible = (): [boolean, () => void] => {
  const [isTextVisible, setIsTextVisible] = useState<boolean>(false);

  const changeTextVisible = () => setIsTextVisible((prev) => !prev);

  return [isTextVisible, changeTextVisible];
};
