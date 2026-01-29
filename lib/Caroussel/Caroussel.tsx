import classes from "./Caroussel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import useIsMobile from "../../utils/useIsMobile";

export default function Caroussel() {
  const isMobile = useIsMobile();
  const [size, setSize] = useState<
    undefined | { width: number; height: number }
  >(undefined);

  const NUM_IMAGES = isMobile ? 4 : 3;

  function handleResize() {
    const width = window.innerWidth,
      height = window.innerWidth > 750 ? (width / 16) * 9 : window.innerHeight;
    setSize({ width, height });
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.slider}>
        <div className={classes.titleContainer}>
          <h1 className={classes.title}>ARRD</h1>
          <h2 className={classes.subtitle}>- maromme -</h2>
        </div>
        {size && (
          <Slider
            infinite
            autoplay
            speed={800}
            autoplaySpeed={3000}
            fade
            className={classes.carroussel}
          >
            {Array.from({ length: NUM_IMAGES }, (_, index) => index + 1).map((num: number) => (
              <div className={classes.slide} key={num}>
                <img
                  src={`/${isMobile ? 'mobile' : 'desktop'}/${num}.webp`}
                  width={size.width}
                  height={size.height}
                />
              </div>
            ))}
          </Slider>
        )}
      </div>
      <Menu />
    </div>
  );
}
