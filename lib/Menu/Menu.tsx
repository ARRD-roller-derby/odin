import useIsMobile from "../../utils/useIsMobile";
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";
import { useInView } from "react-intersection-observer";
import classes from "./menu.module.css";
import ArrowBottom from "../ArrowBottom/ArrowBottom";

export default function Menu() {
  const isMobile = useIsMobile(),
    { ref, inView } = useInView({
      threshold: 0,
    });

  return isMobile ? (
    <div className={classes.containerMobile} ref={ref}>
    <MenuMobile />
    <ArrowBottom />
    </div>
  ) : (
    <>
      <div className={classes.containerDesktop} ref={ref}>
        <MenuDesktop />
        <ArrowBottom />
      </div>
      {!inView && (
        <div className={classes.containerDesktopInView}>
          <MenuDesktop />
        </div>
      )}
    </>
  );
}
