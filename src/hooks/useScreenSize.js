import { useMemo } from "react";
import { useMediaQuery } from "react-responsive";

export function useScreenSize() {
  const mobile = useMediaQuery({ query: "(max-width: 768px)" });
  const tab = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isMobile = useMemo(() => mobile, [mobile]);
  const isTab = useMemo(() => tab, [tab]);

  return {
    isMobile,
    isTab,
  };
}
