import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";

export const useFancybox = (id: number): void => {
  useEffect(() => {
    Fancybox.bind(`[data-fancybox="gallery-${id}"]`, {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
