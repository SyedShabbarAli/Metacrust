import { useEffect, useState } from "react";
import { useScreenSize } from "./useScreenSize";

const SIZES = {
  mobile: 1,
  tab: 2,
  largeScreen: 3,
};
export function useSlideData(data, duration) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isMobile, isTab } = useScreenSize();

  let value;
  if (isMobile) {
    value = SIZES.mobile;
  } else if (isTab) {
    value = SIZES.tab;
  } else {
    value = SIZES.largeScreen;
  }

  const intervalTime = isMobile ? duration.mobile : duration.other;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((pv) => (pv + value) % data.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [value, data.length]);

  let dataShown;
  if (currentIndex + value < data.length) {
    dataShown = data.slice(currentIndex, currentIndex + value);
  } else {
    dataShown = [
      ...data.slice(currentIndex, data.length),
      ...data.slice(0, (currentIndex + value) % data.length),
    ];
  }

  return dataShown;
}
