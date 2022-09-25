import { IScrollCallback } from "@interfaces";

export const ROW_HEIGHT = 66;

export const _bindScrollCallback = ({
  element,
  callback,
  callbackForScroll = () => {},
}: IScrollCallback) => {
  if (element) {
    element.addEventListener("scroll", callbackForScroll, false);
    element.addEventListener("mousewheel", callback, false);
    element.addEventListener("DOMMouseScroll", callback, false);
  }
};

export const _unBindScrollCallback = ({
  element,
  callback,
  callbackForScroll = () => {},
}: IScrollCallback) => {
  if (element) {
    element.removeEventListener("scroll", callbackForScroll, false);
    element.removeEventListener("mousewheel", callback, false);
    element.removeEventListener("DOMMouseScroll", callback, false);
  }
};

export const getItemSize = (h: number) => {
  const height = h * (ROW_HEIGHT + 1);
  if (h == 1) {
    return 230;
  } else {
    return height;
  }
};
