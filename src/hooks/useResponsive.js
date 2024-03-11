import { useMediaQuery } from "react-responsive";
const useResponsive = () => {
  const isMobileSmall = useMediaQuery({ maxWidth: 426 });
  const isMobileMedium = useMediaQuery({ minWidth: 426, maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return { isMobileSmall, isMobileMedium, isTablet, isDesktop };
};

export default useResponsive;
