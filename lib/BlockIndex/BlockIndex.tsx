import { ReactChild } from "react";
import { useInView } from "react-intersection-observer";
import classes from "./BlockIndex.module.css";

export default function BlockIndex({ children, position = "left" }: {children: ReactChild, position?: "left"|"right"}) {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div className={classes.block} ref={ref} data-position={position}>
      <div className={classes.container} data-inview={inView}>
        {children}
      </div>
    </div>
  );
}
