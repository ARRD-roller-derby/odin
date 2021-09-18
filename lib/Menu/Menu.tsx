import useIsMobile from "../../utils/useIsMobile";
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";
import { useInView } from "react-intersection-observer";
import classes from "./menu.module.css";
import ArrowBottom from "../ArrowBottom/ArrowBottom";

export default function Menu({fixed = false}: {fixed?: boolean}) {
  const isMobile = useIsMobile(),
    { ref, inView } = useInView({
      threshold: 0,
    });

  return isMobile ? (
    <div ref={ref}>
      <MenuMobile fixed={fixed} />
    </div>
  ) : (
    <>
    {!fixed &&  <div className={classes.containerDesktop} ref={ref}>
        <MenuDesktop />
        <ArrowBottom />
      </div>}
      {(!inView || fixed) && (
        <div className={classes.containerDesktopInView}>
          <MenuDesktop />
        </div>
      )}
    </>
  );
}
