import { useEffect, useRef } from "react";
import { elementScrollIntoViewPolyfill } from "seamless-scroll-polyfill";

const useMountEffect = (fn: () => void) => useEffect(fn, []);

export const useScroll = <T extends HTMLElement>(key: string) => {
  const ref = useRef<T>(null);
  const scrollTo = () => {
    // add scroll-margin style on target element
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useMountEffect(() => elementScrollIntoViewPolyfill());

  useEffect(() => {
    scrollTo();
  }, [key]);

  return {
    ref,
  };
};
